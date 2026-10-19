
import { API_CONFIG } from "../utils/constants.js";

const apiRequest = async (endpoint, options = {}) => {
  const controller = new AbortController();

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, API_CONFIG.TIMEOUT);

  try {
    const { headers = {}, ...requestOptions } = options;

    const isFormData =
      typeof FormData !== "undefined" &&
      requestOptions.body instanceof FormData;

    const response = await fetch(
      `${API_CONFIG.BASE_URL}${endpoint}`,
      {
        ...requestOptions,
        headers: {
          ...(isFormData
            ? {}
            : { "Content-Type": "application/json" }),
          ...headers,
        },
        signal: controller.signal,
      }
    );

    const contentType = response.headers.get("content-type");

    const data = contentType?.includes("application/json")
      ? await response.json()
      : await response.text();

    if (!response.ok) {
      const message =
        typeof data === "object" && data !== null
          ? data.message || data.error
          : data;

      throw new Error(
        message || `Request failed with status ${response.status}`
      );
    }

    return data;
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("The request timed out. Please try again.", { cause: error });
    }

    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
};

const api = {
  get: (endpoint, options = {}) =>
    apiRequest(endpoint, {
      ...options,
      method: "GET",
    }),

  post: (endpoint, body, options = {}) =>
    apiRequest(endpoint, {
      ...options,
      method: "POST",
      body:
        body instanceof FormData
          ? body
          : JSON.stringify(body),
    }),

  put: (endpoint, body, options = {}) =>
    apiRequest(endpoint, {
      ...options,
      method: "PUT",
      body:
        body instanceof FormData
          ? body
          : JSON.stringify(body),
    }),

  patch: (endpoint, body, options = {}) =>
    apiRequest(endpoint, {
      ...options,
      method: "PATCH",
      body:
        body instanceof FormData
          ? body
          : JSON.stringify(body),
    }),

  delete: (endpoint, options = {}) =>
    apiRequest(endpoint, {
      ...options,
      method: "DELETE",
    }),
};

export default api;
