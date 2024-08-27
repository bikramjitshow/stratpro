class referalTermsConsentJourney {
  constructor() {
    let lastAccessedField = null;
  }
  init() {
    document.addEventListener("DOMContentLoaded", function () {
      console.log("referalTermsConsentJourney INIT !!")
      // verify modal active
      document.body.addEventListener("click", function (event) {
        let closestAnchor = event.target.closest("a");
        let mtextcontentId = event.target
          .closest(".m-text-content")
          .getAttribute("data-modal-id");
        let modalAttr = closestAnchor.getAttribute("data-modal-source");
        let modalredirecturl = closestAnchor.getAttribute("data-redirect-url");
        let activeModal = document.querySelector(".sc-prod-col-terms-modal");
        let activeModalId = activeModal.getAttribute("data-modal-id");
        if (modalAttr === activeModalId) {
          if (!localStorage.getItem("mtextcontentId")) {
            localStorage.setItem("mtextcontentId", mtextcontentId);
          }
          this.activeScrollToBottom(modalredirecturl, mtextcontentId);
          this.activeDownloadButton();
        }
      });
    });
  }

  // activeScrollToBottom on modal active
  activeScrollToBottom(toredirect, mtextcontentId) {
    var scrollbtn = document.querySelector(".sc-products-tile__scroll-step");
    var scrollableDiv = document.querySelector(".sc-prod-col-terms-modal");
    var modalClose = document.querySelector(".sc-prod-col-terms-modal__close");
    var redirectUrl = toredirect;

    let clickCount = 0;
    const stepsPerClick = 1; // Number of scroll steps per click
    const totalSteps = 4; // Total number of steps to scroll
    let manualScrollDetected = false;
    let previousMtextcontentId = localStorage.getItem("mtextcontentId");

    // Check if the user has been redirected before
    if (localStorage.getItem("termsAccepted") === "true") {
      if (mtextcontentId !== previousMtextcontentId) {
        localStorage.setItem("mtextcontentId", mtextcontentId);
      } else {
        modalClose.click();
        setTimeout(() => {
          window.location.href = redirectUrl;
        }, 1000);
      }
    }

    let scrollToBottom = (element, steps) => {
      const totalHeight = element.scrollHeight - element.clientHeight;
      const stepHeight = totalHeight / totalSteps;

      element.scrollBy(0, stepHeight * steps);

      if (element.scrollTop + element.clientHeight >= element.scrollHeight) {
        // Scrolled to the bottom
        manualScrollDetected = true;
      }
    }

    scrollableDiv.addEventListener("scroll", function () {
      if (
        scrollableDiv.scrollTop + scrollableDiv.clientHeight >=
        scrollableDiv.scrollHeight
      ) {
        // Scrolled to the bottom manually
        manualScrollDetected = true;
      }
    });

    scrollbtn.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      if (manualScrollDetected || clickCount >= totalSteps) {
        localStorage.setItem("termsAccepted", "true");
        window.location.href = redirectUrl;
      } else {
        clickCount++;
        scrollToBottom(scrollableDiv, stepsPerClick);

        if (clickCount >= totalSteps) {
          // If it was the last step, set manualScrollDetected to true to handle the next click as redirect
          manualScrollDetected = true;
        }
      }
    });
  }


  // activeDownloadButton on modal active
  activeDownloadButton() {
    // Download function
    let downloadPdf = (pdfurl, filename) => {
      // Fetch the PDF file and force download
      if (pdfurl) {
        let pdfUrl = decodeURI(pdfurl).toString();
        fetch(pdfUrl)
          .then((response) => response.blob())
          .then((blob) => {
            var url = window.URL.createObjectURL(blob);
            // setTimeout(() => {

            // }, 2000);
            var a = document.createElement("a");
            a.style.display = "none";
            a.href = url;
            a.download = filename || "file.pdf"; // The filename to save as
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
          })
          .catch(() => alert("An error occurred while downloading the PDF."));
      }
    }

    // Click event
    var downloadButton = document.querySelector(
      ".sc-products-tile__download-button"
    );
    console.log(downloadButton);
    downloadButton.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      let closestAnchor = event.target.closest("a");
      let datapdfurl = closestAnchor.getAttribute("data-pdf-url");
      // URL of the PDF
      var pdfUrl = datapdfurl.toString();

      const encodedURL = encodeURI(pdfUrl);
      var url = new URL(pdfUrl);
      var pathname = url.pathname;
      var segments = pathname.split("/");
      var filename = segments[segments.length - 1];

      // Fetch the PDF file and force download
      downloadPdf(encodedURL, filename);
    });
  }
}

const Instance = new referalTermsConsentJourney();
Instance.init();
