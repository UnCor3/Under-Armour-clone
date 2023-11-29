import { AiOutlineInstagram } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { PiYoutubeLogoLight } from "react-icons/pi";

export const VARIANT_1_DATA = [
  {
    firstText: "Stand Up. Stand Out.",
    secondText: "PROTECT THIS HOUSE.®",
    lastText: "Be remembered for your game and gear.",
    promoText: "Shop Back To School",
    img: {
      mobile: "imgs/index/FW23_AMR_BTS_Launch_Site_1_1.webp",
      desktop: "imgs/index/FW23_AMR_BTS_Launch_Site_2_1.webp",
    },
    imgAlt: "ua",
  },
  {
    firstText: "New Project Rock Collection",
    secondText: ["STEP IN", "—THE PROJECT IS CALLING "],
    lastText:
      "We see you, raising the bar. This collection is a call to those who throw down and put in the work.",
    promoText: "Shop Now",
    img: {
      mobile: "imgs/index/FW23_TRN_ProjectRock_Q3_Site_1_1_M.webp",
      desktop: "imgs/index/FW23_TRN_ProjectRock_Q3_Site_2_1_M.webp",
    },
    imgAlt: "ua",
  },
];

export const VARIANT_2_DATA = [
  {
    firstText: "NEW MESH PACK",
    bottomText:
      "The only shoe with 2 modes—heel up to train, heel down to recover—now has built-in air conditioning.",
    promoText: "Shop UA SlipSpeed™ Mesh",
    img: {
      mobile: "imgs/index/FW23_CC_SlipSpeed_Mesh_Site_1_1.webp",
      desktop: "imgs/index/FW23_CC_SlipSpeed_Mesh_Site_2_1.webp",
    },
    imgAlt: "ua",
  },
];

export const VARIANT_4_DATA = [
  [
    {
      img: "imgs/10003/blizzard/low-qt-1.webp",
      lastImg : "imgs/10003/blizzard/index.webp",
      imgAlt: "ua",
      colorCount: "3 Colors",
      itemName: "Unisex UA SlipSpeed™ Mesh Training Shoes",
      price: "$150.00",
      href : "p/shoes/training/10003?c=1"
    },
    {
      img: "imgs/10003/white/low-qt-1.webp",
      lastImg : "imgs/10003/white/index.webp",
      imgAlt: "ua",
      colorCount: "3 Colors",
      itemName: "Unisex UA SlipSpeed™ Mesh Training Shoes",
      price: "$150.00",
      href : "p/shoes/training/10003?c=0"
    },
    {
      img: "imgs/index/3027726-103_DEFAULT.webp",
      lastImg : "imgs/index/3027726-103_A.webp",
      imgAlt: "ua",
      colorCount: "3 Colors",
      itemName: "Unisex UA SlipSpeed™ Mesh Training Shoes",
      price: "$150.00",
      href : "p/shoes/training/10003",
    },
    {
      img: "imgs/index/3027726-300_DEFAULT.webp",
      lastImg : "imgs/index/3027726-300_A.webp",
      imgAlt: "ua",
      colorCount: "3 Colors",
      itemName: "Unisex UA SlipSpeed™ Mesh Training Shoes",
      price: "$150.00",
      href : "p/shoes/training/10003",
    },
  ],
];

export const VARIANT_6_DATA = [
  [
    {
      img: {
        mobile:
          "imgs/index/FW23_AMR_BTS_Site_1_1_2.webp",
        desktop:
          "imgs/index/FW23_AMR_BTS_Site_8_5.webp",
      },
      imgAlt: "ua",
      promoText: "Shop All Back To School",
    },
    {
      img: {
        mobile:
          "imgs/index/FW23_AMR_BTS_Hustle_Site_1_1.webp",
        desktop:
          "imgs/index/FW23_ARM_BTS_BackpackPromo_Site_8_5.webp",
      },
      imgAlt: "ua",
      promoText: "Shop 25% Off Backpacks",
    },
  ],
  [
    {
      img: {
        mobile:
          "imgs/index/FW23_GLFB_JTC_HGArmourHighBra_Beta_Site_1_1.webp",
        desktop:
          "imgs/index/FW23_GLFB_JTC_HGArmourHighBra_Beta_Site_8_5.webp",
      },
      imgAlt: "ua",
      promoText: "Shop HeatGear® Armour High Bra ",
    },
    {
      img: {
        mobile:
          "imgs/index/FW23_WMN_ColorStory_Beta_Site_1_1.webp",
        desktop:
          "imgs/index/FW23_WMN_ColorStory_Beta_Site_8_5.webp",
      },
      imgAlt: "ua",
      promoText: "Shop The Color Spotlight : Beta Red",
    },
  ],
];

