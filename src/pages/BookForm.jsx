import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_am9bq3c"; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = "template_n0sae78"; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = "oUhJR8aLWQXNGNmq-"; // Replace with your EmailJS public key
const ADMIN_EMAIL = "kaligatlayaswanth@gmail.com"; // Default admin email - change this to your desired email

const BookForm = () => {
  const [form, setForm] = useState({ name: "", email: "", contact: "", location: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async (formData) => {
    // Method 1: Using EmailJS (recommended for production)
    if (EMAILJS_SERVICE_ID !== "YOUR_EMAILJS_SERVICE_ID") {
      try {
        const templateParams = {
          to_email: ADMIN_EMAIL,
          from_name: formData.name,
          from_email: formData.email,
          contact_number: formData.contact,
          location: formData.location,
          message: `
New Booking Request

Name: ${formData.name}
Email: ${formData.email}
Contact: ${formData.contact}
Location: ${formData.location}

Submitted on: ${new Date().toLocaleString()}
          `
        };

        const result = await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        );
        
        if (result.status === 200) {
          return true;
        }
        return false;
      } catch (error) {
        console.error("EmailJS error:", error);
        return false;
      }
    }

    // Method 2: Fallback to webhook (if EmailJS is not configured)
    try {
      const response = await fetch("https://kaliyaswanth.app.n8n.cloud/webhook/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          admin_email: ADMIN_EMAIL,
          subject: "New Booking Request - SIOT",
          message: `
New booking request received:

Customer Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Contact: ${formData.contact}
- Location: ${formData.location}

Please contact the customer to confirm their booking.

Submitted on: ${new Date().toLocaleString()}
          `
        }),
      });
      return response.ok;
    } catch (error) {
      console.error("Webhook error:", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    
    try {
      const emailSent = await sendEmail(form);
      
      if (emailSent) {
        setSuccess("Your booking request has been sent! We'll contact you soon.");
        setForm({ name: "", email: "", contact: "", location: "" });
        setTimeout(() => {
          navigate("/shop");
        }, 2000);
      } else {
        setError("There was a problem sending your request. Please try again or contact us directly.");
      }
    } catch (err) {
      setError("There was a problem submitting your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black font-inter overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[80vh] py-16 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 rounded-2xl shadow-lg p-8 w-full max-w-md space-y-6 border border-white/10"
        >
          <h2 className="text-3xl font-bold text-white mb-4 text-center">Book Now</h2>
          <p className="text-gray-300 text-center text-sm mb-6">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
          <div>
            <label className="block text-white mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-black/60 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label className="block text-white mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-black/60 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label className="block text-white mb-2">Contact Number</label>
            <input
              type="tel"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-black/60 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label className="block text-white mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              required
              placeholder="City, State"
              className="w-full px-4 py-2 rounded bg-black/60 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full font-bold text-lg transition-all duration-300 shadow-lg mt-4 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Submit Booking Request"}
          </button>
          {success && <div className="text-green-400 text-center mt-4">{success}</div>}
          {error && <div className="text-red-400 text-center mt-4">{error}</div>}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default BookForm; 