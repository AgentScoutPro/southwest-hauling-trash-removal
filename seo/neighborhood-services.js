const bulky = {
  slug: "bulky-item-pickup-east-valley-az",
  name: "Bulky Item Pickup",
  h1: "Bulky Item Pickup in the East Valley, AZ",
  title: "Bulky Item Pickup East Valley AZ | Southwest Hauling",
  meta: "Schedule private bulky item pickup across Arizona's East Valley for couches, mattresses, disconnected appliances, patio furniture, and mixed loads.",
  hero: "From a single couch to a mixed load of mattresses, appliances, and patio furniture, our crew handles the lifting and haul-away.",
  details: "Send a photo of each large item and tell us whether it is indoors, in the garage, or curbside. We review the volume, item size, and loading access before quoting the pickup. The crew can collect approved pieces from where they sit when the exit route is accessible.",
  removes: ["Couches and sectionals", "Mattresses and bed frames", "Disconnected appliances", "Patio furniture", "Desks and shelving", "Mixed bulky loads"],
  related: ["furniture-removal-east-valley-az", "appliance-removal-east-valley-az", "garage-cleanout-east-valley-az"],
  faqs: [
    ["Can I book a single-item pickup?", "Yes. Send a clear photo of the item, its location, and any stairs or tight turns on the way out."],
    ["Do I need to bring the items to the curb?", "We can quote pickup from inside, a garage, or a curbside staging spot. Mention any steps, tight doors, or parking limitations when you request a quote."],
    ["Can you pick up furniture and an appliance together?", "Yes. List every piece in the request. Appliances should be empty and disconnected before pickup, and we will confirm any special handling before scheduling."]
  ]
};

const turnover = {
  slug: "move-out-rental-turnover-cleanouts-east-valley-az",
  name: "Move-Out & Rental Turnover Cleanouts",
  h1: "Move-Out & Rental Turnover Cleanouts in the East Valley",
  title: "Move-Out & Rental Turnover Cleanouts | Southwest Hauling",
  meta: "Book move-out and rental turnover junk removal in Arizona's East Valley. We haul leftover furniture, boxes, appliances, and non-hazardous junk.",
  hero: "Clear the belongings left behind before a key handoff, turnover, listing, or final walkthrough.",
  details: "We help tenants, owners, agents, and property managers remove approved leftover furniture, boxes, disconnected appliances, and other non-hazardous junk. Share your deadline and list the rooms, patio, garage, or storage areas that need attention. We confirm scope, access, and availability before scheduling.",
  removes: ["Leftover furniture", "Boxes and household junk", "Disconnected appliances", "Garage clutter", "Patio items", "Approved bagged waste"],
  related: ["property-cleanouts-east-valley-az", "moving-help-east-valley-az", "bulky-item-pickup-east-valley-az"],
  faqs: [
    ["How should I prepare before handing over the keys?", "Confirm which items are approved for removal, identify belongings staying behind, and send photos of every room or area that needs pickup. Include the handoff date so we can check availability."],
    ["Can a property manager arrange the pickup?", "Yes. Share the unit number, approved item list, on-site contact, parking instructions, and any access arrangements."],
    ["Can you move the belongings I am keeping?", "Tell us what you need in the quote request. The cleanout covers approved haul-away. Ask about moving help separately if you need loading or lifting for items you want to keep."]
  ]
};