export const filterWays = [
  {
    name: "Sort",
    ways: [
      "Now Trending",
      "Best Sellers",
      "Price (Low - High)",
      "Price (High - Low)",
      "Top Rated",
      "Newest",
    ],
    type: "radio",
  },
  {
    name: "Product Category",
    ways: ["Clothing", "Shoes", "Accessories"],
    type: "checkbox",
  },
  {
    name: "Product Type",
    ways: [
      "Polos",
      "Pants",
      "Hodies&Sweatshirts",
      "Vests",
      "Jackets",
      "Short Sleeves",
      "Graphics",
      "Sleeveless",
      "Long Sleeves",
      "Leggings",
    ],
    type: "checkbox",
  },
  {
    name: "Sports",
    ways: [
      "Baseball",
      "Basketball",
      "Fanwear",
      "Fishing",
      "Football",
      "Soccer",
      "Golf",
      "Hockey",
      "Hunting",
      "Lacrosse",
      "Sportstyle",
      "Military Tactical",
      "Outdoor",
      "Running",
      "Training",
    ],
    type: "checkbox",
  },
  {
    name: "Color",
    ways: [
      "black",
      "blue",
      "brown",
      "grey",
      "green",
      "orange",
      "red",
      "white",
      "orange",
    ],
    type: "color",
  },
  {
    name: "Size",
    ways: [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "3XL",
      "4XL",
      "5XL",
      "One Size",
      "3.5",
      "4",
      "4.5",
      "5",
      "5.5",
      "6",
      "6.5",
      "7",
      "7.5",
      "8",
    ],
    type: "size",
  },
  {
    name: "Size Range",
    ways: ["Tall"],
    type: "checkbox",
  },
  {
    name: "Fit",
    ways: [
      "Stretch Fit",
      "Adjustable",
      "Wide",
      "Compression",
      "One Size Fits All",
      "Fitted",
      "Loose",
    ],
    type: "checkbox",
  },
  {
    name: "Price",
    ways: [
      "Under $25",
      "$25 - $50",
      "$50 - $75",
      "$75 - $100",
      "$100 - $200",
      "$200 +",
    ],
    type: "text",
  },
];

export const helpMeOptions = [
  "Live Chat Now",
  "Help Center",
  "Size Guide",
  "Shipping & Delivery",
  "Returns & Exchanges",
  "Store Locator",
  "Order Tracking",
  "Gift Cards",
  "Sitemap",
  "Student Discount",
];

export const aboutUAOptions = [
  "Affiliates",
  "About Us/Our Story",
  "UA Rewards",
  "Careers",
  "UA Community",
  "UA Access To Sports",
  "Investor Relations",
  "Product Recalls",
  "Corporate Sales",
  "UA Newsroom",
  "Do Not Sell or Share My Personal Information",
  "Innovation Idea House",
];

export const uaSocialOptions = [
  { key: "Instagram", logo: AiOutlineInstagram },
  { key: "Facebook", logo: CiFacebook },
  { key: "Twitter", logo: TiSocialTwitterCircular },
  { key: "Youtube", logo: PiYoutubeLogoLight },
];

