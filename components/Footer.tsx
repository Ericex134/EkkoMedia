import Link from "next/link";
import { Instagram, Twitter, Facebook, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Scrolling Text Section */}
      <section className="py-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 overflow-hidden">
        <div className="flex animate-scroll space-x-8 items-center">
          {/* Duplicate the text for seamless loop */}
          {[...Array(3)].map((_, setIndex) => (
            <div
              key={setIndex}
              className="flex space-x-8 items-center flex-shrink-0"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`${setIndex}-${i}`}
                  className="text-4xl md:text-6xl font-black text-cyan-400/30 whitespace-nowrap"
                >
                  EKKO MEDIA
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Logo and Social Media */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-3xl font-bold text-white">EKKO MEDIA</span>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon size={20} className="text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side - Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* EXPLORE */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">EXPLORE</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/services"
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/talent"
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    Talent
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work"
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    Work
                  </Link>
                </li>
              </ul>
            </div>

            {/* CONNECT */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">CONNECT</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">LEGAL</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2024 EKKO MEDIA. All rights reserved.
            </p>
            <p className="text-white/60 text-sm">
              Trusted by leading brands worldwide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
