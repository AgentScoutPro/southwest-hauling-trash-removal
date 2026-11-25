// Neighborhood copy is based on community geography and practical pickup scenarios.
module.exports = [
  {
    city: "Mesa", name: "Eastmark", slug: "eastmark",
    intro: "Clear a crowded garage, replace a bulky piece of furniture, or get an Eastmark home ready for its next owner.",
    local: "For an Eastmark pickup near the Great Park or in Encore at Eastmark, include the street address and tell us where we can stop to load. In Encore, a downsizing pickup can be planned room by room so furniture and boxes you want to keep stay in place.",
    quote: "Include your move date if you have one. Group garage photos by what goes and what stays, and flag heavy patio or indoor furniture separately.",
    residential: "a garage reset or a downsizing project in Encore at Eastmark",
    turnover: "an Eastmark resale, move-out, or downsizing handoff",
    outdoor: "a backyard, side yard, or patio cleanup near the Great Park or in Encore",
    access: "Include your nearest cross street, where we can load, and any access instructions for your section.",
    featured: ["garage-cleanout", "bulky-item-pickup", "move-out-rental-turnover-cleanouts"]
  },
  {
    city: "Mesa", name: "Cadence at Gateway", slug: "cadence-at-gateway",
    intro: "Get move-in boxes, old furniture, or the last items left after a move hauled away in Cadence at Gateway.",
    local: "Homes in Cadence are in Mesa's Gateway corridor. Moving day often leaves a mix of packaging, furniture you decided against keeping, and garage clutter. Tell us which items are indoors, which are staged, and when the moving truck needs the driveway.",
    quote: "Send a garage overview, a photo of each oversized piece, and your move or delivery date so we can plan access.",
    residential: "a garage full of unpacked boxes and furniture being replaced after a move",
    turnover: "a Gateway-area move with a scheduled truck or furniture delivery",
    outdoor: "a patio refresh with old seating, planters, and loose outdoor items",
    access: "Say whether there will be a moving truck, delivery crew, or vehicle in the driveway.",
    featured: ["move-out-rental-turnover-cleanouts", "bulky-item-pickup", "garage-cleanout"]
  },
  {
    city: "Mesa", name: "Augusta Ranch", slug: "augusta-ranch",
    intro: "Make room in your Augusta Ranch garage or clear old patio furniture, yard debris, and bulky items from your Mesa home.",
    local: "Augusta Ranch is a southeast Mesa golf community. If you are clearing a garage and patio together, photograph both areas. For an item in the backyard, show the entire route to the driveway, including any side gate or narrow turn.",
    quote: "For a spa or bulky outdoor piece, send a photo of the item, a rough width, and the narrowest point on the exit path.",
    residential: "a garage reset with shelving, tools, or household items",
    turnover: "a home sale that leaves a mix of garage items and outdoor furniture",
    outdoor: "a patio or backyard cleanup that may include a spa, broken outdoor furniture, or yard piles",
    access: "Include side-gate width and show any turns, steps, or obstacles between the pile and driveway.",
    featured: ["garage-cleanout", "yard-waste-removal", "hot-tub-removal"]
  },
  {
    city: "Gilbert", name: "Morrison Ranch", slug: "morrison-ranch",
    intro: "Clear leftover furniture, appliances, or garage clutter during a remodel or before listing your Morrison Ranch home.",
    local: "If the work is part of a remodel or a home listing, identify who will be on site and which rooms are ready for pickup. Separate everyday household items from remodel debris, and tell us if a delivery or contractor will need the same loading area.",
    quote: "Include the work stage, which pieces have already been disconnected or removed, and the deadline for photos, showings, or a delivery.",
    residential: "a garage reset or replacement of furniture and appliances before a listing",
    turnover: "a pre-listing cleanout or the last haul before a photographer arrives",
    outdoor: "a backyard update or cleanup after an approved light remodel",
    access: "Tell us which entrance is available and whether contractors or deliveries will share it.",
    featured: ["move-out-rental-turnover-cleanouts", "appliance-removal", "construction-debris-removal"]
  },
  {
    city: "Gilbert", name: "Power Ranch", slug: "power-ranch",
    intro: "Reclaim your garage, clear yard debris, or arrange a mixed furniture pickup anywhere in Power Ranch.",
    local: "Power Ranch includes multiple neighborhoods. Send the full address and the section name if you know it. A single quote can cover the garage, patio, and indoor pieces when you show us everything that needs to go.",
    quote: "Take an overview of the garage, a separate photo of each large item, and a picture of the walkway from any backyard piles.",
    residential: "a family garage cleanout with bikes, broken shelves, or boxes earmarked for removal",
    turnover: "a move-out with items left in the garage, yard, and house",
    outdoor: "a seasonal yard cleanup combined with outdoor toys or worn patio furniture",
    access: "Share your section of Power Ranch and point out the best place to load.",
    featured: ["garage-cleanout", "bulky-item-pickup", "yard-waste-removal"]
  },
  {
    city: "Mesa", name: "Las Sendas", slug: "las-sendas",
    intro: "Book hauling for a multi-room cleanout, outdoor furniture, or storm debris in northeast Mesa's Las Sendas community.",
    local: "For homes in Las Sendas, clarify whether loading is at street level or up a sloped driveway. If trees, branches, or damaged outdoor items are involved, separate photos by pile and point out any obstructions.",
    quote: "Share the driveway grade, gate instructions if applicable, and whether heavy furniture or debris sits on a different level from the load point.",
    residential: "a multi-room cleanout where some items need to come down steps or out through a garage",
    turnover: "an estate or pre-listing cleanout with rooms being cleared in stages",
    outdoor: "an outdoor cleanout with branches or patio items on uneven ground",
    access: "Photograph a sloped driveway or stairs and note any gate directions for the crew.",
    featured: ["estate-cleanout", "monsoon-storm-cleanup", "yard-waste-removal"]
  },
  {
    city: "Mesa", name: "Hawes Crossing", slug: "hawes-crossing",
    intro: "Get unpacking debris, replacement furniture, and garage clutter picked up at your Hawes Crossing home in Mesa.",
    local: "Hawes Crossing is a planned development in Mesa. If your street or phase is newly occupied, share a cross street or map pin with the address. Let us know if your pickup follows a furniture delivery or is part of a move-in setup.",
    quote: "Photograph cardboard stacks separately from large furniture and tell us if you also want a quote for furniture assembly.",
    residential: "a home setup with unpacking boxes, an unwanted piece of furniture, or an assembly request",
    turnover: "a first-week move-in, exchange delivery, or a staged pickup around a closing date",
    outdoor: "a backyard setup with packaging or approved non-hazardous light project debris",
    access: "Send a map pin or nearest cross street if the address is new, and point out the open entrance.",
    featured: ["bulky-item-pickup", "handyman-services", "garage-cleanout"]
  },
  {
    city: "Mesa", name: "Mountain Bridge", slug: "mountain-bridge",
    intro: "Clear heavy furniture, outdated appliances, or items left over after a remodel in Mountain Bridge.",
    local: "Mountain Bridge is a master-planned community in Mesa. For pickups that run through a courtyard, side gate, or garage, show the route from the item to the loading point. This matters when replacing a sectional, disconnected appliance, or spa.",
    quote: "Include the width of the narrowest opening for bulky items and describe whether we will be loading from the garage, driveway, or another approved spot.",
    residential: "a furniture replacement with large pieces coming through a courtyard, doorway, or garage",
    turnover: "a remodel or pre-listing cleanup involving several rooms and work zones",
    outdoor: "a patio refresh with heavy furniture or a disconnected spa",
    access: "Flag courtyard turns, gate widths, and any private-street access steps that apply.",
    featured: ["furniture-removal", "appliance-removal", "hot-tub-removal"]
  },
  {
    city: "Gilbert", name: "Seville", slug: "seville",
    intro: "Get patio furniture, garage clutter, or the contents of several rooms hauled away in Gilbert's Seville community.",
    local: "For a home pickup in the Seville area, tell us whether you are refreshing the outdoor living space or clearing the house before a move. If both are on the list, send separate indoor and outdoor photos for a single estimate.",
    quote: "For a large cleanout, label the rooms or piles. Indicate whether patio pieces, shelving, and appliances are included.",
    residential: "a replacement of indoor furniture and a separate set of heavy patio pieces",
    turnover: "a multi-room cleanout before a sale, move, or family handoff",
    outdoor: "a patio update or a yard cleanup with damaged outdoor items",
    access: "Show the path between the patio, garage, or rooms being cleared and the pickup spot.",
    featured: ["estate-cleanout", "furniture-removal", "yard-waste-removal"]
  },
  {
    city: "Gilbert", name: "The Bridges at Gilbert", slug: "the-bridges-at-gilbert",
    intro: "Clear garage shelves, old patio sets, and unwanted items after a move or home project in The Bridges at Gilbert.",
    local: "If you are clearing more than one space in The Bridges, it helps to photograph each area before you start shifting items. We can review a mixed load of approved household, garage, and outdoor items from the same address.",
    quote: "Include garage, patio, and side-yard photos as applicable. Send a separate close-up of anything unusually heavy or oversized.",
    residential: "a household garage reset with old shelves, outdoor toys, and boxes",
    turnover: "a home reset after a family move or a run of furniture deliveries",
    outdoor: "a side-yard or patio cleanup after updating an outdoor space",
    access: "Tell us whether items are spread across the house and yard or staged together.",
    featured: ["garage-cleanout", "bulky-item-pickup", "construction-debris-removal"]
  },
  {
    city: "Gilbert", name: "Val Vista Lakes", slug: "val-vista-lakes",
    intro: "Arrange junk hauling for a Val Vista Lakes home, from a single bulky pickup to a patio or full-property cleanout.",
    local: "Val Vista Lakes includes homes with different parking and access arrangements. For a backyard pickup, take a photo from the item looking toward the loading spot. Call out any shared paths, stairs, tight gates, or parking instructions.",
    quote: "Send a picture of each level or space involved and tell us if an item is upstairs or on a patio away from the driveway.",
    residential: "a furniture pickup from multiple rooms or levels of the home",
    turnover: "a pre-sale or rental cleanout with items left both indoors and on the patio",
    outdoor: "a patio cleanout with seating, planters, or approved yard debris",
    access: "Flag any shared path, parking limit, or level change before the crew arrives.",
    featured: ["furniture-removal", "property-cleanouts", "yard-waste-removal"]
  },
  {
    city: "Chandler", name: "Ocotillo", slug: "ocotillo",
    intro: "Get furniture, disconnected appliances, or approved remodel debris hauled away in Chandler's Ocotillo community.",
    local: "Ocotillo is a master-planned Chandler community with multiple neighborhoods. Tell us which part of Ocotillo you are in and whether loading access is through a garage, a building entrance, or a side gate.",
    quote: "For remodel debris, show the material by type and how much is ready. For appliance replacement, include a photo of the disconnected unit and the route out.",
    residential: "a kitchen or household refresh with furniture and disconnected appliances being replaced",
    turnover: "a pre-listing update or rental turnover where photos and deadlines matter",
    outdoor: "a patio refresh or approved light remodel debris pickup",
    access: "Include the Ocotillo neighborhood or subdivision and any loading or parking restrictions.",
    featured: ["appliance-removal", "construction-debris-removal", "move-out-rental-turnover-cleanouts"]
  },
  {
    city: "Chandler", name: "Fulton Ranch", slug: "fulton-ranch",
    intro: "Finish a Fulton Ranch move, clear the garage, or make room for new furniture without arranging a separate dump run.",
    local: "A furnished move-out or room refresh can leave large pieces scattered across the house, garage, and patio. In Fulton Ranch, tell us which pieces come from which room and where a vehicle can load without blocking other work.",
    quote: "Send your key handoff date or furniture delivery window, along with clear photos of all items and any interior stairs.",
    residential: "a room-by-room furniture swap with additional pieces in the garage",
    turnover: "a move, property handoff, or sale with a firm deadline",
    outdoor: "a patio-furniture or yard-debris load after a home refresh",
    access: "Tell us if any items are upstairs and whether we need to plan around a delivery or moving truck.",
    featured: ["move-out-rental-turnover-cleanouts", "furniture-removal", "garage-cleanout"]
  },
  {
    city: "San Tan Valley", name: "Johnson Ranch", slug: "johnson-ranch",
    intro: "Book a Johnson Ranch garage cleanout, patio pickup, or non-hazardous yard and storm debris haul-away.",
    local: "Johnson Ranch has community waste and bulk-pickup resources. If an item is still indoors, the pile is bigger than expected, or you need a private pickup window, send the whole job in one set of photos so we can plan the load.",
    quote: "Keep photos of branches and yard piles separate from furniture and bagged waste. Include the street address and any side-yard access details.",
    residential: "a combined garage and household pickup with items too awkward to move out alone",
    turnover: "a rental or family move-out with unwanted items staged in multiple spaces",
    outdoor: "a side-yard cleanup with branches, non-hazardous debris, or storm-damaged patio items",
    access: "Show where the trailer can load and which piles can be reached from the driveway or side yard.",
    featured: ["yard-waste-removal", "storm-debris-removal", "bulky-item-pickup"]
  },
  {
    city: "Scottsdale", name: "McDowell Mountain Ranch", slug: "mcdowell-mountain-ranch",
    intro: "Arrange a North Scottsdale cleanout, oversized furniture pickup, or spa haul-away in McDowell Mountain Ranch.",
    local: "For a McDowell Mountain Ranch address in North Scottsdale, tell us how we can reach the pickup spot. A narrow side yard, driveway grade, or a gate can affect the equipment and time needed for a large item.",
    quote: "For multi-room or heavy-item pickups, share room photos and the full exit route so we can confirm the scope and scheduling window.",
    residential: "an oversized furniture or appliance pickup where the route out needs planning",
    turnover: "a pre-sale or downsizing cleanout with items to remove identified room by room",
    outdoor: "a spa, patio, or storm debris pickup with a narrow exit route",
    access: "Send photos of any steep driveway, side gate, stairs, or narrow turns beside the home.",
    featured: ["estate-cleanout", "hot-tub-removal", "move-out-rental-turnover-cleanouts"]
  }
];
