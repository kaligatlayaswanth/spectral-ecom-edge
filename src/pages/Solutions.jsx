import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const solutionLinks = [
  {
    heading: "Smart Home",
    subheading: "Automate and secure your home",
    imgSrc: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
    href: "/solution-details/smart-home",
  },
  {
    heading: "Smart Agriculture",
    subheading: "Modernize your farm with IoT",
    imgSrc: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    href: "/solution-details/smart-agriculture",
  },
  {
    heading: "Smart City",
    subheading: "Connected infrastructure for cities",
    imgSrc: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    href: "/solution-details/smart-city",
  },
  {
    heading: "Water Management",
    subheading: "Efficient water usage and monitoring",
    imgSrc: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    href: "/solution-details/water-management",
  },
  {
    heading: "Video Surveillance",
    subheading: "AI-powered security solutions",
    imgSrc: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    href: "/solution-details/video-surveillance",
  },
];

const HoverImageLinks = () => {
  return (
    <section className="bg-neutral-950 p-4 md:p-8 rounded-2xl shadow-xl max-w-5xl mx-auto mt-8 mb-16">
      <div className="mx-auto max-w-5xl">
        {solutionLinks.map((link) => (
          <LinkItem key={link.heading} {...link} />
        ))}
      </div>
    </section>
  );
};

const LinkItem = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);
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
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
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
          {heading.split("").map((l, i) => (
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
          {subheading}
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
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
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
      <Link to={href} className="absolute inset-0 z-20" tabIndex={-1} aria-label={heading} />
    </motion.div>
  );
};

const Solutions = () => (
  <>
    <Navbar />
    <main className="min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-16 bg-neutral-950">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Solutions</h1>
      <HoverImageLinks />
    </main>
    <Footer />
  </>
);
export default Solutions; 