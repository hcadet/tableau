  import TableauDashboard from "@/components/TableauDashboard";
  import AIChat from "@/components/AIChat";

export default function Home() {
  return (
    <main className="portal">
      <header className="header">
        <div className="brand">
          <div className="brand-mark">SI</div>
          <div>
            <div className="brand-title">Sales Intelligence</div>
            <div className="brand-subtitle">AI-powered Tableau analytics</div>
          </div>
        </div>

        <div className="status">
          <span className="status-dot" />
          Tableau Public connected
        </div>
      </header>

      <section className="main">
        <div className="hero">
          <h1>Sales Performance & Regional Tracking</h1>
          <p>
            Explore the dashboard and use the AI assistant to investigate sales performance.
          </p>
        </div>

        <div className="workspace">
          <section className="dashboard-card">
            <div className="card-header">
              <h2>Interactive Dashboard</h2>
              <span>Tableau Public</span>
            </div>
            <TableauDashboard />
          </section>

          <aside className="chat-card">
            <div className="card-header">
              <h2>AI Assistant</h2>
              <span>Sales analysis</span>
            </div>
            <AIChat />
          </aside>
        </div>
      </section>
    </main>
  );
}