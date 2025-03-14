class ScMgmReferralEnhanced {
  constructor() {
    this.ScCommonMethods = new ScCommonMethods();
  }

  init() {
    this.cacheElements();
    if (!this.productTile) return;
    this.setupReferId();
    this.validateReferId();
    this.setupEventListeners();
  }

  cacheElements() {
    this.productTile = document.querySelector(".sc-product-tiles");
    this.errorModal = document.querySelector(".sc-error-modal");
    this.termsConditions = document.querySelector(".sc-terms-links");
    this.referHeader = this.productTile?.querySelector(".sc-product-tiles__head-wrapper");
    this.allPdt = this.productTile?.querySelector(".sc-product-tile-is-recommended");
    this.singlePdt = this.productTile?.querySelector(".sc-product-tile-recommended");
    this.queryString = Utils.getPageContext().queryString;
    this.queryParams = this.ScCommonMethods.getQueryParam(this.queryString, this.productTile?.getAttribute("data-query-param-code"));
  }

  setupReferId() {
    const referid = new URLSearchParams(window.location.search).get("referid");
    if (referid) {
      document.querySelectorAll(".sc-product-tiles a").forEach(el => {
        el.addEventListener("mousedown", (event) => {
          const anchor = event.target.closest("a");
          if (!anchor) return;
          const href = anchor.getAttribute("href");
          if (href.includes("retail.sc.com") && !href.includes(`referid=${referid}`)) {
            anchor.setAttribute("href", href.includes("?") ? `${href}&referid=${referid}` : `${href}?referid=${referid}`);
          }
        });
      });
    }
  }

  validateReferId() {
    const paramCodeLength = Number(this.productTile?.getAttribute("data-query-param-code-length"));
    if (!this.queryParams || this.queryParams.replace(/\W/g, "").length !== paramCodeLength) {
      this.errorModal?.classList.add("sc-error-modal--show");
      document.body.classList.add("modal-open");
    } else {
      this.handleProductDisplay();
    }
  }

  setupEventListeners() {
    document.body.addEventListener("click", (event) => this.handleBodyClick(event));
    window.addEventListener("scroll", () => this.handleSticky());
  }

  handleProductDisplay() {
    if (this.productTile?.getAttribute("data-recommended-lite")) {
      this.singlePdt?.classList.add("hide");
      this.handleRecommendedLite();
    } else {
      this.handleModalProduct();
    }
  }

  handleSticky() {
    const headingWrapper = this.productTile?.querySelector(".sc-filter");
    if (!headingWrapper) return;
    const headingPosition = this.ScCommonMethods.getPosition(headingWrapper);
    const isSticky = window.scrollY > headingPosition - (window.innerWidth > 768 ? 100 : 10);
    headingWrapper.classList.toggle("sc-filter--sticky", isSticky);
  }

  handleBodyClick(event) {
    const target = event.target;
    if (target.closest(".closebutton") || target.closest(".wrapper")) {
      document.body.classList.remove("modal-open");
    }
    if (target.closest(".sc-products-tile__copy-code")) {
      this.copyReferralCode(target);
    }
  }

  copyReferralCode(target) {
    const codeSpan = target.closest(".sc-products-tile-modal")?.querySelector(".sc-products-tile__applied-code span");
    if (codeSpan) {
      navigator.clipboard.writeText(codeSpan.innerText).then(() => {
        const messageDiv = document.querySelector(".sc-product-tiles__copy-message");
        messageDiv?.classList.add("sc-product-tiles__copy-message--show");
        setTimeout(() => messageDiv?.classList.remove("sc-product-tiles__copy-message--show"), 3000);
      });
    }
  }
}

const instance = new ScMgmReferralEnhanced();
instance.init();
