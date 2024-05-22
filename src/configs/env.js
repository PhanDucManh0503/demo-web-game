const baseLocal = "http://localhost:";
export const port = import.meta.env["PORT"] || 3000;
export const baseUrl = import.meta.env["BASE_URL"] || `${baseLocal}${port}`;
