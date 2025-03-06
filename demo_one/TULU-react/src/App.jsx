import { useState } from "react";
import "./App.css";
import TradeUpLevelUpCampaigns from "./pages/sc-trade-up-level-up-campaign/sc-trade-up-level-up-campaign";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <TradeUpLevelUpCampaigns></TradeUpLevelUpCampaigns>
    </>
  );
}

export default App;
