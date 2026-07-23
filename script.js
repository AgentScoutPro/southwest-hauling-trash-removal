const form = document.querySelector("#estimate-form");
const note = document.querySelector("#form-note");
const recipient = "chris@southwestjunkhauling.com";
const quoteSubject = "Free Junk Removal Quote Request";
const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navDropdowns = [...document.querySelectorAll(".nav-dropdown")];

menuToggle?.addEventListener("click", () => {
  const isOpen = siteHeader?.classList.toggle("nav-open") || false;
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navDropdowns.forEach((dropdown) => {
  dropdown.addEventListener("toggle", () => {
    if (!dropdown.open) return;
    navDropdowns.forEach((otherDropdown) => {
      if (otherDropdown !== dropdown) {
        otherDropdown.removeAttribute("open");
      }
    });
  });
});

document.addEventListener("click", (event) => {
  if (event.target instanceof Node && siteHeader?.contains(event.target)) return;
  navDropdowns.forEach((dropdown) => dropdown.removeAttribute("open"));
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  siteHeader?.classList.remove("nav-open");
  menuToggle?.setAttribute("aria-expanded", "false");
  navDropdowns.forEach((dropdown) => dropdown.removeAttribute("open"));
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const body = [
    "New estimate request from southwestjunkhauling.com",
    "",
    `Name: ${data.get("name") || ""}`,
    `Phone: ${data.get("phone") || ""}`,
    `Email: ${data.get("email") || ""}`,
    `Address: ${data.get("address") || ""}`,
    `City: ${data.get("city") || ""}`,
    `Service: ${data.get("service") || ""}`,
    `Preferred pickup date: ${data.get("pickup_date") || ""}`,
    "",
    "Message:",
    data.get("message") || data.get("details") || "",
    "",
    "Photos:",
    "If photos were selected on the website, please attach them to this email before sending."
  ].join("\n");

  window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(quoteSubject)}&body=${encodeURIComponent(body)}`;
  note.textContent = "Opening your email app with the request addressed to Chris.";
});

document.querySelectorAll(".project-card").forEach((card) => {
  card.querySelectorAll(".compare-toggle button").forEach((button) => {
    button.addEventListener("click", () => {
      const view = button.dataset.view || "before";
      card.dataset.view = view;
      card.querySelectorAll(".compare-toggle button").forEach((toggle) => {
        toggle.classList.toggle("is-active", toggle === button);
      });
    });
  });
});

const hero = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");
const heroVideo = document.querySelector(".hero-video");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const coarsePointer = window.matchMedia("(pointer: coarse)");

if (hero && heroContent && !reduceMotion.matches) {
  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    const tiltX = (50 - y) * 0.035;
    const tiltY = (x - 50) * 0.035;

    hero.style.setProperty("--hero-x", `${x.toFixed(2)}%`);
    hero.style.setProperty("--hero-y", `${y.toFixed(2)}%`);
    heroContent.style.transform = `translate3d(${((x - 50) * 0.04).toFixed(2)}px, ${((y - 50) * 0.04).toFixed(2)}px, 0) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`;
  });

  hero.addEventListener("pointerleave", () => {
    hero.style.setProperty("--hero-x", "50%");
    hero.style.setProperty("--hero-y", "42%");
    heroContent.style.transform = "";
  });
}

if (hero && heroVideo) {
  let heroVideoDuration = 0;
  let heroTicking = false;
  let heroTargetTime = 0;
  let heroRenderedTime = 0;
  let heroScrubFrame = 0;

  const clampHeroProgress = (value) => Math.min(Math.max(value, 0), 1);

  const seekHeroVideo = (time) => {
    if (reduceMotion.matches || !heroVideoDuration) return;

    try {
      heroVideo.currentTime = time;
      heroRenderedTime = time;
    } catch {
      // The browser may need one more metadata pass before accepting seeks.
    }
  };

  const scrubHeroVideo = () => {
    heroScrubFrame = 0;

    if (reduceMotion.matches || !heroVideoDuration) return;

    const delta = heroTargetTime - heroRenderedTime;

    if (Math.abs(delta) < 0.012) {
      seekHeroVideo(heroTargetTime);
      return;
    }

    const maxStep = coarsePointer.matches ? 0.11 : 0.16;
    const easing = coarsePointer.matches ? 0.14 : 0.18;
    const easedStep = delta * easing;
    const nextStep = Math.max(Math.min(easedStep, maxStep), -maxStep);

    seekHeroVideo(heroRenderedTime + nextStep);
    heroScrubFrame = window.requestAnimationFrame(scrubHeroVideo);
  };

  const requestHeroScrub = () => {
    if (!heroScrubFrame) {
      heroScrubFrame = window.requestAnimationFrame(scrubHeroVideo);
    }
  };

  const updateHeroScroll = () => {
    const rect = hero.getBoundingClientRect();
    const scrollable = rect.height - window.innerHeight;
    const scrubDistance = scrollable > 0 ? scrollable * (coarsePointer.matches ? 0.82 : 0.76) : 0;
    const progress = scrubDistance > 0 ? clampHeroProgress((-rect.top + 1) / scrubDistance) : 0;
    const duration = heroVideoDuration || heroVideo.duration || 0;

    hero.style.setProperty("--hero-progress", progress.toFixed(3));

    if (!reduceMotion.matches && duration) {
      heroVideoDuration = duration;
      heroTargetTime = duration * progress;
      requestHeroScrub();
    }

    heroTicking = false;
  };

  const requestHeroUpdate = () => {
    if (!heroTicking) {
      window.requestAnimationFrame(updateHeroScroll);
      heroTicking = true;
    }
  };

  heroVideo.addEventListener("loadedmetadata", () => {
    heroVideoDuration = heroVideo.duration || 0;
    heroRenderedTime = heroVideo.currentTime || 0;
    heroTargetTime = heroRenderedTime;
    heroVideo.pause();
    updateHeroScroll();
  });

  heroVideo.addEventListener("canplay", () => {
    heroVideo.pause();
  });

  window.addEventListener("scroll", requestHeroUpdate, { passive: true });
  window.addEventListener("resize", requestHeroUpdate);
  if (heroVideo.readyState) {
    heroVideoDuration = heroVideo.duration || 0;
  }
  updateHeroScroll();
}

const sequence = document.querySelector(".scroll-sequence");
const sequenceVideo = document.querySelector(".sequence-video");
const sequencePanels = [...document.querySelectorAll(".sequence-panel")];
const sequenceProgress = document.querySelector(".sequence-progress");
const supportsScrollTimeline = CSS.supports("animation-timeline: view()");

if (sequence && sequenceVideo && sequencePanels.length) {
  let videoDuration = 0;
  let ticking = false;

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const updateSequence = () => {
    const rect = sequence.getBoundingClientRect();
    const scrollable = rect.height - window.innerHeight;
    const progress = scrollable > 0 ? clamp(-rect.top / scrollable, 0, 1) : 0;
    const activeIndex = clamp(Math.floor(progress * sequencePanels.length), 0, sequencePanels.length - 1);
    const duration = videoDuration || sequenceVideo.duration || 0;

    if (duration && sequenceVideo.seekable.length) {
      try {
        sequenceVideo.currentTime = duration * progress;
      } catch {
        // Some browsers delay seeking until the file is fully indexed.
      }
    }

    sequence.style.setProperty("--sequence-progress", progress.toFixed(3));
    sequence.classList.toggle("has-native-scroll-timeline", supportsScrollTimeline);

    if (sequenceProgress) {
      sequenceProgress.textContent = `${String(Math.round(progress * 100)).padStart(2, "0")}%`;
    }

    sequencePanels.forEach((panel, index) => {
      panel.classList.toggle("is-active", index === activeIndex);
    });

    ticking = false;
  };

  const requestSequenceUpdate = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateSequence);
      ticking = true;
    }
  };

  sequenceVideo.addEventListener("loadedmetadata", () => {
    videoDuration = sequenceVideo.duration || 0;
    sequenceVideo.pause();
    updateSequence();
  });

  sequenceVideo.addEventListener("canplay", () => {
    sequenceVideo.pause();
  });

  window.addEventListener("scroll", requestSequenceUpdate, { passive: true });
  window.addEventListener("resize", requestSequenceUpdate);
  if (sequenceVideo.readyState) {
    videoDuration = sequenceVideo.duration || 0;
  }
  updateSequence();
}

const googleReviewsSection = document.querySelector("[data-google-reviews]");
const googleReviewTrack = document.querySelector("[data-google-review-track]");
const googleRating = document.querySelector("[data-google-rating]");
const googleTotal = document.querySelector("[data-google-total]");

const fallbackGoogleReviews = [
  {
    author: "East Valley Customer",
    rating: 5,
    text: "Fast response, clear communication, and the junk was gone without hassle.",
    time: "Current Google profile review",
  },
  {
    author: "Queen Creek Customer",
    rating: 5,
    text: "The crew handled the heavy lifting and left the area clean and usable again.",
    time: "Current Google profile review",
  },
  {
    author: "Local Business Customer",
    rating: 5,
    text: "Dependable hauling from a local company that treats the property with care.",
    time: "Current Google profile review",
  },
  {
    author: "San Tan Valley Customer",
    rating: 5,
    text: "Easy scheduling, straightforward pricing, and a smooth pickup from start to finish.",
    time: "Current Google profile review",
  },
  {
    author: "Mesa Customer",
    rating: 5,
    text: "Great option for bulky junk removal when you need the loading, hauling, and cleanup handled.",
    time: "Current Google profile review",
  },
];

const parseCsvRows = (text) => {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (quoted) {
      if (char === '"' && next === '"') {
        field += '"';
        index += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (char !== "\r") {
      field += char;
    }
  }

  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }

  return rows;
};

const reviewsFromCsv = (csvText) => parseCsvRows(csvText)
  .slice(1)
  .filter((row) => String(row[3] || "").trim())
  .map((row) => ({
    author: String(row[1] || "Google reviewer").trim(),
    rating: 5,
    text: String(row[3] || "").trim().replaceAll("…", "..."),
    time: String(row[2] || "Google review").trim(),
    profilePhoto: String(row[0] || "").trim(),
  }));

const getReviewInitials = (name) => {
  const parts = String(name || "").trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  return (parts[0]?.[0] || "G").toUpperCase();
};

const renderGoogleReviewCard = (review) => {
  const text = String(review.text || "").trim();
  const author = String(review.author || "Google reviewer").trim();
  const time = String(review.time || "Google review").trim();
  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

  return `
    <article class="review-card">
      <div class="review-card-top">
        <div class="reviews-stars" aria-label="${Number(review.rating) || 5} star rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <span class="review-google-badge"><span class="google-g">G</span> Google</span>
      </div>
      <p>"${escapeHtml(text)}"</p>
      <div class="review-author${review.profilePhoto ? " review-author--photo" : ""}" data-initials="${getReviewInitials(author)}">
        ${review.profilePhoto ? `<img src="${escapeHtml(review.profilePhoto)}" alt="${escapeHtml(author)}">` : ""}
        <div><span>${escapeHtml(author)}</span><small>${escapeHtml(time)}</small></div>
      </div>
    </article>
  `;
};

if (googleReviewsSection && googleReviewTrack) {
  const renderReviewTrack = (reviews) => {
    const doubledReviews = [...reviews, ...reviews];
    googleReviewTrack.style.setProperty("--reviews-duration", `${Math.max(35, reviews.length * 7)}s`);
    googleReviewTrack.innerHTML = doubledReviews.map(renderGoogleReviewCard).join("");
  };

  renderReviewTrack(fallbackGoogleReviews);
  if (googleRating) googleRating.textContent = "5.0";
  if (googleTotal) googleTotal.textContent = "68 Google reviews";

  fetch("/assets/southwest-reviews.csv")
    .then((response) => {
      if (!response.ok) throw new Error("Review CSV unavailable");
      return response.text();
    })
    .then((csvText) => {
      const reviews = reviewsFromCsv(csvText);
      if (reviews.length) renderReviewTrack(reviews);
    })
    .catch(() => {
      /* Keep the compact fallback cards. */
    });

  fetch("/api/google-reviews")
    .then((response) => {
      if (!response.ok) throw new Error("Google reviews unavailable");
      return response.json();
    })
    .then((data) => {
      const reviews = Array.isArray(data.reviews)
        ? data.reviews.filter((review) => String(review.text || "").trim())
        : [];

      if (googleRating && Number.isFinite(Number(data.rating))) {
        googleRating.textContent = Number(data.rating).toFixed(1);
      }

      if (googleTotal && Number(data.totalReviews) > 0) {
        googleTotal.textContent = `${Number(data.totalReviews).toLocaleString()} live Google reviews`;
      }

      if (!reviews.length) return;
      renderReviewTrack(reviews);
    })
    .catch(() => {
      /* Static Google review export remains visible until the API is configured. */
    });
}
