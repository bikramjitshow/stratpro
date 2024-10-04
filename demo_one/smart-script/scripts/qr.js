document.addEventListener("DOMContentLoaded", () => {
  
  document.getElementById("generateQR").addEventListener("click", () => {
    // console.log(window.AF_SMART_SCRIPT);
    if (window.AF_SMART_SCRIPT) {
      // load the input URL to thr input_url textArea
      document.getElementById("input_url").innerHTML = window.location.href;
      // Define OneLink URL and parameters
      var oneLinkURL = "https://engmntqa.onelink.me/LtRd/";
      // If a media source key is NOT FOUND on the link and NO default value is found, the script will return a null string
      var mediaSource = {
        keys: ["inmedia"],
        defaultValue: "my_media_default_source",
      };
      var campaign = { keys: ["incmp"] };

      // Generate the OneLink URL using AppsFlyer's Smart Script
      const result = window.AF_SMART_SCRIPT.generateOneLinkURL({
        oneLinkURL,
        afParameters: {
          mediaSource: mediaSource,
          campaign: campaign,
        },
      });

      console.log(result);
      console.log(document.getElementById("input_url").innerHTML);
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
