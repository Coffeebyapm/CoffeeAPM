"use strict";

document.addEventListener("DOMContentLoaded", () => {
const catalog = document.getElementById("product-catalog");
const catalogStatus = document.getElementById("catalog-status");
const noResults = document.getElementById("no-results");
const filtersContainer = document.getElementById("category-filters");
const searchInput = document.getElementById("product-search");
const clearSearchButton = document.getElementById("clear-search");
const menuToggle = document.getElementById("menu-toggle");
const mainNavigation = document.getElementById("main-navigation");
const currentYear = document.getElementById("current-year");
const supportCount = document.getElementById("support-count");

let activeFilter = "all";
let searchText = "";

if (currentYear) {
currentYear.textContent = new Date().getFullYear();
}

setupMobileMenu();
setupSupportCount();

if (!Array.isArray(window.PRODUCTS) && typeof PRODUCTS === "undefined") {
showCatalogError(
"The product catalog could not be loaded. Please confirm that products.js is saved in the same GitHub folder as index.html."
);
return;
}

const productGroups =
typeof PRODUCTS !== "undefined" && Array.isArray(PRODUCTS)
? PRODUCTS
: window.PRODUCTS;

if (!productGroups.length) {
showCatalogError("No products are currently available.");
return;
}

createCategoryFilters(productGroups);
renderCatalog(productGroups);

if (searchInput) {
searchInput.addEventListener("input", (event) => {
searchText = event.target.value.trim().toLowerCase();

```
  if (clearSearchButton) {
    clearSearchButton.hidden = searchText.length === 0;
  }

  renderCatalog(productGroups);
});
```

}

if (clearSearchButton) {
clearSearchButton.addEventListener("click", () => {
searchText = "";

```
  if (searchInput) {
    searchInput.value = "";
    searchInput.focus();
  }

  clearSearchButton.hidden = true;
  renderCatalog(productGroups);
});
```

}

function setupMobileMenu() {
if (!menuToggle || !mainNavigation) {
return;
}

```
menuToggle.addEventListener("click", () => {
  const isOpen = mainNavigation.classList.toggle("open");

  menuToggle.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNavigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNavigation.classList.remove("open");
    menuToggle.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    mainNavigation.classList.remove("open");
    menuToggle.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});
```

}

function setupSupportCount() {
if (!supportCount) {
return;
}

```
const savedCount = Number.parseInt(
  localStorage.getItem("coffeeApmSupportCount") || "0",
  10
);

supportCount.textContent = Number.isFinite(savedCount)
  ? String(savedCount)
  : "0";
```

}

function createCategoryFilters(groups) {
if (!filtersContainer) {
return;
}

```
groups.forEach((group) => {
  const button = document.createElement("button");

  button.type = "button";
  button.className = "filter-button";
  button.dataset.filter = group.group;
  button.textContent = group.group;

  button.addEventListener("click", () => {
    activeFilter = group.group;

    filtersContainer
      .querySelectorAll(".filter-button")
      .forEach((filterButton) => {
        filterButton.classList.toggle(
          "active",
          filterButton.dataset.filter === activeFilter
        );
      });

    renderCatalog(groups);
    scrollCatalogIntoView();
  });

  filtersContainer.appendChild(button);
});

const allProductsButton = filtersContainer.querySelector(
  '[data-filter="all"]'
);

if (allProductsButton) {
  allProductsButton.addEventListener("click", () => {
    activeFilter = "all";

    filtersContainer
      .querySelectorAll(".filter-button")
      .forEach((filterButton) => {
        filterButton.classList.toggle(
          "active",
          filterButton.dataset.filter === "all"
        );
      });

    renderCatalog(groups);
    scrollCatalogIntoView();
  });
}
```

}

function renderCatalog(groups) {
if (!catalog) {
return;
}

```
catalog.innerHTML = "";

const matchingGroups = groups
  .map((group) => {
    const groupMatchesSearch = textMatches(
      [
        group.group,
        group.description,
        group.shipping
      ].join(" ")
    );

    const matchingItems = group.items.filter((item) => {
      const searchableText = [
        group.group,
        group.description,
        item.name,
        item.price,
        ...(item.specs || [])
      ].join(" ");

      return textMatches(searchableText);
    });

    return {
      ...group,
      visibleItems: groupMatchesSearch ? group.items : matchingItems
    };
  })
  .filter((group) => {
    const matchesCategory =
      activeFilter === "all" || group.group === activeFilter;

    return matchesCategory && group.visibleItems.length > 0;
  });

if (catalogStatus) {
  catalogStatus.hidden = true;
}

if (noResults) {
  noResults.hidden = matchingGroups.length > 0;
}

matchingGroups.forEach((group, groupIndex) => {
  catalog.appendChild(createProductGroup(group, groupIndex));
});

attachMediaErrorHandlers();
```

}

function createProductGroup(group, groupIndex) {
const section = document.createElement("section");

```
section.className = "product-group";
section.id = makeId(group.group);

const header = document.createElement("div");
header.className = "product-group-header";

const headingBlock = document.createElement("div");

const eyebrow = document.createElement("p");
eyebrow.className = "product-group-number";
eyebrow.textContent = `Product Group ${String(groupIndex + 1).padStart(
  2,
  "0"
)}`;

const title = document.createElement("h2");
title.textContent = group.group;

const description = document.createElement("p");
description.className = "product-group-description";
description.textContent = group.description;

headingBlock.append(eyebrow, title, description);

const itemCount = document.createElement("span");
itemCount.className = "product-count";
itemCount.textContent = `${group.visibleItems.length} ${
  group.visibleItems.length === 1 ? "product" : "products"
}`;

header.append(headingBlock, itemCount);

const itemsGrid = document.createElement("div");
itemsGrid.className = "product-items-grid";

group.visibleItems.forEach((item) => {
  itemsGrid.appendChild(createProductCard(item, group.group));
});

const shipping = document.createElement("div");
shipping.className = "group-shipping";

shipping.innerHTML = `
  <span class="shipping-icon" aria-hidden="true">🚚</span>
  <div>
    <strong>Shipping Information</strong>
    <p>${escapeHtml(group.shipping)}</p>
  </div>
`;

section.append(header, itemsGrid, shipping);

return section;
```

}

function createProductCard(item, groupName) {
const article = document.createElement("article");
article.className = "product-card";

```
const mediaSection = document.createElement("div");
mediaSection.className = "product-media";

const imageGallery = createImageGallery(item.images || [], item.name);
mediaSection.appendChild(imageGallery);

if (Array.isArray(item.videos) && item.videos.length > 0) {
  mediaSection.appendChild(createVideoGallery(item.videos, item.name));
}

const content = document.createElement("div");
content.className = "product-card-content";

const category = document.createElement("p");
category.className = "product-category";
category.textContent = groupName;

const title = document.createElement("h3");
title.textContent = item.name;

const price = document.createElement("p");
price.className = "product-price";
price.textContent = item.price;

const specifications = document.createElement("ul");
specifications.className = "product-specifications";

(item.specs || []).forEach((specification) => {
  const listItem = document.createElement("li");
  listItem.textContent = specification;
  specifications.appendChild(listItem);
});

const paymentSection = document.createElement("div");
paymentSection.className = "payment-section";

const paymentTitle = document.createElement("p");
paymentTitle.className = "payment-title";
paymentTitle.textContent = "Purchase Options";

const paymentButtons = document.createElement("div");
paymentButtons.className = "payment-buttons";

paymentButtons.appendChild(
  createPaymentButton(
    item.stripe,
    "Pay by Card",
    "stripe-button",
    item.name
  )
);

paymentButtons.appendChild(
  createPaymentButton(
    item.paypal,
    "Pay with PayPal",
    "paypal-button",
    item.name
  )
);

paymentSection.append(paymentTitle, paymentButtons);

if (isStripeTestLink(item.stripe)) {
  const testNotice = document.createElement("p");
  testNotice.className = "test-payment-notice";
  testNotice.textContent =
    "Stripe test link — replace with a live Stripe link before accepting real payments.";
  paymentSection.appendChild(testNotice);
}

const questionLink = document.createElement("a");
questionLink.className = "product-question-link";
questionLink.href = `question.html?product=${encodeURIComponent(
  item.name
)}`;
questionLink.textContent = "Ask a question about this product →";

content.append(
  category,
  title,
  price,
  specifications,
  paymentSection,
  questionLink
);

article.append(mediaSection, content);

return article;
```

}

function createImageGallery(images, productName) {
const gallery = document.createElement("div");
gallery.className = "image-gallery";

```
if (!images.length) {
  gallery.appendChild(createMediaPlaceholder("No product image available"));
  return gallery;
}

const mainImageWrapper = document.createElement("div");
mainImageWrapper.className = "main-product-image-wrapper";

const mainImage = document.createElement("img");
mainImage.className = "main-product-image";
mainImage.src = images[0];
mainImage.alt = productName;
mainImage.loading = "lazy";

mainImageWrapper.appendChild(mainImage);
gallery.appendChild(mainImageWrapper);

if (images.length > 1) {
  const thumbnails = document.createElement("div");
  thumbnails.className = "image-thumbnails";

  images.forEach((imageSource, index) => {
    const thumbnailButton = document.createElement("button");

    thumbnailButton.type = "button";
    thumbnailButton.className =
      index === 0
        ? "thumbnail-button active"
        : "thumbnail-button";

    thumbnailButton.setAttribute(
      "aria-label",
      `View image ${index + 1} of ${productName}`
    );

    const thumbnailImage = document.createElement("img");
    thumbnailImage.src = imageSource;
    thumbnailImage.alt = "";
    thumbnailImage.loading = "lazy";

    thumbnailButton.appendChild(thumbnailImage);

    thumbnailButton.addEventListener("click", () => {
      mainImage.src = imageSource;
      mainImage.alt = `${productName} image ${index + 1}`;

      thumbnails
        .querySelectorAll(".thumbnail-button")
        .forEach((button) => button.classList.remove("active"));

      thumbnailButton.classList.add("active");
    });

    thumbnails.appendChild(thumbnailButton);
  });

  gallery.appendChild(thumbnails);
}

return gallery;
```

}

function createVideoGallery(videos, productName) {
const container = document.createElement("div");
container.className = "video-gallery";

```
const heading = document.createElement("p");
heading.className = "media-heading";
heading.textContent =
  videos.length === 1 ? "Demo Video" : "Demo Videos";

container.appendChild(heading);

videos.forEach((videoSource, index) => {
  const wrapper = document.createElement("div");
  wrapper.className = "video-wrapper";

  const video = document.createElement("video");
  video.controls = true;
  video.preload = "metadata";
  video.playsInline = true;
  video.setAttribute(
    "aria-label",
    `${productName} demo video ${index + 1}`
  );

  const source = document.createElement("source");
  source.src = videoSource;
  source.type = getVideoMimeType(videoSource);

  video.appendChild(source);

  const fallbackText = document.createTextNode(
    "Your browser does not support this video."
  );
  video.appendChild(fallbackText);

  wrapper.appendChild(video);
  container.appendChild(wrapper);
});

return container;
```

}

function createPaymentButton(link, label, className, productName) {
if (!link) {
const unavailable = document.createElement("span");
unavailable.className = `payment-button unavailable-button ${className}`;
unavailable.textContent = `${label} — unavailable`;
return unavailable;
}

```
const anchor = document.createElement("a");
anchor.className = `payment-button ${className}`;
anchor.href = link;
anchor.target = "_blank";
anchor.rel = "noopener noreferrer";
anchor.setAttribute("aria-label", `${label} for ${productName}`);
anchor.textContent = label;

return anchor;
```

}

function createMediaPlaceholder(message) {
const placeholder = document.createElement("div");
placeholder.className = "media-placeholder";
placeholder.textContent = message;
return placeholder;
}

function attachMediaErrorHandlers() {
document
.querySelectorAll(".main-product-image, .thumbnail-button img")
.forEach((image) => {
image.addEventListener(
"error",
() => {
const filename = image.getAttribute("src") || "image";

```
        if (image.classList.contains("main-product-image")) {
          const wrapper = image.closest(
            ".main-product-image-wrapper"
          );

          if (wrapper) {
            wrapper.innerHTML = `
              <div class="media-placeholder">
                <strong>Image not found</strong>
                <small>${escapeHtml(filename)}</small>
              </div>
            `;
          }
        } else {
          const button = image.closest(".thumbnail-button");

          if (button) {
            button.style.display = "none";
          }
        }
      },
      { once: true }
    );
  });

document.querySelectorAll(".video-wrapper video").forEach((video) => {
  video.addEventListener(
    "error",
    () => {
      const source = video.querySelector("source");
      const filename = source ? source.getAttribute("src") : "video";
      const wrapper = video.closest(".video-wrapper");

      if (wrapper) {
        wrapper.innerHTML = `
          <div class="media-placeholder">
            <strong>Video not found</strong>
            <small>${escapeHtml(filename || "video")}</small>
          </div>
        `;
      }
    },
    { once: true }
  );
});
```

}

function textMatches(text) {
if (!searchText) {
return true;
}

```
return String(text).toLowerCase().includes(searchText);
```

}

function isStripeTestLink(link) {
return typeof link === "string" && link.includes("stripe.com/test_");
}

function getVideoMimeType(filename) {
const extension = filename.split(".").pop().toLowerCase();

```
if (extension === "webm") {
  return "video/webm";
}

if (extension === "ogg" || extension === "ogv") {
  return "video/ogg";
}

return "video/mp4";
```

}

function makeId(text) {
return String(text)
.toLowerCase()
.replace(/&/g, "and")
.replace(/[^a-z0-9]+/g, "-")
.replace(/^-+|-+$/g, "");
}

function scrollCatalogIntoView() {
const productsSection = document.getElementById("products");

```
if (productsSection) {
  productsSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
```

}

function showCatalogError(message) {
if (catalogStatus) {
catalogStatus.className = "catalog-status catalog-error";
catalogStatus.textContent = message;
catalogStatus.hidden = false;
}

```
if (catalog) {
  catalog.innerHTML = "";
}
```

}

function escapeHtml(value) {
return String(value)
.replaceAll("&", "&")
.replaceAll("<", "<")
.replaceAll(">", ">")
.replaceAll('"', """)
.replaceAll("'", "'");
}
});
