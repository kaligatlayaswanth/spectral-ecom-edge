import React, { useEffect, useState, useRef } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useParams } from "react-router-dom";

const SECTION_HEIGHT = 1500;

const SolutionDetails = () => {
  const { solution } = useParams();
  const id = solution;
  const [solutionData, setSolutionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/success-stories/${id}/`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch solution details");
        return res.json();
      })
      .then((data) => {
        setSolutionData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-white text-center py-10">Loading solution details...</div>;
  if (error) return <div className="text-red-500 text-center py-10">{error}</div>;
  if (!solutionData) return null;

  // Prepare image URLs
  const images = [solutionData.image_1, solutionData.image_2, solutionData.image_3, solutionData.image_4, solutionData.image_5]
    .filter(Boolean)
    .map(img => img && !img.startsWith("http") ? `http://127.0.0.1:8000${img}` : img);

  // Fallbacks for parallax if not enough images
  const fallback = "https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop";
  const getImg = (idx) => images[idx] || fallback;

  return (
    <>
      <Navbar />
      <div className="bg-zinc-950">
        <Hero solutionTitle={solutionData.title} images={images} />
        <div className="max-w-4xl mx-auto px-4 pb-16">
          <div className="bg-white/10 rounded-xl p-8 shadow-lg text-white text-lg leading-relaxed text-center max-w-2xl mx-auto mt-8">
            {solutionData.description}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const Hero = ({ solutionTitle, images }) => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage img={images[0]} />
      <div className="relative z-10">
        <div className="h-screen w-full" />
        <ParallaxImages images={images} />
        <div className="absolute top-0 left-0 right-0 z-20 flex justify-center pt-16 pointer-events-none">
          <h1 className="text-4xl md:text-6xl font-bold text-white bg-black/60 px-8 py-4 rounded-2xl shadow-xl pointer-events-auto">
            {solutionTitle}
          </h1>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950 z-20" />
    </div>
  );
};

const CenterImage = ({ img }) => {
  const { scrollY } = useScroll();
  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;
  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );
  return (
    <motion.img
      className="fixed top-0 left-0 w-full h-screen object-cover z-0"
      style={{
        clipPath,
        objectPosition: "center",
        objectFit: "cover",
        backgroundSize,
        opacity,
      }}
      src={img}
      alt="Solution background"
    />
  );
};

const ParallaxImages = ({ images }) => {
  // Use up to 4 images for parallax, fallback if not enough
  const fallback = "https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop";
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src={images[1] || fallback}
        alt="Parallax 1"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src={images[2] || fallback}
        alt="Parallax 2"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src={images[3] || fallback}
        alt="Parallax 3"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src={images[4] || fallback}
        alt="Parallax 4"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;
  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Launch Schedule
      </motion.h1>
      <ScheduleItem title="NG-21" date="Dec 9th" location="Florida" />
      <ScheduleItem title="Starlink" date="Dec 20th" location="Texas" />
      <ScheduleItem title="Starlink" date="Jan 13th" location="Florida" />
      <ScheduleItem title="Turksat 6A" date="Feb 22nd" location="Florida" />
      <ScheduleItem title="NROL-186" date="Mar 1st" location="California" />
      <ScheduleItem title="GOES-U" date="Mar 8th" location="California" />
      <ScheduleItem title="ASTRA 1P" date="Apr 8th" location="Texas" />
    </section>
  );
};

const ScheduleItem = ({ title, date, location }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{location}</p>
        <FiMapPin />
      </div>
    </motion.div>
  );
};

export default SolutionDetails; 