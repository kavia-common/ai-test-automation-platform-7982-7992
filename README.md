# ai-test-automation-platform-7982-7992

This workspace hosts the React frontend of the AI Test Automation platform. It is designed to connect to a Flask backend running separately.

Quick integration checklist:
- Frontend dev server: http://localhost:3000
- Backend API server: http://localhost:3001
- Frontend env: REACT_APP_API_BASE=http://localhost:3001
- Backend env: PORT=3001 and CORS_ORIGINS=http://localhost:3000

Verification:
- When both servers are running, the frontend Navbar health badge should display: "Backend: Healthy".
- If the backend is down or unreachable, it displays: "Backend: Unreachable".