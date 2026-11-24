// src/pages/Contact.jsx
import { useState } from "react";
import PageBanner from "../components/PageBanner";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      {/* Banner */}
      <PageBanner>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#111111]">
          &ldquo;Remember, Big <span className="text-[#d91b5c]">Ideas</span> Are
          Usually Simple Ones...&rdquo;
        </h1>
      </PageBanner>

      {/* 2-Column Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl font-bold text-[#111111] mb-5">
              Single Source Marketing
            </h2>

            <div className="text-xs text-gray-600 space-y-3 mb-8 leading-relaxed">
              <div>
                <p className="font-bold text-[#111111]">STUDIO HEADQUARTERS</p>
                <p>2628 Credit Valley Road</p>
                <p>Mississauga, ON L5M 4J6</p>
              </div>

              <p>Telephone: 416 560 7221</p>
              <p>Email: hello@singlesource.media</p>
            </div>

            {submitted && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 text-xs">
                Thank you! Your message has been sent. We will reply shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#111111]"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#111111]"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Subject (Logo Design / Social Media Marketing)
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#111111]"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Your message (optional)
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#111111]"
                />
              </div>

              <button
                type="submit"
                className="bg-[#111111] hover:bg-[#d91b5c] text-white text-xs font-semibold px-6 py-2.5 cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Column */}
          <div>
            <div className="w-full bg-gray-100 border border-gray-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
                alt="Single Source Creative Studio"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}