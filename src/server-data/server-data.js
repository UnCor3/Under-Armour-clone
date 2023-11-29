const SEARCH_DATA = [
  {
    title: "Men's Project Rock Unstoppable Printed Jacket",
    colorCount: 1,
    category : "mens",
    subCategory : "sweatshirts",
    id : "10001",
    isNew: true,
    price: {
      withDiscount: "",
      withoutDiscount: "$140.00",
    },
    imgs: {
      initialSrc:
      "imgs/10001/white&black/low-qt-1.webp",
      lastSrc:
      "imgs/10001/white&black/low-qt-2.webp",
    },
  },
  {
    title: "UA Hustle Lite Backpack",
    category : "accessories",
    subCategory : "backpacks",
    id : "10002",
    colorCount: 2,
    isNew: true,
    price: {
      withDiscount: "",
      withoutDiscount: "$26.25",
    },
    imgs: {
      initialSrc:
      "imgs/10002/black/low-qt-1.webp",
      lastSrc:
      "imgs/10002/black/low-qt-2.webp",
    },
  },
  {
    title: "Unisex UA SlipSpeed™ Mesh Training Shoes",
    category : "shoes",
    subCategory : "training",
    id : "10003",
    colorCount: 1,
    isNew: false,
    price: {
      withDiscount: "",
      withoutDiscount: "$26.25",
    },
    imgs: {
      initialSrc:
      "imgs/10003/black/low-qt-1.webp",
      lastSrc:
      "imgs/10003/black/low-qt-2.webp",
    },
  },
];


