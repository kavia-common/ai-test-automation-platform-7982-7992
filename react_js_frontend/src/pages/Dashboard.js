import React, { useState } from 'react';

/**
 * PUBLIC_INTERFACE
 * Dashboard - Overview with basic cards and a Generate Tests modal trigger.
 */
function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="page-surface">
        <h2 style={{ marginTop: 0 }}>Dashboard</h2>
        <p>Overview of your testing activity.</p>

        <div className="cards">
          <div className="card">
            <h4>Test Suites</h4>
            <div className="metric">12</div>
            <div>Across 4 projects</div>
          </div>
          <div className="card">
            <h4>Recent Runs</h4>
            <div className="metric">34</div>
            <div>Past 7 days</div>
          </div>
          <div className="card">
            <h4>Pass Rate</h4>
            <div className="metric">92%</div>
            <div>Latest cycle</div>
          </div>
          <div className="card">
            <h4>Flaky Tests</h4>
            <div className="metric" style={{ color: 'var(--secondary)' }}>3</div>
            <div>Needs attention</div>
          </div>
        </div>

        <div className="section">
          <button className="btn" onClick={() => setOpen(true)}>
            Generate Tests
          </button>
          <button className="btn ghost" style={{ marginLeft: 8 }}>
            View Reports
          </button>
        </div>
      </div>

      {open && (
        <div className="modal-backdrop" role="dialog" aria-modal="true">
          <div className="modal">
            <h3 style={{ marginTop: 0 }}>Generate Tests (Preview)</h3>
            <p>
              This is a placeholder modal for AI-powered test generation.
              Integrate backend actions here in future iterations.
            </p>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <button className="btn ghost" onClick={() => setOpen(false)}>
                Cancel
              </button>
              <button className="btn secondary" onClick={() => setOpen(false)}>
                Generate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
