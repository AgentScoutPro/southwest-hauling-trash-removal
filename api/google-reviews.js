const SOUTHWEST_PLACE_QUERY =
  "SOUTHWEST HAULING & JUNK REMOVAL LLC. 3071 W Camino Cir San Tan Valley AZ";

async function resolvePlaceId(apiKey) {
  if (process.env.GOOGLE_PLACE_ID) {
    return process.env.GOOGLE_PLACE_ID;
  }

  const url = new URL("https://maps.googleapis.com/maps/api/place/findplacefromtext/json");
  url.searchParams.set("input", SOUTHWEST_PLACE_QUERY);
  url.searchParams.set("inputtype", "textquery");
  url.searchParams.set("fields", "place_id");
  url.searchParams.set("locationbias", "point:33.2342052,-111.546526");
  url.searchParams.set("key", apiKey);

  const response = await fetch(url);
  if (!response.ok) throw new Error(`Find Place HTTP ${response.status}`);

  const data = await response.json();
  const placeId = data.candidates?.[0]?.place_id;

  if (data.status !== "OK" || !placeId) {
    throw new Error(`Find Place API: ${data.status}`);
  }

  return placeId;
}

export default async function handler(request, response) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    response.status(503).json({ error: "Google Reviews not configured" });
    return;
  }

  try {
    const placeId = await resolvePlaceId(apiKey);
    const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");

    url.searchParams.set("place_id", placeId);
    url.searchParams.set("fields", "rating,user_ratings_total,reviews,url");
    url.searchParams.set("reviews_sort", "newest");
    url.searchParams.set("language", "en");
    url.searchParams.set("key", apiKey);

    const googleResponse = await fetch(url);
    if (!googleResponse.ok) throw new Error(`Place Details HTTP ${googleResponse.status}`);

    const data = await googleResponse.json();
    if (data.status !== "OK") throw new Error(`Place Details API: ${data.status}`);

    const result = data.result || {};

    response.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=86400");
    response.status(200).json({
      rating: result.rating || 5,
      totalReviews: result.user_ratings_total || 0,
      googleUrl: result.url || "https://maps.app.goo.gl/HeMSgZbxu7cZTYhG9",
      reviews: (result.reviews || []).map((review) => ({
        author: review.author_name,
        rating: review.rating,
        text: review.text,
        time: review.relative_time_description,
        profilePhoto: review.profile_photo_url || null,
      })),
    });
  } catch (error) {
    console.error("[google-reviews]", error);
    response.status(500).json({ error: "Failed to fetch Google reviews" });
  }
}
