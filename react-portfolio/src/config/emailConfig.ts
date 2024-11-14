// Load EmailJS service, template, and public key from environment variables.
// These are used to configure EmailJS for sending emails securely and must be set in the environment.

// Unique identifier for the EmailJS service. Required to specify which service to use when sending emails.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";

// ID of the email template configured in EmailJS. Used to structure the email content when sending.
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";

// Public API key for EmailJS. This key authorizes the client to interact with EmailJS services securely.
// WARNING: Make sure this key is set as a public environment variable. For sensitive keys, consider server-side storage.
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

export { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY };

