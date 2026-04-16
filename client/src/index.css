// App.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [distance, setDistance] = useState("");
  const [traffic, setTraffic] = useState("low");
  const [weather, setWeather] = useState("good");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("predict");
  const [history, setHistory] = useState([]);

  const handleSubmit = async () => {
    if (!distance) {
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(
        "[ai-based-logistics-optmized-platform.onrender.com](https://ai-based-logistics-optmized-platform.onrender.com/predict)",
        { distance, traffic, weather }
      );
      setResult(res.data);
      setHistory((prev) => [
        {
          id: Date.now(),
          distance,
          traffic,
          weather,
          ...res.data,
          timestamp: new Date().toLocaleTimeString(),
        },
        ...prev.slice(0, 4),
      ]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getRiskColor = (level) => {
    if (level === "High") return "#ff6b6b";
    if (level === "Medium") return "#feca57";
    return "#00d2d3";
  };

  const getRiskGradient = (level) => {
    if (level === "High") return "linear-gradient(135deg, #ff6b6b, #ee5a24)";
    if (level === "Medium") return "linear-gradient(135deg, #feca57, #ff9f43)";
    return "linear-gradient(135deg, #00d2d3, #1dd1a1)";
  };

  return (
    <div className="app">
      {/* Animated Background */}
      <div className="bg-wrapper">
        <div className="bg-gradient"></div>
        <div className="bg-grid"></div>
        <div className="floating-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
          <div className="orb orb-4"></div>
        </div>
      </div>

      {/* Main Container */}
      <div className="main-container">
        {/* Header */}
        <header className="header">
          <div className="logo">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="[w3.org](http://www.w3.org/2000/svg)">
                <path
                  d="M20 8H17V4H3C1.9 4 1 4.9 1 6V17H3C3 18.66 4.34 20 6 20C7.66 20 9 18.66 9 17H15C15 18.66 16.34 20 18 20C19.66 20 21 18.66 21 17H23V12L20 8ZM6 18.5C5.17 18.5 4.5 17.83 4.5 17C4.5 16.17 5.17 15.5 6 15.5C6.83 15.5 7.5 16.17 7.5 17C7.5 17.83 6.83 18.5 6 18.5ZM19.5 9.5L21.46 12H17V9.5H19.5ZM18 18.5C17.17 18.5 16.5 17.83 16.5 17C16.5 16.17 17.17 15.5 18 15.5C18.83 15.5 19.5 16.17 19.5 17C19.5 17.83 18.83 18.5 18 18.5Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="logo-text">LogiFlow AI</span>
          </div>
          <nav className="nav-tabs">
            <button
              className={`nav-tab ${activeTab === "predict" ? "active" : ""}`}
              onClick={() => setActiveTab("predict")}
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" />
              </svg>
              Predict
            </button>
            <button
              className={`nav-tab ${activeTab === "analytics" ? "active" : ""}`}
              onClick={() => setActiveTab("analytics")}
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 20V10M12 20V4M6 20V14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Analytics
            </button>
            <button
              className={`nav-tab ${activeTab === "history" ? "active" : ""}`}
              onClick={() => setActiveTab("history")}
            >
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M12 6V12L16 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              History
            </button>
          </nav>
          <div className="header-status">
            <div className="status-indicator online"></div>
            <span>System Online</span>
          </div>
        </header>

        {/* Content Area */}
        <main className="content">
          {activeTab === "predict" && (
            <div className="predict-view">
              {/* Input Card */}
              <div className="card input-card">
                <div className="card-header">
                  <h2>Route Parameters</h2>
                  <span className="card-badge">AI-Powered</span>
                </div>

                <div className="input-group">
                  <label>Distance</label>
                  <div className="input-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" className="input-icon">
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                        fill="currentColor"
                      />
                    </svg>
                    <input
                      type="number"
                      placeholder="Enter distance"
                      value={distance}
                      onChange={(e) => setDistance(e.target.value)}
                    />
                    <span className="input-suffix">km</span>
                  </div>
                </div>

                <div className="input-row">
                  <div className="input-group">
                    <label>Traffic Conditions</label>
                    <div className="select-wrapper">
                      <svg viewBox="0 0 24 24" fill="none" className="input-icon">
                        <path
                          d="M4 15C4 15 5 14 8 14C11 14 13 16 16 16C19 16 20 15 20 15V3C20 3 19 4 16 4C13 4 11 2 8 2C5 2 4 3 4 3V15ZM4 15V22"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <select
                        value={traffic}
                        onChange={(e) => setTraffic(e.target.value)}
                      >
                        <option value="low">Low Traffic</option>
                        <option value="high">High Traffic</option>
                      </select>
                      <svg viewBox="0 0 24 24" className="select-arrow">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>

                  <div className="input-group">
                    <label>Weather</label>
                    <div className="select-wrapper">
                      <svg viewBox="0 0 24 24" fill="none" className="input-icon">
                        <circle
                          cx="12"
                          cy="12"
                          r="4"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M12 2V4M12 20V22M2 12H4M20 12H22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      <select
                        value={weather}
                        onChange={(e) => setWeather(e.target.value)}
                      >
                        <option value="good">Clear Skies</option>
                        <option value="bad">Adverse Weather</option>
                      </select>
                      <svg viewBox="0 0 24 24" className="select-arrow">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>

                <button
                  className={`submit-btn ${loading ? "loading" : ""}`}
                  onClick={handleSubmit}
                  disabled={loading || !distance}
                >
                  {loading ? (
                    <>
                      <div className="spinner"></div>
                      <span>Analyzing Route...</span>
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M13 10V3L4 14H11V21L20 10H13Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span>Predict Delay</span>
                    </>
                  )}
                </button>
              </div>

              {/* Result Card */}
              <div className={`card result-card ${result ? "has-result" : ""}`}>
                {result ? (
                  <>
                    <div className="result-header">
                      <h2>Analysis Complete</h2>
                      <div
                        className="risk-badge"
                        style={{ background: getRiskGradient(result.riskLevel) }}
                      >
                        {result.riskLevel} Risk
                      </div>
                    </div>

                    <div className="result-main">
                      <div className="delay-display">
                        <div className="delay-circle">
                          <svg viewBox="0 0 100 100">
                            <circle
                              cx="50"
                              cy="50"
                              r="45"
                              className="circle-bg"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="45"
                              className="circle-progress"
                              style={{
                                stroke: getRiskColor(result.riskLevel),
                                strokeDasharray: `${result.delayProbability * 2.83} 283`,
                              }}
                            />
                          </svg>
                          <div className="delay-value">
                            <span className="number">{result.delayProbability}</span>
                            <span className="percent">%</span>
                          </div>
                        </div>
                        <p className="delay-label">Delay Probability</p>
                      </div>

                      <div className="result-details">
                        <div className="detail-item">
                          <div className="detail-icon">
                            <svg viewBox="0 0 24 24" fill="none">
                              <path
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                              <path
                                d="M12 6V12L16 14"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </div>
                          <div className="detail-content">
                            <span className="detail-label">Est. Delay</span>
                            <span className="detail-value">
                              {Math.round(result.delayProbability * 0.6)} min
                            </span>
                          </div>
                        </div>

                        <div className="detail-item">
                          <div className="detail-icon">
                            <svg viewBox="0 0 24 24" fill="none">
                              <path
                                d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                            </svg>
                          </div>
                          <div className="detail-content">
                            <span className="detail-label">Distance</span>
                            <span className="detail-value">{distance} km</span>
                          </div>
                        </div>

                        <div className="detail-item">
                          <div className="detail-icon">
                            <svg viewBox="0 0 24 24" fill="none">
                              <path
                                d="M22 12H18L15 21L9 3L6 12H2"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="detail-content">
                            <span className="detail-label">Confidence</span>
                            <span className="detail-value">94.2%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="result-recommendations">
                      <h3>Recommendations</h3>
                      <ul>
                        {result.riskLevel === "High" && (
                          <>
                            <li>Consider alternative routes</li>
                            <li>Add buffer time to delivery window</li>
                            <li>Monitor real-time traffic updates</li>
                          </>
                        )}
                        {result.riskLevel === "Medium" && (
                          <>
                            <li>Standard precautions advised</li>
                            <li>Check weather updates before departure</li>
                          </>
                        )}
                        {result.riskLevel === "Low" && (
                          <>
                            <li>Optimal conditions detected</li>
                            <li>Proceed with standard schedule</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </>
                ) : (
                  <div className="empty-result">
                    <div className="empty-icon">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M9 17H15M9 13H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <h3>No Analysis Yet</h3>
                    <p>Enter route parameters and click predict to see results</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === "analytics" && (
            <div className="analytics-view">
              <div className="card stats-card">
                <h2>Performance Overview</h2>
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-icon blue">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M20 8H17V4H3V17H1V19H9V17H7V6H15V17H13V19H23V17H21V12L20 8Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="stat-content">
                      <span className="stat-value">1,284</span>
                      <span className="stat-label">Routes Analyzed</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-icon green">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="stat-content">
                      <span className="stat-value">94.2%</span>
                      <span className="stat-label">Accuracy Rate</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-icon orange">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="stat-content">
                      <span className="stat-value">2.3s</span>
                      <span className="stat-label">Avg Response</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-icon purple">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M13 10V3L4 14H11V21L20 10H13Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="stat-content">
                      <span className="stat-value">99.9%</span>
                      <span className="stat-label">Uptime</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card chart-card">
                <h2>Weekly Delay Trends</h2>
                <div className="chart-placeholder">
                  <div className="bar-chart">
                    {[65, 45, 78, 52, 40, 68, 55].map((height, i) => (
                      <div key={i} className="bar-wrapper">
                        <div
                          className="bar"
                          style={{ height: `${height}%` }}
                        ></div>
                        <span className="bar-label">
                          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "history" && (
            <div className="history-view">
              <div className="card history-card">
                <h2>Recent Predictions</h2>
                {history.length > 0 ? (
                  <div className="history-list">
                    {history.map((item) => (
                      <div key={item.id} className="history-item">
                        <div className="history-main">
                          <div
                            className="history-risk"
                            style={{ background: getRiskGradient(item.riskLevel) }}
                          >
                            {item.delayProbability}%
                          </div>
                          <div className="history-details">
                            <span className="history-route">
                              {item.distance} km route
                            </span>
                            <span className="history-conditions">
                              {item.traffic} traffic • {item.weather} weather
                            </span>
                          </div>
                        </div>
                        <span className="history-time">{item.timestamp}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="empty-history">
                    <p>No predictions yet. Start by analyzing a route.</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>© 2024 LogiFlow AI • Advanced Logistics Intelligence Platform</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