export const MENU_DATA = {
  new: {
    titles: [
      {
        name: "New Arrivals",
        subs: ["Men", "Women", "Kids", "Shoes"],
      },
      {
        name: "Featured",
        subs: [
          "Backpacks",
          "Back to School",
          "First Day Fits",
          "UA Fleece Shop",
          "Sportstyle",
          "College Fan Gear",
        ],
      },
      {
        name: "Gift Guide",
        subs: [
          "Gift Guide",
          "Gifts for Men",
          "Gifts for Women",
          "Gifts for Boys",
          "Gifts for Girls",
          "Gift Card",
        ],
      },
      {
        name: "Unisex",
        subs: ["Shoes", "Clothing", "Accessories"],
      },
    ],
    img: {
      src: "imgs/index/SS23_CC_LLTY_LaunchAssets_Sweeps_Site_1_1_2.webp",
    },
    promo: {
      text: "JOIN FOR A CHANCE TO WIN FREE GEAR FOR A YEAR",
      action: "Learn More",
    },
  },
  mens: {
    titles: [
      {
        name: "Featured",
        subs: [
          "New Arrivals",
          "Fall Picks",
          "Performance T-Shirt Shop",
          "Camo Shop",
          "Graphic T-shirt Shop",
          "Back to School",
          "Compression Shop",
          "Jordan Spieth Collection",
          "Big & Tall",
          "Sportstyle",
          "Best Sellers",
          "College Fan Gear",
          "Matching Sets",
          "UA Fleece Shop",
        ],
      },
      {
        name: "Shop By Category",
        subs: [
          "Baselayer",
          "Jackets & Vests",
          "Pants & Leggings",
          "Shirts & Tops",
          "Shoes",
          "Shorts",
          "Swimwear",
          "Underwear",
        ],
      },
      {
        name: "Shop by Sport",
        subs: [
          "Basketball",
          "Fishing",
          "Golf",
          "Hiking & Outdoor",
          "Hunting",
          "Lacrosse",
          "Military & Tactical",
          "Pickleball & Tennis",
          "Running",
          "Softball",
          "Soccer",
          "Training",
          "Volleyball",
          "Yoga & Studio",
        ],
      },
      {
        name: "Shop By Collection",
        subs: [
          "UA Unstoppable",
          "Curry Brand",
          "UA Meridian",
          "UA HeatGear®: Keeps You Cool",
          "UA SlipSpeed™",
          "UA Iso-Chill: Feels Ice Cold",
          "UA RUSH™ Performance Apparel",
          "UA HOVR™ Shoes",
          "UA ColdGear®: Keeps You Warm",
          "UA Freedom",
          "Project Rock",
        ],
      },
      {
        name: "Accessories",
        subs: [
          "Backpacks & Bags",
          "Belts",
          "Equipment",
          "Face Masks, Hoods & Gaiters",
          "Hats & Visors",
          "Headbands",
          "Lunch Boxes",
          "Socks",
          "Sport Gloves",
          "Sunglasses",
          "Water Bottles & Coolers",
          "Warm Weather Gear",
        ],
      },
    ],
    img: {
      src: "imgs/index/FW23_AMR_FallPicks_Site_Sec_M_1_1.webp",
    },
    promo: {
      text: "Fall Picks",
      action: "Shop Now",
    },
  },
  womens: {
    titles: [
      {
        name: "Featured",
        subs: [
          "New Arrivals",
          "Color Shop: Beta Red",
          "Fall Picks",
          "Back to School",
          "Crop Tops",
          "UA Plus Size",
          "Sportstyle",
          "Best Sellers",
          "Matching Sets",
          "Project Rock",
          "College Fan Gear",
          "UA Fleece Shop",
        ],
      },
      {
        name: "Shop by Category",
        subs: [
          "Baselayer",
          "Jackets & Vests",
          "Pants & Leggings",
          "Shirts & Tops",
          "Shoes",
          "Shorts",
          "Sports Bras",
          "Dresses & Skorts",
          "Underwear",
        ],
      },
      {
        name: "Shop by Sport",
        subs: [
          "Basketball",
          "Fishing",
          "Golf",
          "Hiking & Outdoor",
          "Hunting",
          "Lacrosse",
          "Military & Tactical",
          "Pickleball & Tennis",
          "Running",
          "Softball",
          "Soccer",
          "Training",
          "Volleyball",
          "Yoga & Studio",
        ],
      },
      {
        name: "Shop by Collection",
        subs: [
          "UA Meridian",
          "UA HeatGear®: Keeps You Cool",
          "UA Unstoppable",
          "UA Iso-Chill: Feels Ice Cold",
          "UA SlipSpeed™",
          "UA RUSH™ Performance Apparel",
          "UA HOVR™ Shoes",
          "Curry Brand",
          "UA ColdGear®: Keeps You Warm",
          "UA Freedom",
        ],
      },
      {
        name: "Accessories",
        subs: [
          "Backpacks & Bags",
          "Equipment",
          "Face Masks, Hoods & Gaiters",
          "Hats & Visors",
          "Headbands & Scrunchies",
          "Lunch Boxes",
          "Socks",
          "Sport Gloves",
          "Sunglasses",
          "Water Bottles & Coolers",
          "Warm Weather Gear",
        ],
      },
    ],
    img: {
      src: "imgs/index/FW23_WMN_ColorStory_Beta_Site_1_1.webp",
    },
    promo: {
      text: "Color Spotlight: Beta Red",
      action: "Shop Now",
    },
  },
  kids: {
    titles: [
      {
        name: "Featured",
        subs: [
          "New Arrivals",
          "Fall Picks",
          "Back to School",
          "Backpacks & Lunch Boxes",
          "First Day Fits",
          "School Uniform Shop",
          "Graphic T-shirt Shop",
          "Tween Shop",
          "Matching Sets",
          "Best Sellers",
          "Project Rock",
          "College Fan Gear",
        ],
      },
      {
        name: "Boys",
        subs: [
          "Accessories",
          "Baselayer",
          "One Piece & Sets",
          "Jackets & Vests",
          "Pants & Leggings",
          "Shirts & Tops",
          "Shoes",
          "Shorts",
          "Socks",
          "Swimwear",
          "Underwear",
        ],
      },
      {
        name: " Girls",
        subs: [
          "Accessories",
          "Baselayer",
          "Dresses, Skorts, & Rompers",
          "One Piece & Sets",
          "Jackets",
          "Pants & Leggings",
          "Shirts & Tops",
          "Shoes",
          "Shorts",
          "Socks",
          "Sports Bras",
          "Swimwear",
        ],
      },
      {
        name: "Shop by Sport",
        subs: [
          "Baseball",
          "Basketball",
          "Football",
          "Golf",
          "Hockey",
          "Running & Training",
          "Softball",
          "Soccer",
          "Volleyball",
        ],
      },
      {
        name: "Shop by Size",
        subs: [
          "Extended Sizes (8+ to 20+)",
          "Big Kids (8-20)",
          "Little Kids (4-7)",
          "Toddler (2T - 4T)",
          "Infant (12M - 24M)",
          "Newborn (0M - 9M)",
        ],
      },
    ],
    img: {
      src: "imgs/index/FW23_AMR_FallPicks_Site_Sec_B_1_1.webp",
    },
    promo: {
      text: "Fall Picks",
      action: "Shop Now",
    },
  },
  shoes: {
    titles: [
      {
        name: "Featured",
        subs: [
          "New Arrivals",
          "UA SlipSpeed™",
          "Curry Brand",
          "Back to School",
          "Wide Shoes",
          "Best Sellers",
          "Project Rock",
        ],
      },
      {
        name: "Shop by Category",
        subs: ["Sandals & Slides", "Cleats", "Sportstyle Shoes", "Boots"],
      },
      {
        name: "Shop by Sport",
        subs: [
          "Baseball",
          "Basketball",
          "Fishing",
          "Football",
          "Golf",
          "Hiking & Hunting",
          "Lacrosse",
          "Running",
          "Soccer",
          "Softball",
          "Sportstyle",
          "Military & Tactical",
          "Track & Field",
          "Training",
          "Volleyball",
        ],
      },
      {
        name: "Shop by Collection",
        subs: [
          "UA Flow",
          "UA HOVR™",
          "UA Charged",
          "Flow Velociti",
          "UA HOVR™ Phantom",
        ],
      },
    ],
    img: {
      src: "imgs/index/FW23_TRN_Cog_SlipSpeedNubuck_Site_1_1_6.webp",
    },
    promo: {
      text: "UA SlipSpeed™",
      action: "Shop Now",
    },
  },
  backtoschool: {
    titles: [
      {
        name: "Featured",
        subs: [
          "25% off Backpacks",
          "Lunch Boxes & Mini Coolers",
          "First Day Fits",
          "School Uniform Shop",
          "Crossbody & Waist Bags",
          "Water Bottles",
          "Football Cleats",
          "Basics & Essentials",
          "30% off Student Discount",
          "College Fan Gear",
        ],
      },
      {
        name: "Shop by Gender",
        subs: ["Men's", "Women's", "Boys'", "Girls'"],
      },
      {
        name: "Shop by Age",
        subs: [
          "High School (Ages 14-18)",
          "Middle School (Ages 11-13)",
          "Elementary School (Ages 5-10)",
        ],
      },
      {
        name: "Shop by Sport",
        subs: [
          "Baseball",
          "Basketball",
          "Football",
          "Golf",
          "Running",
          "Soccer",
          "Softball",
          "Training",
          "Volleyball",
        ],
      },
    ],
    img: {
      src: "imgs/index/FW23_AMR_BTS_Hustle_Site_Secondary_1_1.webp",
    },
    promo: {
      text: "25% off Backpacks™",
      action: "Shop Now",
    },
  },
  outlet: {
    titles: [
      {
        name: "Featured",
        subs: [
          "Labor Day Sale: Extra 30% Off Outlet",
          "25% off Backpacks",
          "Athletic Clothing Under $25",
          "Shoes Under $50",
          "Shop Factory House",
          "Sportsmask 2/$10",
          "Buy More Save More Boxerjocks",
        ],
      },
      {
        name: "Men",
        subs: [
          "Accessories",
          "Jackets & Vests",
          "Pants & Leggings",
          "Shirts & Tops",
          "Shoes",
          "Shorts",
          "Underwear",
        ],
      },
      {
        name: "Women",
        subs: [
          "Accessories",
          "Jackets & Vests",
          "Pants & Leggings",
          "Shirts & Tops",
          "Shoes",
          "Shorts",
          "Sports Bras",
        ],
      },
      {
        name: "Boys",
        subs: [
          "Accessories",
          "Jackets & Vests",
          "Pants & Leggings",
          "Shirts & Tops",
          "Shoes",
          "Shorts",
          "Underwear",
        ],
      },
      {
        name: "Girls",
        subs: [
          "Sports Bras",
          "Shorts",
          "Accessories",
          "Jackets",
          "Pants & Leggings",
          "Shirts & Tops",
          "Shoes",
        ],
      },
    ],
    img: {
      src: "imgs/index/SS23_AMR_LaborDay_Promo_Site_1_1.webp",
    },
    promo: {
      text: "Labor Day Sale",
      action: "Shop Now",
    },
  },
};

