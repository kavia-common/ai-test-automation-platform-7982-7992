/**
 * Simple API client with env-driven base URL and health check helper.
 */
const BASE_URL =
  process.env.REACT_APP_API_BASE ||
  process.env.REACT_APP_BACKEND_URL ||
  'http://localhost:3001';

const HEALTH_PATH = process.env.REACT_APP_HEALTHCHECK_PATH || '/';

// PUBLIC_INTERFACE
export async function healthCheck() {
  /** Performs a GET request to the configured health endpoint and returns JSON or text. */
  const url = `${BASE_URL}${HEALTH_PATH}`;
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json, text/plain, */*',
      },
      mode: 'cors',
      credentials: 'same-origin',
    });

    // Attempt JSON, fallback to text
    const contentType = res.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const data = await res.json();
      if (!res.ok) {
        const message = data?.message || JSON.stringify(data);
        throw new Error(message || `Request failed with ${res.status}`);
      }
      return data;
    } else {
      const text = await res.text();
      if (!res.ok) {
        throw new Error(text || `Request failed with ${res.status}`);
      }
      return { status: text };
    }
  } catch (e) {
    // Normalize CORS/network errors
    const err = e instanceof Error ? e : new Error('Network error');
    throw err;
  }
}

// PUBLIC_INTERFACE
export function getApiBase() {
  /** Returns the resolved API base URL for display purposes. */
  return BASE_URL;
}

// PUBLIC_INTERFACE
export function getHealthPath() {
  /** Returns the configured health check path. */
  return HEALTH_PATH;
}
