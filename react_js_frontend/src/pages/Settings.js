import React from 'react';
import { getApiBase, getHealthPath } from '../api/client';

/**
 * PUBLIC_INTERFACE
 * Settings - Displays current environment configuration (read-only).
 */
function Settings() {
  const envItems = [
    ['REACT_APP_API_BASE', process.env.REACT_APP_API_BASE || ''],
    ['REACT_APP_BACKEND_URL', process.env.REACT_APP_BACKEND_URL || ''],
    ['REACT_APP_FRONTEND_URL', process.env.REACT_APP_FRONTEND_URL || ''],
    ['REACT_APP_WS_URL', process.env.REACT_APP_WS_URL || ''],
    ['REACT_APP_NODE_ENV', process.env.REACT_APP_NODE_ENV || ''],
    ['REACT_APP_ENABLE_SOURCE_MAPS', process.env.REACT_APP_ENABLE_SOURCE_MAPS || ''],
    ['REACT_APP_PORT', process.env.REACT_APP_PORT || ''],
    ['REACT_APP_TRUST_PROXY', process.env.REACT_APP_TRUST_PROXY || ''],
    ['REACT_APP_LOG_LEVEL', process.env.REACT_APP_LOG_LEVEL || ''],
    ['REACT_APP_HEALTHCHECK_PATH', process.env.REACT_APP_HEALTHCHECK_PATH || ''],
    ['REACT_APP_FEATURE_FLAGS', process.env.REACT_APP_FEATURE_FLAGS || ''],
    ['REACT_APP_EXPERIMENTS_ENABLED', process.env.REACT_APP_EXPERIMENTS_ENABLED || ''],
  ];

  return (
    <div className="page-surface">
      <h2 style={{ marginTop: 0 }}>Settings</h2>
      <p>Environment values are read at build time.</p>

      <div className="section">
        <table className="table" role="table">
          <thead>
            <tr>
              <th>Variable</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {envItems.map(([k, v]) => (
              <tr key={k}>
                <td>{k}</td>
                <td style={{ wordBreak: 'break-all' }}>{v || <em>unset</em>}</td>
              </tr>
            ))}
            <tr>
              <td>Resolved API Base</td>
              <td>{getApiBase()}</td>
            </tr>
            <tr>
              <td>Resolved Health Path</td>
              <td>{getHealthPath()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Settings;
