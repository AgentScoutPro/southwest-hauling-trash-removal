const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const SITE = "https://www.southwestjunkhauling.com";
const BUSINESS = "Southwest Hauling & Junk Removal LLC";
const BRAND = "Southwest Hauling";
const PHONE = "480-490-8033";
const PHONE_HREF = "tel:+14804908033";
const EMAIL = "Chris@southwestjunkhauling.com";
const EMAIL_HREF = "mailto:Chris@southwestjunkhauling.com";
const QUOTE = `${EMAIL_HREF}?subject=Free%20Junk%20Removal%20Quote%20Request`;
const ADDRESS = "39111 N Zampino St, Queen Creek, AZ 85140";

const services = [
  {
    slug: "junk-removal-east-valley-az",
    name: "Junk Removal",
    h1: "Junk Removal in the East Valley AZ",
    title: "Junk Removal East Valley AZ | Southwest Hauling",
    meta: "Fast junk removal in the East Valley AZ for homes and businesses in Mesa, Gilbert, Queen Creek, Chandler, San Tan Valley, and nearby areas.",
    hero: "Get household junk, bulky clutter, garage piles, and unwanted items hauled away by a local East Valley crew.",
    details: "Southwest Hauling handles everyday junk removal for homeowners, renters, landlords, property managers, and small businesses. Send photos for a free quote, choose a pickup window, and we handle the lifting, loading, hauling, and cleanup.",
    removes: ["Household clutter", "Boxes and bagged trash", "Bulky junk", "Garage items", "Rental cleanup debris", "Light outdoor junk", "Storm trash and damaged outdoor items"]
  },
  {
    slug: "garage-cleanout-east-valley-az",
    name: "Garage Cleanouts",
    h1: "Garage Cleanouts in the East Valley AZ",
    title: "Garage Cleanouts East Valley AZ | Southwest Hauling",
    meta: "Garage cleanout services across the East Valley AZ. Clear boxes, clutter, old tools, storage piles, and bulky junk fast.",
    hero: "Turn a crowded garage into usable space again with fast, local garage cleanout help.",
    details: "We remove the clutter that builds up in Arizona garages: storage bins, cardboard, broken furniture, old shelving, tools, toys, and general junk. Our crew loads the trailer and leaves the area easier to sweep, park in, or organize.",
    removes: ["Cardboard and boxes", "Old shelving", "Broken furniture", "Storage clutter", "Tools and household junk", "Move-out piles"]
  },
  {
    slug: "furniture-removal-east-valley-az",
    name: "Furniture Removal",
    h1: "Furniture Removal in the East Valley AZ",
    title: "Furniture Removal East Valley AZ | Southwest Hauling",
    meta: "Furniture removal for couches, sectionals, mattresses, tables, desks, patio furniture, and bulky items across the East Valley AZ.",
    hero: "Book easy furniture removal when the couch, mattress, desk, or patio set needs to go.",
    details: "Southwest Hauling removes heavy and awkward furniture from homes, apartments, offices, garages, patios, and rentals. We make bulky item pickup simple with clear pricing and local scheduling.",
    removes: ["Couches and sectionals", "Tables and chairs", "Desks and office furniture", "Bedroom furniture", "Patio furniture", "Mattresses and frames"]
  },
  {
    slug: "appliance-removal-east-valley-az",
    name: "Appliance Removal",
    h1: "Appliance Removal in the East Valley AZ",
    title: "Appliance Removal East Valley AZ | Southwest Hauling",
    meta: "Appliance removal in the East Valley AZ for refrigerators, washers, dryers, ranges, freezers, and bulky household appliances.",
    hero: "Remove old appliances without wrestling them through the house or renting a trailer.",
    details: "We haul away bulky appliances for homeowners, property managers, and small businesses. Tell us what needs to go, where it is located, and whether stairs or tight access are involved.",
    removes: ["Refrigerators", "Washers and dryers", "Ranges and ovens", "Freezers", "Dishwashers", "Bulky appliance debris"]
  },
  {
    slug: "property-cleanouts-east-valley-az",
    name: "Property Cleanouts",
    h1: "Property Cleanouts in the East Valley AZ",
    title: "Property Cleanouts East Valley AZ | Southwest Hauling",
    meta: "Property cleanouts in the East Valley AZ for rentals, move-outs, foreclosures, estates, storage units, yards, and full cleanout jobs.",
    hero: "Get reliable property cleanout help for rentals, move-outs, storage units, and full junk removal jobs.",
    details: "Southwest Hauling helps property owners, landlords, real estate agents, and families clear spaces quickly. We remove mixed junk, furniture, bagged waste, garage clutter, storm-damaged contents, outdoor belongings, and non-hazardous debris.",
    removes: ["Rental cleanout junk", "Move-out debris", "Storage unit contents", "Furniture and boxes", "Garage and yard clutter", "Estate cleanout items", "Storm-damaged contents"]
  },
  {
    slug: "yard-waste-removal-east-valley-az",
    name: "Yard Waste Removal",
    h1: "Yard Waste Removal in the East Valley AZ",
    title: "Yard Waste Removal East Valley AZ | Southwest Hauling",
    meta: "Yard waste removal in the East Valley AZ for branches, trimmings, storm debris, outdoor clutter, and cleanup piles.",
    hero: "Clear outdoor debris, branches, trimmings, and yard cleanup piles without multiple dump runs.",
    details: "Arizona yards collect palm fronds, branches, fallen limbs, wind-blown vegetation, landscape debris, broken outdoor items, and post-storm cleanup piles fast. We load and haul non-hazardous yard waste so patios, side yards, and lots are usable again.",
    removes: ["Branches and trimmings", "Palm fronds", "Outdoor clutter", "Storm debris", "Large fallen limbs", "Tree debris", "Bagged yard waste", "Side-yard cleanup piles"]
  },
  {
    slug: "construction-debris-removal-east-valley-az",
    name: "Construction Debris Removal",
    h1: "Construction Debris Removal in the East Valley AZ",
    title: "Construction Debris Removal East Valley AZ | Southwest Hauling",
    meta: "Light construction debris removal in the East Valley AZ for remodel scraps, wood, cardboard, packing debris, and non-hazardous jobsite cleanup.",
    hero: "Haul away light remodel debris and non-hazardous construction cleanup loads.",
    details: "Southwest Hauling helps homeowners, contractors, and small businesses remove light debris after repairs, installs, deliveries, remodel projects, and storm repair cleanup. We haul damaged fencing debris, removed roofing material, shed debris, patio debris, and other non-hazardous building debris without claiming structural repair.",
    removes: ["Wood scraps", "Cardboard", "Packing debris", "Light remodel waste", "Fixtures and trim", "Damaged fencing debris", "Storm repair debris", "Non-hazardous cleanup loads"]
  },
  {
    slug: "hot-tub-removal-east-valley-az",
    name: "Hot Tub Removal",
    h1: "Hot Tub Removal in the East Valley AZ",
    title: "Hot Tub Removal East Valley AZ | Southwest Hauling",
    meta: "Hot tub removal in the East Valley AZ for old spas, bulky outdoor items, and backyard cleanup projects.",
    hero: "Remove an old hot tub, spa, or bulky outdoor item with a local hauling crew.",
    details: "Old hot tubs take up space and are difficult to move. Contact Southwest Hauling with photos and access details so we can quote the job and plan a clean removal.",
    removes: ["Old hot tubs", "Spa debris", "Covers and panels", "Outdoor bulky items", "Patio cleanup debris", "Backyard junk"]
  },
  {
    slug: "commercial-cleanout-east-valley-az",
    name: "Commercial Cleanout",
    h1: "Commercial Cleanout in the East Valley AZ",
    title: "Commercial Cleanout East Valley AZ | Southwest Hauling",
    meta: "Commercial cleanout services in the East Valley AZ for office furniture, business clutter, retail cleanup, warehouse junk, and non-hazardous debris.",
    hero: "Clear business clutter, office furniture, and commercial junk without slowing down the workday.",
    details: "We help local businesses, offices, retail spaces, storage areas, and property managers remove non-hazardous junk. Southwest Hauling keeps commercial cleanouts organized, straightforward, and quote-driven.",
    removes: ["Office furniture", "Retail clutter", "Warehouse junk", "Packing materials", "Shelving and fixtures", "Business cleanout debris"]
  },
  {
    slug: "estate-cleanout-east-valley-az",
    name: "Estate Cleanout",
    h1: "Estate Cleanout in the East Valley AZ",
    title: "Estate Cleanout East Valley AZ | Southwest Hauling",
    meta: "Respectful estate cleanout services across the East Valley AZ for furniture, boxes, household items, garage clutter, and property cleanup.",
    hero: "Get respectful estate cleanout help for furniture, boxes, garage items, and full property cleanup.",
    details: "Estate cleanouts can be emotional and logistically heavy. Southwest Hauling provides steady hauling support for families, trustees, real estate agents, and property owners who need items removed responsibly.",
    removes: ["Furniture", "Boxes and household goods", "Garage items", "Yard debris", "Donation-ready items", "Full cleanout loads"]
  },
  {
    slug: "moving-help-east-valley-az",
    name: "Moving Help",
    h1: "Moving Help in the East Valley AZ",
    title: "Moving Help East Valley AZ | Southwest Hauling",
    meta: "Moving help and hauling assistance in the East Valley AZ for loading, lifting, bulky item removal, move-out junk, and cleanup.",
    hero: "Need extra muscle for moving, loading, or move-out junk removal? Southwest Hauling can help.",
    details: "We assist with moving-related lifting, loading, hauling, and junk removal. This is a practical option when you need bulky items moved out, unwanted items hauled away, or a move-out cleanup finished.",
    removes: ["Move-out junk", "Bulky furniture", "Boxes and packing debris", "Garage clutter", "Donation piles", "Cleanup loads"]
  },
  {
    slug: "trash-hauling-east-valley-az",
    name: "Trash Hauling",
    h1: "Trash Hauling in the East Valley AZ",
    title: "Trash Hauling East Valley AZ | Southwest Hauling",
    meta: "Trash hauling in the East Valley AZ for bagged waste, loose junk, cleanup piles, bulky trash, and non-hazardous debris.",
    hero: "Fast trash hauling for cleanup piles, bagged waste, and non-hazardous debris.",
    details: "When regular trash service is not enough, Southwest Hauling can remove larger cleanup loads, loose junk, bagged waste, post-monsoon debris, storm trash, and bulky non-hazardous debris from homes, rentals, yards, and businesses.",
    removes: ["Bagged trash", "Loose junk", "Bulky trash", "Cleanup piles", "Rental debris", "Storm debris hauling", "Bulk damaged items", "Non-hazardous waste"]
  }
];


