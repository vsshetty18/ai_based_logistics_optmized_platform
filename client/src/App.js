import React, { useState } from "react";
import axios from "axios";

function App() {
  const [distance, setDistance] = useState("");
  const [traffic, setTraffic] = useState("low");
  const [weather, setWeather] = useState("good");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!distance) return alert("Enter distance");

    try {
      setLoading(true);
      const res = await axios.post(
        "https://ai-based-logistics-optmized-platform.onrender.com/predict",
        { distance, traffic, weather }
      );
      setResult(res.data);
    } catch (err) {
      alert("Error");
    } finally {
      setLoading(false);
    }
  };

  const getRiskColor = () => {
    if (!result) return "#fff";
    if (result.riskLevel === "High") return "#ff4d4d";
    if (result.riskLevel === "Medium") return "#ffc107";
    return "#00ff87";
  };

  return (
    <div style={styles.container}>
      <div style={styles.bgAnimation}></div>

      <div style={styles.card}>
        <h1 style={styles.title}>🚚 Logistics Optimizer</h1>

        <input
          type="number"
          placeholder="Enter Distance (km)"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          style={styles.input}
        />

        <select onChange={(e) => setTraffic(e.target.value)} style={styles.select}>
          <option value="low">Low Traffic</option>
          <option value="high">High Traffic</option>
        </select>

        <select onChange={(e) => setWeather(e.target.value)} style={styles.select}>
          <option value="good">Good Weather</option>
          <option value="bad">Bad Weather</option>
        </select>

        <button style={styles.button} onClick={handleSubmit}>
          {loading ? "Analyzing..." : "Predict Delay"}
        </button>

        {result && (
          <div style={styles.result}>
            <h2>Delay Probability</h2>
            <h1>{result.delayProbability}%</h1>

            <div style={styles.progressBar}>
              <div
                style={{
                  ...styles.progressFill,
                  width: `${result.delayProbability}%`,
                  background: getRiskColor(),
                }}
              ></div>
            </div>

            <h3 style={{ color: getRiskColor() }}>
              Risk: {result.riskLevel}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
    overflow: "hidden",
    position: "relative",
  },

  bgAnimation: {
    position: "absolute",
    width: "200%",
    height: "200%",
    background:
      "linear-gradient(45deg, #667eea, #764ba2, #6a11cb, #2575fc)",
    animation: "moveBg 10s infinite alternate",
    zIndex: -1,
  },

  card: {
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(20px)",
    padding: "30px",
    borderRadius: "16px",
    width: "400px",
    textAlign: "center",
    color: "#fff",
    boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
  },

  title: {
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "none",
  },

  select: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "none",
  },

  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(to right, #00c6ff, #0072ff)",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },

  result: {
    marginTop: "20px",
  },

  progressBar: {
    width: "100%",
    height: "10px",
    background: "#444",
    borderRadius: "10px",
    overflow: "hidden",
    margin: "10px 0",
  },

  progressFill: {
    height: "100%",
  },
};

export default App;
