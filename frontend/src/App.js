import { useState, useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu, X, MapPin, Mail, Phone, ArrowRight, ArrowUpRight, Building2, ChevronDown } from "lucide-react";

// Outlet Data
const runningOutlets = [
  { id: 1, name: "Titan Eyeplus", category: "Eyewear", floor: "Ground Floor", size: "1,200 sq ft" },
  { id: 2, name: "Raymond", category: "Apparel", floor: "First Floor", size: "2,500 sq ft" },
  { id: 3, name: "Bata", category: "Footwear", floor: "Ground Floor", size: "1,800 sq ft" },
  { id: 4, name: "Tanishq", category: "Jewelry", floor: "Ground Floor", size: "3,000 sq ft" },
  { id: 5, name: "Samsung", category: "Electronics", floor: "Second Floor", size: "2,200 sq ft" },
  { id: 6, name: "Puma", category: "Sports", floor: "First Floor", size: "1,500 sq ft" },
  { id: 7, name: "Lifestyle", category: "Department Store", floor: "All Floors", size: "8,000 sq ft" },
  { id: 8, name: "Croma", category: "Electronics", floor: "Second Floor", size: "4,000 sq ft" },
  { id: 9, name: "Woodland", category: "Footwear", floor: "Ground Floor", size: "1,400 sq ft" },
  { id: 10, name: "Fabindia", category: "Ethnic Wear", floor: "First Floor", size: "2,800 sq ft" },
  { id: 11, name: "Reliance Digital", category: "Electronics", floor: "Second Floor", size: "3,500 sq ft" },
  { id: 12, name: "Van Heusen", category: "Apparel", floor: "First Floor", size: "1,600 sq ft" },
];

const upcomingOutlets = Array.from({ length: 38 }, (_, i) => ({
  id: i + 13,
  name: `Space ${String(i + 1).padStart(2, '0')}`,
  category: ["Fashion", "Electronics", "Lifestyle", "F&B", "Wellness", "Home"][i % 6],
  status: "Available",
}));

// Gallery Images
const galleryImages = [
  "https://images.unsplash.com/photo-1758633854740-26967a7d18f9?q=85&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1764779169348-353c6d99dbd0?q=85&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1761052676626-a3e49f178804?q=85&w=800&auto=format&fit=crop",
];