export const CAT_DATA = [
  "New",
  "Mens",
  "Womens",
  "Shoes",
  "Back to School",
  "Outlet",
];

export const PRODUCT_RECOMMENDED_DATA = [
  {
    initialSrc:
      "imgs/index/V5-1350097-400_FC.webp",
    lastSrc:
      "imgs/index/1350097-400_SLFADD_SL.webp",
    title: "UA All Sport Backpack",
    price: {
      withoutDiscount: "$55.00",
      withDiscount: "$41.25",
      promoName: "25% Off Backpacks",
    },
  },
  {
    initialSrc:
      "imgs/index/1361176-400_SLF_SL.webp",
    lastSrc:
      "imgs/index/1361176-400_SLB_SL.webp",
    title: "UA Hustle 5.0 Backpack",
    price: {
      withoutDiscount: "$55.00",
      withDiscount: "$41.25",
      promoName: "25% Off Backpacks",
    },
  },
  {
    initialSrc:
      "imgs/index/1364180-002_SLF_SL.webp",
    lastSrc:
      "imgs/index/1364180-002_SLB_SL.webp",
    title: "UA Hustle Lite Backpack",
    price: {
      withoutDiscount: "$35.00",
      withDiscount: "$26.25",
      promoName: "25% Off Backpacks",
    },
  },
  {
     initialSrc:
      "imgs/index/1364181-016_SLF_SL.webp",
   lastSrc:
      "imgs/index/1364181-016_SLB_SL.webp",
    title: "UA Hustle Sport Backpack",
    price: {
      withoutDiscount: "$45.00",
      withDiscount: "$33.75",
      promoName: "25% Off Backpacks",
    },
  },
  {
     initialSrc:
      "imgs/index/1367060-002_SLF_SL.webp",
     lastSrc:
      "imgs/index/V5-1367060-002_FC.webp",
    title: "UA Hustle Sport Backpack",
    price: {
      withoutDiscount: "$65.00",
      withDiscount: "$41.25",
      promoName: "25% Off Backpacks",
    },
  },
];

