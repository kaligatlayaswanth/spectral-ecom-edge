import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const WEBHOOK_URL = "https://kaliyaswanth.app.n8n.cloud/webhook/email";

const BookForm = () => {
  const [form, setForm] = useState({ name: "", email: "", contact: "", location: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSuccess("Your booking request has been sent!");
      setForm({ name: "", email: "", contact: "", location: "" });
      setTimeout(() => {
        navigate("/shop");
      }, 1200);
    } catch (err) {
      setError("There was a problem submitting your request.");
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
              className="w-full px-4 py-2 rounded bg-black/60 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full font-bold text-lg transition-all duration-300 shadow-lg mt-4 disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit"}
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