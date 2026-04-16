import React, { useState } from "react";
import axios from "axios";

function App() {
  const [distance, setDistance] = useState("");
  const [traffic, setTraffic] = useState("low");
  const [weather, setWeather] = useState("good");
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    const res = await axios.post(
      "https://ai-based-logistics-optmized-platform.onrender.com/predict",
      { distance, traffic, weather }
    );
    setResult(res.data);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚚 Logistics Optimizer</h1>

      <input placeholder="Distance" onChange={(e) => setDistance(e.target.value)} />
      <br /><br />

      <select onChange={(e) => setTraffic(e.target.value)}>
        <option value="low">Low Traffic</option>
        <option value="high">High Traffic</option>
      </select>

      <br /><br />

      <select onChange={(e) => setWeather(e.target.value)}>
        <option value="good">Good Weather</option>
        <option value="bad">Bad Weather</option>
      </select>

      <br /><br />

      <button onClick={handleSubmit}>Predict</button>

      {result && (
        <div>
          <h2>Delay: {result.delayProbability}%</h2>
          <h3>Risk: {result.riskLevel}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