const stormAssetBase = "/assets/storm";
const stormAssets = {
  homeBanner: "monsoon-fallen-tree-home-damage-east-valley-az-southwest-hauling-banner.png",
  pillarBanner: "storm-damaged-tree-roof-east-valley-az-southwest-hauling-banner.png",
  treeHero: "emergency-fallen-tree-removal-east-valley-az-southwest-hauling-hero.jpg",
  stumpHero: "uprooted-tree-root-ball-removal-east-valley-az-southwest-hauling-hero.jpg",
  damageBefore: "storm-damaged-tree-home-east-valley-az-southwest-hauling-before.jpg",
  project: "monsoon-storm-tree-damage-east-valley-az-southwest-hauling-project.jpg",
  limbDetail: "storm-tree-limb-damage-east-valley-az-southwest-hauling-detail.jpg",
  branches: "fallen-tree-branches-home-east-valley-az-southwest-hauling-detail.jpg",
  roofline: "storm-damage-roofline-east-valley-az-southwest-hauling-detail.heic",
  impact: "storm-tree-impact-home-exterior-east-valley-az-southwest-hauling-damage-detail.heic",
  neighborhood: "storm-cleanup-east-valley-az-southwest-hauling-neighborhood-context.heic",
  crewOne: "fallen-tree-debris-cleanup-east-valley-az-southwest-hauling-crew-01.heic",
  crewTwo: "storm-tree-debris-removal-east-valley-az-southwest-hauling-crew-02.heic",
  afterOne: "storm-cleanup-property-east-valley-az-southwest-hauling-after-01.heic",
  afterTwo: "monsoon-property-cleanup-east-valley-az-southwest-hauling-after.heic",
  afterThree: "tree-debris-cleanup-east-valley-az-southwest-hauling-after-02.heic",
  homeScrubVideo: "arizona-monsoon-storm-cleanup-southwest-hauling-scrub.mp4",
  videos: [
    "fallen-tree-storm-cleanup-east-valley-az-southwest-hauling-project-video.mov",
    "2 fallen-tree-storm-cleanup-east-valley-az-southwest-hauling-project-video.mov",
    "3 fallen-tree-storm-cleanup-east-valley-az-southwest-hauling-project-video.mov",
    "4 fallen-tree-storm-cleanup-east-valley-az-southwest-hauling-project-video.mov"
  ]
};

const stormServices = [
  {
    slug: "monsoon-storm-cleanup-east-valley-az",
    name: "Monsoon & Storm Cleanup",
    h1: "Monsoon & Storm Cleanup in Phoenix's East Valley",
    title: "Monsoon & Storm Cleanup East Valley AZ | Southwest Hauling",
    meta: "Monsoon and storm cleanup across Arizona's East Valley. Fallen trees, branches, yard debris, fencing, trash, loading and complete haul-away.",
    hero: "Fallen trees. Broken limbs. Yard debris. Damaged fencing. Stumps. Trash. Southwest handles the cleanup, loading and haul-away across the East Valley.",
    details: "When Arizona weather leaves trees, branches, fencing, damaged outdoor items, trash, and debris across a property, Southwest clears the mess. We focus on loading, hauling, and cleanup after monsoons, microbursts, severe winds, rainstorms, and dust storms.",
    removes: ["Fallen tree cleanup", "Large limb removal", "Branch and yard debris", "Damaged fencing debris", "Outdoor furniture and bulk debris", "Driveway and access clearing"],
    heroImage: stormAssets.pillarBanner,
    media: [stormAssets.damageBefore, stormAssets.project, stormAssets.treeHero, stormAssets.stumpHero],
    video: stormAssets.videos[1],
    faqs: [
      ["What storm debris do you remove?", "We remove fallen limbs, tree debris, palm debris, fencing debris, damaged outdoor items, bulk trash, yard waste, and other non-hazardous storm debris."],
      ["Can you clean up after an Arizona monsoon?", "Yes. Southwest handles post-monsoon cleanup, loading, and haul-away across Queen Creek and the East Valley when scheduling allows."],
      ["Do you remove trees and large branches?", "We remove fallen trees, large branches, tree debris, and related mess from storm-damaged properties."],
      ["Do you haul everything away?", "Yes. The service is built around loading, cleanup, and complete haul-away for approved non-hazardous debris."]
    ]
  },
  {
    slug: "emergency-tree-removal-east-valley-az",
    name: "Emergency & Fallen Tree Removal",
    h1: "Emergency & Fallen Tree Removal Across the East Valley",
    title: "Fallen Tree Removal East Valley AZ | Southwest Hauling",
    meta: "Fallen and storm-damaged tree removal across the East Valley with debris loading, haul-away and complete property cleanup.",
    hero: "We do not just remove the tree. We remove the mess around it: limbs, branches, root material, debris, loading, and haul-away.",
    details: "A fallen tree can block a driveway, damage outdoor areas, or scatter heavy branches across the yard. Southwest removes storm-damaged trees and the surrounding debris without claiming arborist, utility-line, or structural repair services.",
    removes: ["Fallen trees", "Storm-damaged trees", "Uprooted trees", "Broken limbs", "Tree debris", "Access-clearing debris"],
    heroImage: stormAssets.treeHero,
    media: [stormAssets.branches, stormAssets.limbDetail, stormAssets.pillarBanner, stormAssets.project],
    video: stormAssets.videos[0],
    faqs: [
      ["Can you remove a tree that fell during a storm?", "Yes. We remove fallen and storm-damaged trees where the work fits Southwest's hauling and cleanup scope."],
      ["Do you remove the entire tree?", "We can remove the tree debris, branches, large sections, and surrounding non-hazardous mess as part of the haul-away."],
      ["Can you clear driveway access?", "Yes. If debris is blocking usable access, tell us when you request a quote so we can plan the cleanup."],
      ["Are you an arborist?", "No arborist credentials are claimed here. Southwest provides cleanup, removal, loading, and haul-away." ]
    ]
  },
  {
    slug: "storm-debris-removal-east-valley-az",
    name: "Storm Debris Removal & Hauling",
    h1: "Storm Debris Removal & Hauling in the East Valley",
    title: "Storm Debris Removal East Valley AZ | Southwest Hauling",
    meta: "Storm debris removal and hauling across the East Valley for branches, yard waste, fencing, bulk debris and post-storm cleanup.",
    hero: "Branches, palm debris, broken fencing, damaged outdoor items, loose trash, and cleanup piles loaded and hauled away.",
    details: "Storm debris removal is for the mixed mess Arizona weather leaves behind. Southwest handles non-hazardous cleanup loads after wind, rain, dust storms, and monsoon damage.",
    removes: ["Tree debris", "Limbs and branches", "Palm debris", "Fence debris", "Damaged outdoor items", "Post-storm trash"],
    heroImage: stormAssets.project,
    media: [stormAssets.project, stormAssets.damageBefore, stormAssets.branches, stormAssets.pillarBanner],
    video: stormAssets.videos[2],
    faqs: [["What storm debris can you haul?", "We haul branches, vegetation, fencing debris, outdoor items, bulk debris, yard waste, loose wind-blown material, and non-hazardous trash."], ["Do you handle fence debris?", "Yes. We can remove damaged fencing debris as haul-away, but we do not claim fence repair."], ["Can you load the debris for me?", "Yes. Loading and haul-away are part of the service."]]
  },
  {
    slug: "stump-removal-east-valley-az",
    name: "Stump Removal & Haul Away",
    h1: "Tree Stump Removal & Haul Away in the East Valley",
    title: "Stump Removal East Valley AZ | Southwest Hauling",
    meta: "Tree stump and root-ball removal with complete haul-away throughout Arizona's East Valley.",
    hero: "Stumps, exposed root balls, uprooted-tree debris, and heavy wood hauled away after storm damage or removal work.",
    details: "Southwest can remove and haul away stumps, extracted stump material, and exposed root balls. We do not advertise stump grinding, replanting, grading, irrigation repair, or landscape restoration unless confirmed separately.",
    removes: ["Tree stumps", "Root balls", "Uprooted tree debris", "Heavy wood debris", "Storm-damaged stump material", "Cleanup piles"],
    heroImage: stormAssets.stumpHero,
    media: [stormAssets.stumpHero, stormAssets.treeHero, stormAssets.damageBefore],
    faqs: [["Do you remove stumps?", "Yes. Southwest can remove and haul away tree stumps and related debris where access and job scope fit."], ["Do you remove exposed root balls?", "Yes. Root-ball removal and haul-away are part of the storm cleanup offering."], ["Do you offer stump grinding?", "Stump grinding is not claimed on this site. This page covers stump removal, extraction debris, root-ball removal, and haul-away."]]
  },
  {
    slug: "commercial-storm-cleanup-east-valley-az",
    name: "Commercial & HOA Storm Cleanup",
    h1: "Commercial & HOA Storm Cleanup in the East Valley",
    title: "Commercial Storm Cleanup East Valley AZ | Southwest Hauling",
    meta: "Storm debris cleanup and hauling for HOAs, property managers and commercial properties throughout Arizona's East Valley.",
    hero: "Storm debris cleanup for HOAs, property managers, multifamily, retail, office, rental, and commercial properties.",
    details: "Southwest helps commercial properties clear non-hazardous storm debris from common areas, parking areas, yards, and cleanup piles. We keep the offer focused on cleanup, loading, and hauling without inventing ongoing contracts or repair services.",
    removes: ["Common area debris", "Parking lot debris", "Tree debris", "Fence debris", "Bulk storm debris", "Storm-damaged outdoor items"],
    heroImage: stormAssets.pillarBanner,
    media: [stormAssets.project, stormAssets.damageBefore, stormAssets.pillarBanner],
    video: stormAssets.videos[3],
    faqs: [["Do you work with HOAs?", "Yes. Southwest can provide quote-based storm cleanup and debris hauling for HOA common areas where the scope fits."], ["Do you work with property managers?", "Yes. Property managers can request storm debris cleanup for rentals, multifamily, and commercial properties."], ["Can you clean commercial common areas?", "Yes. We can remove non-hazardous storm debris from common areas, parking areas, and outdoor cleanup zones."]]
  }
];

