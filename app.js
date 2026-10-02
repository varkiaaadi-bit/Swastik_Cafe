/**
 * SWASTIK CYBER CAFE - CLIENT APPLICATION LOGIC
 * Plain Vanilla JS, Mobile-First, Fast 3G Optimized
 * Features:
 * - Instant Live Search & Category Filtering
 * - Real-time Indian Standard Time (IST) Open/Closed Badge
 * - Bilingual Language Switcher (EN / HI)
 * - Expandable Document Checklists & FAQ Accordions
 * - WhatsApp Prefilled Link Generator
 * - Lazy-loading Google Maps (Saves 3G Mobile Data)
 */

(function () {
  "use strict";

  // Check if data.js loaded successfully
  if (!window.SWASTIK_DATA) {
    console.error("SWASTIK_DATA configuration not found. Please ensure data.js is loaded.");
    return;
  }

  const DATA = window.SWASTIK_DATA;

  // State Management
  const state = {
    currentLang: "en", // 'en' or 'hi'
    searchQuery: "",
    selectedCategory: "all",
    expandedDocs: new Set(),
    expandedFaqs: new Set()
  };

  // DOM Elements Cache
  const elements = {
    html: document.documentElement,
    langToggleBtn: document.getElementById("lang-toggle-btn"),
    currentLangLabel: document.getElementById("current-lang-label"),
    headerBrandName: document.getElementById("header-brand-name"),
    headerLocation: document.getElementById("header-location"),
    headerStatusPill: document.getElementById("header-status-pill"),
    headerStatusText: document.getElementById("header-status-text"),
    headerStatusTextShort: document.getElementById("header-status-text-short"),
    topAdmissionBanner: document.getElementById("top-admission-banner"),
    admissionBannerText: document.getElementById("admission-banner-text"),
    heroName: document.getElementById("hero-name"),
    heroTagline1: document.getElementById("hero-tagline-1"),
    heroTagline2: document.getElementById("hero-tagline-2"),
    heroCallBtn: document.getElementById("hero-call-btn"),
    heroWaBtn: document.getElementById("hero-wa-btn"),
    updatesStrip: document.getElementById("updates-strip"),
    updatesList: document.getElementById("updates-list-container"),
    searchInput: document.getElementById("service-search-input"),
    searchClearBtn: document.getElementById("search-clear-btn"),
    categoryPills: document.getElementById("category-pills-container"),
    searchInfoBar: document.getElementById("search-info-bar"),
    servicesGrid: document.getElementById("services-grid-container"),
    noServicesFound: document.getElementById("no-services-found"),
    noServicesMsg: document.getElementById("no-services-msg"),
    resetSearchBtn: document.getElementById("reset-search-btn"),
    istDetailBox: document.getElementById("ist-detail-box"),
    istDetailTitle: document.getElementById("ist-detail-title"),
    istDetailSub: document.getElementById("ist-detail-sub"),
    scheduleTable: document.getElementById("schedule-table"),
    contactAddressText: document.getElementById("contact-address-text"),
    getDirectionsBtn: document.getElementById("get-directions-btn"),
    mapContainer: document.getElementById("map-container"),
    loadMapBtn: document.getElementById("load-map-btn"),
    faqList: document.getElementById("faq-list-container"),
    usefulLinks: document.getElementById("useful-links-container"),
    coursesList: document.getElementById("courses-list-container"),
    tuitionGradesBadge: document.getElementById("tuition-grades-badge"),
    tuitionSubjects: document.getElementById("tuition-subjects-container"),
    tuitionFeatures: document.getElementById("tuition-features-container"),
    footerShopName: document.getElementById("footer-shop-name"),
    currentYear: document.getElementById("current-year")
  };

  /**
   * Helper: Get localized string from object or fallback
   */
  function t(obj, lang) {
    if (!obj) return "";
    const current = lang || state.currentLang;
    if (typeof obj === "string") return obj;
    return obj[current] || obj["en"] || "";
  }

  /**
   * Helper: Format 24hr "HH:MM" to human readable 12hr "H:MM AM/PM"
   */
  function format12Hr(time24) {
    if (!time24) return "";
    const [h, m] = time24.split(":").map(Number);
    const period = h >= 12 ? "PM" : "AM";
    const hr = h % 12 || 12;
    const min = m === 0 ? "00" : m < 10 ? `0${m}` : m;
    return `${hr}:${min} ${period}`;
  }

  /**
   * Calculate Live Shop Open/Closed Status in Indian Standard Time (IST)
   */
  function calculateISTStatus() {
    // Current time converted specifically to Asia/Kolkata (IST)
    const istString = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    const istDate = new Date(istString);

    const currentDay = istDate.getDay(); // 0 = Sun, 1 = Mon ...
    const currentHours = istDate.getHours();
    const currentMinutes = istDate.getMinutes();
    const currentTimeMinutes = currentHours * 60 + currentMinutes;

    // Find schedule for today
    const todaySchedule = DATA.schedule.find(s => s.days.includes(currentDay));

    let isOpen = false;
    let nextEventTextEn = "";
    let nextEventTextHi = "";

    if (todaySchedule) {
      const [openH, openM] = todaySchedule.open.split(":").map(Number);
      const [closeH, closeM] = todaySchedule.close.split(":").map(Number);
      const openTimeMinutes = openH * 60 + openM;
      const closeTimeMinutes = closeH * 60 + closeM;

      if (currentTimeMinutes >= openTimeMinutes && currentTimeMinutes < closeTimeMinutes) {
        // Shop is currently OPEN
        isOpen = true;
        const close12 = format12Hr(todaySchedule.close);
        nextEventTextEn = `Open now, closes at ${close12}`;
        nextEventTextHi = `दुकान खुली है, ${close12} पर बंद होगी`;
      } else if (currentTimeMinutes < openTimeMinutes) {
        // Shop is CLOSED, opens later today
        isOpen = false;
        const open12 = format12Hr(todaySchedule.open);
        nextEventTextEn = `Closed, opens today at ${open12}`;
        nextEventTextHi = `दुकान बंद है, आज सुबह ${open12} खुलेगी`;
      } else {
        // Shop is CLOSED for the day, opens tomorrow
        isOpen = false;
        const tomorrowDay = (currentDay + 1) % 7;
        const tomorrowSchedule = DATA.schedule.find(s => s.days.includes(tomorrowDay));
        const tomorrowOpen12 = tomorrowSchedule ? format12Hr(tomorrowSchedule.open) : "9:00 AM";
        nextEventTextEn = `Closed, opens tomorrow at ${tomorrowOpen12}`;
        nextEventTextHi = `दुकान बंद है, कल सुबह ${tomorrowOpen12} खुलेगी`;
      }
    } else {
      // Fallback
      isOpen = false;
      nextEventTextEn = "Closed today";
      nextEventTextHi = "आज दुकान बंद है";
    }

    return {
      isOpen,
      textEn: nextEventTextEn,
      textHi: nextEventTextHi,
      shortEn: isOpen ? "Open" : "Closed",
      shortHi: isOpen ? "खुली है" : "बंद है"
    };
  }

  /**
   * Render/Update IST Live Status Badges
   */
  function updateLiveStatusUI() {
    const status = calculateISTStatus();
    const displayText = state.currentLang === "hi" ? status.textHi : status.textEn;
    const shortText = state.currentLang === "hi" ? status.shortHi : status.shortEn;

    // Update Header Pill
    if (elements.headerStatusPill) {
      elements.headerStatusPill.className = `status-pill ${status.isOpen ? "is-open" : "is-closed"}`;
      if (elements.headerStatusText) elements.headerStatusText.textContent = displayText;
      if (elements.headerStatusTextShort) elements.headerStatusTextShort.textContent = shortText;
    }

    // Update Detailed Box in Contact Section
    if (elements.istDetailBox) {
      elements.istDetailBox.className = `ist-status-detail-box ${status.isOpen ? "is-open" : "is-closed"}`;
      elements.istDetailTitle.textContent = displayText;
      elements.istDetailSub.textContent = state.currentLang === "hi" ? "भारतीय मानक समय (IST) अनुसार" : "Verified via Indian Standard Time (IST)";
    }
  }

  /**
   * Render Static Text & Localized UI Strings
   */
  function renderI18n() {
    const lang = state.currentLang;
    const dict = DATA.i18n[lang] || DATA.i18n.en;

    // Set html lang
    elements.html.lang = lang;

    // Toggle button label (shows the OTHER language option)
    if (elements.currentLangLabel) {
      elements.currentLangLabel.textContent = lang === "en" ? "हिन्दी" : "English";
    }

    // Replace all data-i18n elements
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update Brand Name & Taglines
    if (elements.headerBrandName) {
      elements.headerBrandName.innerHTML = `${t(DATA.business.name)} <span>${t(DATA.business.subTitle).split(" ")[0]}</span>`;
    }
    if (elements.headerLocation) {
      elements.headerLocation.textContent = lang === "hi" ? "सुजानपुर, पठानकोट (पंजाब)" : "Sujanpur, Pathankot (Punjab)";
    }
    if (elements.heroName) {
      elements.heroName.textContent = t(DATA.business.name);
    }
    if (elements.heroTagline1) {
      elements.heroTagline1.textContent = t(DATA.business.taglinePrimary);
    }
    if (elements.heroTagline2) {
      elements.heroTagline2.textContent = t(DATA.business.taglineSecondary);
    }
    if (elements.contactAddressText) {
      elements.contactAddressText.textContent = t(DATA.business.address);
    }
    if (elements.footerShopName) {
      elements.footerShopName.textContent = t(DATA.business.name);
    }

    // Search Input Placeholder
    if (elements.searchInput) {
      elements.searchInput.placeholder = dict.searchPlaceholder || "Search services...";
    }

    // Admission Banner
    if (DATA.admissionBanner && DATA.admissionBanner.enabled) {
      elements.topAdmissionBanner.style.display = "block";
      elements.admissionBannerText.textContent = t(DATA.admissionBanner.text);
    } else if (elements.topAdmissionBanner) {
      elements.topAdmissionBanner.style.display = "none";
    }

    // Render Dynamic Content in Current Language
    renderUpdatesStrip();
    renderCategoryPills();
    renderServices();
    renderScheduleTable();
    renderFAQ();
    renderUsefulLinks();
    renderEducationSection();
    updateLiveStatusUI();
  }

  /**
   * Render Updates Strip
   */
  function renderUpdatesStrip() {
    if (!elements.updatesStrip || !elements.updatesList) return;

    const updates = DATA.latestUpdates || [];
    if (updates.length === 0) {
      elements.updatesStrip.style.display = "none";
      return;
    }

    elements.updatesStrip.style.display = "block";
    elements.updatesList.innerHTML = updates.map(item => `
      <div class="update-item">
        <span class="update-badge">${t(item.badge)}</span>
        <span>${t(item.text)}</span>
      </div>
    `).join("");
  }

  /**
   * Render Category Filter Pills
   */
  function renderCategoryPills() {
    if (!elements.categoryPills) return;

    elements.categoryPills.innerHTML = DATA.serviceCategories.map(cat => `
      <button 
        type="button" 
        class="category-pill ${state.selectedCategory === cat.id ? "active" : ""}" 
        data-category="${cat.id}"
        role="tab"
        aria-selected="${state.selectedCategory === cat.id ? "true" : "false"}"
      >
        ${t(cat.label)}
      </button>
    `).join("");
  }

  /**
   * Filter & Render Services
   */
  function renderServices() {
    if (!elements.servicesGrid) return;

    const query = state.searchQuery.trim().toLowerCase();
    const category = state.selectedCategory;
    const lang = state.currentLang;
    const dict = DATA.i18n[lang] || DATA.i18n.en;

    // Filter services by Category and Search Query
    const filtered = DATA.services.filter(service => {
      // 1. Category check
      if (category !== "all" && service.category !== category) {
        return false;
      }

      // 2. Search query check
      if (!query) return true;

      // Match against English title & summary
      const enTitle = (service.title?.en || "").toLowerCase();
      const enSummary = (service.summary?.en || "").toLowerCase();
      const enDocs = (service.documents?.en || []).join(" ").toLowerCase();

      // Match against Hindi title & summary
      const hiTitle = (service.title?.hi || "").toLowerCase();
      const hiSummary = (service.summary?.hi || "").toLowerCase();
      const hiDocs = (service.documents?.hi || []).join(" ").toLowerCase();

      return (
        enTitle.includes(query) ||
        enSummary.includes(query) ||
        enDocs.includes(query) ||
        hiTitle.includes(query) ||
        hiSummary.includes(query) ||
        hiDocs.includes(query)
      );
    });

    // If searching, prioritize title matches first, then summary, then document-only matches
    if (query) {
      filtered.sort((a, b) => {
        const aTitleMatch = (a.title?.en || "").toLowerCase().includes(query) || (a.title?.hi || "").toLowerCase().includes(query);
        const bTitleMatch = (b.title?.en || "").toLowerCase().includes(query) || (b.title?.hi || "").toLowerCase().includes(query);
        if (aTitleMatch && !bTitleMatch) return -1;
        if (!aTitleMatch && bTitleMatch) return 1;
        return 0;
      });
    }

    // Update Result Counter Info
    if (elements.searchInfoBar) {
      if (query || category !== "all") {
        elements.searchInfoBar.textContent = lang === "hi"
          ? `${filtered.length} सेवाएं उपलब्ध हैं (कुल ${DATA.services.length} में से)`
          : `Showing ${filtered.length} of ${DATA.services.length} services`;
      } else {
        elements.searchInfoBar.textContent = lang === "hi"
          ? `कुल ${DATA.services.length} सेवाएं उपलब्ध हैं:`
          : `Showing all ${DATA.services.length} services:`;
      }
    }

    // Toggle No Results View
    if (filtered.length === 0) {
      elements.servicesGrid.innerHTML = "";
      elements.noServicesFound.style.display = "block";
      elements.noServicesMsg.textContent = dict.noServicesFound;
      return;
    }

    elements.noServicesFound.style.display = "none";

    // Generate Cards
    elements.servicesGrid.innerHTML = filtered.map(service => {
      const isExpanded = state.expandedDocs.has(service.id);
      const title = t(service.title);
      const summary = t(service.summary);
      const docs = service.documents ? (service.documents[lang] || service.documents.en || []) : [];
      
      // Category Label
      const catObj = DATA.serviceCategories.find(c => c.id === service.category);
      const catLabel = catObj ? t(catObj.label) : service.category;

      // Fees & Time logic (Blank in data => fallback message)
      const feeText = service.fee && service.fee.trim() !== "" ? service.fee : dict.callForPrice;
      const timeText = service.time && service.time.trim() !== "" ? service.time : dict.contactShop;

      // Prefilled WhatsApp Enquiry URL
      const waMsg = encodeURIComponent(service.whatsappQuery || `Hi Swastik Cafe, I want to inquire about: ${service.title.en}`);
      const waUrl = `https://wa.me/${DATA.business.whatsappNumber}?text=${waMsg}`;

      return `
        <article class="service-card" data-service-id="${service.id}">
          <div class="service-card-top">
            <div class="service-meta-row">
              <span class="service-category-tag">${catLabel}</span>
            </div>
            <h3 class="service-title">${title}</h3>
            <p class="service-summary">${summary}</p>

            <!-- Fee & Time Badges -->
            <div class="service-info-badges">
              <span class="info-badge info-badge-fee" title="Estimated Service Fee">
                <span>💰</span>
                <span>${dict.feeLabel} <strong>${feeText}</strong></span>
              </span>
              <span class="info-badge info-badge-time" title="Estimated Processing Time">
                <span>⏱️</span>
                <span>${dict.timeLabel} <strong>${timeText}</strong></span>
              </span>
            </div>

            <!-- Documents Needed Accordion Checklist -->
            <div class="docs-accordion ${isExpanded ? "open" : ""}">
              <button 
                type="button" 
                class="docs-toggle-btn" 
                data-toggle-doc="${service.id}"
                aria-expanded="${isExpanded ? "true" : "false"}"
              >
                <span>📋 ${dict.documentsNeeded}</span>
                <svg class="icon icon-sm docs-toggle-icon" aria-hidden="true"><use href="#icon-chevron"></use></svg>
              </button>

              <div class="docs-drawer">
                <span class="draft-warning-badge">⚠️ ${dict.draftNotice}</span>
                <ul class="docs-checklist">
                  ${docs.map(doc => `
                    <li class="doc-item">
                      <svg class="icon icon-sm doc-check-icon" aria-hidden="true"><use href="#icon-check"></use></svg>
                      <span>${doc}</span>
                    </li>
                  `).join("")}
                </ul>
              </div>
            </div>
          </div>

          <!-- Direct WhatsApp Action Button -->
          <div class="service-action-wrap">
            <a 
              href="${waUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-card-wa"
              aria-label="Enquire about ${title} on WhatsApp"
            >
              <svg class="icon icon-sm" aria-hidden="true"><use href="#icon-whatsapp"></use></svg>
              <span>${dict.enquireService}</span>
            </a>
          </div>
        </article>
      `;
    }).join("");
  }

  /**
   * Render Schedule Table
   */
  function renderScheduleTable() {
    if (!elements.scheduleTable) return;
    const tbody = elements.scheduleTable.querySelector("tbody");
    if (!tbody) return;

    tbody.innerHTML = DATA.schedule.map(slot => `
      <tr>
        <td><strong>${t(slot.dayLabel)}</strong></td>
        <td>${format12Hr(slot.open)} – ${format12Hr(slot.close)}</td>
      </tr>
    `).join("");
  }

  /**
   * Render FAQ Accordion
   */
  function renderFAQ() {
    if (!elements.faqList) return;

    elements.faqList.innerHTML = DATA.faq.map((item, index) => {
      const isOpen = state.expandedFaqs.has(index);
      return `
        <div class="faq-item ${isOpen ? "open" : ""}" data-faq-index="${index}">
          <button 
            type="button" 
            class="faq-question-btn" 
            data-toggle-faq="${index}"
            aria-expanded="${isOpen ? "true" : "false"}"
          >
            <span>${t(item.q)}</span>
            <svg class="icon icon-sm faq-icon-chevron" aria-hidden="true"><use href="#icon-chevron"></use></svg>
          </button>
          <div class="faq-answer-drawer">
            <p>${t(item.a)}</p>
          </div>
        </div>
      `;
    }).join("");
  }

  /**
   * Render Useful Citizen & Govt Portal Links
   */
  function renderUsefulLinks() {
    if (!elements.usefulLinks) return;
    const dict = DATA.i18n[state.currentLang] || DATA.i18n.en;

    elements.usefulLinks.innerHTML = DATA.usefulLinks.map(portal => `
      <a href="${portal.url}" target="_blank" rel="noopener noreferrer" class="portal-link-card">
        <div>
          <span class="portal-category-tag">${portal.category}</span>
          <h3 class="portal-title">
            <span>${portal.title}</span>
            <svg class="icon icon-sm" aria-hidden="true"><use href="#icon-external"></use></svg>
          </h3>
          <p class="portal-desc">${portal.desc}</p>
        </div>
        <span class="portal-action">${dict.externalLinkNotice} &rarr;</span>
      </a>
    `).join("");
  }

  /**
   * Render Secondary Education Section (Courses & Tuition - Compact)
   */
  function renderEducationSection() {
    const dict = DATA.i18n[state.currentLang] || DATA.i18n.en;

    // Courses List
    if (elements.coursesList) {
      elements.coursesList.innerHTML = DATA.coursesSection.list.map(course => `
        <div class="course-item-compact">
          <div class="course-name-dur">
            <span>${course.name}</span>
            <span class="course-duration-tag">${course.duration}</span>
          </div>
          <p class="course-desc-text">${course.desc}</p>
        </div>
      `).join("");
    }

    // Tuition Classes & Subjects
    if (elements.tuitionGradesBadge) {
      elements.tuitionGradesBadge.textContent = `${DATA.tuitionSection.schoolClasses} | ${DATA.tuitionSection.collegeClasses}`;
    }

    if (elements.tuitionSubjects) {
      elements.tuitionSubjects.innerHTML = DATA.tuitionSection.subjects.map(sub => `
        <span class="subject-chip">${sub}</span>
      `).join("");
    }

    if (elements.tuitionFeatures) {
      elements.tuitionFeatures.innerHTML = DATA.tuitionSection.features.map(f => `
        <li>
          <svg class="icon icon-sm" style="color: var(--color-open-green);" aria-hidden="true"><use href="#icon-check"></use></svg>
          <span>${t(f)}</span>
        </li>
      `).join("");
    }
  }

  /**
   * Lazy Load Google Maps Embed
   */
  function setupLazyMap() {
    if (!elements.loadMapBtn || !elements.mapContainer) return;

    elements.loadMapBtn.addEventListener("click", function () {
      elements.mapContainer.innerHTML = `
        <iframe 
          class="map-iframe" 
          src="${DATA.business.googleMapsEmbedUrl}" 
          title="Swastik Cyber Cafe Location in Sujanpur, Pathankot" 
          loading="lazy" 
          allowfullscreen="" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      `;
    });
  }

  /**
   * Event Listeners & Interactions
   */
  function setupEventListeners() {
    // 1. Language Toggle Button
    if (elements.langToggleBtn) {
      elements.langToggleBtn.addEventListener("click", () => {
        state.currentLang = state.currentLang === "en" ? "hi" : "en";
        renderI18n();
      });
    }

    // 2. Live Search Input
    if (elements.searchInput) {
      elements.searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        if (elements.searchClearBtn) {
          elements.searchClearBtn.style.display = state.searchQuery ? "flex" : "none";
        }
        renderServices();
      });
    }

    // 3. Clear Search Button
    if (elements.searchClearBtn) {
      elements.searchClearBtn.addEventListener("click", () => {
        state.searchQuery = "";
        elements.searchInput.value = "";
        elements.searchClearBtn.style.display = "none";
        elements.searchInput.focus();
        renderServices();
      });
    }

    // 4. Reset Search Button (in no results view)
    if (elements.resetSearchBtn) {
      elements.resetSearchBtn.addEventListener("click", () => {
        state.searchQuery = "";
        state.selectedCategory = "all";
        elements.searchInput.value = "";
        if (elements.searchClearBtn) elements.searchClearBtn.style.display = "none";
        renderCategoryPills();
        renderServices();
      });
    }

    // 5. Category Pill Clicks
    if (elements.categoryPills) {
      elements.categoryPills.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-category]");
        if (!btn) return;
        state.selectedCategory = btn.getAttribute("data-category");
        renderCategoryPills();
        renderServices();
      });
    }

    // 6. Service Documents Accordion Toggle (Delegated)
    if (elements.servicesGrid) {
      elements.servicesGrid.addEventListener("click", (e) => {
        const toggleBtn = e.target.closest("[data-toggle-doc]");
        if (!toggleBtn) return;
        const serviceId = toggleBtn.getAttribute("data-toggle-doc");
        if (state.expandedDocs.has(serviceId)) {
          state.expandedDocs.delete(serviceId);
        } else {
          state.expandedDocs.add(serviceId);
        }
        renderServices();
      });
    }

    // 7. FAQ Accordion Toggle (Delegated)
    if (elements.faqList) {
      elements.faqList.addEventListener("click", (e) => {
        const toggleBtn = e.target.closest("[data-toggle-faq]");
        if (!toggleBtn) return;
        const index = parseInt(toggleBtn.getAttribute("data-toggle-faq"), 10);
        if (state.expandedFaqs.has(index)) {
          state.expandedFaqs.delete(index);
        } else {
          state.expandedFaqs.add(index);
        }
        renderFAQ();
      });
    }
  }

  /**
   * Application Initialization
   */
  function init() {
    // Set initial Year in footer
    if (elements.currentYear) {
      elements.currentYear.textContent = new Date().getFullYear();
    }

    // Render full bilingual UI
    renderI18n();

    // Setup map lazy loader
    setupLazyMap();

    // Attach event listeners
    setupEventListeners();

    // Check IST status every 60 seconds
    setInterval(updateLiveStatusUI, 60000);
  }

  // Start app when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
