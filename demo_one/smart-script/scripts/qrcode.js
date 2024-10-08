document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("generateQR").addEventListener("click", () => {
    console.log(window.AF_SMART_SCRIPT);
    if (window.AF_SMART_SCRIPT) {
      console.log(result);
      var result_url = "No output from script";

      if (result && result.clickURL) {
        result_url = result.clickURL;
        // Display the QR code in the div
        window.AF_SMART_SCRIPT.displayQrCode("qr_code_div", {
          logo: "../images/onelinklogo.png", // optional logo
          colorCode: "#3498db", // optional custom color
        });

        // Optionally fire an impression
        setTimeout(() => {
          window.AF_SMART_SCRIPT.fireImpressionsLink();
        }, 1000);
      } else {
        console.error("Failed to generate OneLink URL");
      }
      document.getElementById("output_url").innerHTML = result_url;
    } else {
      console.error("AF Smart Script not loaded");
    }
  });
});
