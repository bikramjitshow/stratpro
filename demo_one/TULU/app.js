// app.js

// Import the config object
// import { responseData } from "./responses.js";
// import { configData } from "./config.js";
import { API } from "./getApiResponse.js";

// Example usage:
const entryRequest = {
  SubjectID: "3440000001689575",
  ContextName: "Customer",
  ContainerName: "EGSRTULUEntry",
  AppID: "RTIMHK",
  Placements: "",
  Channel: "Mobile",
  Direction: "Inbound",
  Contexts: [
    { Type: "LanguagePref", Value: "EN", Key: "Language" },
    { Type: "Context", Value: "home_hero_banner", Key: "CurrentPage" },
  ],
};

console.log(API.getEGSRTULUDiversifyResponse());
console.log(API.getEGSRTULUTradeUpResponse());
console.log(API.getEGSRTULULevelUpResponse());
