import { useState } from "react";
import { Menu, X, MapPin, Mail, Phone, Clock } from "lucide-react";

const PINK = "#E11D74";
const PINK_DARK = "#B3125C";
const PINK_TINT = "#FDEDF4";

function NavBar({ page, setPage, menuOpen, setMenuOpen }) {
  const links = ["Home", "Catalogue", "About", "Contact"];
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
      <div className="max-w-md mx-auto px-5 py-4 flex items-center justify-between">
        <button
          onClick={() => setPage("Home")}
          className="text-xl font-black tracking-tight text-gray-900"
        >
          RAGA <span style={{ color: PINK }}>TOURS</span>
        </button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => setPage(l)}
              className={`text-sm font-medium ${
                page === l ? "text-gray-900" : "text-gray-500"
              }`}
            >
              {l}
            </button>
          ))}
          <button
            className="px-5 py-2 rounded-full text-white text-sm font-semibold"
            style={{ backgroundColor: PINK }}
          >
            Book Now
          </button>
        </nav>
      </div>
      {menuOpen && (
        <div className="md:hidden max-w-md mx-auto px-5 pb-4 flex flex-col gap-3">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => {
                setPage(l);
                setMenuOpen(false);
              }}
              className={`text-left text-sm font-medium py-1 ${
                page === l ? "text-gray-900" : "text-gray-500"
              }`}
            >
              {l}
            </button>
          ))}
          <button
            className="mt-1 px-5 py-2 rounded-full text-white text-sm font-semibold w-full"
            style={{ backgroundColor: PINK }}
          >
            Book Now
          </button>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: PINK_TINT }} className="mt-16">
      <div className="max-w-md mx-auto px-6 py-10 text-center">
        <div className="text-lg font-black text-gray-900 mb-2">
          RAGA <span style={{ color: PINK }}>TOURS</span>
        </div>
        <p className="text-sm text-gray-600 mb-6">
          Your journey to a great adventure starts here.
        </p>
        <div className="text-sm text-gray-700 space-y-1 mb-6">
          <p>contact@ragatours.com</p>
          <p>Bureau of Immigration Airport, Cagayan de Oro</p>
        </div>
        <p className="text-xs text-gray-400">
          © 2026 RAGA Travel and Tours. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function PillButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`px-6 py-3 rounded-full text-white text-sm font-semibold ${className}`}
      style={{ backgroundColor: PINK }}
    >
      {children}
    </button>
  );
}

