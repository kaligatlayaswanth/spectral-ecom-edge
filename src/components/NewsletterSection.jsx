import { useState } from "react";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-neutral-900 to-black">
      <div className="max-w-2xl mx-auto px-6 text-center animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-4">
          Stay in the Loop
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Subscribe to our newsletter for exclusive deals and the latest tech news.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 backdrop-blur-sm transition-all duration-300"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-300 font-medium"
          >
            Subscribe
          </button>
        </form>
        {submitted && (
          <p className="text-green-400 mt-4">Thank you for subscribing!</p>
        )}
      </div>
    </section>
  );
}; 