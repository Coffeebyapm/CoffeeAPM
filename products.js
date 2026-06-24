const PRODUCT_GROUPS = [
  {
    group: "VacPress",
    slug: "vacpress",
    summary: "Cup-type piston cold brew coffee makers. Piston mechanism creates positive and negative pressure to enhance extraction in cold water and makes cold brew coffee in 3–5 minutes.",
    shipping: "USA: Standard $8 for one or more products. Express $25 for one or more products. International shipping will be discussed per order.",
    items: [
      {
        name: "VacPress Single Wall Clear Glass Cup",
        price: "$30",
        details: ["Made with borosilicate glass", "Size: 200 ml", "Cold brew in 3–5 minutes"],
        images: ["Piston press glass.jpg"],
        videos: ["VacPressDemo.mp4"],
        stripe: "https://buy.stripe.com/test_28E28k65E8FO2hz0CB24000"
        paypal: "https://www.paypal.com/ncp/payment/6E5NU2GE5AUH6"
      },
      {
        name: "VacPress Double Wall Stainless Thermos Cup",
        price: "$35",
        details: ["Made with 304 stainless steel", "Size: 300 ml", "Double-wall thermos cup"],
        images: ["Piston press SS photo.jpg"],
        videos: [],
        stripe: "https://buy.stripe.com/test_fZu5kwfGeg8g7BTgBz2400v"
      }
    ]
  },
  {
    group: "VacBrew",
    slug: "vacbrew",
    summary: "Portable cold coffee extractors using steam-condensed vacuum. The vacuum pulls water through coffee grind and extracts with icy cold water in 5–180 minutes depending on grind size and coffee amount.",
    shipping: "USA: Standard $19.99 for one or more products. Express $44.99 for one or more products. International shipping will be discussed per order.",
    items: [
      {
        name: "VacBrew Personal Glass 500 ml",
        price: "$65",
        details: ["Made with borosilicate glass", "Up to 500 ml of 2–3 times concentrated coffee"],
        images: ["VacBrewGS.PNG"],
        videos: ["VacBrewDemo.mp4"],
        stripe: "https://buy.stripe.com/test_bJefZabpYcW45tL3ON24002"
      },
      {
        name: "VacBrew Glass Large 2,000 ml",
        price: "$180",
        details: ["Made with borosilicate glass", "Up to 2,000 ml of 2–3 times concentrated coffee", "Good for office or coffee shop display"],
        images: ["Glass Large.jpg"],
        videos: [],
        stripe: "https://buy.stripe.com/test_5kQ28k8dM1dm1dv1GF2400u"
      },
      {
        name: "VacBrew Stainless Small Cartridge",
        price: "$130",
        details: ["Made with 304 stainless steel", "Up to 1,500 ml of 2–5 times concentrated coffee"],
        images: ["SSF.PNG"],
        videos: [],
        stripe: "https://buy.stripe.com/test_4gMeV6gKi2hq2hzgBz2400t"
      },
      {
        name: "VacBrew Stainless Large Cartridge",
        price: "$170",
        details: ["Made with 304 stainless steel", "Up to 3,500 ml of 3–5 times concentrated coffee"],
        images: ["Stainless Large.jpg"],
        videos: [],
        stripe: "https://buy.stripe.com/test_8x2cMYbpY1dm2hzdpn2400s"
      }
    ]
  },
  {
    group: "VacBrew Commercial",
    slug: "vacbrew-commercial",
    summary: "Commercial vacuum-pump extractors. Coffee is extracted with icy cold water in a vacuum. No oxidation is made during processing.",
    shipping: "USA standard shipping: $200 for 7-Gal light weight, $250 for 15-Gal light weight, $450 for 7-Gal heavy duty, $750 for 20-Gal heavy duty, $1,200 for 50-Gal heavy duty.",
    items: [
      { name: "7-Gal Light Weight Low Vacuum", price: "$2,300", details: ["304 stainless steel", "7-Gal", "28 kg"], images: ["VacBrew 7 Gal.jpg"], videos: [], stripe: "https://buy.stripe.com/test_dRm28k8dMe08g8p5WV24003" },
      { name: "15-Gal Light Weight Low Vacuum", price: "$2,800", details: ["304 stainless steel", "15-Gal", "33 kg"], images: ["VacBrew 15 gals.jpg"], videos: [], stripe: "https://buy.stripe.com/test_7sY6oA9hQ9JSaO5gBz2400r" },
      { name: "7-Gal Heavy Duty High Vacuum", price: "$3,500", details: ["304 stainless steel", "7-Gal", "85 kg"], images: ["VacBrew 7 Gal Hard Extracter.jpg"], videos: [], stripe: "https://buy.stripe.com/test_28E28k8dM9JScWdgBz2400o" },
      { name: "20-Gal Heavy Duty High Vacuum", price: "$5,800", details: ["304 stainless steel", "20-Gal", "115 kg"], images: ["CCommercial 20Gal.PNG"], videos: [], stripe: "https://buy.stripe.com/test_00wfZa0LkcW43lDetr2400p" },
      { name: "50-Gal Heavy Duty High Vacuum", price: "$11,500", details: ["304 stainless steel", "50-Gal", "225 kg"], images: ["VacBrewCommercial50Gal.PNG"], videos: [], stripe: "https://buy.stripe.com/test_6oU8wIgKiaNWe0h5WV2400q" }
    ]
  },
  {
    group: "5 and 10 Times Concentrated Cold Brew Coffee",
    slug: "concentrated-coffee",
    summary: "Cold brew coffee extracted with icy cold water by VacBrew Commercial Extractor.",
    shipping: "USA: Standard $12.99 for one or more 32 oz glass bottles. Express $35.",
    items: [
      { name: "32 oz 5 Times Concentrated Cold Brew Coffee", price: "$13.00", details: ["Amber glass bottle"], images: ["CCBottle.PNG"], videos: [], stripe: "https://buy.stripe.com/test_5kQ7sE2Ts9JS09r3ON2400e" },
      { name: "32 oz 10 Times Concentrated Cold Brew Coffee", price: "$23.00", details: ["Amber glass bottle"], images: ["CCBottle.PNG"], videos: [], stripe: "https://buy.stripe.com/test_cNi7sE79I6xGbS9dpn2400d" }
    ]
  },
  {
    group: "SafelyRoasted",
    slug: "safelyroasted",
    summary: "Safely roasted coffee beans. Roasted in less oxygen environment to keep flavors and aroma.",
    shipping: "USA standard: $7.99 for ½ lb., $9.99 for 1 lb., $17.99 for 3 lbs., $23 for 5 lbs., $38 for 10 lbs.",
    items: [
      { name: "SafelyRoasted Coffee Bean ½ lb.", price: "$12.50", details: ["Organically grown Ethiopia origin coffee bean"], images: ["Logo coffee.jpg", "SafelyRoastedHalf.jpg"], videos: [], stripe: "https://buy.stripe.com/test_14A3cofGe5tCf4l4SR2400j" },
      { name: "SafelyRoasted Coffee Bean 1 lb.", price: "$23", details: ["Organically grown Ethiopia origin coffee bean"], images: ["SafelyRoasted1lb.PNG"], videos: [], stripe: "https://buy.stripe.com/test_bJefZa65E6xG1dv8532400i" },
      { name: "SafelyRoasted Coffee Bean 3 lbs.", price: "$65", details: ["Organically grown Ethiopia origin coffee bean"], images: ["SafelyRoasted3lbs.jpg"], videos: [], stripe: "https://buy.stripe.com/test_3cI14g51AcW46xPfxv2400h" },
      { name: "SafelyRoasted Coffee Bean 5 lbs.", price: "$105", details: ["Organically grown Ethiopia origin coffee bean"], images: ["SafelyRoasted5lbs.PNG"], videos: [], stripe: "https://buy.stripe.com/test_fZu8wI1Po09if4ldpn2400g" },
      { name: "SafelyRoasted Coffee Bean 10 lbs.", price: "$200", details: ["Organically grown Ethiopia origin coffee bean"], images: ["SafelyRoasted10lbs.jpg"], videos: [], stripe: "https://buy.stripe.com/test_28EeV6gKig8g3lD2KJ2400f" }
    ]
  },
  {
    group: "E-Z Braider",
    slug: "ez-braider",
    summary: "Professional hair braiding machine. It braids hair at 750 RPM and can braid different sizes from micro to jumbo braid.",
    shipping: "USA: Standard $15. Express $35.",
    items: [
      {
        name: "E-Z Braider Basic Set",
        price: "$150",
        details: ["Professional hair braiding machine", "750 RPM", "Micro to jumbo braid"],
        images: ["ezbasic.PNG", "EZ Braider long hair.PNG", "ezbtreebraid.PNG", "ezfuhair.PNG", "ezbraidercolorext.PNG", "ezjump.PNG"],
        videos: ["eznatural.mp4", "ezextension.mp4", "ezcoloryam.mp4", "ezfuson.mp4"],
        stripe: "https://buy.stripe.com/test_aFaeV6gKi1dm6xPclj24006"
      }
    ]
  },
  {
    group: "100% Whole Grain Brown Rice Snack",
    slug: "brown-rice-snack",
    summary: "Whole grain brown rice snacks. Not fried in oil. No sugar is added for plain.",
    shipping: "USA standard: $15 up to 5 bags, $25 up to 10 bags, $35 up to 20 bags, $50 for one case.",
    items: [
      { name: "Plain Brown Rice Snack Small", price: "$3", details: ["Not fried in oil", "No sugar added"], images: ["100%BRPlainS.jpg"], videos: [], stripe: "https://buy.stripe.com/test_bJe00cfGe09i2hz8532400k" },
      { name: "Plain Brown Rice Snack Medium", price: "$5", details: ["Not fried in oil", "No sugar added"], images: ["100%BRPlainM.PNG"], videos: [], stripe: "https://buy.stripe.com/test_fZu8wI0Lk5tC7BTbhf2400l" },
      { name: "Cinnamon Brown Rice Snack Small", price: "$4", details: ["Lightly added brown sugar"], images: ["BRCinnamon.jpg"], videos: [], stripe: "https://buy.stripe.com/test_bJe00cfGe09i2hz8532400k" },
      { name: "Coffee Brown Rice Snack Small", price: "$4", details: ["Lightly added brown sugar"], images: ["BRCoffee.jpg"], videos: [], stripe: "https://buy.stripe.com/test_6oU14gfGecW48FX1GF2400m" }
    ]
  },
  {
    group: "Future Products",
    slug: "future-products",
    summary: "Future products that can be produced when there are enough orders.",
    shipping: "International and special product shipping will be discussed per order.",
    items: [
      { name: "I Brew Reusable Coffee Cartridge", price: "$13", details: ["Reusable coffee cartridge for PET water bottle"], images: ["IBrewwaterbottle.PNG"], videos: [], stripe: "https://buy.stripe.com/test_14AfZafGe8FO5tL70Z2400a" },
      { name: "I Brew 350 ml Bottle Set", price: "$30", details: ["Reusable cartridge with 350 ml bottle"], images: ["I Brew Glass.jpg"], videos: [], stripe: "https://buy.stripe.com/test_00w7sEcu24py8FX99724007" },
      { name: "I Brew 500 ml Bottle Set", price: "$37", details: ["Reusable cartridge with 500 ml bottle"], images: ["I Brew SS.jpg"], videos: [], stripe: "https://buy.stripe.com/test_cNieV679I6xG8FXadb2400c" },
      {
        name: "Blade Tilting Type Wind Turbine",
        price: "$3,200–$23,000 FOB Korea",
        details: ["Up to 40% efficiency", "Starts at 3 m/second wind speed", "Quiet operation", "Low RPM and high torque"],
        images: ["WTBT5KW.PNG"],
        videos: ["WindTerbine1.mp4", "WindTerbine2.mp4"],
        stripe: "https://buy.stripe.com/test_3cIcMY3Xw3lu9K12KJ24009"
      }
    ]
  }
];