function DestinationCard({ name, price, gradient }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
      <div
        className="h-40 flex items-center justify-center text-white text-2xl font-black tracking-wide"
        style={{ background: gradient }}
      >
        {name}
      </div>
      <div className="p-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400">Starting at</p>
          <p className="font-bold text-gray-900">{price}</p>
        </div>
        <button
          className="px-4 py-2 rounded-full text-white text-xs font-semibold"
          style={{ backgroundColor: PINK }}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

function PackageCard({ name, duration, price, gradient }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
      <div
        className="h-44 flex flex-col items-center justify-center text-white gap-1"
        style={{ background: gradient }}
      >
        <span className="text-2xl font-black tracking-wide">{name}</span>
        <span className="text-xs font-semibold opacity-90">{duration}</span>
      </div>
      <div className="p-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400">Package price</p>
          <p className="font-bold text-gray-900">{price}</p>
        </div>
        <button
          className="px-4 py-2 rounded-full text-white text-xs font-semibold"
          style={{ backgroundColor: PINK }}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div
      className="rounded-2xl p-5 border-2"
      style={{ borderColor: PINK, backgroundColor: PINK_TINT }}
    >
      <h3 className="font-bold text-gray-900 mb-1" style={{ color: PINK_DARK }}>
        {title}
      </h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function HomePage({ setPage }) {
  return (
    <div>
      <section
        className="px-6 pt-16 pb-20 text-center text-white"
        style={{
          background: `linear-gradient(160deg, ${PINK_DARK}, ${PINK})`,
        }}
      >
        <p className="uppercase text-xs tracking-widest opacity-90 mb-3">
          Travel on!
        </p>
        <h1 className="text-3xl font-black leading-tight mb-4">
          Your Adventure Awaits
        </h1>
        <p className="text-sm opacity-90 mb-6 max-w-xs mx-auto">
          Explore our different travel packages designed by people who love
          to travel.
        </p>
        <button
          onClick={() => setPage("Catalogue")}
          className="px-6 py-3 rounded-full bg-white text-sm font-semibold"
          style={{ color: PINK_DARK }}
        >
          Explore Now
        </button>
      </section>

      <section className="px-6 py-12 max-w-md mx-auto">
        <h2 className="text-xl font-black text-center text-gray-900 mb-2">
          Why Choose RAGA?
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          We make your travel dreams come true with exceptional service.
        </p>
        <div className="space-y-4">
          <FeatureCard
            title="Ready-to-go Adventures"
            desc="Hand-picked destinations so you can spend less time planning and more time exploring."
          />
          <FeatureCard
            title="Tailored Package Adjustments"
            desc="Every itinerary can be customized to fit your budget, pace, and preferences."
          />
          <FeatureCard
            title="Best-in-first Local Expertise"
            desc="Our local guides know every hidden spot, so you travel like an insider, not a tourist."
          />
        </div>
      </section>

      <section className="px-6 py-12 max-w-md mx-auto">
        <h2 className="text-xl font-black text-center text-gray-900 mb-1">
          Popular Destinations
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Discover our most popular travel destinations
        </p>
        <div className="space-y-5">
          <DestinationCard
            name="KOREA"
            price="₱35,999"
            gradient="linear-gradient(135deg,#7f5af0,#2cb67d)"
          />
          <DestinationCard
            name="JAPAN"
            price="₱42,499"
            gradient="linear-gradient(135deg,#f25f4c,#e53170)"
          />
          <DestinationCard
            name="MANILA"
            price="₱9,999"
            gradient="linear-gradient(135deg,#3a86ff,#8338ec)"
          />
        </div>
        <div className="text-center mt-6">
          <button
            onClick={() => setPage("Catalogue")}
            className="text-sm font-semibold underline"
            style={{ color: PINK }}
          >
            View All Destinations
          </button>
        </div>
      </section>

      <section className="px-6 py-14 text-center" style={{ backgroundColor: PINK_TINT }}>
        <h2 className="text-xl font-black text-gray-900 mb-2">
          Ready for Your Next Adventure?
        </h2>
        <p className="text-sm text-gray-600 mb-6 max-w-xs mx-auto">
          Let us handle the details while you find the perfect trip.
        </p>
        <PillButton onClick={() => setPage("Contact")}>Get Started</PillButton>
      </section>
    </div>
  );
}

function CataloguePage() {
  return (
    <div className="px-6 py-12 max-w-md mx-auto">
      <h1 className="text-2xl font-black text-center text-gray-900 mb-2">
        Explore Our Different Travel Packages
      </h1>
      <p className="text-sm text-gray-500 text-center mb-8">
        Handpicked itineraries designed for every kind of traveler.
      </p>
      <div className="space-y-6">
        <PackageCard
          name="CEBU"
          duration="3D2N"
          price="₱8,999"
          gradient="linear-gradient(135deg,#0ea5e9,#22d3ee)"
        />
        <PackageCard
          name="SIARGAO"
          duration="3D2N"
          price="₱10,499"
          gradient="linear-gradient(135deg,#14b8a6,#84cc16)"
        />
        <PackageCard
          name="BORACAY"
          duration="3D2N"
          price="₱11,299"
          gradient="linear-gradient(135deg,#fb923c,#f43f5e)"
        />
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="px-6 py-12 max-w-md mx-auto">
      <h1 className="text-2xl font-black text-center text-gray-900 mb-2">
        About RAGA Travel and Tours
      </h1>
      <p className="text-sm text-gray-500 text-center mb-8">
        We're passionate about creating unforgettable travel experiences that
        inspire and transform.
      </p>
      <h2 className="font-bold text-gray-900 mb-1" style={{ color: PINK }}>
        Our Story
      </h2>
      <p className="text-xs uppercase tracking-wide text-gray-400 mb-3">
        October 1, 2024 — A New Era of Exploration
      </p>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        RAGA Travel and Tours was born from a simple idea: that everyone
        deserves affordable, stress-free adventures. What started as a small
        group of friends organizing local trips grew into a full-service
        travel agency offering curated packages across the Philippines and
        beyond.
      </p>
      <p className="text-sm text-gray-600 leading-relaxed mb-6">
        We believe travel should be seamless, affordable, and deeply personal.
        Whether you're looking for a quiet island escape or an action-packed
        city adventure, our packages are built to fit your story, not just
        your itinerary.
      </p>
      <div
        className="h-48 rounded-2xl flex items-center justify-center text-white font-semibold text-sm mb-2"
        style={{ background: `linear-gradient(135deg, ${PINK}, ${PINK_DARK})` }}
      >
        The RAGA team, out on the road
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="px-6 py-12 max-w-md mx-auto">
      <h1 className="text-2xl font-black text-center text-gray-900 mb-2">
        Get in Touch with Us
      </h1>
      <p className="text-sm text-gray-500 text-center mb-8">
        Ready to start planning your dream vacation? We're here to help make
        it happen.
      </p>

      <h2 className="font-bold text-gray-900 mb-4">Send Us a Message</h2>
      <form className="space-y-4 mb-10" onSubmit={(e) => e.preventDefault()}>
        <input
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-pink-400"
          placeholder="First Name"
        />
        <input
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-pink-400"
          placeholder="Email Address"
        />
        <input
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-pink-400"
          placeholder="Phone Number"
        />
        <textarea
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none h-28 resize-none focus:border-pink-400"
          placeholder="Message"
        />
        <PillButton type="submit" className="w-full">
          Send Message
        </PillButton>
      </form>

      <h2 className="font-bold text-gray-900 mb-4">Contact Information</h2>
      <div className="space-y-3 text-sm text-gray-600 mb-8">
        <div className="flex items-center gap-3">
          <Mail size={16} style={{ color: PINK }} />
          contact@ragatours.com
        </div>
        <div className="flex items-center gap-3">
          <Phone size={16} style={{ color: PINK }} />
          0912 345 6789
        </div>
        <div className="flex items-center gap-3">
          <MapPin size={16} style={{ color: PINK }} />
          Bureau of Immigration Airport, Cagayan de Oro
        </div>
      </div>

      <h2 className="font-bold text-gray-900 mb-4">Office Hours</h2>
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
          <span className="flex items-center gap-2">
            <Clock size={16} style={{ color: PINK }} /> Monday – Friday
          </span>
          <span>9:00 AM – 6:00 PM</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Clock size={16} style={{ color: PINK }} /> Saturday – Sunday
          </span>
          <span>Closed</span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const pages = {
    Home: <HomePage setPage={setPage} />,
    Catalogue: <CataloguePage />,
    About: <AboutPage />,
    Contact: <ContactPage />,
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <NavBar page={page} setPage={setPage} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {pages[page]}
      <Footer />
    </div>
  );
}