const scope = {
  "junk-removal": {
    title: "Household Junk Removal", slug: "household-junk-removal", context: "residential",
    job: "Clear a mixed load of everyday household clutter, broken items, old shelving, and bagged non-hazardous junk.",
    prepare: "Mark the items staying and send one photo of each pile. Note bulkier items separately so the quote can account for loading space.",
    question: "Can you take items from several rooms?",
    answer: "Yes. Include all rooms in the quote request and point out steps or tight doorways. We confirm what can go in the same load."
  },
  "garage-cleanout": {
    context: "residential", job: "Reclaim parking and storage space by clearing old shelving, boxes, unused equipment, and broken household goods.",
    prepare: "Take an overview from the garage door. Set aside items you are keeping and identify any shelving that is still mounted.",
    question: "Do I need to sort or stage everything first?",
    answer: "Keep and remove labels are enough to start. Tell us if you need help lifting items from shelves or reaching a pile behind other belongings."
  },
  "furniture-removal": {
    context: "residential", job: "Arrange haul-away for sofas, sectionals, mattresses, desks, dressers, or patio furniture.",
    prepare: "Show the full piece and the route out. Mention stairs, narrow hallways, and any part that may need to come apart for loading.",
    question: "Can you pick up a sectional and a mattress together?",
    answer: "Yes. Include both in your photos and mention bed frames, box springs, or other pieces so they can all be quoted together."
  },
  "appliance-removal": {
    context: "residential", job: "Get a disconnected fridge, washer, dryer, range, freezer, or other approved bulky appliance out of the way.",
    prepare: "Empty the appliance and arrange disconnection before service. Photograph the unit and describe any stairs, thresholds, or tight turns.",
    question: "Should my appliance be disconnected?",
    answer: "Yes. Have it safely disconnected and ready for hauling. Tell us the appliance type and setup when requesting the quote."
  },
  "property-cleanouts": {
    context: "turnover", job: "Clear multiple rooms, a garage, or outdoor storage as part of a home, rental, or other property cleanout.",
    prepare: "Send a room-by-room or area-by-area list, identify items to keep, and let us know who can approve the removal and provide access.",
    question: "Can a larger cleanout be done in stages?",
    answer: "Tell us which areas need to be cleared first and what your deadline is. We can discuss the load size and a practical schedule before you book."
  },
  "yard-waste-removal": {
    context: "outdoor", job: "Haul away cut branches, shrubs, trimmings, and other approved yard debris already collected for pickup.",
    prepare: "Photograph each pile with an object for scale. Flag palm material, thick limbs, or debris that needs to be carried through a side gate.",
    question: "Can yard debris be picked up with other junk?",
    answer: "Share photos of both in the request. We will confirm which loads can be combined and whether anything needs separate handling."
  },
  "construction-debris-removal": {
    context: "outdoor", job: "Arrange removal of approved light remodeling debris, packaging, wood scraps, or other non-hazardous project material.",
    prepare: "List the material types and approximate quantities. Tell us when the debris will be staged and whether other crews will need the same access.",
    question: "What if my pile contains heavy or unfamiliar material?",
    answer: "Send close-up photos and describe the material before scheduling. We confirm what can be hauled and can help avoid a trip for unsuitable material."
  },
  "hot-tub-removal": {
    context: "outdoor", job: "Plan haul-away of an old, disconnected spa or hot tub that is ready for removal.",
    prepare: "Have it drained and safely disconnected. Send approximate tub dimensions and photos of the narrowest gate, turn, or step on the route out.",
    question: "What if the hot tub won't fit through the gate?",
    answer: "Send photos and measurements before booking. The quote depends on the tub, the space around it, and the access route."
  },
  "commercial-cleanout": {
    context: "commercial", job: "Clear office furniture, retail fixtures, packaging, and approved business clutter for an office, storefront, or managed property.",
    prepare: "Share the item list, hours when loading is permitted, on-site contact, and any parking, dock, or elevator instructions.",
    question: "Can I schedule around business hours?",
    answer: "Share the site's operating hours and your preferred window. We can confirm availability and access requirements with you."
  },
  "estate-cleanout": {
    context: "turnover", job: "Arrange removal of furniture, boxes, and other approved household contents after the family has chosen what to keep.",
    prepare: "Set aside documents, valuables, and family belongings. Identify approved areas and give us the name of the person coordinating the cleanout.",
    question: "Can we keep items in some rooms?",
    answer: "Yes. Mark the items and rooms staying, and let us know if any areas should be left closed or handled in a later pickup."
  },
  "moving-help": {
    context: "turnover", job: "Request extra hands for lifting or loading during a move, or arrange haul-away for items you have decided to leave behind.",
    prepare: "List items to move or load separately from items for disposal. Include stairs, the loading window, and what vehicle or container will be on site.",
    question: "Can I request lifting help and junk hauling together?",
    answer: "Yes. Describe both sets of items in the request so we can confirm which work fits the pickup and quote the right scope."
  },
  "trash-hauling": {
    context: "residential", job: "Schedule removal for approved bagged waste, cleanup piles, and loose non-hazardous junk after a household or property project.",
    prepare: "Show the number and size of bags or piles and describe what is in them. Mention any loose items or heavy material that needs a separate quote.",
    question: "Do you take paint, fuel, or other hazardous waste?",
    answer: "We handle approved non-hazardous loads. Tell us what is in each pile and set hazardous material aside for an appropriate disposal program."
  },
  "monsoon-storm-cleanup": {
    context: "outdoor", job: "Clear approved storm debris such as broken branches, displaced fencing, and damaged outdoor items after a storm.",
    prepare: "Once the area is safe, photograph each pile from a clear spot. Tell us if any damage blocks access or if several areas need cleanup.",
    question: "Can one pickup cover the yard and driveway?",
    answer: "Yes. Share photos of both locations and highlight any damaged, unstable, or inaccessible areas so we can confirm what the crew can handle."
  },
  "emergency-tree-removal": {
    context: "outdoor", job: "Ask about removal and haul-away of fallen trees or large limbs after storm damage.",
    prepare: "From a safe distance show where the tree landed, the trunk size, and blocked approaches. If a tree touches a power line, stay clear and contact the utility first.",
    question: "Can you quote a tree that is blocking access?",
    answer: "Call and describe what is blocked, whether utilities or structures are involved, and the safest approach. We will confirm the scope and availability."
  },
  "storm-debris-removal": {
    context: "outdoor", job: "Get loose branches, palm debris, damaged outdoor furniture, and broken fence material hauled away after a storm.",
    prepare: "List each material and where it landed. Photograph debris separately from intact items and point out any areas the crew should avoid.",
    question: "Do the storm piles have to be curbside?",
    answer: "Tell us where each pile is, including any in a side or backyard. We can review access and quote loading where the material sits."
  },
  "stump-removal": {
    context: "outdoor", job: "Ask about cleanup and haul-away for stumps, exposed root balls, and heavy wood left after tree removal or storm damage.",
    prepare: "Send photos from two angles and note whether the stump is still rooted, fully lifted, or attached to other debris.",
    question: "Can you take a large root ball?",
    answer: "Send the approximate width and height and show the route to the truck. We confirm handling and access before scheduling."
  },
  "commercial-storm-cleanup": {
    context: "commercial", job: "Arrange approved non-hazardous storm debris cleanup for an HOA, multifamily property, or business with affected common areas.",
    prepare: "Mark each area on the property, describe blocked parking or walkways, and provide an authorized contact for access and scope.",
    question: "Can you work with an HOA or property manager?",
    answer: "Yes. Send the areas to be cleared and your access requirements so we can quote the work and coordinate an available pickup window."
  },
  "handyman-services": {
    context: "residential", job: "Request help with small home projects such as drywall patches, TV mounting, furniture assembly, or shelves.",
    prepare: "Send photos of the work area, dimensions where relevant, and a list of fixtures, hardware, or furniture already on site.",
    question: "Can I add a small repair to my hauling visit?",
    answer: "Include both jobs in your photos and request. We will confirm whether we can quote and schedule them together."
  },
  "bulky-item-pickup": {
    context: "residential", job: "Book pickup for a single large item or a mixed load of couches, mattresses, appliances, and patio furniture.",
    prepare: "Photograph each item and say whether you want it collected from indoors, the garage, or a curbside staging spot.",
    question: "How do you quote bulky pickup?",
    answer: "We look at what is going, the load size, and how we can reach it. Sending photos and access details helps us give you a clear quote."
  },
  "move-out-rental-turnover-cleanouts": {
    title: "Move-Out & Turnover Cleanouts", context: "turnover",
    job: "Clear furniture, boxes, and leftover household items before a final walkthrough, listing, or rental handoff.",
    prepare: "Send the deadline, room list, and on-site contact. Confirm which items are approved for haul-away and how the crew will get in.",
    question: "How should I plan pickup around a move-out deadline?",
    answer: "Share the handoff date and earliest available access when requesting a quote. We will confirm timing and scope based on availability."
  }
};

module.exports = { newServices: [bulky, turnover], scope };