// Header
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#outlets", label: "Outlets" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header className={`ws-header ${scrolled ? "scrolled" : ""}`} data-testid="main-header">
        <div className="ws-container">
          <div className="flex items-center justify-between h-20 md:h-24">
            <a href="#" className="flex items-center gap-3" data-testid="logo">
              <div className="w-2 h-2 bg-[#FF3333]" />
              <span className="text-xl md:text-2xl font-bold tracking-tight uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
                WalkInSquare
              </span>
            </a>
            
            <nav className="hidden md:flex items-center gap-10" data-testid="desktop-nav">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="ws-nav-link"
                  data-testid={`nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="ws-btn-primary text-xs py-3 px-6" data-testid="nav-cta">
                Partner Now
              </a>
            </nav>

            <button 
              className="md:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="mobile-menu-btn"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`} data-testid="mobile-menu">
        <button 
          className="absolute top-6 right-6 p-2 text-white"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={28} />
        </button>
        {navLinks.map((link) => (
          <a 
            key={link.href}
            href={link.href} 
            onClick={() => setMobileMenuOpen(false)}
            data-testid={`mobile-nav-${link.label.toLowerCase()}`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
};

// Hero
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 md:pb-32 grid-lines" data-testid="hero-section">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1759590029882-2cea786619c1?q=85&w=1920&auto=format&fit=crop"
          alt="WalkInSquare"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
      </div>

      {/* Grid lines */}
      <div className="vertical-line left-[8.33%] hidden lg:block" />
      <div className="vertical-line left-[25%] hidden lg:block" />
      <div className="vertical-line left-[50%] hidden lg:block" />
      <div className="vertical-line left-[75%] hidden lg:block" />

      {/* Content */}
      <div className="ws-container relative z-10 w-full">
        <div className="max-w-6xl">
          <div className="overflow-hidden mb-6">
            <p className="ws-label animate-fade-in-up" data-testid="hero-label">
              Premium Retail Development — Est. 2020
            </p>
          </div>
          
          <div className="overflow-hidden">
            <h1 
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase leading-[0.85] animate-fade-in-up animation-delay-100"
              style={{ fontFamily: "'Oswald', sans-serif" }}
              data-testid="hero-title"
            >
              Walk<span className="text-[#FF3333]">.</span> In<span className="text-[#FF3333]">.</span><br />
              Square<span className="text-[#FF3333]">.</span>
            </h1>
          </div>

          <div className="overflow-hidden mt-8 md:mt-12">
            <p 
              className="text-lg md:text-xl text-[#737373] max-w-xl leading-relaxed font-light animate-fade-in-up animation-delay-200"
              data-testid="hero-description"
            >
              50 premium retail spaces. One iconic destination. 
              Where visionary brands build their future.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 md:mt-14 animate-fade-in-up animation-delay-300">
            <a href="#outlets" className="ws-btn-primary inline-flex items-center justify-center gap-3" data-testid="hero-cta-outlets">
              Explore Spaces <ArrowRight size={16} />
            </a>
            <a href="#contact" className="ws-btn-secondary inline-flex items-center justify-center gap-3" data-testid="hero-cta-contact">
              Become A Partner
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse" data-testid="scroll-indicator">
        <span className="ws-label text-[10px]">Scroll</span>
        <ChevronDown size={20} className="text-[#737373]" />
      </div>
    </section>
  );
};

// Stats
const StatsSection = () => {
  const stats = [
    { number: "50", label: "Total Spaces", suffix: "+" },
    { number: "12", label: "Now Operational", suffix: "" },
    { number: "38", label: "Available", suffix: "" },
    { number: "100K", label: "Sq Ft Area", suffix: "+" },
  ];

  return (
    <section className="py-16 md:py-24 border-y border-[#262626] bg-[#050505]" data-testid="stats-section">
      <div className="ws-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center md:text-left" data-testid={`stat-${index}`}>
              <p className="ws-stat">
                {stat.number}<span className="text-[#FF3333]">{stat.suffix}</span>
              </p>
              <p className="ws-label mt-3">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About
const AboutSection = () => {
  return (
    <section id="about" className="ws-section bg-[#050505]" data-testid="about-section">
      <div className="ws-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1651420952022-2d2e666e87df?q=85&w=1000&auto=format&fit=crop"
                alt="Architecture"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                data-testid="about-image"
              />
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-[#FF3333] p-6 md:p-8">
              <p className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>5+</p>
              <p className="text-xs uppercase tracking-widest text-white/80 mt-1">Years Building</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="accent-line mb-8" />
            <p className="ws-label mb-6">The Vision</p>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase leading-[0.9] mb-8"
              style={{ fontFamily: "'Oswald', sans-serif" }}
              data-testid="about-title"
            >
              Built For<br />
              <span className="text-[#737373]">Dominance</span>
            </h2>
            <div className="space-y-6 text-[#737373] text-lg font-light leading-relaxed">
              <p data-testid="about-description">
                WalkInSquare isn't just another retail destination. It's a statement. 
                A monolithic structure designed for brands that refuse to blend in.
              </p>
              <p>
                Strategic positioning. Uncompromising architecture. Premium footfall. 
                We built what others only talk about.
              </p>
              <p>
                12 industry leaders already call this home. 38 more spaces await 
                brands ready to claim their territory.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-[#262626]">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>24/7</p>
                  <p className="ws-label mt-2">Operations</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>1M+</p>
                  <p className="ws-label mt-2">Annual Footfall</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Running Outlets
const RunningOutletsSection = () => {
  return (
    <section id="outlets" className="ws-section bg-[#0A0A0A] border-y border-[#262626]" data-testid="outlets-section">
      <div className="ws-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="accent-line mb-8" />
            <p className="ws-label mb-4">Currently Operational</p>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase leading-[0.9]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
              data-testid="outlets-title"
            >
              The Roster
            </h2>
          </div>
          <p className="text-[#737373] text-lg font-light max-w-md">
            12 category leaders. One address. Premium brands that set the standard.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[1px] bg-[#262626]" data-testid="running-outlets-grid">
          {runningOutlets.map((outlet, index) => {
            const sizeClasses = [
              "md:col-span-6", "md:col-span-3", "md:col-span-3",
              "md:col-span-4", "md:col-span-4", "md:col-span-4",
              "md:col-span-8", "md:col-span-4",
              "md:col-span-3", "md:col-span-3", "md:col-span-6",
              "md:col-span-6",
            ];

            return (
              <div 
                key={outlet.id} 
                className={`ws-card glow-hover bg-[#0A0A0A] ${sizeClasses[index]}`}
                data-testid={`outlet-${outlet.id}`}
              >
                <div className="flex flex-col h-full justify-between min-h-[220px]">
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <span className="ws-label text-[#FF3333]">
                        {outlet.category}
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-[#262626] group-hover:text-[#FF3333] transition-colors" />
                    </div>
                    <h3 
                      className="text-2xl md:text-3xl font-bold uppercase tracking-tight"
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      {outlet.name}
                    </h3>
                  </div>
                  <div className="mt-8 pt-4 border-t border-[#262626] flex justify-between items-center">
                    <span className="ws-label flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      {outlet.floor}
                    </span>
                    <span className="ws-label">{outlet.size}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Upcoming Outlets
const UpcomingOutletsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedOutlets = showAll ? upcomingOutlets : upcomingOutlets.slice(0, 12);

  return (
    <section className="ws-section bg-[#050505]" data-testid="upcoming-section">
      <div className="ws-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="accent-line mb-8" />
            <p className="ws-label mb-4">Now Leasing</p>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase leading-[0.9]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
              data-testid="upcoming-title"
            >
              Claim Your<br />
              <span className="text-[#737373]">Territory</span>
            </h2>
          </div>
          <p className="text-[#737373] text-lg font-light max-w-md">
            38 premium spaces. First come, first served. Don't wait for someone else to take your spot.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[1px] bg-[#262626]" data-testid="upcoming-outlets-grid">
          {displayedOutlets.map((outlet) => (
            <div 
              key={outlet.id} 
              className="ws-card-upcoming bg-[#0A0A0A] text-center"
              data-testid={`upcoming-outlet-${outlet.id}`}
            >
              <p className="ws-label text-[#FF3333]/60 mb-2">{outlet.category}</p>
              <p 
                className="text-xl font-bold uppercase tracking-tight"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {outlet.name}
              </p>
              <p className="ws-label mt-3 text-[#FF3333]">{outlet.status}</p>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-12 text-center">
            <button 
              onClick={() => setShowAll(true)}
              className="ws-btn-secondary"
              data-testid="show-all-outlets-btn"
            >
              View All 38 Spaces <ArrowRight className="inline ml-2" size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

// Gallery
const GallerySection = () => {
  return (
    <section id="gallery" className="ws-section bg-[#0A0A0A] border-y border-[#262626]" data-testid="gallery-section">
      <div className="ws-container">
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-8" />
          <p className="ws-label mb-4">Visual Tour</p>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase"
            style={{ fontFamily: "'Oswald', sans-serif" }}
            data-testid="gallery-title"
          >
            See It<span className="text-[#FF3333]">.</span> Believe It<span className="text-[#FF3333]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#262626]" data-testid="gallery-grid">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`ws-gallery-item ${index === 0 ? 'aspect-[4/5] md:aspect-[3/4]' : 'aspect-square'}`}
              data-testid={`gallery-item-${index}`}
            >
              <img 
                src={image} 
                alt={`WalkInSquare ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:partners@walkinsquare.com?subject=Partnership Inquiry from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACompany: ${formData.company}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="ws-section bg-[#050505]" data-testid="contact-section">
      <div className="ws-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <div className="accent-line mb-8" />
            <p className="ws-label mb-4">Let's Talk</p>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase leading-[0.9] mb-8"
              style={{ fontFamily: "'Oswald', sans-serif" }}
              data-testid="contact-title"
            >
              Ready To<br />
              <span className="text-[#737373]">Dominate?</span>
            </h2>
            <p className="text-[#737373] text-lg font-light max-w-md mb-12">
              Spaces are filling fast. If you're serious about growth, 
              let's have a conversation that matters.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 border border-[#262626] flex items-center justify-center group-hover:border-[#FF3333] group-hover:bg-[#FF3333] transition-all">
                  <MapPin className="w-5 h-5 text-[#737373] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="ws-label mb-1">Location</p>
                  <p className="text-white font-medium">Central Business District, Metro City</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 border border-[#262626] flex items-center justify-center group-hover:border-[#FF3333] group-hover:bg-[#FF3333] transition-all">
                  <Mail className="w-5 h-5 text-[#737373] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="ws-label mb-1">Email</p>
                  <a href="mailto:partners@walkinsquare.com" className="text-white font-medium hover:text-[#FF3333] transition-colors">
                    partners@walkinsquare.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 border border-[#262626] flex items-center justify-center group-hover:border-[#FF3333] group-hover:bg-[#FF3333] transition-all">
                  <Phone className="w-5 h-5 text-[#737373] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="ws-label mb-1">Phone</p>
                  <a href="tel:+1234567890" className="text-white font-medium hover:text-[#FF3333] transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-[#0A0A0A] border border-[#262626] p-8 md:p-12">
            <p className="ws-label mb-8">Send A Message</p>
            <form onSubmit={handleSubmit} className="space-y-8" data-testid="contact-form">
              <div>
                <input 
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="ws-input"
                  required
                  data-testid="contact-name-input"
                />
              </div>
              <div>
                <input 
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="ws-input"
                  required
                  data-testid="contact-email-input"
                />
              </div>
              <div>
                <input 
                  type="text"
                  name="company"
                  placeholder="Company / Brand"
                  value={formData.company}
                  onChange={handleChange}
                  className="ws-input"
                  data-testid="contact-company-input"
                />
              </div>
              <div>
                <textarea 
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="ws-input resize-none"
                  required
                  data-testid="contact-message-input"
                />
              </div>
              <button type="submit" className="ws-btn-primary w-full" data-testid="contact-submit-btn">
                Send Message <ArrowRight className="inline-block ml-2" size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-[#262626] py-16 md:py-24" data-testid="footer">
      <div className="ws-container">
        {/* Top - Big brand */}
        <div className="mb-16 md:mb-24">
          <h3 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9]"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Walk<span className="text-[#FF3333]">.</span>In<span className="text-[#FF3333]">.</span>Square<span className="text-[#FF3333]">.</span>
          </h3>
          <p className="text-[#737373] mt-6 text-lg font-light max-w-lg">
            The retail destination that means business. Where premium brands build empires.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 md:mb-24">
          <div>
            <p className="ws-label mb-6 text-white">Navigate</p>
            <ul className="space-y-4">
              <li><a href="#about" className="text-[#737373] hover:text-white transition-colors text-sm uppercase tracking-wider">About</a></li>
              <li><a href="#outlets" className="text-[#737373] hover:text-white transition-colors text-sm uppercase tracking-wider">Outlets</a></li>
              <li><a href="#gallery" className="text-[#737373] hover:text-white transition-colors text-sm uppercase tracking-wider">Gallery</a></li>
              <li><a href="#contact" className="text-[#737373] hover:text-white transition-colors text-sm uppercase tracking-wider">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="ws-label mb-6 text-white">Legal</p>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#737373] hover:text-white transition-colors text-sm uppercase tracking-wider">Privacy</a></li>
              <li><a href="#" className="text-[#737373] hover:text-white transition-colors text-sm uppercase tracking-wider">Terms</a></li>
            </ul>
          </div>
          <div>
            <p className="ws-label mb-6 text-white">Contact</p>
            <ul className="space-y-4">
              <li className="text-[#737373] text-sm">Central Business District</li>
              <li className="text-[#737373] text-sm">Metro City</li>
              <li><a href="mailto:partners@walkinsquare.com" className="text-[#737373] hover:text-[#FF3333] transition-colors text-sm">partners@walkinsquare.com</a></li>
            </ul>
          </div>
          <div>
            <p className="ws-label mb-6 text-white">Hours</p>
            <ul className="space-y-4">
              <li className="text-[#737373] text-sm">Mon - Sat: 10AM - 10PM</li>
              <li className="text-[#737373] text-sm">Sun: 11AM - 9PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#262626] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="ws-label">
            © {new Date().getFullYear()} WalkInSquare. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#FF3333] animate-pulse" />
            <span className="ws-label">Now Leasing</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Home
const Home = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-[#EDEDED]" data-testid="home-page">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <RunningOutletsSection />
        <UpcomingOutletsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