services.push(...stormServices);

const locations = [
  { slug: "mesa-az", city: "Mesa", angle: "neighborhoods, rentals, garages, and business cleanouts", nearby: ["gilbert-az", "tempe-az", "apache-junction-az"] },
  { slug: "gilbert-az", city: "Gilbert", angle: "homes, move-outs, remodel cleanup, and bulky pickups", nearby: ["mesa-az", "queen-creek-az", "chandler-az"] },
  { slug: "queen-creek-az", city: "Queen Creek", angle: "homes, acreage cleanup, garages, yards, and cleanouts", nearby: ["gilbert-az", "san-tan-valley-az", "chandler-az"] },
  { slug: "chandler-az", city: "Chandler", angle: "homes, offices, apartments, and commercial cleanouts", nearby: ["gilbert-az", "tempe-az", "queen-creek-az"] },
  { slug: "san-tan-valley-az", city: "San Tan Valley", angle: "garage cleanouts, yard waste, furniture, and move-outs", nearby: ["queen-creek-az", "apache-junction-az", "gilbert-az"] },
  { slug: "apache-junction-az", city: "Apache Junction", angle: "yard cleanup, property cleanouts, bulky junk, and trash hauling", nearby: ["mesa-az", "san-tan-valley-az", "queen-creek-az"] },
  { slug: "tempe-az", city: "Tempe", angle: "apartments, move-outs, office cleanouts, and furniture", nearby: ["mesa-az", "chandler-az", "scottsdale-az"] },
  { slug: "scottsdale-az", city: "Scottsdale", angle: "home cleanouts, furniture pickup, yard waste, and business hauling", nearby: ["tempe-az", "mesa-az", "chandler-az"] }
];

const queenCreekAreas = [
  {
    slug: "ironwood-crossing-junk-removal",
    name: "Ironwood Crossing",
    category: "Master-Planned Neighborhood",
    angle: "dense family neighborhoods, garage cleanouts, furniture removal, and move-in or move-out junk piles",
    localDetail: "Ironwood Crossing is one of Queen Creek's most active residential pockets, with steady demand from families clearing garages, patios, storage areas, and bulky household items."
  },
  {
    slug: "harvest-at-queen-creek-junk-removal",
    name: "Harvest at Queen Creek",
    category: "Master-Planned Neighborhood",
    angle: "newer homes, family cleanups, community move-ins, yard debris, and bulky item pickup",
    localDetail: "Harvest at Queen Creek has a high level of community activity, new homeowners, and family-focused living, making it a strong fit for quick residential hauling and cleanout support."
  },
  {
    slug: "barney-farms-junk-removal",
    name: "Barney Farms",
    category: "Growth Neighborhood",
    angle: "new-home clutter, packing debris, garage cleanup, appliance pickup, and backyard junk removal",
    localDetail: "Barney Farms is known for rapid growth, newer families, and its lake-centered community setting near the Signal Butte side of Queen Creek."
  },
  {
    slug: "hastings-farms-junk-removal",
    name: "Hastings Farms",
    category: "Family Neighborhood",
    angle: "garage cleanouts, furniture removal, property cleanups, and home refresh projects",
    localDetail: "Hastings Farms combines newer master-plan living with family amenities, trails, mountain views, and a steady flow of home-service searches."
  },
  {
    slug: "cortina-junk-removal",
    name: "Cortina",
    category: "Family Neighborhood",
    angle: "family-home cleanouts, bulky furniture removal, garage organization projects, and yard cleanup",
    localDetail: "Cortina is a strong Queen Creek family neighborhood with clean streets, established homes, and ongoing demand for practical home services."
  },
  {
    slug: "meridian-junk-removal",
    name: "Meridian",
    category: "East Queen Creek Growth Area",
    angle: "new construction debris, moving boxes, furniture pickup, appliance removal, and garage cleanouts",
    localDetail: "Meridian sits in one of Queen Creek's fast-growing eastern corridors, where new homes and new residents create frequent hauling and cleanup needs."
  },
  {
    slug: "madera-junk-removal",
    name: "Madera",
    category: "East Queen Creek Growth Area",
    angle: "new-home junk, move-in debris, garage cleanup, cardboard hauling, and bulky-item removal",
    localDetail: "Madera is part of the expanding east Queen Creek growth zone, with newer homes and high search activity around moving, cleanup, and home services."
  },
  {
    slug: "queen-creek-town-center-junk-removal",
    name: "Queen Creek Town Center / Heritage District",
    category: "Commercial and Civic Hub",
    angle: "commercial cleanouts, retail debris, office furniture, restaurant-area hauling, and nearby residential junk removal",
    localDetail: "Queen Creek Town Center and the Heritage District are the local commerce and civic core, making this page valuable for broader near-me searches around downtown Queen Creek."
  },
  {
    slug: "gateway-quarter-junk-removal",
    name: "Gateway Quarter",
    category: "Commercial Corridor",
    angle: "retail cleanup, commercial junk removal, office cleanouts, packing debris, and nearby residential hauling",
    localDetail: "Gateway Quarter and the Power, Ellsworth, and Ocotillo corridors have strong commercial density, retail traffic, and mobile near-me search behavior."
  },
  {
    slug: "the-pecans-junk-removal",
    name: "The Pecans",
    category: "Luxury and Estate Neighborhood",
    angle: "estate cleanouts, large-lot cleanup, furniture removal, garage cleanouts, and white-glove hauling",
    localDetail: "The Pecans is one of Queen Creek's signature luxury enclaves, with custom homes, larger lots, and tree-lined estate living that often calls for careful hauling support."
  },
  {
    slug: "whitewing-bridle-ranch-junk-removal",
    name: "Whitewing / Bridle Ranch",
    category: "Luxury and Gated Neighborhood",
    angle: "premium home cleanouts, estate hauling, furniture removal, garage cleanup, and discreet junk removal",
    localDetail: "Whitewing and Bridle Ranch are higher-end Queen Creek communities where residents often look for professional, careful, and reliable home services."
  },
  {
    slug: "encanterra-ovation-at-meridian-junk-removal",
    name: "Encanterra / Ovation at Meridian",
    category: "Resort-Style and Active Adult Community",
    angle: "downsizing cleanouts, furniture removal, garage cleanup, appliance pickup, and move-related hauling",
    localDetail: "Encanterra and Ovation at Meridian have resort-style living, active adult residents, golf, social amenities, and tight-knit local search behavior."
  },
  {
    slug: "queen-creek-ranchettes-junk-removal",
    name: "Queen Creek Ranchettes",
    category: "Acreage and Custom Home Area",
    angle: "acreage cleanup, large-lot junk removal, yard debris, shed cleanouts, and property cleanouts",
    localDetail: "Queen Creek Ranchettes and nearby custom-home areas are ideal for larger hauling jobs, outdoor cleanup, estate work, and mixed-property debris."
  },
  {
    slug: "montelena-junk-removal",
    name: "Montelena",
    category: "Residential Neighborhood",
    angle: "garage cleanouts, furniture pickup, appliance removal, yard waste hauling, and household junk removal",
    localDetail: "Montelena is a residential Queen Creek community where homeowners often need straightforward help clearing garages, patios, side yards, and bulky items."
  },
  {
    slug: "the-villages-at-queen-creek-junk-removal",
    name: "The Villages at Queen Creek",
    category: "Golf-Course Community",
    angle: "furniture removal, garage cleanouts, move-out junk, appliance pickup, and residential cleanups",
    localDetail: "The Villages at Queen Creek is an established golf-course community with strong local service intent and steady household cleanup needs."
  },
  {
    slug: "sossaman-estates-junk-removal",
    name: "Sossaman Estates",
    category: "Residential Neighborhood",
    angle: "household junk removal, garage cleanouts, furniture pickup, yard debris, and move-related hauling",
    localDetail: "Sossaman Estates has an established residential footprint and is a natural fit for neighborhood-specific junk removal and home-service searches."
  },
  {
    slug: "san-tan-heights-junk-removal",
    name: "San Tan Heights",
    category: "Large Residential Community",
    angle: "garage cleanouts, yard debris removal, furniture hauling, move-out junk, and bulky item pickup",
    localDetail: "San Tan Heights brings large residential search volume from families and homeowners near the Queen Creek and San Tan Valley edge."
  },
  {
    slug: "terravella-junk-removal",
    name: "Terravella",
    category: "Newer Residential Neighborhood",
    angle: "new-home packing debris, garage cleanup, furniture removal, cardboard hauling, and household junk removal",
    localDetail: "Terravella is a newer Queen Creek neighborhood where move-ins, upgrades, and home projects create repeat demand for hauling support."
  },
  {
    slug: "church-farm-gateway-quarter-junk-removal",
    name: "Church Farm / Gateway Quarter",
    category: "Growth and Commercial Corridor",
    angle: "commercial cleanouts, new-home debris, furniture pickup, garage cleanup, and business junk removal",
    localDetail: "Church Farm and Gateway Quarter connect residential growth with active retail and commercial corridors, making this a useful local SEO target."
  },
  {
    slug: "downtown-queen-creek-junk-removal",
    name: "Downtown Queen Creek",
    category: "Commercial and Civic Hub",
    angle: "near-me junk removal, business cleanouts, household hauling, office furniture removal, and downtown-area trash hauling",
    localDetail: "Downtown Queen Creek is a high-intent local search area tied to civic activity, dining, shopping, and nearby residential neighborhoods."
  }
];

