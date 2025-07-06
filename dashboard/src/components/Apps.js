import React from "react";
import { Link } from "react-router-dom";
import "./Apps.css"; // Create this CSS file for styling

const Apps = () => {
  // Sample app data
  const featuredApps = [
    {
      id: 1,
      name: "Market Watch",
      icon: "📊",
      description: "Track real-time market data",
      path: "/market-watch"
    },
    {
      id: 2,
      name: "Stock Scanner",
      icon: "🔍",
      description: "Find stocks based on criteria",
      path: "/scanner"
    },
    {
      id: 3,
      name: "IPO Center",
      icon: "📈",
      description: "Upcoming and past IPOs",
      path: "/ipo"
    },
    {
      id: 4,
      name: "Learning Hub",
      icon: "🎓",
      description: "Trading tutorials & courses",
      path: "/learn"
    },
    {
      id: 5,
      name: "News & Analysis",
      icon: "📰",
      description: "Market news and insights",
      path: "/news"
    },
    {
      id: 6,
      name: "Calculator",
      icon: "🧮",
      description: "Trading calculators",
      path: "/calculator"
    }
  ];

  const recentTools = [
    {
      id: 1,
      name: "P&L Calculator",
      icon: "💰",
      path: "/pl-calculator"
    },
    {
      id: 2,
      name: "Margin Calculator",
      icon: "📉",
      path: "/margin-calculator"
    }
  ];

  return (
    <div className="apps-container">
      <header className="apps-header">
        <h1>Apps & Tools</h1>
        <p>Enhance your trading experience with our powerful tools</p>
      </header>

      <section className="apps-section">
        <h2>Featured Apps</h2>
        <div className="apps-grid">
          {featuredApps.map(app => (
            <Link to={app.path} key={app.id} className="app-card">
              <div className="app-icon">{app.icon}</div>
              <h3>{app.name}</h3>
              <p>{app.description}</p>
              <button className="app-button">Open</button>
            </Link>
          ))}
        </div>
      </section>

      <section className="apps-section">
        <h2>Recent Tools</h2>
        <div className="tools-list">
          {recentTools.map(tool => (
            <Link to={tool.path} key={tool.id} className="tool-item">
              <span className="tool-icon">{tool.icon}</span>
              <span>{tool.name}</span>
              <span className="tool-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <button className="action-button">
            <span>📱</span> Download Mobile App
          </button>
          <button className="action-button">
            <span>⚙️</span> Settings
          </button>
          <button className="action-button">
            <span>🔄</span> Refresh Data
          </button>
        </div>
      </section>
    </div>
  );
};

export default Apps;
