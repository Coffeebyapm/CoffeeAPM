"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const catalog = document.getElementById("product-catalog");
  const status = document.getElementById("catalog-status");
  const noResults = document.getElementById("no-results");
  const filters = document.getElementById("category-filters");
  const searchInput = document.getElementById("product-search");
  const clearButton = document.getElementById("clear-search");
  const menuToggle = document.getElementById("menu-toggle");
  const navigation = document.getElementById("main-navigation");
  const year = document.getElementById("current-year");

  let activeGroup = "all";
  let query = "";

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", function () {
      const open = navigation.classList.toggle("open");
      menuToggle.classList.toggle("open", open);
      menuToggle.setAttribute("aria-expanded", String(open));
    });
  }

  if (!Array.isArray(window.PRODUCTS)) {
    if (status) {
      status.textContent =
        "Products could not be loaded. Please check products.js.";
      status.classList.add("catalog-error");
    }
    return;
  }

  function safeText(value) {
    return String(value == null ? "" : value);
  }

  function makeId(value) {
    return safeText(value)
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function createFilters() {
    if (!filters) {
      return;
    }

    window.PRODUCTS.forEach(function (group) {
      const button = document.createElement("button");

      button.type = "button";
      button.className = "filter-button";
      button.dataset.filter = group.group;
      button.textContent = group.group;

      filters.appendChild(button);
    });

    filters.addEventListener("click", function (event) {
      const button = event.target.closest(".filter-button");

      if (!button) {
        return;
      }

      activeGroup = button.dataset.filter || "all";

      filters
        .querySelectorAll(".filter-button")
        .forEach(function (item) {
          item.classList.toggle("active", item === button);
        });

      render();
    });
  }

  function paymentButton(url, label, className) {
    if (!url) {
      return (
        '<span class="payment-button unavailable-button">' +
        "Unavailable" +
        "</span>"
      );
    }

    return (
      '<a class="payment-button ' +
      className +
      '" href="' +
      url +
      '" target="_blank" rel="noopener noreferrer">' +
      label +
      "</a>"
    );
  }

  function imageGallery(item) {
    const images = Array.isArray(item.images) ? item.images : [];

    if (!images.length) {
      return (
        '<div class="media-placeholder">' +
        "No product image available" +
        "</div>"
      );
    }

    return images
      .map(function (src, index) {
        return (
          '<img class="main-product-image" src="' +
          src +
          '" alt="' +
          safeText(item.name) +
          " image " +
          (index + 1) +
          '" loading="lazy">'
        );
      })
      .join("");
  }

  function videoGallery(item) {
    const videos = Array.isArray(item.videos) ? item.videos : [];

    if (!videos.length) {
      return "";
    }

    return (
      '<div class="video-gallery">' +
      videos
        .map(function (src, index) {
          return (
            '<div class="video-wrapper">' +
            '<video controls preload="metadata" playsinline aria-label="' +
            safeText(item.name) +
            " demo video " +
            (index + 1) +
            '">' +
            '<source src="' +
            src +
            '" type="video/mp4">' +
            "Your browser does not support this video." +
            "</video>" +
            "</div>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  function productCard(item, groupName) {
    const specs = Array.isArray(item.specs) ? item.specs : [];

    const testNotice =
      typeof item.stripe === "string" &&
      item.stripe.indexOf("/test_") !== -1
        ? '<p class="test-payment-notice">' +
          "Stripe test link — replace with a live Stripe link before real sales." +
          "</p>"
        : "";

    return (
      '<article class="product-card">' +
      '<div class="product-media">' +
      '<div class="image-gallery">' +
      imageGallery(item) +
      "</div>" +
      videoGallery(item) +
      "</div>" +
      '<div class="product-card-content">' +
      '<p class="product-category">' +
      safeText(groupName) +
      "</p>" +
      "<h3>" +
      safeText(item.name) +
      "</h3>" +
      '<p class="product-price">' +
      safeText(item.price) +
      "</p>" +
      '<ul class="product-specifications">' +
      specs
        .map(function (spec) {
          return "<li>" + safeText(spec) + "</li>";
        })
        .join("") +
      "</ul>" +
      '<div class="payment-section">' +
      '<p class="payment-title">Purchase Options</p>' +
      '<div class="payment-buttons">' +
      paymentButton(item.stripe, "Pay by Card", "stripe-button") +
      paymentButton(item.paypal, "Pay with PayPal", "paypal-button") +
      "</div>" +
      testNotice +
      "</div>" +
      '<a class="product-question-link" href="question.html?product=' +
      encodeURIComponent(item.name) +
      '">' +
      "Ask a question about this product →" +
      "</a>" +
      "</div>" +
      "</article>"
    );
  }

  function render() {
    if (!catalog) {
      return;
    }

    const filteredGroups = window.PRODUCTS
      .map(function (group) {
        const items = group.items.filter(function (item) {
          const text = [
            group.group,
            group.description,
            item.name,
            item.price
          ]
            .concat(item.specs || [])
            .join(" ")
            .toLowerCase();

          return !query || text.indexOf(query) !== -1;
        });

        return {
          group: group.group,
          description: group.description,
          shipping: group.shipping,
          items: items
        };
      })
      .filter(function (group) {
        const groupMatches =
          activeGroup === "all" || group.group === activeGroup;

        return groupMatches && group.items.length > 0;
      });

    catalog.innerHTML = filteredGroups
      .map(function (group, index) {
        return (
          '<section class="product-group" id="' +
          makeId(group.group) +
          '">' +
          '<div class="product-group-header">' +
          "<div>" +
          '<p class="product-group-number">' +
          "Product Group " +
          String(index + 1).padStart(2, "0") +
          "</p>" +
          "<h2>" +
          safeText(group.group) +
          "</h2>" +
          '<p class="product-group-description">' +
          safeText(group.description) +
          "</p>" +
          "</div>" +
          '<span class="product-count">' +
          group.items.length +
          (group.items.length === 1 ? " product" : " products") +
          "</span>" +
          "</div>" +
          '<div class="product-items-grid">' +
          group.items
            .map(function (item) {
              return productCard(item, group.group);
            })
            .join("") +
          "</div>" +
          '<div class="group-shipping">' +
          '<span class="shipping-icon">🚚</span>' +
          "<div>" +
          "<strong>Shipping Information</strong>" +
          "<p>" +
          safeText(group.shipping) +
          "</p>" +
          "</div>" +
          "</div>" +
          "</section>"
        );
      })
      .join("");

    if (status) {
      status.hidden = true;
    }

    if (noResults) {
      noResults.hidden = filteredGroups.length > 0;
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      query = searchInput.value.trim().toLowerCase();

      if (clearButton) {
        clearButton.hidden = query.length === 0;
      }

      render();
    });
  }

  if (clearButton) {
    clearButton.addEventListener("click", function () {
      query = "";

      if (searchInput) {
        searchInput.value = "";
      }

      clearButton.hidden = true;
      render();
    });
  }

  createFilters();
  render();
});
