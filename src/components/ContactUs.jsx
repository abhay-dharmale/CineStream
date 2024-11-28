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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.send(serviceId, templateId, formData, publicKey).then(
      (response) => {
        // console.log("SUCCESS!", response.status, response.text);
        toast.success("Your message has been sent successfully! 🎉", {
          position: "top-center",
          autoClose: 5000,
        });
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        // console.error("FAILED...", error);
        toast.error("Failed to send your message. Please try again later.", {
          position: "top-center",
          autoClose: 5000,
        });
      }
    );
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
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-6">
          🎬 Contact Us
        </h2>
        <p className="text-center text-lg mb-12 italic">
          "Have questions? Let’s keep the reel rolling together!"
        </p>
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-yellow-300">
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
                  className="text-yellow-400 underline"
                >
                  support@cinestream.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+123456789" className="text-yellow-400 underline">
                  +1 234 567 89
                </a>
              </p>
            </div>
            <form
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              onSubmit={handleSubmit}
            >
              <h3 className="text-2xl font-semibold text-yellow-300 mb-4">
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
                  className="w-full p-3 outline-none rounded bg-gray-900 text-gray-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-500 transition-all w-full"
              >
                Send Message
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
