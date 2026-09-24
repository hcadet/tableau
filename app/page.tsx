import TableauDashboard from '@/components/TableauDashboard';
import AIChat from '@/components/AIChat';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <header className="max-w-7xl mx-auto flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center">
            SI
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Sales Intelligence</h1>
            <p className="text-xs text-gray-500">AI-powered Tableau analytics</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          Tableau Public Connected
        </div>
      </header>

      <section className="max-w-7xl mx-auto space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Sales Performance & Regional Tracking</h2>
          <p className="text-sm text-gray-600">
            Explore the dashboard metrics and interact with the AI assistant to analyze sales performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold text-gray-700">
              <h3>Interactive Dashboard</h3>
              <span className="text-xs font-normal text-gray-400">Tableau Public</span>
            </div>
            <TableauDashboard />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold text-gray-700">
              <h3>AI Assistant</h3>
              <span className="text-xs font-normal text-gray-400">Sales Analysis</span>
            </div>
            <AIChat />
          </div>
        </div>
      </section>
    </main>
  );
}