const PRODUCT_DATA = [
  {
    id: 10001,
    fullName: "Men's Project Rock Unstoppable Printed Jacket",
    athInfo: "Athlete is 6'2\" & wearing size LG",
    category: "mens",
    subCategory: "sweatshirts",
    isNew: true,
    qAndA: [
      {
        date: new Date(2022, 8, 1),
        question: {
          asker: "aAdsaeq",
          content:
            "Can i use this in the gym?",
        },
        answer: {
          answerer: "UAExpert",
          content:
            "Ofc you can use it",
          foundHelpful: {
            yesCount: 5,
            noCount: 1,
          },
        },
      }
    ],
    reviews: [
      {
        customer: {
          name: "UnCore",
          reviewCount: 4,
          voteCount: 30,
          athType: "Professional",
          height: ">6'1''",
          sizePurchased: "LG",
          gender: "Male",
        },
        review: {
          title: "Loved it",
          comment: "Very good,worth the price,waterproof and looks cool",
          date: new Date(2023, 1, 1),
          recommends: true,
          foundHelpfulTimes: 10,
          foundNotHelpfulTimes: 1,
          starRating: 4,
          productFit: {
            fit: 90,
            comfort: 90,
            performance: 70,
          },
        }
      }
    ],
    explanation:
      "Project Rock training gear was built to help you find boundaries, then push right through them. Everything in this collection was personally approved by Dwayne Johnson, the hardest worker in the room. ANY room.",
    dna: [
      "Stretch-woven fabric is tough but lightweight",
      "4-way stretch material moves better in every direction",
      "Bungee adjust hood",
      "Side zips for quick ventilation when you need it",
      "Secure, zip hand pockets",
      "Binding at cuffs & bottom hem",
      "Uses a fluorine-free water repellent treatment",
    ],
    specs: ["Style #: 1380112", "87% Polyester/13% Elastane", "Imported"],
    fitAndCare: [
      "Garment should be washed & dried zipped up",
      "Machine wash cold with like colors",
      "Do not bleach",
      "Tumble dry low",
    ],
    teaser: {
      type_1: [
        {
          dtImg:
            "imgs/10001/teaser/FW23_TRN_ProjectRock_Q3_Site_2_1_M_3.webp",
          mbImg:
            "imgs/10001/teaser/FW23_TRN_ProjectRock_Q3_Site_4_5_M_2.webp",
          text: {
            firstText: "Project Rock Collection",
            secondText: "STEP IN—THE PROJECT IS CALLING",
            thirdText:
              "We see you, you who answer the call of your craft, the hardest workers in the room. This collection is a call to every athlete willing to step in and throw down, leaving it all on the gym floor.",
          },
        },
      ],
      type_2: [
        {
          dtImg:
            "imgs/10001/teaser/FW23_TRN_ProjectRock_Q3_Site_5_4_M_4.webp",
          mbImg:
            "imgs/10001/teaser/FW23_TRN_ProjectRock_Q3_Site_5_4_M_4_.webp",
          text: {
            firstText: "DESIGNED BY DWAYNE JOHNSON",
            secondText:
              "Dwayne Johnson shows up ready to step into the arena and give his all. He designed this gear to withstand every rep.",
          },
        },
        {
          dtImg:
            "imgs/10001/teaser/FW23_TRN_ProjectRock_Q3_Site_5_4_M_5.webp",
           mbImg:
            "imgs/10001/teaser/FW23_TRN_ProjectRock_Q3_Site_5_4_M_5_.webp",
          text: {
            firstText: "INSPIRED BY YOUR ARENA",
            secondText:
              "From heavy gym sessions to everyday movement, this collection is designed to power you through.",
          },
        },
        {
          dtImg:
            "imgs/10001/teaser/FW23_TRN_ProjectRock_Q3_Site_5_4_M_6.webp",
          mbImg:
            "imgs/10001/teaser/FW23_TRN_ProjectRock_Q3_Site_5_4_M_6_1.webp",
          text: {
            firstText: "TOUGH AS MARBLE",
            secondText:
              "The prints in this collection are inspired by the marbled walls of the Roman Colosseum.",
          },
        },
      ],
    },
    colorOptions: [
      {
        name: "White Clay / Black - 114",
        colorCodes: ["e0d4b6", "000000"],
        sku : "1380112-114",
        colorProps: {
          price: "$140.00",
          klarna: "4 interest-free payments of $35.00.",
          fit: 1,
          sizes: [
            {
              name: "XS",
              available: false,
            },
            {
              name: "SM",
              available: true,
            },
            {
              name: "MD",
              available: true,
            },
            {
              name: "LG",
              available: true,
            },
            {
              name: "XL",
              available: true,
            },
            {
              name: "XXL",
              available: true,
            },
            {
              name: "3XL",
              available: false,
            },
          ],
          imgs: [
            "imgs/10001/white&black/low-qt-1.webp",
            "imgs/10001/white&black/low-qt-2.webp",
            "imgs/10001/white&black/low-qt-3.webp",
            "imgs/10001/white&black/low-qt-4.webp",
            "imgs/10001/white&black/low-qt-5.webp",
            "imgs/10001/white&black/low-qt-6.webp",
          ],
          detailedReviewImgs: [
            "imgs/10001/white&black/hi-qt-1.webp",
            "imgs/10001/white&black/hi-qt-2.webp",
            "imgs/10001/white&black/hi-qt-3.jpg",
            "imgs/10001/white&black/hi-qt-4.webp",
            "imgs/10001/white&black/hi-qt-5.webp",
            "imgs/10001/white&black/hi-qt-6.jpg",
            "imgs/10001/white&black/hi-qt-7.jpg",
            "imgs/10001/white&black/hi-qt-8.webp",
          ],
        },
      },
    ],
  },
  {
    id: 10002,
    fullName: "UA Hustle Lite Backpack",
    category: "accessories",
    subCategory: "backpacks",
    isNew: false,
    reviews: [
      {
        customer: {
          name: "UnCore",
          reviewCount: 4,
          voteCount: 30,
          athType: "Professional",
          height: ">6'1''",
          sizePurchased: "LG",
          gender: "Male",
        },
        review: {
          title: "Loved it",
          comment: "Very good,worth the price,waterproof and looks cool",
          date: new Date(2023, 1, 1),
          recommends: true,
          foundHelpfulTimes: 10,
          foundNotHelpfulTimes: 1,
          imgs: [
            "imgs/10002/reviews/review2.jpg",
            "imgs/10002/reviews/review3.jpg"
          ],
          starRating: 4,
          productFit: {
            fit: 90,
            comfort: 90,
            performance: 70,
          },
        }
      }
    ],
    qAndA: [
      {
        date: new Date(2022, 8, 1),
        question: {
          asker: "aAdsaeq",
          content:
            "Can i use this in the gym?",
        },
        answer: {
          answerer: "UAExpert",
          content:
            "Ofc you can use it",
          foundHelpful: {
            yesCount: 5,
            noCount: 1,
          },
        },
      }
    ],
    explanation: "This backpack does it all. It's water-repellent for the rain, tough as nails, comfortable as anything, and has all the pockets you need to hold all your stuff.",
    dna: [
      "UA Storm technology delivers an element-battling, highly water-resistant & stain-resistant finish",
      "Padded back panel & ergonomic straps for comfortable carry",
      'Soft-lined laptop sleeve—holds up to 15" MacBook Pro® or similarly sized laptop',
      "Zippered front valuables pocket",
      "Side water bottle pocket",
      "Molle webbing for additional attachment points",
      "Durable PU-coated bottom panel",
      "Uses a fluorine-free water repellent treatment",
    ],
    specs: [
      "Style #: 1364180",
      "Dimensions When Full: 6.7\"W x 18.5\"H x 12.2\"L",
      "Volume: 24L",
      "100% Polyester",
      "Imported" 
    ],
    fitAndCare: [
      "One Size Fits All"
    ],
    colorOptions: [
      {
        name: "Black / Metallic Silver - 002",
        colorCodes: ["2a2a2e", "2a2a2e"],
        sku : "1364180-002",
        colorProps: {
          price: "$26.25",
          klarna: "4 interest-free payments of $6.50.",
          fit: 0,
          sizes: [
            {
              name: "OSFA",
              available: true,
            },
          ],
          imgs: [
            "imgs/10002/black/low-qt-1.webp",
            "imgs/10002/black/low-qt-2.webp",
            "imgs/10002/black/low-qt-3.webp",
            "imgs/10002/black/low-qt-4.webp",
            "imgs/10002/black/low-qt-5.webp",
          ],
          detailedReviewImgs: [
            "imgs/10002/black/high-qt-1.webp",
            "imgs/10002/black/high-qt-2.jpg",
            "imgs/10002/black/high-qt-3.webp",
            "imgs/10002/black/high-qt-4.webp",
            "imgs/10002/black/high-qt-5.jpg",
          ],
        },
      },
      {
        name: "Varsity Blue / Blizzard / White - 426",
        colorCodes: ["004d6e", "87b7c6"],
        sku : "1364180-426",
        colorProps: {
          price: "$26.25",
          klarna: "4 interest-free payments of $6.50.",
          fit: 0,
          sizes: [
            {
              name: "OSFA",
              available: true,
            },
          ],
          imgs: [
            "imgs/10002/blue/low-qt-1.webp",
            "imgs/10002/blue/low-qt-2.webp",
            "imgs/10002/blue/low-qt-3.jpg",
            "imgs/10002/blue/low-qt-4.webp",
            "imgs/10002/blue/low-qt-5.webp",
          ],
          detailedReviewImgs: [
            "imgs/10002/blue/high-qt-1.webp",
            "imgs/10002/blue/high-qt-2.webp",
            "imgs/10002/blue/high-qt-3.webp",
            "imgs/10002/blue/high-qt-4.webp",
            "imgs/10002/blue/high-qt-5.jpg",
          ],
        },
      },
    ],
  },
  {
    id: 10003,
    fullName: "Unisex UA SlipSpeed™ Mesh Training Shoes",
    category: "shoes",
    subCategory: "training",
    isNew: false,
    explanation: "These are the most versatile training shoes we've ever made. They feel great, feel cool, cushion better, fit perfectly, handle your toughest training, AND have a heel that converts easily from recover mode to train mode.",
    reviews: [
      {
        customer: {
          name: "UnCore",
          reviewCount: 4,
          voteCount: 30,
          athType: "Professional",
          height: ">6'1''",
          sizePurchased: "LG",
          gender: "Male",
        },
        review: {
          title: "Please like the repo :D",
          comment: "Very good,worth the price,waterproof and looks cool,love the brand etc etc",
          date: new Date(2023, 1, 1),
          recommends: true,
          foundHelpfulTimes: 10,
          foundNotHelpfulTimes: 1,
          starRating: 4,
          imgs: [
            "imgs/10003/reviews/review.jpg",
            "imgs/10003/reviews/review1.jpg"
          ],
          productFit: {
            fit: 99,
            comfort: 99,
            performance: 70,
          },
        },
      }
    ],
    qAndA: [
      {
        date: new Date(2021, 3, 1),
        question: {
          asker: "UnCore",
          content: "Can you like this repo ?",
        },
        answer: {
          answerer: "viewer of this project",
          content: "Yes i can ofc",
          foundHelpful: {
            yesCount: 99,
            noCount: 0,
          },
        },
      },
    ],
    dna: [
      "UA FLOW CUSHIONING: Unmatched comfort, ground contact & traction—no squeaks",
      "BREATHABLE UPPER: Lightweight mesh material",
      "BOA FIT SYSTEM: A personalized fit, one click at a time, with a 12-point lockdown system",
      "ISO-CHILL PADDED INTERIOR: Heel to toe interior foam padding with cool-to-the-touch Iso-Chill technology",
      "MACHINE WASHABLE: We made it easy—put them in the wash to keep them fresh & clean*",
      "CONVERTIBLE HEEL: Go from train mode to recover mode",
      "*Laundry bag not included"
    ],
    specs: [
      "Style #: 3027726",
      "Offset: 2mm",
      "Lace type: BOA™",
      "Imported"
    ],
    fitAndCare: [
      "Regular"
    ],
    colorOptions: [
      {
        name: "White / Metallic Silver - 100",
        colorCodes: ["fffff", "d5d5d7"],
        sku : "3027726-100",
        video : {
          src : "videos/10003/video.mp4",
          poster : "imgs/10003/white/poster.webp"
        },
        colorProps: {
          price: "$150.00",
          klarna: "4 interest-free payments of $10.00.",
          fit: 0,
          sizes: [
            {
              name: "3.5/5",
              available: true,
            }, 
            {
              name: "5.5/7",
              available: false,
            }, 
            {
              name: "6/7.5",
              available: false,
            }, 
            {
              name: "6.5/8",
              available: true,
            }, 
            {
              name: "7/8.5",
              available: true,
            }, 
            {
              name: "7.5/9",
              available: true,
            },
            {
              name: "8/9.5",
              available: true,
            },
            {
              name: "8.5/10",
              available: true,
            },
            {
              name: "9/10.5",
              available: false,
            },
            {
              name: "9.5/11",
              available: true,
            },
            {
              name: "10/11.5",
              available: true,
            },
            {
              name: "10.5/12",
              available: false,
            },
            {
              name: "11/12.5",
              available: true,
            }
          ],
          imgs: [
            "imgs/10003/white/low-qt-1.webp",
            "imgs/10003/white/low-qt-1.webp",
            "imgs/10003/white/low-qt-2.webp",
            "imgs/10003/white/low-qt-3.webp",
            "imgs/10003/white/low-qt-4.webp",
          ],
          detailedReviewImgs: [
            "imgs/10003/white/high-qt-1.webp",
            "imgs/10003/white/high-qt-2.webp",
            "imgs/10003/white/high-qt-3.jpg",
            "imgs/10003/white/high-qt-4.jpg",
            "imgs/10003/white/high-qt-5.jpg",
            "imgs/10003/white/high-qt-6.jpg",
            "imgs/10003/white/high-qt-7.jpg",
          ],
        },
      },
      {
        name: "Blizzard / Varsity Blue - 401",
        colorCodes: ["d1c5af", "a8cbda"],
        sku : "3027726-401",
        video : {
          src : "videos/10003/video2.mp4",
          poster : "imgs/10003/blizzard/poster.webp"
        },
        colorProps: {
          price: "$150.00",
          klarna: "4 interest-free payments of $10.00.",
          fit: 0,
          sizes: [
            {
              name: "3.5/5",
              available: true,
            }, 
            {
              name: "5.5/7",
              available: false,
            }, 
            {
              name: "6/7.5",
              available: false,
            }, 
            {
              name: "6.5/8",
              available: false,
            }, 
            {
              name: "7/8.5",
              available: false,
            }, 
            {
              name: "7.5/9",
              available: true,
            },
            {
              name: "8/9.5",
              available: true,
            },
            {
              name: "8.5/10",
              available: true,
            },
            {
              name: "9/10.5",
              available: true,
            },
            {
              name: "9.5/11",
              available: true,
            },
            {
              name: "10/11.5",
              available: true,
            },
            {
              name: "10.5/12",
              available: false,
            },
            {
              name: "11/12.5",
              available: true,
            }
          ],
          imgs: [
            "imgs/10003/blizzard/low-qt-1.webp",
            "imgs/10003/blizzard/low-qt-1.webp",
            "imgs/10003/blizzard/low-qt-2.webp",
            "imgs/10003/blizzard/low-qt-3.webp",
            "imgs/10003/blizzard/low-qt-4.webp",
          ],
          detailedReviewImgs: [
            "imgs/10003/blizzard/high-qt-1.webp",
            "imgs/10003/blizzard/high-qt-2.webp",
            "imgs/10003/blizzard/high-qt-3.webp",
            "imgs/10003/blizzard/high-qt-1.jpg",
            "imgs/10003/blizzard/high-qt-4.webp",
            "imgs/10003/blizzard/high-qt-5.webp",
          ],
        },
      },
      {
        name: "Black / Metallic Black - 002",
        colorCodes: ["2a2a2e", "2a2a2e"],
        sku : "3027726-002",
        colorProps: {
          price: "$150.00",
          klarna: "4 interest-free payments of $10.00.",
          fit: 0,
          sizes: [
            {
              name: "3.5/5",
              available: true,
            }, 
            {
              name: "5.5/7",
              available: true,
            }, 
            {
              name: "6/7.5",
              available: true,
            }, 
            {
              name: "6.5/8",
              available: true,
            }, 
            {
              name: "7/8.5",
              available: true,
            }, 
            {
              name: "7.5/9",
              available: true,
            },
            {
              name: "8/9.5",
              available: false,
            },
            {
              name: "8.5/10",
              available: true,
            },
            {
              name: "9/10.5",
              available: false,
            },
            {
              name: "9.5/11",
              available: true,
            },
            {
              name: "10/11.5",
              available: true,
            },
            {
              name: "10.5/12",
              available: false,
            },
            {
              name: "11/12.5",
              available: false,
            }
          ],
          imgs: [
            "imgs/10003/black/low-qt-1.webp",
            "imgs/10003/black/low-qt-2.webp",
            "imgs/10003/black/low-qt-3.webp",
            "imgs/10003/black/low-qt-4.webp",
            "imgs/10003/black/low-qt-5.webp",
          ],
          detailedReviewImgs: [
            "imgs/10003/black/high-qt-1.jpg",
            "imgs/10003/black/high-qt-2.webp",
            "imgs/10003/black/high-qt-3.webp",
            "imgs/10003/black/high-qt-4.jpg",
            "imgs/10003/black/high-qt-5.jpg",
            "imgs/10003/black/high-qt-6.jpg",
          ],
        },
      },
    ],
  },
];

const CATEGORY_DATA = [
  {
    category: "mens",
    subCategories: [
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
];


module.exports = { SEARCH_DATA, PRODUCT_DATA, CATEGORY_DATA };
