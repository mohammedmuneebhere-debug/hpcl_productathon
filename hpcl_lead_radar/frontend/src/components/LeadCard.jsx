export default function LeadCard({ lead }) {
  return (
    <div className="card">
      <h3>{lead.company_name}</h3>

      <p><b>Industry:</b> {lead.industry}</p>
      <p><b>Location:</b> {lead.location}</p>
      <p><b>Signal:</b> {lead.signal_text}</p>

      <p><b>Recommended Products:</b> {lead.inferred_products.join(", ")}</p>
      <p><b>Confidence:</b> {(lead.confidence * 100).toFixed(0)}%</p>
      <p><b>Reason:</b> {lead.reason}</p>

      <button>Accept Lead</button>
    </div>
  );
}
