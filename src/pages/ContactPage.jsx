// src/pages/ContactPage.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import SEO from "../components/SEO";
import { personData } from "../config/content";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }
    if (!formData.subject.trim()) {
      setError("Please enter a subject");
      return;
    }
    if (!formData.message.trim()) {
      setError("Please enter your message");
      return;
    }

    // Simulate submission (in production, this would send to a backend)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <SEO
        title="Contact AA Zaura"
        description="Get in touch with Abdussalam Abdulkarim Zaura. Email, phone, and contact form available."
        canonical="/contact"
      />

      {/* Page Header */}
      <section className="contact-section bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-300 max-w-xl">
              Have a question or want to discuss opportunities? We'd love to
              hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-section py-24 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="contact-cards grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Email */}
              <motion.div
                variants={itemVariants}
                className="contact-card p-8 bg-gray-50 border border-gray-200 rounded-lg text-center hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-6 h-6 text-amber-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-3">
                  Email
                </h3>
                <a
                  href={`mailto:${personData.email}`}
                  className="text-amber-700 hover:text-amber-600 font-semibold text-sm break-all"
                >
                  {personData.email}
                </a>
              </motion.div>

              {/* Phone */}
              <motion.div
                variants={itemVariants}
                className="contact-card p-8 bg-gray-50 border border-gray-200 rounded-lg text-center hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-6 h-6 text-amber-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 00.502.756l2.048 1.024a11.042 11.042 0 01-5.516 5.516l-1.024-2.048a1 1 0 00-.756-.502l-4.493-1.498a1 1 0 00-.684-.948A2 2 0 013 5z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-3">
                  Phone
                </h3>
                <a
                  href={`tel:${personData.phone}`}
                  className="text-amber-700 hover:text-amber-600 font-semibold text-sm"
                >
                  {personData.phone}
                </a>
              </motion.div>

              {/* Location */}
              <motion.div
                variants={itemVariants}
                className="contact-card p-8 bg-gray-50 border border-gray-200 rounded-lg text-center hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-6 h-6 text-amber-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-3">
                  Location
                </h3>
                <p className="text-gray-700 text-sm">Kano State, Nigeria</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-section py-24 sm:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={itemVariants}
              className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-12"
            >
              Send us a Message
            </motion.h2>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg"
              >
                <p className="text-green-800 font-semibold">
                  ✓ Thank you for your message! We'll get back to you soon.
                </p>
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-6 bg-red-50 border border-red-200 rounded-lg"
              >
                <p className="text-red-800 font-semibold">✗ {error}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="contact-form space-y-6">
              {/* Name */}
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900 mb-3"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="contact-field w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent text-sm"
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 mb-3"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="contact-field w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent text-sm"
                />
              </motion.div>

              {/* Subject */}
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-900 mb-3"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  className="contact-field w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent text-sm"
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900 mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows="6"
                  className="contact-field w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent text-sm resize-none"
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  className="contact-button w-full bg-amber-700 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition text-sm"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Social Media */}
      <section className="contact-section py-24 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={itemVariants}
              className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-8"
            >
              Connect on Social Media
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="contact-social flex gap-6 justify-center"
            >
              {personData.socialMedia.twitter && (
                <a
                  href={personData.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-100 hover:bg-amber-700 text-gray-900 hover:text-white flex items-center justify-center transition text-xl"
                  aria-label="Twitter"
                >
                  𝕏
                </a>
              )}
              {personData.socialMedia.facebook && (
                <a
                  href={personData.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-100 hover:bg-amber-700 text-gray-900 hover:text-white flex items-center justify-center transition"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              )}
              {personData.socialMedia.linkedin && (
                <a
                  href={personData.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-100 hover:bg-amber-700 text-gray-900 hover:text-white flex items-center justify-center transition"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
