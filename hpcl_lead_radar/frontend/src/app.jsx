import { useEffect, useState } from "react";
import "./styles/app.css";

const API_BASE = "http://127.0.0.1:8000";

function App() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/leads`)
      .then((res) => {
        if (!res.ok) throw new Error("Backend not responding");
        return res.json();
      })
      .then((data) => {
        setLeads(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>HPCL Lead Radar</h1>
        <p>B2B Lead Intelligence · Hackathon MVP</p>
      </div>

      {loading && <p className="status">Loading leads…</p>}
      {error && <p className="status">Error: {error}</p>}

      {!loading &&
        !error &&
        leads.map((lead) => (
          <div className="card" key={lead.id}>
            <h3>{lead.company_name}</h3>

            <p><b>Industry:</b> {lead.industry}</p>
            <p><b>Location:</b> {lead.location}</p>
            <p><b>Signal:</b> {lead.signal_text}</p>

            <div>
              <b>Products:</b>{" "}
              {lead.inferred_products.map((p, i) => (
                <span className="tag" key={i}>{p}</span>
              ))}
            </div>

            <p><b>Confidence:</b> {(lead.confidence * 100).toFixed(0)}%</p>
            <p><b>Urgency:</b> {lead.urgency}</p>

            <button
              onClick={() => alert(`Lead accepted: ${lead.company_name}`)}
            >
              Accept Lead
            </button>
          </div>
        ))}
    </div>
  );
}

export default App;