const popularServiceSlugs = [
  "junk-removal-east-valley-az",
  "garage-cleanout-east-valley-az",
  "furniture-removal-east-valley-az",
  "appliance-removal-east-valley-az",
  "property-cleanouts-east-valley-az",
  "yard-waste-removal-east-valley-az",
  "monsoon-storm-cleanup-east-valley-az",
  "emergency-tree-removal-east-valley-az",
  "storm-debris-removal-east-valley-az"
];

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function sentenceList(items) {
  if (items.length < 2) return items[0] || "";
  return `${items.slice(0, -1).join(", ")}, and ${items.at(-1)}`;
}

function write(route, html) {
  const target = route === "/" ? path.join(ROOT, "index.html") : path.join(ROOT, route, "index.html");
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html);
}

function canonical(route) {
  return `${SITE}${route === "/" ? "/" : `/${route.replace(/^\/|\/$/g, "")}/`}`;
}

function localBusinessSchema(description) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS,
    url: SITE,
    telephone: "+1-480-490-8033",
    email: EMAIL,
    image: `${SITE}/assets/southwest-logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "39111 N Zampino St",
      addressLocality: "Queen Creek",
      addressRegion: "AZ",
      postalCode: "85140",
      addressCountry: "US"
    },
    areaServed: locations.map(({ city }) => `${city} AZ`),
    description
  };
}

function serviceSchema(service, route) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in the East Valley AZ`,
    provider: { "@type": "LocalBusiness", name: BUSINESS, telephone: "+1-480-490-8033" },
    areaServed: locations.map(({ city }) => `${city} AZ`),
    serviceType: service.name,
    url: canonical(route),
    description: service.meta
  };
}

function queenCreekAreaSchema(area, route) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Junk Removal in ${area.name}, Queen Creek AZ`,
    provider: { "@type": "LocalBusiness", name: BUSINESS, telephone: "+1-480-490-8033" },
    areaServed: [`${area.name} Queen Creek AZ`, "Queen Creek AZ"],
    serviceType: "Junk Removal",
    url: canonical(route),
    description: `${BRAND} provides junk removal, cleanouts, furniture removal, appliance removal, and hauling in ${area.name}, Queen Creek AZ.`
  };
}

function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer
      }
    }))
  };
}

function metadata({ title, description, route, schema = [] }) {
  const schemas = [localBusinessSchema(description), ...schema];
  return `<title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${canonical(route)}">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(description)}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${canonical(route)}">
    <meta property="og:image" content="${SITE}/assets/southwest-logo.png">
    ${schemas.map((item) => `<script type="application/ld+json">${JSON.stringify(item)}</script>`).join("\n    ")}`;
}

function header() {
  return `<header class="site-header" id="top">
      <a class="brand brand-with-logo" href="/" aria-label="Southwest Hauling and Junk Removal home">
        <img src="/assets/southwest-logo.png" alt="Southwest Hauling & Junk Removal logo">
      </a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">
        <span>Menu</span>
        <i aria-hidden="true"></i>
      </button>
      <nav class="top-actions" id="primary-nav" aria-label="Primary">
        <a href="/">Home</a>
        <details class="nav-dropdown">
          <summary>Services</summary>
          <div class="dropdown-panel">
            ${services.map((service) => `<a href="/services/${service.slug}/">${esc(service.name)}</a>`).join("")}
          </div>
        </details>
        <details class="nav-dropdown">
          <summary>Service Areas</summary>
          <div class="dropdown-panel location-panel">
            ${locations.map((location) => `<a href="/locations/${location.slug}/">${esc(location.city)} AZ</a>`).join("")}
          </div>
        </details>
        <a href="/about/">About Us</a>
        <a href="/#reviews">Reviews</a>
        <a href="/contact/">Contact</a>
        <a class="phone-cta" href="${PHONE_HREF}">${PHONE}</a>
        <a class="nav-cta" href="${QUOTE}">Get Free Quote</a>
      </nav>
    </header>`;
}

function bottomCta() {
  return `<nav class="bottom-cta" aria-label="Sticky contact actions">
      <a href="${PHONE_HREF}">Call Now</a>
      <a href="${QUOTE}">Get Free Quote</a>
      <a href="${EMAIL_HREF}">Email Chris</a>
    </nav>`;
}

function footer() {
  return `<footer class="site-footer">
      <div>
        <strong>${BUSINESS}</strong>
        <p>Fast junk removal, trash hauling, cleanouts, furniture removal, appliance removal, and yard waste removal across the East Valley.</p>
        <p>${ADDRESS}</p>
      </div>
      <div class="footer-links footer-mega" aria-label="Footer service links">
        ${services.map((service) => `<a href="/services/${service.slug}/">${esc(service.name)}</a>`).join("")}
      </div>
      <div class="footer-links footer-mega" aria-label="Footer service area links">
        ${locations.map((location) => `<a href="/locations/${location.slug}/">${esc(location.city)} AZ</a>`).join("")}
      </div>
      <div class="footer-links" aria-label="Footer contact links">
        <a href="${PHONE_HREF}">${PHONE}</a>
        <a href="${EMAIL_HREF}">${EMAIL}</a>
        <a href="/contact/">Contact</a>
      </div>
    </footer>`;
}

function layout({ route, title, description, h1, intro, body, schema = [], heroImage = "/assets/hero-junk-removal.png", heroVideo = "/assets/southwest-hauling-hero-video-01-scroll.mp4" }) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${metadata({ title, description, route, schema })}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/styles.css">
    <script defer src="/script.js"></script>
  </head>
  <body>
    <a class="skip-link" href="#main-content">Skip to content</a>
    ${header()}
    <main id="main-content">
      <section class="hero compact-hero">
        <div class="hero-media" aria-hidden="true">
          ${heroVideo ? `<video class="hero-video" muted playsinline preload="auto" poster="${esc(heroImage)}">
            <source src="${esc(heroVideo)}" type="video/mp4">
          </video>` : `<img class="hero-image" src="${esc(heroImage)}" alt="" fetchpriority="high">`}
        </div>
        <div class="hero-spotlight" aria-hidden="true"></div>
        <div class="hero-content">
          <p class="service-area">East Valley of Phoenix, Arizona</p>
          <h1>${esc(h1)}</h1>
          <p class="tagline">You Call It, We&#39;ll Haul It</p>
          <p class="local-intro">${esc(intro)}</p>
          <div class="hero-actions">
            <a class="button primary" href="${QUOTE}">Get Free Quote</a>
            <a class="button secondary" href="${PHONE_HREF}">Call ${PHONE}</a>
          </div>
        </div>
      </section>
      ${body}
    </main>
    ${bottomCta()}
    ${footer()}
  </body>
</html>`;
}

