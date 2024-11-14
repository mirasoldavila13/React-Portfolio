import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "../config/emailConfig.ts";

// Contact form component for sending messages via EmailJS
function Contact() {
  const form = useRef<HTMLFormElement>(null); // Reference to the form element for EmailJS integration
  const [error, setError] = useState(""); // Error message to display on validation failure
  const [successMessage, setSuccessMessage] = useState(""); // Success message after successful email send
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility state for feedback
  const [isSending, setIsSending] = useState(false); // Tracks if the form is in the sending state

  // Form state to capture user input values
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  /**
   * Handles changes in form fields by updating local state.
   * Resets error messages to give real-time feedback as users type.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
    setError(""); // Clear error message when user starts typing
  };

  /**
   * Validates form data before submission.
   * Checks for required fields and email format.
   * @returns {boolean} True if form is valid, false otherwise.
   */
  const validateForm = () => {
    const { name, email, message } = formState;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Ensure all fields have valid non-whitespace content
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("All fields are required and must contain valid text.");
      return false;
    }

    // Basic email validation
    if (!emailPattern.test(email.trim())) {
      setError("Please enter a valid email address.");
      return false;
    }

    setError(""); // Clear error if validation passes
    return true;
  };

  /**
   * Sends email using EmailJS if form validation passes.
   * Displays success or error messages in a modal.
   */
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Only proceed if form is valid
    if (!validateForm()) return;

    setIsSending(true); // Indicate loading state

    // Prepare data for EmailJS
    const formData = {
      to_name: "Mirasol",
      from_name: formState.name.trim(),
      from_email: formState.email.trim(),
      message: formState.message.trim(),
    };

    // Send email via EmailJS
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData, EMAILJS_PUBLIC_KEY)
      .then(
        () => {
          // Handle successful send
          setSuccessMessage("Message sent successfully!");
          setError("");
          setFormState({ name: "", email: "", message: "" });
          setIsModalVisible(true); // Show success modal
        },
        (error) => {
          // Log error for debugging purposes and show error message
          console.error("Error:", error);
          setError("Failed to send the message. Please try again.");
          setSuccessMessage("");
          setIsModalVisible(true); // Show error modal
        }
      )
      .finally(() => {
        setIsSending(false); // Reset sending state
      });
  };

  // Close modal and clear messages
  const closeModal = () => {
    setIsModalVisible(false);
    setError("");
    setSuccessMessage("");
  };

  return (
    <main className="min-h-screen bg-secondaryBg text-textLight p-6 md:p-12 flex flex-col items-center">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Contact Me</h1>
        <p className="text-lg">I’d love to hear from you! Reach out anytime.</p>
      </header>

      <section aria-labelledby="contact-form-section" className="w-full max-w-lg">
        <h2 id="contact-form-section" className="sr-only">Contact Form</h2>

        {/* Form component animated with Framer Motion */}
        <motion.form
          ref={form}
          className="bg-primaryBg rounded-lg shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={sendEmail}
          noValidate
          role="form"
          aria-labelledby="form-title"
        >
          <fieldset>
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-secondaryBg text-textLight"
                placeholder="Your name"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-secondaryBg text-textLight"
                placeholder="Your email"
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                id="message"
                value={formState.message}
                onChange={handleChange}
                className="w-full px-4 py-2 h-32 rounded bg-secondaryBg text-textLight"
                placeholder="Your message"
                required
              />
            </div>

            {/* Display Error or Success Messages */}
            {error && <p className="text-red-500 mb-4" role="alert">{error}</p>}
            {successMessage && <p className="text-green-500 mb-4" role="alert">{successMessage}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-accent1 to-accent2 text-white font-semibold py-2 rounded hover:from-accent2 hover:to-accent1 transition-all"
              disabled={isSending}
              aria-busy={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </fieldset>
        </motion.form>
      </section>

      {/* Success/Error Modal */}
      <AnimatePresence>
        {isModalVisible && (
          <div
            role="dialog"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            aria-modal="true"
            className="modal modal-open fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={closeModal}
          >
            <motion.div
              className="modal-box relative p-6 bg-white rounded-lg shadow-lg text-center max-w-sm w-full"
              initial={{ opacity: 0, scale: 0.9 }} // Framer Motion animation
              animate={{ opacity: 1, scale: 1 }}   // Set to fully opaque when visible
              exit={{ opacity: 0, scale: 0.9 }}     // Fade out when exiting
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
              style={{ backgroundColor: "#ffffff", color: "#333333" }} // Explicitly set background and text color
            >
              {/* "X" Close Button in Top-Right */}
              <button
                onClick={closeModal}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-500 hover:text-gray-800"
                aria-label="Close"
              >
                &times;
              </button>

              {/* Modal Content */}
              <h2 id="modal-title" className="text-2xl font-bold mb-4">
                {error ? "Error" : "Success"}
              </h2>
              <p id="modal-description" className="mb-4 text-lg">
                {error ? error : successMessage}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}

export default Contact;
