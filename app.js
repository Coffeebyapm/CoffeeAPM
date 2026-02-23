// --------- IMPORTANT ---------
// 1) Put all images/videos in the SAME folder as index.html (root), OR add folder paths here.
// 2) Filenames must match EXACTLY (case + spaces). GitHub Pages is case-sensitive.
// 3) Paste your real Stripe Payment Links + PayPal links below (safe). Do NOT put bank account numbers on the website.

const CATALOG = [
  {
    id: "vacpress",
    title: "VacPress",
    category: "Coffee Makers",
    short: "Piston brew coffee makers. Cold brew in 3–5 minutes using positive/negative pressure.",
    notes: "Piston mechanism creates positive and negative pressure to enhance the extraction in cold water. It makes cold brew coffee in 3–5 mins.",
    variants: [
      { name: "Single-wall clear glass cup", material: "Borosilicate glass", size: "200 ml", price: 30.00, image: "Piston press glass.jpg" },
      { name: "Double-wall SS thermos cup", material: "304 Stainless steel", size: "300 ml", price: 35.00, image: "Piston press SS photo.jpg" }
    ],
    images: ["Piston press glass.jpg", "Piston press SS photo.jpg"],
    videos: ["VacPressDemo.mp4"],
    shippingUSA: [
      "Standard: $8 (one or more products)",
      "Express: $25 (one or more products)"
    ],
    stripeLink: "PASTE_STRIPE_PAYMENT_LINK_HERE",
    paypalLink: "PASTE_PAYPAL_LINK_HERE"
  },
  {
    id: "vacbrew",
    title: "VacBrew",
    category: "Cold Coffee Extractors",
    short: "Portable cold coffee extractors that create high vacuum with condensed steam.",
    notes: "Condensed steam water creates high vacuum in 2 seconds; vacuum pulls water through coffee grind. Fresh cold coffee in 5–60 mins depending on size/grind. No oxidation during vacuum extraction.",
    variants: [
      { name: "Personal size (home)", material: "Borosilicate glass", size: "500 ml", price: 65.00, image: "VacBrewGS.PNG" },
      { name: "Office / coffee shop", material: "Borosilicate glass", size: "2000 ml", price: 180.00, image: "Glass Large.jpg" },
      { name: "Home / office", material: "304 Stainless steel", size: "1500 ml", price: 130.00, image: "SSF.PNG" },
      { name: "Coffee shop", material: "304 Stainless steel", size: "3500 ml", price: 170.00, image: "Stainless Large.jpg" }
    ],
    images: ["VacBrewGS.PNG", "Glass Large.jpg", "SSF.PNG", "Stainless Large.jpg"],
    videos: ["VacBrewDemo.mp4"],
    shippingUSA: [
      "Standard: $19.99 (one or more products)",
      "Express: $44.99 (one or more products)"
    ],
    stripeLink: "PASTE_STRIPE_PAYMENT_LINK_HERE",
    paypalLink: "PASTE_PAYPAL_LINK_HERE"
  },
  {
    id: "vacbrew-commercial",
    title: "VacBrew Commercial",
    category: "Commercial Extractors",
    short: "Commercial cold brew extractors operated with vacuum pumps (concentrated cold brew in ~60 minutes).",
    notes: "Produces fresh coffee with aroma retained; no oxidation during vacuum extraction. Concentrated cold brew in ~60 minutes.",
    variants: [
      { name: "7-Gal light (low vacuum, up to 5×)", material: "304 Stainless steel", size: "7-Gal", weight: "28 kg", price: 2300.00, image: "VacBrew 7 Gal.jpg" },
      { name: "15-Gal light (low vacuum, up to 5×)", material: "304 Stainless steel", size: "15-Gal", weight: "33 kg", price: 2800.00, image: "VacBrew 15 gals.jpg" },
      { name: "7-Gal heavy duty (high vacuum, up to 10×)", material: "304 Stainless steel", size: "7-Gal", weight: "85 kg", price: 3500.00, image: "VacBrew 7 Gal Hard Extracter.jpg" },
      { name: "20-Gal heavy duty (high vacuum, up to 10×)", material: "304 Stainless steel", size: "20-Gal", weight: "115 kg", price: 5800.00, image: "CCommercial 20Gal.PNG" },
      { name: "50-Gal heavy duty (high vacuum, up to 10×)", material: "304 Stainless steel", size: "50-Gal", weight: "225 kg", price: 11500.00, image: "VacBrewCommercial50Gal.PNG" }
    ],
    images: ["VacBrew 7 Gal.jpg", "VacBrew 15 gals.jpg", "VacBrew 7 Gal Hard Extracter.jpg", "CCommercial 20Gal.PNG", "VacBrewCommercial50Gal.PNG"],
    videos: [],
    shippingUSA: [
      "Standard: $200 (7-Gal light), $250 (15-Gal light), $450 (7-Gal heavy), $750 (20-Gal heavy), $1200 (50-Gal heavy)",
      "7-day delivery / set up / training: $1000 (7-Gal light), $1100 (15-Gal light), $1350 (7-Gal heavy), $1550 (20-Gal heavy), $2000 (50-Gal heavy)"
    ],
    stripeLink: "PASTE_STRIPE_PAYMENT_LINK_HERE",
    paypalLink: "PASTE_PAYPAL_LINK_HERE"
  },
  {
    id: "concentrated-cold-brew",
    title: "5× and 10× Concentrated Cold Brew Coffee",
    category: "Bottled Coffee",
    short: "32 oz concentrated cold brew in amber glass bottle (extracted with icy cold water by VacBrew Commercial).",
    notes: "Fresh concentrated cold brew for fast mixing or serving.",
    variants: [
      { name: "5× Concentrated (32 oz)", price: 13.50, image: "CCBottle.PNG" },
      { name: "10× Concentrated (32 oz)", price: 23.00, image: "CCBottle.PNG" }
    ],
    images: ["CCBottle.PNG"],
    videos: [],
    shippingUSA: [
      "Standard: $12.99 (one or more 32 oz bottles)",
      "Express: $35 (one or more 32 oz bottles)"
    ],
    stripeLink: "PASTE_STRIPE_PAYMENT_LINK_HERE",
    paypalLink: "PASTE_PAYPAL_LINK_HERE"
  },
  {
    id: "safelyroasted",
    title: "SafelyRoasted",
    category: "Roasted Coffee Beans",
    short: "Organically grown Ethiopia origin coffee beans, roasted longer with less oxygen to keep flavor and aroma.",
    notes: "4× more roasting time and effort; roast in less oxygen; keep flavors/aroma; try not to burn beans for healthier taste.",
    variants: [
      { name: "1/2 lb", price: 12.50, image: "SafelyRoastedHalf.jpg" },
      { name: "1 lb", price: 23.00, image: "SafelyRoasted1lb.PNG" },
      { name: "3 lbs", price: 65.00, image: "SafelyRoasted3lbs.jpg" },
      { name: "5 lbs", price: 105.00, image: "SafelyRoasted5lbs.PNG" },
      { name: "10 lbs", price: 200.00, image: "SafelyRoasted10lbs.jpg" }
    ],
    images: ["Logo coffee.jpg", "SafelyRoastedHalf.jpg", "SafelyRoasted1lb.PNG", "SafelyRoasted3lbs.jpg", "SafelyRoasted5lbs.PNG", "SafelyRoasted10lbs.jpg"],
    videos: [],
    shippingUSA: [
      "Standard: $7.99 (1/2 lb), $9.99 (1 lb), $17.99 (3 lbs), $23 (5 lbs), $38 (10 lbs)",
      "Express: $17.99 (1/2 lb), $19.99 (1 lb), $35 (3 lbs), $40 (5 lbs), $50 (10 lbs)"
    ],
    stripeLink: "PASTE_STRIPE_PAYMENT_LINK_HERE",
    paypalLink: "PASTE_PAYPAL_LINK_HERE"
  },
  {
    id: "ez-braider",
    title: "E-Z Braider",
    category: "Hair Braiding Machine",
    short: "Professional hair braiding machine (up to 750 RPM) — braids ~3× faster than a professional hair braider.",
    notes: "Braids micro to jumbo sizes. See demo videos.",
    variants: [{ name: "Basic set", price: 150.00, image: "ezbasic.PNG" }],
    images: ["ezbasic.PNG", "EZ Braider long hair.PNG", "ezbtreebraid.PNG", "ezfuhair.PNG", "ezbraidercolorext.PNG", "ezjump.PNG"],
    videos: ["eznatural.mp4", "ezextension.mp4", "ezcoloryam.mp4", "ezfuson.mp4"],
    shippingUSA: [
      "Standard: $15 (one or more products)",
      "Express: $35 (one or more products)"
    ],
    stripeLink: "PASTE_STRIPE_PAYMENT_LINK_HERE",
    paypalLink: "PASTE_PAYPAL_LINK_HERE"
  },
  {
    id: "brown-rice-snack",
    title: "100% Whole Grain Brown Rice Snack",
    category: "Snacks",
    short: "Whole grain brown rice snack (not fried). Low GI; antioxidants, vitamins, and minerals.",
    notes: "Not fried; no sugar for plain; low GI; rich antioxidants/vitamins/minerals.",
    variants: [
      { name: "Plain (small)", price: 3.00, image: "100%BRPlainS.jpg" },
      { name: "Plain (medium)", price: 5.00, image: "100%BRPlainM.PNG" },
      { name: "Cinnamon (small)", price: 4.00, image: "BRCinnamon.jpg" },
      { name: "Coffee flavor (small)", price: 4.00, image: "BRCoffee.jpg" }
    ],
    images: ["100%BRPlainS.jpg", "100%BRPlainM.PNG", "BRCinnamon.jpg", "BRCoffee.jpg"],
    videos: [],
    shippingUSA: [
      "Standard: $15 (up to 5 bags), $25 (up to 10), $35 (up to 20), $50 (1 case)",
      "Express: $25 (up to 5), $35 (up to 10), $45 (up to 20), $75 (1 case)",
      "7–10 day delivery: $45 (1 case), $55 (2), $65 (3), $70 (5+)"
    ],
    stripeLink: "PASTE_STRIPE_PAYMENT_LINK_HERE",
    paypalLink: "PASTE_PAYPAL_LINK_HERE"
  },
  {
    id: "i-brew",
    title: "I Brew (Future Product)",
    category: "Future Products",
    short: "Reusable coffee cartridge + permanently reusable bottle. Brew with mouth suction power.",
    notes: "Not finished yet. Can produce when there are numerous orders.",
    variants: [
      { name: "Cartridge for PET bottle", price: 13.00, image: "IBrewwaterbottle.PNG" },
      { name: "+ 350 ml double-wall bottle (SS or glass)", price: 30.00, image: "I Brew Glass.jpg" },
      { name: "+ 500 ml double-wall bottle (SS or glass)", price: 37.00, image: "I Brew SS.jpg" }
    ],
    images: ["IBrewwaterbottle.PNG", "I Brew Glass.jpg", "I Brew SS.jpg"],
    videos: [],
    shippingUSA: ["(Future product) Shipping discussed per order."],
    stripeLink: "PASTE_STRIPE_PAYMENT_LINK_HERE",
    paypalLink: "PASTE_PAYPAL_LINK_HERE"
  },
  {
    id: "wind-turbine",
    title: "Blade Tilting Type Wind Turbine (Future Product)",
    category: "Future Products",
    short: "Up to 40% efficiency; starts at 3 m/s; quiet; never stops at high wind speed; low RPM high torque; FOB Korea.",
    notes: "Can produce when there are more than 10 orders for each size. More turbines to be developed.",
    variants: [
      { name: "500 W", price: 3200.00, image: "WTBT5KW.PNG" },
      { name: "1 kW", price: 6900.00, image: "WTBT5KW.PNG" },
      { name: "3 kW", price: 16000.00, image: "WTBT5KW.PNG" },
      { name: "5 kW", price: 23000.00, image: "WTBT5KW.PNG" }
    ],
    images: ["WTBT5KW.PNG"],
    videos: ["WindTerbine1.mp4", "WindTerbine2.mp4"],
    shippingUSA: ["(Future product) Shipping discussed per order. FOB Korea."],
    stripeLink: "PASTE_STRIPE_PAYMENT_LINK_HERE",
    paypalLink: "PASTE_PAYPAL_LINK_HERE"
  }
];