function serviceCards(items, currentSlug = "") {
  return `<div class="service-grid">
        ${items.filter((item) => item.slug !== currentSlug).map((service, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><h3><a href="/services/${service.slug}/">${esc(service.name)}</a></h3><p>${esc(service.hero)}</p></article>`).join("")}
      </div>`;
}

function stormAltText(filename) {
  const labels = {
    [stormAssets.homeBanner]: "Fallen tree and storm damage outside an East Valley home",
    [stormAssets.pillarBanner]: "Storm-damaged tree on a roof before cleanup",
    [stormAssets.treeHero]: "Large fallen tree prepared for removal after storm damage",
    [stormAssets.stumpHero]: "Uprooted tree root ball ready for removal and haul-away",
    [stormAssets.damageBefore]: "Storm-damaged tree and debris before Southwest cleanup",
    [stormAssets.project]: "Monsoon tree damage at an East Valley property",
    [stormAssets.limbDetail]: "Large storm-damaged tree limb near a home",
    [stormAssets.branches]: "Fallen tree branches against a home after high winds",
    [stormAssets.roofline]: "Storm debris and tree damage along a roofline",
    [stormAssets.impact]: "Tree impact damage at a home exterior",
    [stormAssets.neighborhood]: "Storm cleanup context in an East Valley neighborhood",
    [stormAssets.crewOne]: "Southwest crew cleaning fallen tree debris",
    [stormAssets.crewTwo]: "Southwest crew removing storm tree debris",
    [stormAssets.afterOne]: "Property area after storm debris cleanup",
    [stormAssets.afterTwo]: "Clean outdoor area after monsoon property cleanup",
    [stormAssets.afterThree]: "Tree debris cleanup area after haul-away"
  };
  return labels[filename] || "Southwest storm cleanup project media";
}

function stormCaption(filename) {
  if (filename.includes("after")) return "After Southwest cleanup and haul-away";
  if (filename.includes("crew")) return "Removal, loading, and debris cleanup";
  if (filename.includes("root-ball") || filename.includes("stump")) return "Root-ball and stump haul-away";
  if (filename.includes("roof") || filename.includes("damage")) return "Storm damage and debris before cleanup";
  return "Actual East Valley storm cleanup project";
}

function stormUrl(filename) {
  return `${stormAssetBase}/${encodeURIComponent(filename).replace(/%2F/g, "/")}`;
}

function locationLinks(currentSlug = "") {
  return `<div class="area-links" aria-label="Service area links">
        ${locations.filter((location) => location.slug !== currentSlug).map((location) => `<a href="/locations/${location.slug}/">${esc(location.city)} AZ junk removal</a>`).join("")}
      </div>`;
}

function queenCreekAreaLinks(currentSlug = "") {
  return `<div class="area-links area-links-wide" aria-label="Queen Creek neighborhood junk removal links">
        ${queenCreekAreas.filter((area) => area.slug !== currentSlug).map((area) => `<a href="/locations/queen-creek-az/${area.slug}/">${esc(area.name)} junk removal</a>`).join("")}
      </div>`;
}

function finalCta(copy = "Send photos and details for a free East Valley junk removal quote.") {
  return `<section class="section cta-section" id="contact">
      <h2>Ready to clear the junk?</h2>
      <p>${esc(copy)}</p>
      <div class="hero-actions three-actions">
        <a class="button primary" href="${QUOTE}">Get Free Quote</a>
        <a class="button dark" href="${PHONE_HREF}">Call ${PHONE}</a>
      </div>
    </section>`;
}

function queenCreekAreaPage(area) {
  const route = `locations/queen-creek-az/${area.slug}`;
  const title = `${area.name} Junk Removal Queen Creek AZ | Southwest Hauling`;
  const description = `Junk removal in ${area.name}, Queen Creek AZ for garage cleanouts, furniture removal, appliances, yard debris, property cleanouts, and hauling.`;
  const faqs = [
    {
      question: `Do you provide junk removal in ${area.name}, Queen Creek AZ?`,
      answer: `Yes. ${BRAND} provides junk removal, cleanouts, furniture removal, appliance pickup, yard debris hauling, and trash hauling in ${area.name} and nearby Queen Creek neighborhoods.`
    },
    {
      question: `What can you haul away from homes in ${area.name}?`,
      answer: "We haul non-hazardous junk including furniture, boxes, garage clutter, appliances, yard debris, bagged trash, move-out piles, and many bulky household items."
    },
    {
      question: "How do I get a quote?",
      answer: `Call ${PHONE} or email photos and pickup details to ${EMAIL}. Photos help us quote the job and plan the right pickup window.`
    }
  ];
  const focusServices = services.filter((service) => [
    "junk-removal-east-valley-az",
    "garage-cleanout-east-valley-az",
    "furniture-removal-east-valley-az",
    "appliance-removal-east-valley-az",
    "property-cleanouts-east-valley-az",
    area.category.includes("Commercial") ? "commercial-cleanout-east-valley-az" : "yard-waste-removal-east-valley-az",
    area.category.includes("Luxury") || area.category.includes("Acreage") ? "estate-cleanout-east-valley-az" : "trash-hauling-east-valley-az"
  ].includes(service.slug)).slice(0, 7);
  const body = `<section class="section split">
      <div>
        <h2>${esc(area.name)} junk removal and cleanouts</h2>
        <p>${esc(area.localDetail)} Southwest Hauling helps ${esc(area.name)} customers with ${esc(area.angle)}.</p>
        <ul class="check-list">
          <li>Free quotes for ${esc(area.name)} junk removal</li>
          <li>Garage, yard, household, estate, and property cleanout help</li>
          <li>Bulky furniture, appliances, boxes, and non-hazardous trash hauled away</li>
          <li>Local Queen Creek service from ${BRAND}</li>
        </ul>
      </div>
      <div class="service-card">
        <h3>Need hauling in ${esc(area.name)}?</h3>
        <p>Send photos and pickup details, or call ${PHONE} for a free quote.</p>
        <a class="button primary" href="${QUOTE}">Get Free Quote</a>
        <a class="contact-link" href="${PHONE_HREF}">Call ${PHONE}</a>
      </div>
    </section>
    <section class="section services">
      <div class="section-heading"><h2>Helpful services for ${esc(area.name)}</h2><p>Common junk removal and hauling requests in this Queen Creek area.</p></div>
      ${serviceCards(focusServices)}
    </section>
    <section class="section why-choose">
      <div class="section-heading"><h2>Built for Queen Creek service calls</h2><p>We keep the process clear from first quote to final sweep-up.</p></div>
      <div class="why-grid">
        <article><span>Quote</span><h3>Photo-friendly pricing</h3><p>Send photos of the items, access, and neighborhood details so we can quote quickly.</p></article>
        <article><span>Load</span><h3>Heavy lifting handled</h3><p>We handle lifting, loading, hauling, and cleanup for non-hazardous junk.</p></article>
        <article><span>Local</span><h3>Queen Creek focused</h3><p>Routes are built around Queen Creek, San Tan Valley, Gilbert, Mesa, and nearby East Valley areas.</p></article>
        <article><span>Clean</span><h3>Useful spaces again</h3><p>Clear garages, patios, side yards, rentals, businesses, and estate spaces without extra dump runs.</p></article>
      </div>
    </section>
    <section class="section services">
      <div class="section-heading"><h2>${esc(area.name)} junk removal FAQs</h2><p>Quick answers before you request a pickup.</p></div>
      <div class="service-grid">
        ${faqs.map((faq, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><h3>${esc(faq.question)}</h3><p>${esc(faq.answer)}</p></article>`).join("")}
      </div>
    </section>
    <section class="section areas">
      <div class="section-heading"><h2>More Queen Creek neighborhood pages</h2><p>Browse nearby Queen Creek junk removal pages.</p></div>
      ${queenCreekAreaLinks(area.slug)}
    </section>
    <section class="section areas">
      <div class="section-heading"><h2>Queen Creek service hub</h2><p>Return to the main Queen Creek junk removal page.</p></div>
      <div class="area-links"><a href="/locations/queen-creek-az/">Queen Creek AZ junk removal hub</a><a href="/services/">All junk removal services</a><a href="/contact/">Contact Southwest Hauling</a></div>
    </section>
    ${finalCta(`Call ${PHONE} or request a free quote for junk removal in ${area.name}, Queen Creek AZ.`)}`;
  return layout({
    route,
    title,
    description,
    h1: `${area.name} Junk Removal in Queen Creek AZ`,
    intro: `Fast, local hauling for ${area.angle} in ${area.name}.`,
    body,
    schema: [queenCreekAreaSchema(area, route), faqSchema(faqs)]
  });
}

function servicePage(service) {
  const isStorm = stormServices.some((item) => item.slug === service.slug);
  const related = services
    .filter((item) => item.slug !== service.slug)
    .filter((item) => popularServiceSlugs.includes(item.slug) || stormServices.some((storm) => storm.slug === item.slug) || ["commercial-cleanout-east-valley-az", "trash-hauling-east-valley-az", "construction-debris-removal-east-valley-az"].includes(item.slug))
    .slice(0, 6);
  const route = `services/${service.slug}`;
  const pageFaqs = (service.faqs || [
    [`What does ${service.name.toLowerCase()} include?`, `Southwest Hauling handles lifting, loading, hauling, and cleanup for approved non-hazardous ${service.name.toLowerCase()} jobs.`],
    ["How do I get a quote?", `Call ${PHONE} or email photos and job details to ${EMAIL}. Photos help us quote the load and plan access.`]
  ]).map(([question, answer]) => ({ question, answer }));
  const stormMedia = isStorm ? `<section class="section storm-media">
      <div class="section-heading"><h2>Real East Valley storm cleanup project</h2><p>Actual Southwest project media showing damage, removal work, debris, and clean after conditions.</p></div>
      <div class="storm-feature">
        <img src="${stormUrl(service.heroImage)}" alt="${esc(service.name)} project scene in the East Valley" loading="lazy">
        ${service.video ? `<video controls preload="metadata" playsinline poster="${stormUrl(service.heroImage)}"><source src="${stormUrl(service.video)}"></video>` : ""}
      </div>
      <div class="storm-gallery">
        ${(service.media || []).map((image) => `<figure><img src="${stormUrl(image)}" alt="${esc(stormAltText(image))}" loading="lazy"><figcaption>${esc(stormCaption(image))}</figcaption></figure>`).join("")}
      </div>
    </section>
    <section class="section split before-after">
      <div>
        <h2>The damage. The cleanup.</h2>
        <p>Storm cleanup is not landscaping fluff. It is tree, stump, branch, fence, trash, debris, loading, cleanup, and haul-away work after Arizona weather leaves a property blocked or messy.</p>
      </div>
      <div class="service-card">
        <h3>Storm hit? Text us photos.</h3>
        <p>Send clear photos of the tree, debris pile, stump, fence material, access path, and pickup city so Southwest can quote the cleanup.</p>
        <a class="button primary" href="${QUOTE}">Text Photos for a Fast Quote</a>
        <a class="contact-link" href="${PHONE_HREF}">Call ${PHONE}</a>
      </div>
    </section>` : "";
  const body = `<section class="section split">
      <div>
        <h2>${esc(service.name)} service details</h2>
        <p>${esc(service.details)}</p>
        <ul class="check-list">
          <li>Free quote before the job begins</li>
          <li>Heavy lifting, loading, hauling, and cleanup</li>
          <li>Residential and commercial junk hauling</li>
          <li>Serving Mesa, Gilbert, Queen Creek, Chandler, San Tan Valley, and nearby East Valley communities</li>
        </ul>
      </div>
      <div class="service-card">
        <h3>Get a quote for ${esc(service.name.toLowerCase())}</h3>
        <p>Send photos, your pickup city, and access details for a fast quote from Southwest Hauling.</p>
        <a class="button primary" href="${QUOTE}">Get Free Quote</a>
        <a class="contact-link" href="/contact/">Contact page</a>
      </div>
    </section>
    <section class="section services">
      <div class="section-heading"><h2>What we remove</h2><p>Common ${esc(service.name.toLowerCase())} items we haul in the East Valley.</p></div>
      <div class="service-grid">
        ${service.removes.map((item, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><h3>${esc(item)}</h3><p>We load and haul ${esc(item.toLowerCase())} as part of a clear, quote-based junk removal pickup.</p></article>`).join("")}
      </div>
    </section>
    ${stormMedia}
    <section class="section why-choose">
      <div class="section-heading"><h2>Why choose Southwest Hauling?</h2><p>Local customers choose us for practical communication, fair pricing, and clean results.</p></div>
      <div class="why-grid">
        <article><span>Local</span><h3>East Valley based</h3><p>We know the neighborhoods, access issues, and service areas around Queen Creek, Mesa, Gilbert, and Chandler.</p></article>
        <article><span>Clear</span><h3>Photo-friendly quotes</h3><p>Photos help us quote quickly so there are fewer surprises when the trailer arrives.</p></article>
        <article><span>Ready</span><h3>Heavy lifting handled</h3><p>Our hauling service includes loading, hauling, and cleanup for non-hazardous junk.</p></article>
        <article><span>Useful</span><h3>Homes and businesses</h3><p>Book help for houses, rentals, offices, storage areas, yards, garages, and full cleanouts.</p></article>
      </div>
    </section>
    <section class="section services">
      <div class="section-heading"><h2>Related services</h2><p>Keep moving through the site with helpful junk removal service links.</p></div>
      ${serviceCards(related, service.slug)}
    </section>
    <section class="section areas" id="service-areas">
      <div class="section-heading"><h2>Service areas for ${esc(service.name.toLowerCase())}</h2><p>Southwest Hauling serves these East Valley communities.</p></div>
      ${locationLinks()}
    </section>
    <section class="section services">
      <div class="section-heading"><h2>${esc(service.name)} FAQs</h2><p>Quick answers before you request a quote.</p></div>
      <div class="service-grid">
        ${pageFaqs.map((faq, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><h3>${esc(faq.question)}</h3><p>${esc(faq.answer)}</p></article>`).join("")}
      </div>
    </section>
    ${finalCta(`Call ${PHONE} or request a free quote for ${service.name.toLowerCase()} in the East Valley.`)}`;
  return layout({
    route,
    title: service.title,
    description: service.meta,
    h1: service.h1,
    intro: service.hero,
    body,
    schema: [serviceSchema(service, route), faqSchema(pageFaqs)],
    heroImage: isStorm ? stormUrl(service.heroImage) : "/assets/hero-junk-removal.png",
    heroVideo: isStorm ? "" : "/assets/southwest-hauling-hero-video-01-scroll.mp4"
  });
}

function locationPage(location) {
  const route = `locations/${location.slug}`;
  const popular = services.filter((service) => popularServiceSlugs.includes(service.slug)).slice(0, 6);
  const nearby = location.nearby.map((slug) => locations.find((item) => item.slug === slug)).filter(Boolean);
  const queenCreekHub = location.slug === "queen-creek-az" ? `<section class="section areas">
      <div class="section-heading"><h2>Queen Creek neighborhood junk removal pages</h2><p>Southwest Hauling serves top Queen Creek neighborhoods, commercial corridors, luxury enclaves, acreage areas, and growth communities.</p></div>
      ${queenCreekAreaLinks()}
    </section>
    <section class="section services">
      <div class="section-heading"><h2>Queen Creek local SEO focus areas</h2><p>Helpful service positioning for the highest-intent Queen Creek submarkets.</p></div>
      <div class="service-grid">
        <article><span>01</span><h3>Dense family neighborhoods</h3><p>Ironwood Crossing, Harvest, Barney Farms, Hastings Farms, Cortina, Montelena, and Terravella are ideal for garage cleanouts, furniture removal, moving debris, and household junk pickup.</p></article>
        <article><span>02</span><h3>Commercial and near-me corridors</h3><p>Queen Creek Town Center, the Heritage District, Downtown Queen Creek, Gateway Quarter, and Church Farm help connect the site to high-intent local and mobile searches.</p></article>
        <article><span>03</span><h3>Luxury, acreage, and estate jobs</h3><p>The Pecans, Whitewing, Bridle Ranch, Queen Creek Ranchettes, Encanterra, and Ovation at Meridian support higher-value cleanouts, downsizing, large-lot cleanup, and careful hauling.</p></article>
      </div>
    </section>` : "";
  const title = `Junk Removal in ${location.city} AZ | Southwest Hauling`;
  const description = `Fast junk removal in ${location.city} AZ for homes, businesses, cleanouts, furniture, appliances, yard waste, and trash hauling.`;
  const stormAngles = {
    "Mesa": "wind-blown branches, palm debris, fence material, and blocked side yards after monsoon cells move through town",
    "Gilbert": "fallen limbs, damaged outdoor items, yard debris, and cleanup piles around homes, rentals, and small businesses",
    "Queen Creek": "large-lot tree debris, uprooted material, broken branches, fence debris, and post-storm trash piles",
    "Chandler": "tree debris, parking area debris, damaged outdoor items, and property cleanup after high winds",
    "San Tan Valley": "fallen branches, root-ball debris, yard waste, and storm trash from growing residential areas",
    "Apache Junction": "heavy yard debris, tree limbs, loose outdoor debris, and property cleanup after desert storms",
    "Tempe": "apartment, rental, office, and residential storm debris loads that need quick removal",
    "Scottsdale": "tree debris, patio debris, fence material, and storm cleanup loads for homes and commercial properties"
  };
  const body = `<section class="section split">
      <div>
        <h2>Local junk removal in ${esc(location.city)}</h2>
        <p>Southwest Hauling provides fast, affordable junk removal in ${esc(location.city)} AZ for ${esc(location.angle)}. Our crew handles heavy lifting, loading, hauling, and cleanup for homes, rentals, businesses, yards, garages, and property cleanouts.</p>
        <ul class="check-list">
          <li>Free quotes for ${esc(location.city)} junk removal</li>
          <li>Bulky item pickup and cleanout help</li>
          <li>Residential and commercial hauling</li>
          <li>Local East Valley service from ${BRAND}</li>
        </ul>
      </div>
      <div class="service-card">
        <h3>Need junk removal in ${esc(location.city)}?</h3>
        <p>Send photos and pickup details, or call ${PHONE} for help.</p>
        <a class="button primary" href="${QUOTE}">Get Free Quote</a>
        <a class="contact-link" href="/contact/">Contact page</a>
      </div>
    </section>
    <section class="section services">
      <div class="section-heading"><h2>Popular services in ${esc(location.city)} AZ</h2><p>Helpful hauling options for local homes and businesses.</p></div>
      ${serviceCards(popular)}
    </section>
    <section class="section why-choose">
      <div class="section-heading"><h2>Why local customers choose us</h2><p>Southwest Hauling keeps local junk removal simple, responsive, and clear.</p></div>
      <div class="why-grid">
        <article><span>Fast</span><h3>Quick scheduling</h3><p>We make it easy to request a quote and find a pickup window that works.</p></article>
        <article><span>Local</span><h3>East Valley routes</h3><p>Our service areas are built around communities like ${esc(location.city)}, Queen Creek, Mesa, Gilbert, and Chandler.</p></article>
        <article><span>Simple</span><h3>Clear communication</h3><p>Photos and details help us quote accurately before the job begins.</p></article>
        <article><span>Clean</span><h3>Loaded and hauled</h3><p>We handle the lifting, loading, hauling, and cleanup for non-hazardous junk.</p></article>
      </div>
    </section>
    <section class="section split storm-location">
      <div>
        <p class="reviews-kicker">Arizona Monsoon & Storm Cleanup</p>
        <h2>Storm cleanup in ${esc(location.city)} AZ</h2>
        <p>When storms leave ${esc(stormAngles[location.city] || "tree debris, branches, yard waste, damaged outdoor items, and cleanup piles")}, Southwest handles the loading, hauling, and cleanup. Send photos of the mess, access, and pickup area for a fast quote.</p>
        <ul class="check-list">
          <li>Fallen tree and large branch removal in ${esc(location.city)}</li>
          <li>Storm debris hauling, yard cleanup, and bulk damaged-item removal</li>
          <li>Stump, root-ball, fence debris, and non-hazardous trash haul-away</li>
        </ul>
      </div>
      <div class="service-card">
        <h3>Need storm debris gone?</h3>
        <p>Start with the storm cleanup hub or call Southwest for quote-based hauling.</p>
        <a class="button primary" href="/services/monsoon-storm-cleanup-east-valley-az/">Storm Cleanup Services</a>
        <a class="contact-link" href="${PHONE_HREF}">Call ${PHONE}</a>
      </div>
    </section>
    <section class="section areas">
      <div class="section-heading"><h2>Nearby service areas</h2><p>Southwest Hauling also serves nearby East Valley cities.</p></div>
      <div class="area-links">${nearby.map((item) => `<a href="/locations/${item.slug}/">${esc(item.city)} AZ junk removal</a>`).join("")}<a href="/contact/">Contact Southwest Hauling</a></div>
    </section>
    <section class="section services">
      <div class="section-heading"><h2>Related service links</h2><p>Explore common junk removal services for ${esc(location.city)} customers.</p></div>
      ${serviceCards(services.slice(0, 8))}
    </section>
    ${queenCreekHub}
    ${finalCta(`Call ${PHONE} or request a free quote for junk removal in ${location.city} AZ.`)}`;
  return layout({
    route,
    title,
    description,
    h1: `Junk Removal in ${location.city} AZ`,
    intro: `Fast, affordable junk removal and hauling services in ${location.city} for ${location.angle}.`,
    body
  });
}

function servicesHub() {
  const route = "services";
  const title = "Junk Removal Services East Valley AZ | Southwest Hauling";
  const description = "Explore Southwest Hauling junk removal services across the East Valley AZ, including garage cleanouts, furniture removal, appliances, yard waste, and trash hauling.";
  const body = `<section class="section services" id="services">
      <div class="section-heading"><h2>Core junk removal services</h2><p>Choose the service page that matches your cleanup.</p></div>
      ${serviceCards(services.filter((service) => !stormServices.some((storm) => storm.slug === service.slug)))}
    </section>
    <section class="section services storm-services-hub">
      <div class="section-heading"><h2>Storm & Monsoon Cleanup</h2><p>Complete cleanup, removal, loading, and haul-away after Arizona storms leave trees, branches, stumps, fencing, trash, and debris behind.</p></div>
      ${serviceCards(stormServices)}
    </section>
    <section class="section areas" id="service-areas">
      <div class="section-heading"><h2>East Valley service areas</h2><p>Browse local service area pages.</p></div>
      ${locationLinks()}
    </section>
    ${finalCta()}`;
  return layout({ route, title, description, h1: "Junk Removal Services in the East Valley AZ", intro: "Fast hauling, cleanouts, furniture removal, appliance removal, yard waste removal, and trash hauling from Southwest Hauling.", body });
}

function aboutPage() {
  const route = "about";
  const title = "About Southwest Hauling & Junk Removal LLC | East Valley AZ";
  const description = "Learn about Southwest Hauling & Junk Removal LLC, a Queen Creek junk removal company serving Mesa, Gilbert, Chandler, San Tan Valley, and the East Valley.";
  const body = `<section class="section split">
      <div>
        <h2>Locally owned. East Valley focused.</h2>
        <p>${BUSINESS} helps homeowners and businesses clear clutter with fast response, honest communication, and practical hauling service.</p>
        <ul class="check-list">
          <li>Based in Queen Creek, Arizona</li>
          <li>Serving Mesa, Gilbert, Chandler, San Tan Valley, Apache Junction, Tempe, Scottsdale, and nearby communities</li>
          <li>Residential and commercial junk removal</li>
          <li>Free quote requests by phone or email</li>
        </ul>
      </div>
      <div class="service-card"><h3>Business info</h3><p>${ADDRESS}</p><p>${PHONE}</p><p>${EMAIL}</p><a class="button primary" href="${QUOTE}">Get Free Quote</a><a class="contact-link" href="/contact/">Contact Southwest Hauling</a></div>
    </section>
    <section class="section services"><div class="section-heading"><h2>Helpful service links</h2><p>Explore the most requested East Valley hauling services.</p></div>${serviceCards(services.slice(0, 6))}</section>
    ${finalCta()}`;
  return layout({ route, title, description, h1: "About Southwest Hauling & Junk Removal", intro: "A local East Valley junk removal company built around clear quotes, hard work, and clean results.", body });
}

function contactPage() {
  const route = "contact";
  const title = "Contact Southwest Hauling | Free Junk Removal Quote";
  const description = "Contact Southwest Hauling & Junk Removal LLC for a free junk removal quote in the East Valley AZ. Call 480-490-8033 or email Chris@southwestjunkhauling.com.";
  const body = `<section class="section estimate" id="estimate">
      <div class="section-heading"><h2>Contact and free quote</h2><p>Call, email, or send a quote request for junk removal in Mesa, Gilbert, Queen Creek, Chandler, San Tan Valley, and the East Valley.</p></div>
      <form id="estimate-form" action="${EMAIL_HREF}" method="post" enctype="text/plain">
        <input type="hidden" name="recipient" value="${EMAIL}">
        <label>Name<input name="name" autocomplete="name" required></label>
        <label>Phone<input name="phone" autocomplete="tel" required></label>
        <label>Email<input type="email" name="email" autocomplete="email" required></label>
        <label>City<input name="city" autocomplete="address-level2" required></label>
        <label>What needs to be removed?<select name="service" required><option value="">Choose a service</option>${services.map((service) => `<option>${esc(service.name)}</option>`).join("")}</select></label>
        <label>Preferred pickup date<input type="date" name="pickup_date"></label>
        <label class="full">Message<textarea name="message" rows="5" placeholder="Tell us what needs to go, where it is, and any access details."></textarea></label>
        <button class="button primary full" type="submit">Request My Free Quote</button>
        <p class="form-note" id="form-note">Submissions are addressed to <a href="${EMAIL_HREF}">${EMAIL}</a>. You can also call <a href="${PHONE_HREF}">${PHONE}</a>.</p>
      </form>
    </section>
    <section class="section services"><div class="section-heading"><h2>Popular quote requests</h2><p>Common services customers ask about.</p></div>${serviceCards(services.slice(0, 6))}</section>`;
  return layout({ route, title, description, h1: "Contact Southwest Hauling for a Free Quote", intro: "Need local junk removal near you? Send details for a fast quote from Southwest Hauling.", body });
}

function aliasPage(fromRoute, toRoute, label) {
  const title = `${label} | Southwest Hauling`;
  const description = `${label} from Southwest Hauling. Visit the current page for updated East Valley junk removal information and free quote links.`;
  const body = `<section class="section split">
      <div>
        <h2>Updated page location</h2>
        <p>This page has moved to the current Southwest Hauling SEO page for ${esc(label.toLowerCase())}. Use the link below for the latest service details, service area links, and quote options.</p>
      </div>
      <div class="service-card">
        <h3>Continue to the current page</h3>
        <p>Keep browsing Southwest Hauling's current local SEO pages.</p>
        <a class="button primary" href="/${toRoute}/">Open Current Page</a>
        <a class="contact-link" href="/contact/">Contact Southwest Hauling</a>
      </div>
    </section>`;
  let html = layout({
    route: fromRoute,
    title,
    description,
    h1: label,
    intro: "This route is preserved for visitors and search engines while the site uses the current canonical page.",
    body
  });
  html = html.replace(`href="${canonical(fromRoute)}"`, `href="${canonical(toRoute)}"`);
  html = html.replace(`<meta property="og:url" content="${canonical(fromRoute)}">`, `<meta property="og:url" content="${canonical(toRoute)}">`);
  return html;
}

function updateHome() {
  const file = path.join(ROOT, "index.html");
  let html = fs.readFileSync(file, "utf8");
  html = html.replace(/<title>[\s\S]*?(?=\s*<link rel="preconnect")/, metadata({
    route: "/",
    title: "East Valley Junk Removal & Hauling | Southwest Hauling",
    description: "Southwest Hauling provides fast junk removal and hauling for homes and businesses across Mesa, Gilbert, Queen Creek, Chandler, San Tan Valley, and the East Valley."
  }) + "\n    ");
  html = html
    .replace(/<link rel="stylesheet" href="\/?styles\.css">/g, '<link rel="stylesheet" href="styles.css">')
    .replace(/<script defer src="\/?script\.js"><\/script>/g, '<script defer src="script.js"></script>');
  if (!html.includes('rel="stylesheet" href="styles.css"')) {
    html = html.replace("</head>", `    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <script defer src="script.js"></script>
  </head>`);
  }
  html = html.replace(/<header class="site-header" id="top">[\s\S]*?<\/header>/, header());
  html = html.replace(/<footer class="site-footer">[\s\S]*?<\/footer>/, footer());
  html = html.replace('<section class="hero compact-hero">', '<section class="hero">');
  html = html
    .replace(/assets\/southwest-hauling-hero-video-01-scroll\.mp4/g, "assets/southwest-hauling-hero-video-01-scrub.mp4")
    .replace(/assets\/southwest-hauling-exploding-garage-002-scroll\.mp4/g, "assets/southwest-hauling-exploding-garage-002-scrub.mp4");
  const stormStart = html.indexOf('<section class="scroll-sequence storm-scroll-sequence"');
  const servicesStart = html.indexOf('<section class="section services" id="services">');
  if (stormStart !== -1 && servicesStart !== -1 && stormStart < servicesStart) {
    html = `${html.slice(0, stormStart)}${html.slice(servicesStart)}`;
  }
  const serviceGrid = `<div class="service-grid">
        ${services.map((service, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><h3><a href="/services/${service.slug}/">${esc(service.name)}</a></h3><p>${esc(service.hero)}</p></article>`).join("\n        ")}
      </div>`;
  const stormSequence = `<section class="scroll-sequence storm-scroll-sequence" id="storm-scroll-sequence" aria-label="Arizona monsoon and storm cleanup scroll sequence">
        <div class="sequence-sticky">
          <div class="sequence-stage">
            <video class="sequence-video" muted playsinline preload="metadata" poster="assets/storm/${stormAssets.pillarBanner}">
              <source src="assets/storm/${stormAssets.homeScrubVideo}" type="video/mp4">
            </video>
            <div class="sequence-mask" aria-hidden="true"></div>
            <div class="sequence-copy">
              <article class="sequence-panel is-active" data-step="0">
                <span>Arizona Monsoon &amp; Storm Cleanup</span>
                <h2>Storm cleanup for Queen Creek and the East Valley.</h2>
                <p>Southwest Hauling provides complete monsoon and storm cleanup throughout Queen Creek and the East Valley, including fallen tree removal, large branch and storm debris removal, stump and root-ball removal, property cleanup, loading and complete haul-away.</p>
              </article>
              <article class="sequence-panel" data-step="1">
                <span>After the weather moves through</span>
                <h2>When the storm<br>leaves the mess.</h2>
                <p>Fallen trees, broken limbs, fencing debris, outdoor junk, and wind-blown trash can take over a property fast.</p>
              </article>
              <article class="sequence-panel" data-step="2">
                <span>One call. Complete cleanup.</span>
                <h2>We make it<br>disappear.</h2>
                <p>Southwest handles the removal, loading, cleanup, and haul-away so the driveway, yard, or property can function again.</p>
              </article>
              <article class="sequence-panel" data-step="3">
                <span>Tree. Stump. Branches. Debris.</span>
                <h2>Fallen trees.<br>Broken limbs.<br>Storm debris.</h2>
                <p>Stumps. Root balls. Fence debris. Yard cleanup. Complete haul-away across the East Valley.</p>
              </article>
              <article class="sequence-panel" data-step="4">
                <span>Storm hit?</span>
                <h2>Text photos<br>for a fast quote.</h2>
                <p><a class="button primary" href="${QUOTE}">Text Photos for a Fast Quote</a> <a class="button secondary" href="/services/monsoon-storm-cleanup-east-valley-az/">Explore Storm Cleanup Services</a></p>
              </article>
            </div>
            <div class="sequence-frame" aria-hidden="true"><span>Storm cleanup</span><i></i><strong class="sequence-progress">00%</strong></div>
          </div>
        </div>
      </section>`;
  html = html.replace(/<section class="section split homepage-storm">[\s\S]*?<\/section>\s*<section class="section seo-content"/, `<section class="section seo-content"`);
  html = html.replace(/<div class="service-grid">\s*<article><span>01<\/span><h3><a href="\/services\/junk-removal-east-valley-az\/">[\s\S]*?<\/div>\s*<\/section>\s*<section class="section why-choose"/, `${serviceGrid}\n    </section>\n    <section class="section why-choose"`);
  html = html.replace(/<\/section>\s*<section class="section services" id="services">/, `</section>
      ${stormSequence}
    <section class="section services" id="services">`);
  html = html.replace(/<div class="area-links" aria-label="Service area links">[\s\S]*?<\/div>\s*<\/section>\s*<section class="section seo-content"/, `<div class="area-links" aria-label="Service area links">
        ${locations.map((location) => `<a href="/locations/${location.slug}/">${esc(location.city)} AZ junk removal</a>`).join("")}<a href="/contact/">Contact Southwest Hauling</a>
      </div>
    </section>
    <section class="section seo-content"`);
  const reviewsSection = `<section class="section google-reviews" id="reviews" data-google-reviews>
      <div class="reviews-header">
        <p class="reviews-kicker">Real Customer Reviews</p>
        <h2>What Arizona Customers<br><span>Are Saying.</span></h2>
        <div class="reviews-rating-pill" aria-live="polite">
          <div class="reviews-score">
            <span class="google-g" aria-label="Google">G</span>
            <strong data-google-rating>5.0</strong>
          </div>
          <div class="reviews-divider" aria-hidden="true"></div>
          <div class="reviews-rating-copy">
            <div class="reviews-stars" aria-label="5 star rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <span data-google-total>68 Google reviews</span>
          </div>
        </div>
      </div>
      <div class="reviews-marquee" role="region" aria-label="Southwest Hauling Google reviews">
        <div class="reviews-track" data-google-review-track></div>
      </div>
      <div class="reviews-footer">
        <a href="https://maps.app.goo.gl/HeMSgZbxu7cZTYhG9" target="_blank" rel="noopener noreferrer">Read every live review on Google &nearr;</a>
      </div>
    </section>`;
  html = html.replace(/<section class="section (?:reviews|google-reviews)" id="reviews"[\s\S]*?<\/section>\s*<section class="section cta-section"/, `${reviewsSection}
      <section class="section cta-section"`);
  fs.writeFileSync(file, html);
}

function sitemap() {
  const routes = [
    { route: "/", priority: "1.0" },
    { route: "services", priority: "0.9" },
    { route: "about", priority: "0.8" },
    { route: "contact", priority: "0.8" },
    ...services.map((service) => ({ route: `services/${service.slug}` })),
    ...locations.map((location) => ({ route: `locations/${location.slug}` })),
    ...queenCreekAreas.map((area) => ({ route: `locations/queen-creek-az/${area.slug}` }))
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(({ route, priority }) => `<url><loc>${canonical(route)}</loc>${priority ? `<priority>${priority}</priority>` : ""}</url>`).join("\n")}
</urlset>
`;
}

updateHome();
write("services", servicesHub());
write("about", aboutPage());
write("contact", contactPage());
services.forEach((service) => write(`services/${service.slug}`, servicePage(service)));
locations.forEach((location) => write(`locations/${location.slug}`, locationPage(location)));
queenCreekAreas.forEach((area) => write(`locations/queen-creek-az/${area.slug}`, queenCreekAreaPage(area)));

[
  ["services/property-cleanout-east-valley-az", "services/property-cleanouts-east-valley-az", "Property Cleanouts East Valley AZ"],
  ["services/commercial-cleanouts-east-valley-az", "services/commercial-cleanout-east-valley-az", "Commercial Cleanout East Valley AZ"],
  ["services/moving-labor-assistance-east-valley-az", "services/moving-help-east-valley-az", "Moving Help East Valley AZ"],
  ["services/yard-debris-removal-east-valley-az", "services/yard-waste-removal-east-valley-az", "Yard Waste Removal East Valley AZ"],
  ["services/storage-unit-cleanout-east-valley-az", "services/property-cleanouts-east-valley-az", "Storage Unit Cleanout East Valley AZ"],
  ["services/mattress-removal-east-valley-az", "services/furniture-removal-east-valley-az", "Mattress and Furniture Removal East Valley AZ"],
  ["services/same-day-junk-removal-east-valley-az", "services/junk-removal-east-valley-az", "Same Day Junk Removal East Valley AZ"],
  ["locations/mesa-junk-removal", "locations/mesa-az", "Junk Removal in Mesa AZ"],
  ["locations/gilbert-junk-removal", "locations/gilbert-az", "Junk Removal in Gilbert AZ"],
  ["locations/queen-creek-junk-removal", "locations/queen-creek-az", "Junk Removal in Queen Creek AZ"],
  ["locations/chandler-junk-removal", "locations/chandler-az", "Junk Removal in Chandler AZ"],
  ["locations/san-tan-valley-junk-removal", "locations/san-tan-valley-az", "Junk Removal in San Tan Valley AZ"],
  ["locations/apache-junction-junk-removal", "locations/apache-junction-az", "Junk Removal in Apache Junction AZ"],
  ["locations/tempe-junk-removal", "locations/tempe-az", "Junk Removal in Tempe AZ"],
  ["locations/scottsdale-junk-removal", "locations/scottsdale-az", "Junk Removal in Scottsdale AZ"],
  ["locations/phoenix-junk-removal", "locations/mesa-az", "East Valley Junk Removal"]
].forEach(([fromRoute, toRoute, label]) => write(fromRoute, aliasPage(fromRoute, toRoute, label)));

fs.writeFileSync(path.join(ROOT, "sitemap.xml"), sitemap());

console.log("Built SEO service and location pages.");