export const subCats = {
  men: {
    catName: "Men",
    extendable: [
      {
        title: "New Arrivals",
        isHot: false,
        subCats: ["Baseball", "Basketball", "Fishing", "Football", "Golf"],
      },
      {
        title: "New Arrivals",
        isHot: true,
        subCats: ["Baseball", "Basketball", "Fishing", "Football", "Golf"],
      },
      {
        title: "Gift Guide",
        isHot: false,
        subCats: ["Baseball", "Basketball", "Fishing", "Football", "Golf"],
      },
      {
        title: "Unisex",
        isHot: false,
        subCats: ["Baseball", "Basketball", "Fishing", "Football", "Golf"],
      },
    ],
    nonExtendable: [
      {
        title: "Trending:Backpacks",
      },
      {
        title: "Back to School",
      },
      {
        title: "First Day Fits",
      },
      {
        title: "Project Rock MVP",
      },
      {
        title: "Summer Picks",
      },
      {
        title: "Jordan Spieth's Offical Kits",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
    ],
    byTitles: [
      {
        name: "Featured",
        subCats: [
          "New Arrivals",
          "Back to School",
          "Jordan's Official Kits",
          "Graphic T-shirt Shop",
        ],
      },
    ],
  },
  new: {
    catName: "New",
    extendable: [
      {
        title: "New Arrivals",
        isHot: false,
        subCats: ["Baseball", "Basketball", "Fishing", "Football", "Golf"],
      },
      {
        title: "New Arrivals",
        isHot: true,
        subCats: ["Baseball", "Basketball", "Fishing", "Football", "Golf"],
      },
      {
        title: "Gift Guide",
        isHot: false,
        subCats: ["Baseball", "Basketball", "Fishing", "Football", "Golf"],
      },
      {
        title: "Unisex",
        isHot: false,
        subCats: ["Baseball", "Basketball", "Fishing", "Football", "Golf"],
      },
    ],
    nonExtendable: [
      {
        title: "Trending:Backpacks",
      },
      {
        title: "Back to School",
      },
      {
        title: "First Day Fits",
      },
      {
        title: "Project Rock MVP",
      },
      {
        title: "Summer Picks",
      },
      {
        title: "Jordan Spieth's Offical Kits",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
    ],
    byTitles: [
      {
        name: "Featured",
        subCats: [
          "New Arrivals",
          "Back to School",
          "Jordan's Official Kits",
          "Graphic T-shirt Shop",
        ],
      },
    ],
  },
  women: {
    catName: "Women",
    extendable: [
      {
        title: "New Arrivals",
        isHot: false,
        subCats: ["Baseball", "Basketball", "Fishing", "Football", "Golf"],
      },
      {
        title: "New Arrivals",
        isHot: true,
        subCats: ["Baseball", "Basketball", "Fishing", "Football", "Golf"],
      },
      {
        title: "Gift Guide",
        isHot: false,
        subCats: ["Baseball", "Basketball", "Fishing", "Football", "Golf"],
      },
      {
        title: "Unisex",
        isHot: false,
        subCats: ["Baseball", "Basketball", "Fishing", "Football", "Golf"],
      },
    ],
    nonExtendable: [
      {
        title: "Trending:Backpacks",
      },
      {
        title: "Back to School",
      },
      {
        title: "First Day Fits",
      },
      {
        title: "Project Rock MVP",
      },
      {
        title: "Summer Picks",
      },
      {
        title: "Jordan Spieth's Offical Kits",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
    ],
    byTitles: [
      {
        name: "Featured",
        subCats: [
          "New Arrivals",
          "Back to School",
          "Jordan's Official Kits",
          "Graphic T-shirt Shop",
        ],
      },
    ],
  },
  kids: {
    catName: "Kids",
    extendable: [
      {
        title: "New Arrivals",
        isHot: false,
        subCats: ["Baseball", "Basketball", "Fishing", "Football", "Golf"],
      },
      {
        title: "New Arrivals",
        isHot: true,
        subCats: ["Baseball", "Basketball", "Fishing", "Football", "Golf"],
      },
      {
        title: "Gift Guide",
        isHot: false,
        subCats: ["Baseball", "Basketball", "Fishing", "Football", "Golf"],
      },
      {
        title: "Unisex",
        isHot: false,
        subCats: ["Baseball", "Basketball", "Fishing", "Football", "Golf"],
      },
    ],
    nonExtendable: [
      {
        title: "Trending:Backpacks",
      },
      {
        title: "Back to School",
      },
      {
        title: "First Day Fits",
      },
      {
        title: "Project Rock MVP",
      },
      {
        title: "Summer Picks",
      },
      {
        title: "Jordan Spieth's Offical Kits",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
    ],
    byTitles: [
      {
        name: "Featured",
        subCats: [
          "New Arrivals",
          "Back to School",
          "Jordan's Official Kits",
          "Graphic T-shirt Shop",
        ],
      },
    ],
  },
  shoes: {
    catName: "Shoes",
    extendable: [
      {
        title: "New Arrivals",
        isHot: false,
        subCats: ["Baseball", "Basketball", "Fishing", "Football", "Golf"],
      },
      {
        title: "New Arrivals",
        isHot: true,
        subCats: ["Baseball", "Basketball", "Fishing", "Football", "Golf"],
      },
      {
        title: "Gift Guide",
        isHot: false,
        subCats: ["Baseball", "Basketball", "Fishing", "Football", "Golf"],
      },
      {
        title: "Unisex",
        isHot: false,
        subCats: ["Baseball", "Basketball", "Fishing", "Football", "Golf"],
      },
    ],
    nonExtendable: [
      {
        title: "Trending:Backpacks",
      },
      {
        title: "Back to School",
      },
      {
        title: "First Day Fits",
      },
      {
        title: "Project Rock MVP",
      },
      {
        title: "Summer Picks",
      },
      {
        title: "Jordan Spieth's Offical Kits",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
    ],
    byTitles: [
      {
        name: "Featured",
        subCats: [
          "New Arrivals",
          "Back to School",
          "Jordan's Official Kits",
          "Graphic T-shirt Shop",
        ],
      },
    ],
  },
  backToSchool: {
    catName: "Back to School",
    extendable: [
      {
        title: "New Arrivals",
        isHot: false,
        subCats: ["Baseball", "Basketball", "Fishing", "Football", "Golf"],
      },
      {
        title: "New Arrivals",
        isHot: true,
        subCats: ["Baseball", "Basketball", "Fishing", "Football", "Golf"],
      },
      {
        title: "Gift Guide",
        isHot: false,
        subCats: ["Baseball", "Basketball", "Fishing", "Football", "Golf"],
      },
      {
        title: "Unisex",
        isHot: false,
        subCats: ["Baseball", "Basketball", "Fishing", "Football", "Golf"],
      },
    ],
    nonExtendable: [
      {
        title: "Trending:Backpacks",
      },
      {
        title: "Back to School",
      },
      {
        title: "First Day Fits",
      },
      {
        title: "Project Rock MVP",
      },
      {
        title: "Summer Picks",
      },
      {
        title: "Jordan Spieth's Offical Kits",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
    ],
    byTitles: [
      {
        name: "Featured",
        subCats: [
          "New Arrivals",
          "Back to School",
          "Jordan's Official Kits",
          "Graphic T-shirt Shop",
        ],
      },
    ],
  },
  outlet: {
    catName: "Outlet",
    extendable: [
      {
        title: "New Arrivals",
        isHot: false,
        subCats: ["Baseball", "Basketball", "Fishing", "Football", "Golf"],
      },
      {
        title: "New Arrivals",
        isHot: true,
        subCats: ["Baseball", "Basketball", "Fishing", "Football", "Golf"],
      },
      {
        title: "Gift Guide",
        isHot: false,
        subCats: ["Baseball", "Basketball", "Fishing", "Football", "Golf"],
      },
      {
        title: "Unisex",
        isHot: false,
        subCats: ["Baseball", "Basketball", "Fishing", "Football", "Golf"],
      },
    ],
    nonExtendable: [
      {
        title: "Trending:Backpacks",
      },
      {
        title: "Back to School",
      },
      {
        title: "First Day Fits",
      },
      {
        title: "Project Rock MVP",
      },
      {
        title: "Summer Picks",
      },
      {
        title: "Jordan Spieth's Offical Kits",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
      {
        title: "Sportstyle",
      },
    ],
    byTitles: [
      {
        name: "Featured",
        subCats: [
          "New Arrivals",
          "Back to School",
          "Jordan's Official Kits",
          "Graphic T-shirt Shop",
        ],
      },
    ],
  },
};
