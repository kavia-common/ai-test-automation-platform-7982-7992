import React from 'react';

/**
 * PUBLIC_INTERFACE
 * TestCreation - Placeholder page for creating tests.
 */
function TestCreation() {
  return (
    <div className="page-surface">
      <h2 style={{ marginTop: 0 }}>Test Creation</h2>
      <p>Design and author test cases with AI-assisted suggestions.</p>
      <div className="section">
        <button className="btn">New Test Suite</button>
        <button className="btn ghost" style={{ marginLeft: 8 }}>Import from Spec</button>
      </div>
    </div>
  );
}

export default TestCreation;
