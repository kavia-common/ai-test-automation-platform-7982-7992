import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Navbar - Top bar with brand and health status badge.
 * Props:
 *  - health: { status: 'healthy'|'unreachable'|'unknown', message: string }
 */
function Navbar({ health }) {
  const healthy = health?.status === 'healthy';
  const unreachable = health?.status === 'unreachable';
  const badgeClass = healthy ? 'badge healthy' : unreachable ? 'badge unreachable' : 'badge';

  return (
    <header className="navbar" role="banner" aria-label="Top navigation">
      <div className="brand" aria-label="Application title">
        <div className="brand-mark">AI</div>
        <div>
          <div style={{ fontSize: 16, lineHeight: 1 }}>AI Test Automation</div>
          <div style={{ fontSize: 12, opacity: 0.85 }}>Corporate Navy</div>
        </div>
      </div>
      <div className="actions">
        <span className={badgeClass} aria-live="polite" title={health?.message || ''}>
          {healthy ? 'Backend: Healthy' : unreachable ? 'Backend: Unreachable' : 'Backend: Checking...'}
        </span>
        <button className="theme-toggle" type="button" aria-label="Theme toggle placeholder">
          Theme
        </button>
      </div>
    </header>
  );
}

export default Navbar;
