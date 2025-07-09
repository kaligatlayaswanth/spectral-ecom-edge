import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [solutionFlyout, setSolutionFlyout] = useState(null);
  const location = useLocation();

  // Fetch solution stories for the Solutions dropdown
  useEffect(() => {
    fetch("https://backendec-g9oj.onrender.com/success-stories/")
      .then((res) => res.json())
      .then((data) => {
        setSolutionFlyout(
          data.map((story) => ({
            label: story.title,
            href: `/solution-details/${story.id}`,
          }))
        );
      })
      .catch(() => {
        setSolutionFlyout([]);
      });
  }, []);

  // Dropdown data structure
  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "Shop",
      href: "/shop"
    },
    {
      label: "Solutions",
      href: "/solutions",
      flyout: solutionFlyout || [
        { label: "Loading...", href: "#" },
      ],
    },
    {
      label: "Success Stories",
      href: "/success-stories"
    },
    {
      label: "Company",
      href: "/company",
      flyout: [
        { label: "About Us", href: "/company#about-us" },
        { label: "Our brands", href: "/company#our-brands" },
        { label: "Impact Awards", href: "/company#impact-awards" },
      ],
    },
    {
      label: "Resources",
      href: "/resources",
      flyout: [
        { label: "Blog", href: "/resources#blog" },
        { label: "Help Center", href: "/resources#help-center" },
        { label: "Newsletter", href: "/resources#newsletter" },
        { label: "Documentation", href: "/resources#documentation" },
      ],
    },
  ];

  return (
    <nav className="navbar fixed top-0 left-0 right-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="logo flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="SIOT Logo" className="h-10 w-auto" />
          </Link>
        </div>
        {/* Hamburger for mobile */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Nav links */}
        <ul
          className={`nav-links md:flex items-center gap-2 text-white font-medium transition-all duration-300 ${
            mobileOpen
              ? "fixed left-0 top-0 w-full h-full bg-black/90 flex flex-col pt-24 z-50"
              : "hidden md:flex justify-center flex-1"
          }`}
        >
          {navItems.map((item, idx) => (
            <li
              key={item.label}
              className={`relative group ${item.flyout ? "has-dropdown" : ""} ${
                mobileOpen ? "w-full text-center py-2" : "px-2"
              }`}
              onMouseEnter={() => !mobileOpen && item.flyout && setOpenDropdown(idx)}
              onMouseLeave={() => !mobileOpen && item.flyout && setOpenDropdown(null)}
            >
              {item.flyout ? (
                <FlyoutLink
                  href={item.href}
                  open={openDropdown === idx}
                  setOpen={(v) => setOpenDropdown(v ? idx : null)}
                  label={item.label}
                  FlyoutContent={() => <FlyoutContentList items={item.flyout} />}
                >
                  {item.label}
                </FlyoutLink>
              ) : (
                item.href.startsWith("/") ? (
                  <Link
                    to={item.href}
                    className={`inline-block py-2 px-4 rounded transition-colors duration-200 hover:bg-white/10 ${
                      location.pathname === item.href ? "bg-white/10" : ""
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={`inline-block py-2 px-4 rounded transition-colors duration-200 hover:bg-white/10 ${
                      location.hash === item.href ? "bg-white/10" : ""
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const FlyoutLink = ({ children, href, open, setOpen, label, FlyoutContent }) => {
  const showFlyout = !!FlyoutContent && open;
  const linkRef = useRef(null);
  const flyoutRef = useRef(null);
  const [flyoutStyle, setFlyoutStyle] = useState({ left: '50%', top: 0 });

  useEffect(() => {
    if (showFlyout && linkRef.current && flyoutRef.current) {
      const linkRect = linkRef.current.getBoundingClientRect();
      const flyoutRect = flyoutRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      let left = linkRect.left + linkRect.width / 2 - flyoutRect.width / 2;
      // Clamp to viewport with 8px padding
      if (left < 8) left = 8;
      if (left + flyoutRect.width > viewportWidth - 8) left = viewportWidth - flyoutRect.width - 8;
      setFlyoutStyle({
        left,
        top: linkRect.bottom + 8,
      });
    }
  }, [showFlyout]);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a
        ref={linkRef}
        href={href}
        className="relative text-white inline-block py-2 px-4 rounded transition-colors duration-200 hover:bg-white/10"
      >
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            ref={flyoutRef}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{
              position: "fixed",
              left: flyoutStyle.left,
              top: flyoutStyle.top,
              zIndex: 9999,
              width: "auto",
              maxWidth: "20rem",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white text-black rounded-lg shadow-xl overflow-auto max-w-screen-sm"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white shadow" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FlyoutContentList = ({ items }) => {
  const handleLinkClick = (e, href) => {
    if (href.includes('#')) {
      const currentPath = window.location.pathname;
      const targetPath = href.split('#')[0];
      
      if (currentPath === targetPath) {
        // Already on the page, just scroll to section
        e.preventDefault();
        const hash = href.split('#')[1];
        const element = document.querySelector(`#${hash}`);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.offsetTop - navbarHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="space-y-2">
        {items.map((item) => (
          item.href.includes("#") ? (
            <Link
              key={item.label}
              to={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="block text-sm hover:underline text-neutral-900 py-1"
            >
              {item.label}
            </Link>
          ) : item.href.startsWith("/") ? (
            <Link
              key={item.label}
              to={item.href}
              className="block text-sm hover:underline text-neutral-900 py-1"
            >
              {item.label}
            </Link>
          ) : (
            <a
              key={item.label}
              href={item.href}
              className="block text-sm hover:underline text-neutral-900 py-1"
            >
              {item.label}
            </a>
          )
        ))}
      </div>
    </div>
  );
};