function money(n){
  if(n === null || n === undefined) return "TBD";
  try { return new Intl.NumberFormat(undefined, {style:"currency", currency:"USD"}).format(n); }
  catch(e){ return "$" + n; }
}

function safeArray(x){ return Array.isArray(x) ? x : []; }

function updateQABadge(){
  const count = Number(localStorage.getItem("qa_count") || "0");
  const el = document.getElementById("qaBadge");
  if(el) el.textContent = String(count);
}

function buildCatalog(){
  const root = document.getElementById("catalog");
  if(!root) return;

  root.innerHTML = "";

  for(const item of CATALOG){
    const card = document.createElement("article");
    card.className = "card";

    const header = document.createElement("div");
    header.className = "card-header";
    header.innerHTML = `
      <div class="tag">${item.category}</div>
      <h3>${item.title}</h3>
    `;

    const body = document.createElement("div");
    body.className = "card-body";

    const short = document.createElement("p");
    short.className = "short";
    short.textContent = item.short || "";
    body.appendChild(short);

    // Media (first image + first video)
    const media = document.createElement("div");
    media.className = "media";

    const images = safeArray(item.images);
    const videos = safeArray(item.videos);

    if(images.length){
      const img = document.createElement("img");
      img.src = images[0];
      img.alt = item.title + " photo";
      img.loading = "lazy";
      img.onerror = () => { img.alt = "Image not found: " + images[0]; };
      media.appendChild(img);
    }

    if(videos.length){
      const vid = document.createElement("video");
      vid.src = videos[0];
      vid.controls = true;
      vid.preload = "metadata";
      media.appendChild(vid);
    }

    if(images.length || videos.length) body.appendChild(media);

    // Variants table
    const variants = safeArray(item.variants);
    if(variants.length){
      const table = document.createElement("table");
      table.className = "table";
      table.innerHTML = `
        <thead>
          <tr>
            <th>Variant</th>
            <th>Material</th>
            <th>Size</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody></tbody>
      `;
      const tbody = table.querySelector("tbody");

      for(const v of variants){
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${v.name || ""}</td>
          <td>${v.material || ""}</td>
          <td>${v.size || v.weight || ""}</td>
          <td>${money(v.price)}</td>
        `;
        tbody.appendChild(tr);
      }
      body.appendChild(table);
    }

    // Notes
    if(item.notes){
      const notes = document.createElement("div");
      notes.className = "small";
      notes.innerHTML = `<b>Notes:</b> ${item.notes}`;
      body.appendChild(notes);
    }

    // Shipping
    const shipping = safeArray(item.shippingUSA);
    if(shipping.length){
      const ship = document.createElement("div");
      ship.className = "small";
      ship.style.marginTop = "8px";
      ship.innerHTML = `<b>Shipping (USA):</b><br>${shipping.map(s => "• " + s).join("<br>")}`;
      body.appendChild(ship);
    }

    // Payment buttons (links)
    const actions = document.createElement("div");
    actions.className = "actions";

    const stripeOk = item.stripeLink && !item.stripeLink.includes("PASTE_");
    const paypalOk = item.paypalLink && !item.paypalLink.includes("PASTE_");

    const stripeA = document.createElement("a");
    stripeA.className = "pay" + (stripeOk ? "" : " disabled");
    stripeA.href = stripeOk ? item.stripeLink : "#";
    stripeA.target = "_blank";
    stripeA.rel = "noopener";
    stripeA.textContent = stripeOk ? "Pay by Card (Stripe)" : "Pay by Card (Stripe) — add link";
    actions.appendChild(stripeA);

    const paypalA = document.createElement("a");
    paypalA.className = "pay paypal" + (paypalOk ? "" : " disabled");
    paypalA.href = paypalOk ? item.paypalLink : "#";
    paypalA.target = "_blank";
    paypalA.rel = "noopener";
    paypalA.textContent = paypalOk ? "Pay with PayPal" : "Pay with PayPal — add link";
    actions.appendChild(paypalA);

    body.appendChild(actions);

    card.appendChild(header);
    card.appendChild(body);
    root.appendChild(card);
  }
}

document.getElementById("year")?.append(String(new Date().getFullYear()));
updateQABadge();
buildCatalog();