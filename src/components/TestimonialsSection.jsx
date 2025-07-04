const testimonials = [
  {
    name: "Alex Johnson",
    quote: "Absolutely love the quality and speed of delivery! My go-to store for all things tech.",
    rating: 5
  },
  {
    name: "Priya Singh",
    quote: "Customer support was super helpful and the return process was a breeze.",
    rating: 4
  },
  {
    name: "Michael Chen",
    quote: "Great selection and the website is so easy to use. Highly recommend!",
    rating: 5
  }
];

function renderStars(rating) {
  return Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-400'}`}>★</span>
  ));
}

export const TestimonialsSection = () => (
  <section className="py-24 bg-gradient-to-b from-neutral-900 to-black">
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-4">
          What Our Customers Say
        </h2>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          Real feedback from real shoppers.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center shadow-lg animate-fade-in">
            <div className="mb-4 flex justify-center">{renderStars(t.rating)}</div>
            <p className="text-gray-200 text-lg mb-4">“{t.quote}”</p>
            <h3 className="text-base font-semibold text-white">{t.name}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
); 