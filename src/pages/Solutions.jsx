import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const HoverImageLinks = ({ stories }) => {
  return (
    <section className="bg-neutral-950 p-4 md:p-8 rounded-2xl shadow-xl max-w-5xl mx-auto mt-8 mb-16">
      <div className="mx-auto max-w-5xl">
        {stories.map((story) => (
          <LinkItem key={story.id} story={story} />
        ))}
      </div>
    </section>
  );
};

const LinkItem = ({ story }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);
  const navigate = useNavigate();
  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  let imageUrl = story.image_1;
  if (imageUrl && !imageUrl.startsWith("http")) {
    imageUrl = `http://127.0.0.1:8000${imageUrl}`;
  }
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8 cursor-pointer"
      onClick={() => navigate(`/solution-details/${story.id}`)}
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {story.title.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {story.description}
        </span>
      </div>
      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imageUrl}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image for ${story.title}`}
      />
      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.div>
  );
};

const Solutions = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/success-stories/")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch stories");
        return res.json();
      })
      .then((data) => {
        setStories(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-16 bg-neutral-950">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Solutions</h1>
        {loading && <div className="text-white">Loading...</div>}
        {error && <div className="text-red-500">{error}</div>}
        {!loading && !error && <HoverImageLinks stories={stories} />}
      </main>
      <Footer />
    </>
  );
};

export default Solutions; 