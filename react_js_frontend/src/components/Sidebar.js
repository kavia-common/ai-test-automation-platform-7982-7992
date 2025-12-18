import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * Sidebar - Left navigation for core sections.
 */
function Sidebar() {
  const links = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/test-creation', label: 'Test Creation' },
    { to: '/test-execution', label: 'Test Execution' },
    { to: '/test-maintenance', label: 'Test Maintenance' },
    { to: '/settings', label: 'Settings' },
  ];

  return (
    <aside className="sidebar" role="navigation" aria-label="Sidebar">
      <ul className="nav-list">
        {links.map((l) => (
          <li key={l.to} className="nav-item">
            <NavLink
              to={l.to}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
