"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";
import { BRANDS, TESTIMONIALS, FAQ_DATA } from "../lib/constants";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    const handleUserInteraction = () => {
      setUserInteracted(true);
      if (videoRef.current) {
        videoRef.current.play().catch(console.log);
      }
      // Remove event listeners after first interaction
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };

    // Add event listeners for user interaction
    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);
    document.addEventListener("touchstart", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);

  const scrollTestimonials = (direction: "left" | "right") => {
    if (testimonialsRef.current) {
      const scrollAmount = 400;
      const currentScroll = testimonialsRef.current.scrollLeft;
      const targetScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      testimonialsRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };


  return (
    <>
      <div className="min-h-screen">
        {/* Video Section */}
        <section className="relative h-screen overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onLoadStart={() => console.log("Video loading started")}
              onCanPlay={() => console.log("Video can play")}
              onError={() => {
                console.log("Video failed to load");
                setVideoError(true);
              }}
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Fallback background when video doesn't load */}
            {videoError && (
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                <div className="text-white text-center">
                  <Play size={80} className="mx-auto mb-4" />
                  <p className="text-xl">Video unavailable</p>
                  <p className="text-sm mt-2 opacity-75">
                    Please check your video file
                  </p>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>

          {/* Video Animate Out Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          />
        </section>

        {/* Hero Title Section */}
        <section className="relative py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 overflow-hidden">
          {/* Colorful Background Elements */}
          <div className="absolute inset-0">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-cyan-400/40"></div>

            {/* Floating colorful shapes */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-300/40 to-blue-400/40 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-300/35 to-pink-400/35 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-r from-blue-300/45 to-cyan-300/45 rounded-full blur-xl animate-pulse delay-500"></div>
            <div className="absolute top-1/3 left-1/3 w-28 h-28 bg-gradient-to-r from-purple-300/30 to-blue-300/30 rounded-full blur-2xl animate-pulse delay-700"></div>

            {/* Geometric shapes */}
            <div className="absolute top-20 right-20 w-16 h-16 border-2 border-cyan-300/40 rotate-45 animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-12 h-12 border-2 border-purple-300/40 rotate-12 animate-pulse delay-500"></div>
            <div className="absolute top-1/2 left-10 w-8 h-8 bg-gradient-to-br from-cyan-300/50 to-blue-300/50 rounded-full animate-bounce delay-300"></div>

            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 0l15 8.66v17.32L30 34.64l-15-8.66V8.66L30 0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Floating Card Container */}
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl border border-white/20 mx-auto max-w-5xl transform hover:scale-105 transition-all duration-500">
                {/* Card Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-3xl"></div>

                {/* Additional Shadow Layers */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl -z-10"></div>
                <div className="absolute -inset-2 bg-white/5 rounded-3xl blur-lg -z-5"></div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Main Title - Colorful and Modern */}
                  <div className="mb-12">
                    <motion.h1
                      className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none tracking-tight"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent drop-shadow-lg">
                        EKKO
                      </span>
                    </motion.h1>

                    <motion.h2
                      className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.1,
                      }}
                      viewport={{ once: true }}
                    >
                      <span className="bg-gradient-to-r from-cyan-200 via-white to-purple-200 bg-clip-text text-transparent drop-shadow-lg">
                        MEDIA
                      </span>
                    </motion.h2>
                  </div>

                  {/* Colorful Tagline */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mb-12"
                  >
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/95 max-w-4xl mx-auto leading-relaxed">
                      <span className="bg-gradient-to-r from-cyan-200 via-white to-purple-200 bg-clip-text text-transparent drop-shadow-lg">
                        Amplify your brand,
                      </span>
                      <br />
                      <span className="bg-gradient-to-r from-purple-200 via-pink-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-lg">
                        influence the world.
                      </span>
                    </p>
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                  >
                    <Link
                      href="/contact"
                      className="group relative inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <span className="relative z-10">Get Started</span>
                      <ArrowRight
                        className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                        size={20}
                      />
                    </Link>

                    <Link
                      href="/services"
                      className="group inline-flex items-center bg-transparent border-2 border-white/40 hover:border-white/60 hover:bg-white/10 text-white/90 hover:text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                    >
                      <span>Our Services</span>
                      <div className="ml-2 w-2 h-2 bg-white/60 rounded-full group-hover:bg-white transition-colors duration-300"></div>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Transition gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/30 to-transparent"></div>
        </section>

        {/* Client Logos Section */}
        <section className="py-8 bg-gradient-to-br from-blue-500 via-blue-400 to-cyan-400 overflow-hidden relative">
          {/* Top transition gradient */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-blue-500/40 to-transparent"></div>

          {/* Background Elements */}
          <div className="absolute inset-0">
            {/* Floating orbs */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-cyan-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-300/15 rounded-full blur-3xl animate-pulse delay-500"></div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h60v1H0z'/%3E%3Cpath d='M0 0h1v60H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white/90 mb-1">
                Trusted by Industry Leaders
              </h3>
              <p className="text-white/70 text-base">
                Partnering with the world's most innovative brands
              </p>
            </motion.div>

            {/* Brand Logos Container */}
            <div className="relative">
              {/* Remove gradient fade edges to prevent color cutoff */}

              <div className="flex animate-scroll space-x-8 items-center py-4">
                {/* Duplicate the brands for seamless loop */}
                {[...Array(2)].map((_, setIndex) => (
                  <div
                    key={setIndex}
                    className="flex space-x-8 items-center flex-shrink-0"
                  >
                    {BRANDS.map((brand, i) => (
                      <motion.div
                        key={`${setIndex}-${i}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative"
                      >
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 h-20 w-40 rounded-2xl flex items-center justify-center flex-shrink-0 hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                          {/* Brand logo */}
                          <div className="w-12 h-12 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                            <img
                              src={brand.logo}
                              alt={`${brand.name} logo`}
                              className="w-full h-full object-contain filter brightness-0 invert"
                              onError={(e) => {
                                // Fallback to gradient if logo fails to load
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const fallback = target.nextElementSibling as HTMLElement;
                                if (fallback) fallback.style.display = 'flex';
                              }}
                            />
                            {/* Fallback gradient logo */}
                            <div
                              className={`w-full h-full bg-gradient-to-br ${brand.color} rounded-xl items-center justify-center hidden`}
                            >
                              <span className="text-white font-bold text-lg">
                                {brand.name.charAt(0)}
                              </span>
                            </div>
                          </div>
                          <span className="text-white font-semibold text-sm group-hover:text-white/90 transition-colors duration-300">
                            {brand.name}
                          </span>
                        </div>

                        {/* Hover glow effect */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${brand.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}
                        ></div>
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ef4444' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-400/25 rounded-full blur-lg animate-pulse delay-500"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What we do
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Single Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative group overflow-hidden rounded-2xl aspect-[4/3]">
                  <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-4xl font-bold">1</span>
                      </div>
                      <p className="text-xl font-medium">
                        Influencer Marketing
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>

              {/* Right Side - Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    <span className="text-primary-600">INFLUENCER</span>
                    <br />
                    <span className="text-primary-500">MARKETING</span>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    We build creative influencer solutions that drive unrivalled
                    results. We work with brands to design an influencer
                    strategy that moves the needle. We then deliver a campaign
                    with the perfect influencer advocates handling the whole
                    content creation and amplification process, ensuring
                    high-impact campaigns that resonate with your target
                    audience.
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Contact Us
                    <span className="ml-2 text-xl">+</span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Paid Social Media Whitelisting Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-200 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-16 right-16 w-24 h-24 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-16 left-16 w-28 h-28 bg-indigo-300/20 rounded-full blur-2xl animate-pulse delay-700"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-blue-400/25 rounded-full blur-lg animate-pulse delay-300"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Right Side - Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8 order-2 lg:order-1"
              >
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    <span className="text-blue-600">PAID SOCIAL</span>
                    <br />
                    <span className="text-blue-500">MEDIA WHITELISTING</span>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Amplify your influencer content across paid social channels
                    with our whitelisting services. We help brands extend the
                    reach and impact of authentic influencer content through
                    strategic paid promotion, ensuring maximum ROI and authentic
                    engagement across all social platforms.
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Contact Us
                    <span className="ml-2 text-xl">+</span>
                  </Link>
                </div>
              </motion.div>

              {/* Left Side - Single Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative order-1 lg:order-2"
              >
                <div className="relative group overflow-hidden rounded-2xl aspect-[4/3]">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-4xl font-bold">2</span>
                      </div>
                      <p className="text-xl font-medium">
                        Paid Social Whitelisting
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Media Strategy and Management Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 via-purple-100 to-pink-200 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a855f7' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 right-20 w-22 h-22 bg-purple-200/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-30 h-30 bg-pink-300/20 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute top-1/2 right-1/4 w-18 h-18 bg-purple-400/25 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Single Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative group overflow-hidden rounded-2xl aspect-[4/3]">
                  <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-4xl font-bold">3</span>
                      </div>
                      <p className="text-xl font-medium">
                        Social Media Strategy
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>

              {/* Right Side - Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    <span className="text-purple-600">SOCIAL MEDIA</span>
                    <br />
                    <span className="text-purple-500">
                      STRATEGY & MANAGEMENT
                    </span>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Develop and execute comprehensive social media strategies
                    that drive engagement and growth. Our team manages your
                    social presence across all platforms, creating consistent,
                    high-quality content that builds authentic communities and
                    drives meaningful results for your brand.
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Contact Us
                    <span className="ml-2 text-xl">+</span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Network Section */}
        <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {/* Floating orbs */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl animate-pulse opacity-30"></div>
            <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl animate-pulse delay-1000 opacity-25"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse delay-500 opacity-20"></div>

            {/* Geometric shapes */}
            <div
              className="absolute top-20 left-20 w-16 h-16 border-2 border-white/20 rotate-45 animate-spin"
              style={{ animationDuration: "20s" }}
            ></div>
            <div className="absolute bottom-20 right-20 w-12 h-12 border-2 border-cyan-400/30 rotate-12 animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-bounce delay-700"></div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h60v1H0z'/%3E%3Cpath d='M0 0h1v60H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center"
            >
              {/* Main Network Text */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    OUR
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                    NETWORK
                  </span>
                </h2>
              </motion.div>

              {/* Creator Count */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-4">
                  <div className="text-4xl md:text-6xl font-bold text-white mr-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                      500+
                    </span>
                  </div>
                  <div className="text-xl md:text-2xl font-semibold text-white/90">
                    CREATORS
                  </div>
                </div>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
              >
                A global network of world-class creators, influencers, and
                content makers
                <br />
                <span className="text-cyan-300 font-semibold">
                  ready to bring your vision to life
                </span>
              </motion.p>

              {/* Floating Elements */}
              <div className="absolute top-10 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute top-20 right-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-500"></div>
              <div className="absolute bottom-10 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-700"></div>
              <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-yellow-400 rounded-full animate-bounce delay-300"></div>
            </motion.div>
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section>

        {/* We've Done It Before Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-24 h-24 bg-gray-200/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gray-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gray-400/25 rounded-full blur-lg animate-pulse delay-500"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                We've done it before.
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover how we've helped leading brands achieve extraordinary
                results through innovative influencer marketing campaigns.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* SandboxVR Project Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Background Image/Visual */}
                <div className="relative h-80 bg-gradient-to-br from-red-500 via-red-600 to-red-700 overflow-hidden">
                  {/* Simulated collage background */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-16 h-16 bg-white/30 rounded-lg"></div>
                    <div className="absolute top-8 right-8 w-12 h-12 bg-white/20 rounded-lg"></div>
                    <div className="absolute bottom-8 left-8 w-20 h-20 bg-white/25 rounded-lg"></div>
                    <div className="absolute bottom-4 right-4 w-14 h-14 bg-white/30 rounded-lg"></div>
                  </div>

                  {/* SANDBOXVR Logo */}
                  <div className="absolute top-6 left-6 text-white">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
                      </div>
                      <span className="text-xl font-bold">SANDBOXVR</span>
                    </div>
                  </div>

                  {/* Statistics Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-blue-500 rounded-2xl p-4 backdrop-blur-sm">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="text-white">
                          <div className="text-2xl font-bold">35</div>
                          <div className="text-sm opacity-90">Creators</div>
                        </div>
                        <div className="text-white">
                          <div className="text-2xl font-bold">2M</div>
                          <div className="text-sm opacity-90">Impressions</div>
                        </div>
                        <div className="text-white">
                          <div className="text-2xl font-bold">168K</div>
                          <div className="text-sm opacity-90">Engagements</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    COMBINING THE REACH OF INFLUENCERS WITH EXPERIENTIAL EVENTS
                    TO LAUNCH SQUID GAME IN VR FOR SANDBOX VR AND NETFLIX.
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm font-medium">Gaming & VR</span>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Revolut Project Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Background Image/Visual */}
                <div className="relative h-80 bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-hidden">
                  {/* Simulated garage/workshop background */}
                  <div className="absolute inset-0">
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-yellow-400/20 to-transparent"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-yellow-400/10 rounded-full"></div>
                  </div>

                  {/* QR Code */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-white rounded-lg p-2">
                    <div className="w-full h-full bg-black rounded grid grid-cols-4 gap-0.5">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div
                          key={i}
                          className={`${
                            i % 3 === 0 ? "bg-white" : "bg-black"
                          } rounded-sm`}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Revolut Card Visual */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-32 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-2xl flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-xs font-bold">REVOLUT</div>
                        <div className="text-xs mt-1">VISA</div>
                      </div>
                    </div>
                  </div>

                  {/* Statistics Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-blue-500 rounded-2xl p-4 backdrop-blur-sm">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="text-white">
                          <div className="text-2xl font-bold">4.4M</div>
                          <div className="text-sm opacity-90">Views</div>
                        </div>
                        <div className="text-white">
                          <div className="text-2xl font-bold">5%</div>
                          <div className="text-sm opacity-90">Engagements</div>
                        </div>
                        <div className="text-white">
                          <div className="text-2xl font-bold">#2</div>
                          <div className="text-sm opacity-90">
                            Trending on YouTube
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    HELPING REVOLUT GO TRENDING WITH YOUTUBE INFLUENCER
                    MARKETING.
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium">
                        Fintech & YouTube
                      </span>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* View All Projects Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                href="/work"
                className="inline-flex items-center bg-gray-900 hover:bg-black text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View All Projects
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Our Clients Say Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-24 h-24 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-indigo-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-blue-300/25 rounded-full blur-lg animate-pulse delay-500"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                OUR CLIENTS SAY...
              </h2>
            </motion.div>

            {/* Testimonials Container */}
            <div className="relative">
              {/* Navigation Arrows */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 flex flex-col space-y-2">
                <button
                  onClick={() => scrollTestimonials("left")}
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => scrollTestimonials("right")}
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Testimonials Scroll Container */}
              <div
                ref={testimonialsRef}
                className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {/* Testimonial 1 - Ubisoft */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-96 bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Company Logo */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">U</span>
                    </div>
                    <span className="text-2xl font-bold text-gray-900">
                      UBISOFT
                    </span>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                    "Ekko Media delivered exceptional results for our gaming
                    campaign. Their strategic approach to influencer marketing
                    helped us reach our target audience with authentic content
                    that truly resonated. The team's expertise in the gaming
                    space is unmatched."
                  </blockquote>

                  {/* Author */}
                  <div className="mb-4">
                    <div className="font-bold text-gray-900">Liam Redman</div>
                    <div className="text-gray-600">
                      Content Creators Manager
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center"
                      >
                        <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Testimonial 2 - Hostinger */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-96 bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Company Logo */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">H</span>
                    </div>
                    <span className="text-2xl font-bold text-gray-900">
                      HOSTINGER
                    </span>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                    "Working with Ekko Media transformed our digital presence.
                    Their creative campaigns and strategic influencer
                    partnerships helped us achieve unprecedented engagement
                    rates. The ROI exceeded our expectations by 300%."
                  </blockquote>

                  {/* Author */}
                  <div className="mb-4">
                    <div className="font-bold text-gray-900">
                      Mariana Afonso
                    </div>
                    <div className="text-gray-600">Partnership Team Lead</div>
                  </div>

                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center"
                      >
                        <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Testimonial 3 - Netflix */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-96 bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Company Logo */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">N</span>
                    </div>
                    <span className="text-2xl font-bold text-gray-900">
                      NETFLIX
                    </span>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                    "Ekko Media's innovative approach to experiential marketing
                    combined with influencer partnerships created buzz that
                    lasted months. Their VR campaign for Squid Game was a
                    masterclass in creative execution."
                  </blockquote>

                  {/* Author */}
                  <div className="mb-4">
                    <div className="font-bold text-gray-900">Sarah Chen</div>
                    <div className="text-gray-600">
                      Global Marketing Director
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center"
                      >
                        <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Testimonial 4 - Revolut */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-96 bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Company Logo */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">R</span>
                    </div>
                    <span className="text-2xl font-bold text-gray-900">
                      REVOLUT
                    </span>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                    "The YouTube campaign Ekko Media created for us went viral
                    and trended #2 globally. Their understanding of fintech
                    marketing and creator relationships is exceptional. We saw a
                    500% increase in app downloads."
                  </blockquote>

                  {/* Author */}
                  <div className="mb-4">
                    <div className="font-bold text-gray-900">
                      James Mitchell
                    </div>
                    <div className="text-gray-600">
                      Head of Growth Marketing
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center"
                      >
                        <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Testimonial 5 - SandboxVR */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-96 bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Company Logo */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">S</span>
                    </div>
                    <span className="text-2xl font-bold text-gray-900">
                      SANDBOXVR
                    </span>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                    "Ekko Media's experiential marketing expertise brought our
                    VR experience to life. The influencer partnerships they
                    secured created authentic buzz that drove foot traffic to
                    our locations worldwide."
                  </blockquote>

                  {/* Author */}
                  <div className="mb-4">
                    <div className="font-bold text-gray-900">
                      Alex Rodriguez
                    </div>
                    <div className="text-gray-600">VP of Marketing</div>
                  </div>

                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center"
                      >
                        <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-24 h-24 bg-gray-200/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gray-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gray-400/25 rounded-full blur-lg animate-pulse delay-500"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Side - Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative group overflow-hidden rounded-3xl aspect-[3/4]">
                  <div className="w-full h-full bg-gradient-to-br from-purple-900 via-purple-800 to-black flex items-center justify-center relative">
                    {/* Simulated portrait image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                        <span className="text-white text-4xl font-bold">E</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Team Member
                      </h3>
                      <p className="text-purple-200">Marketing Specialist</p>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-6 right-6 w-16 h-16 border-2 border-white/20 rounded-lg rotate-45 animate-pulse"></div>
                    <div className="absolute bottom-6 left-6 w-8 h-8 bg-purple-400/30 rounded-full animate-bounce delay-1000"></div>
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>

              {/* Right Side - FAQ */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {FAQ_DATA.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-5 text-left bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg transition-all duration-300 flex items-center justify-between group"
                    >
                      <span className="flex-1 pr-4">{faq.question}</span>
                      <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                        {openFAQ === index ? (
                          <Minus size={16} className="text-white" />
                        ) : (
                          <Plus size={16} className="text-white" />
                        )}
                      </div>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: openFAQ === index ? "auto" : 0,
                        opacity: openFAQ === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-5 bg-white text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            {/* Floating orbs */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-cyan-200/25 rounded-full blur-xl animate-pulse delay-500"></div>

            {/* Geometric shapes */}
            <div className="absolute top-20 right-20 w-16 h-16 border-2 border-blue-300/30 rotate-45 animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-12 h-12 border-2 border-purple-300/30 rotate-12 animate-pulse delay-700"></div>
            <div className="absolute top-1/3 left-1/3 w-8 h-8 bg-gradient-to-br from-cyan-300/30 to-blue-300/30 rounded-full animate-bounce delay-300"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main CTA Card */}
              <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 rounded-3xl p-12 md:p-16 shadow-2xl overflow-hidden">
                {/* Card Background Elements */}
                <div className="absolute inset-0">
                  {/* Large stylized arrow/chevron */}
                  <div className="absolute top-1/2 right-0 w-64 h-64 transform translate-x-32 -translate-y-1/2">
                    <div className="w-full h-full bg-gradient-to-l from-cyan-400/20 to-transparent rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-cyan-400/30 rotate-45 rounded-lg"></div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-8 right-8 w-20 h-20 bg-cyan-400/10 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute bottom-8 left-8 w-16 h-16 bg-purple-400/10 rounded-full blur-lg animate-pulse delay-500"></div>

                  {/* Grid pattern overlay */}
                  <div className="absolute inset-0 opacity-5">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h60v1H0z'/%3E%3Cpath d='M0 0h1v60H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* Left Side - Call to Action */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                  >
                    <div>
                      <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
                        READY TO{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                          LEVEL UP?
                        </span>
                      </h2>
                    </div>

                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-lg font-light">
                      We'll help you unlock the power of influencers to
                      transform your brand.
                    </p>

                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-white hover:bg-gray-100 text-blue-900 font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl border-2 border-white/20"
                    >
                      LET'S TALK
                    </Link>
                  </motion.div>

                  {/* Right Side - Client Showcase & Statistics */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                  >
                    {/* Client Logos */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-end space-x-8 space-y-4">
                      <div className="text-white font-bold text-2xl tracking-wide">
                        ProtonVPN
                      </div>
                      <div className="text-white font-bold text-2xl tracking-wide">
                        Raycon
                      </div>
                      <div className="text-white font-bold text-2xl tracking-wide">
                        NordVPN
                      </div>
                    </div>

                    {/* Performance Statistics */}
                    <div className="grid grid-cols-3 gap-8 text-center">
                      <div>
                        <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tight">
                          2.94M
                        </div>
                        <div className="text-white/80 text-sm font-medium tracking-wide">
                          Views
                        </div>
                      </div>
                      <div>
                        <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tight">
                          #2
                        </div>
                        <div className="text-white/80 text-sm font-medium tracking-wide">
                          YouTube Trending
                        </div>
                      </div>
                      <div>
                        <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tight">
                          11M
                        </div>
                        <div className="text-white/80 text-sm font-medium tracking-wide">
                          Hashtag Views
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden"></footer>
      </div>
    </>
  );
}
