import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
    } catch (error) {
      toast.error("Failed to send your message. Please try again later.", {
        position: "top-center",
        autoClose: 5000,
      });
      console.error("Failed to send message:", error);
    } finally {
      toast.success("Your message has been sent successfully! 🎉", {
        position: "top-center",
        autoClose: 5000,
      });

      setLoading(false);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="relative w-full h-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-300 py-16 px-8 overflow-y-auto">
      <ToastContainer />
      <nav className="absolute top-0 left-0 z-[99] w-full flex h-14 items-center justify-between text-white gap-10 text-md lg:text-xl px-4">
        <Link
          onClick={() => navigate(-1)}
          className="hover: text-[#6556CD] text-2xl lg:text-md font-bold lg:font-normal ri-arrow-left-line"
        ></Link>
      </nav>
      <div className=" max-w-9xl h-full mx-auto">
        <h2 className="text-4xl font-bold text-[#6556CD] text-center mb-6">
          🎬 Contact Us
        </h2>
        <p className="text-center text-lg mb-12 italic">
          "Have questions? Let’s keep the reel rolling together!"
        </p>
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#6556CD]">
                Get in Touch
              </h3>
              <p>
                We’d love to hear from you! Whether you have feedback, a
                question, or a feature request, our team is ready to help.
              </p>
              <p className="mt-4">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:support@cinestream.com"
                  className="text-[#6556CD] underline"
                >
                  support@cinestream.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+123456789" className="text-[#6556CD] underline">
                  +1 234 567 89
                </a>
              </p>
            </div>
            <form
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              onSubmit={handleSubmit}
            >
              <h3 className="text-2xl font-semibold text-[#6556CD] mb-4">
                Send Us a Message
              </h3>
              <div className="mb-4">
                <label
                  className="block text-gray-400 text-sm mb-2"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 outline-none rounded bg-gray-900 text-gray-300"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-400 text-sm mb-2"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 outline-none rounded bg-gray-900 text-gray-300"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-400 text-sm mb-2"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className="w-full p-3 outline-none rounded bg-gray-900 text-gray-300 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full px-4 py-2 text-center rounded bg-indigo-600 text-white font-bold ${
                  loading
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-indigo-700"
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 3.042 1.135 5.824 3 7.937l3-2.646z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
          <div className="text-center pb-6">
            <p>
              Follow us on social media for updates, news, and behind-the-scenes
              fun!
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <a
                href="#"
                className="text-yellow-400 text-2xl hover:text-yellow-500 transition-all"
                aria-label="Facebook"
              >
                🌐
              </a>
              <a
                href="#"
                className="text-yellow-400 text-2xl hover:text-yellow-500 transition-all"
                aria-label="Twitter"
              >
                🐦
              </a>
              <a
                href="#"
                className="text-yellow-400 text-2xl hover:text-yellow-500 transition-all"
                aria-label="Instagram"
              >
                📸
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
