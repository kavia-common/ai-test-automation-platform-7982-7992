import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import TestCreation from './pages/TestCreation';
import TestExecution from './pages/TestExecution';
import TestMaintenance from './pages/TestMaintenance';
import Settings from './pages/Settings';
import { healthCheck } from './api/client';

/**
 * PUBLIC_INTERFACE
 * App - Root application with Navbar, Sidebar, and routed content.
 * Shows backend health status as a badge in the Navbar.
 */
function App() {
  const [health, setHealth] = useState({ status: 'unknown', message: 'Checking...' });

  useEffect(() => {
    let cancelled = false;

    async function loadHealth() {
      try {
        const res = await healthCheck();
        if (!cancelled) {
          setHealth({ status: 'healthy', message: res?.status || 'OK' });
        }
      } catch (err) {
        if (!cancelled) {
          const msg = err?.message || 'Network error';
          setHealth({ status: 'unreachable', message: msg });
        }
      }
    }

    loadHealth();

    // optional periodic refresh: commented but left as reference
    // const id = setInterval(loadHealth, 30000);
    // return () => { cancelled = true; clearInterval(id); };

    return () => { cancelled = true; };
  }, []);

  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar health={health} />
        <div className="layout">
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/test-creation" element={<TestCreation />} />
              <Route path="/test-execution" element={<TestExecution />} />
              <Route path="/test-maintenance" element={<TestMaintenance />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<div className="page-surface">Page Not Found</div>} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
