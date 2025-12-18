# AI Test Automation Frontend (React)

Corporate Navy themed React frontend with Router-based layout, health status indicator, and env-configured API client.

## Features
- Top Navbar with backend health badge
- Left Sidebar for navigation
- Pages: Dashboard, Test Creation, Test Execution, Test Maintenance, Settings
- API client reads base URL and health path from environment variables
- Clean, classic corporate styling without heavy UI libraries

## Quick Start
1. Install dependencies:
   - If not already installed, add React Router v6:
     npm install react-router-dom@6
2. Configure environment:
   - Copy `.env.example` to `.env`.
   - Confirm the following (defaults in example are suitable for local dev):
     - REACT_APP_API_BASE=http://localhost:3001
     - Optional: REACT_APP_HEALTHCHECK_PATH=/
3. Run the app:
   npm start
4. Open the app:
   http://localhost:${PORT:-3000}

## Environment
The client resolves API base in this order:
- REACT_APP_API_BASE
- REACT_APP_BACKEND_URL
- default http://localhost:3001

Health endpoint path:
- REACT_APP_HEALTHCHECK_PATH (default `/`)

See `.env.example` for all supported variables. The Settings page shows current resolved values.

## Verify Backend Connectivity
1. Start the backend on port 3001 (see backend README for its setup).
2. Start this frontend (npm start).
3. Navigate to http://localhost:3000.
4. In the top Navbar you should see:
   - "Backend: Healthy" when the backend health endpoint responds successfully.
   - "Backend: Unreachable" if the backend is not reachable or CORS fails.
5. Optional: Go to Settings to confirm the resolved "API Base" and "Health Path" values match your environment.

## Structure
- `src/api/client.js` — API client and healthCheck()
- `src/components/` — Navbar and Sidebar
- `src/pages/` — App pages
- `src/App.js` — Router and application layout
- `src/App.css` and `src/index.css` — Theme and layout styles

## Notes
- CORS/network errors during health check are handled and reported as "Backend: Unreachable".
- This project intentionally avoids heavy UI dependencies to remain lightweight.
