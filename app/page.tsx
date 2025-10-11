"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Plus,
  Minus,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";
import { BRANDS, FAQ_DATA } from "../lib/constants";
import StrategyLottieAnimation from "../components/StrategyLottieAnimation";
import PartnershipLottieAnimation from "../components/PartnershipLottieAnimation";
import MeasurableLottieAnimation from "../components/MeasurableLottieAnimation";
import ScalableLottieAnimation from "../components/ScalableLottieAnimation";
import CampaignLottieAnimation from "../components/CampaignLottieAnimation";
import PhoneAnimation from "../components/PhoneAnimation";

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Slogan Section */}
        <section className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          {/* Dynamic Background Elements */}
          <div className="absolute inset-0">
            {/* Animated gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-cyan-600/30"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-transparent to-orange-500/20"></div>

            {/* Large floating orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

            {/* Geometric shapes */}
            <div
              className="absolute top-20 right-20 w-24 h-24 border-2 border-cyan-400/30 rotate-45 animate-spin"
              style={{ animationDuration: "20s" }}
            ></div>
            <div className="absolute bottom-20 left-20 w-16 h-16 border-2 border-purple-400/30 rotate-12 animate-pulse delay-700"></div>
            <div className="absolute top-1/3 left-1/3 w-12 h-12 bg-gradient-to-br from-pink-400/40 to-purple-500/40 rounded-full animate-bounce delay-300"></div>
            <div className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-gradient-to-br from-cyan-400/50 to-blue-500/50 rounded-full animate-bounce delay-1000"></div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h60v1H0z'/%3E%3Cpath d='M0 0h1v60H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>

            {/* Animated lines */}
            <div className="absolute top-20 left-20 w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-10 w-24 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse delay-300"></div>
          </div>

          {/* Main Content - Slogan Only */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              {/* Company Slogan - Enhanced Typography */}
              <div className="space-y-2 md:space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-7xl md:text-9xl lg:text-[12rem] font-black leading-none tracking-tight"
                >
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
                    AMPLIFY
                  </span>
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-none tracking-tight"
                >
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent drop-shadow-2xl">
                    YOUR BRAND,
                  </span>
                </motion.h2>

                <motion.h3
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="text-5xl md:text-7xl lg:text-[8rem] font-black leading-none tracking-tight"
                >
                  <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
                    INFLUENCE THE WORLD.
                  </span>
                </motion.h3>
              </div>
            </motion.div>
          </div>

          {/* Bottom gradient transition */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/30 to-transparent"></div>
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
                    <a
                      href="mailto:josh@ekkomedia.net"
                      className="group inline-flex items-center bg-transparent border-2 border-white/40 hover:border-white/60 hover:bg-white/10 text-white/90 hover:text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                    >
                      <span>Get Started</span>
                      <div className="ml-2 w-2 h-2 bg-white/60 rounded-full group-hover:bg-white transition-colors duration-300"></div>
                    </a>
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
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 h-20 w-60 rounded-2xl flex items-center justify-center flex-shrink-0 hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                          {/* Brand logo */}
                          <div className="w-12 h-12 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                            <img
                              src={brand.logo}
                              alt={`${brand.name} logo`}
                              className="w-[100%] h-[100%] object-contain"
                              onError={(e) => {
                                // Fallback to gradient if logo fails to load
                                const target = e.target as HTMLImageElement;
                                target.style.display = "none";
                                const fallback =
                                  target.nextElementSibling as HTMLElement;
                                if (fallback) fallback.style.display = "flex";
                              }}
                            />
                            {/* Fallback gradient logo */}
                            <div
                              className={`w-full h-full bg-gradient-to-br ${brand.color} rounded-xl items-center justify-center hidden`}
                            >
                              <span className="text-white font-bold text-3xl">
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
              {/* Left Side - Strategy Animation */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative group overflow-hidden rounded-2xl aspect-[4/3]">
                  {/* Strategy Lottie Animation */}
                  <StrategyLottieAnimation />
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
                    <span className="text-primary-600">
                      STRATEGY THAT ALIGNS{" "}
                    </span>
                    <br />
                    <span className="text-primary-500">WITH YOUR BRAND</span>
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    We take time to understand your goals, audience, and
                    positioning. From there, we design influencer campaigns
                    tailored to your objectives, whether that’s awareness,
                    conversions, or long-term brand equity.{" "}
                  </p>
                  <a
                    href="mailto:josh@ekkomedia.net"
                    className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Contact Us
                    <span className="ml-2 text-xl">+</span>
                  </a>
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
                    <span className="text-blue-600">CREATOR PARTNERSHIPS</span>
                    <br />
                    <span className="text-blue-500">THAT MAKE SENSE</span>
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    We connect you with vetted creators who align with your
                    values and speak authentically to your audience. From micro
                    to mega, we build balanced rosters that drive both scale and
                    credibility.
                  </p>
                  <Link
                    href="mailto:josh@ekkomedia.net"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Contact Us
                    <span className="ml-2 text-xl">+</span>
                  </Link>
                </div>
              </motion.div>

              {/* Left Side - Creator Partnerships Animation */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative order-1 lg:order-2"
              >
                <div className="relative group overflow-hidden rounded-2xl aspect-[4/3]">
                  {/* Partnership Video Animation */}
                  <PartnershipLottieAnimation />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

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
                  {/* Measurable Impact Lottie Animation */}
                  <MeasurableLottieAnimation />
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
                    <span className="text-primary-600">MEASURABLE IMPACT</span>
                    <br />
                    <span className="text-primary-500">YOU CAN TRUST</span>
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    Every campaign comes with clear reporting and insights. We
                    track ROI, engagement, and audience impact so you know
                    exactly how your budget is performing.
                  </p>
                  <a
                    href="mailto:josh@ekkomedia.net"
                    className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Contact Us
                    <span className="ml-2 text-xl">+</span>
                  </a>
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
                    <span className="text-blue-600">SCALABLE PARTNERSHIPS</span>
                    <br />
                    <span className="text-blue-500">THAT LAST</span>
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    We don’t just deliver one-off posts. We build pathways for
                    creators to become long-term brand ambassadors, ensuring
                    consistency and deeper trust with your customers.
                  </p>
                  <Link
                    href="mailto:josh@ekkomedia.net"
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
                  {/* Scalable Partnerships Lottie Animation */}
                  <ScalableLottieAnimation />
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
                  {/* Workflow Video Animation */}
                  <CampaignLottieAnimation />
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
                    <span className="text-purple-600">CAMPAIGN MANAGEMENT</span>
                    <br />
                    <span className="text-purple-500">WITHOUT THE STRESS </span>
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    We handle the full process: briefs, contracts, negotiations,
                    timelines, approvals, and communication. You’ll never have
                    to chase a creator or worry about a missed deadline.
                  </p>
                  <Link
                    href="mailto:josh@ekkomedia.net"
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

        {/* FAQ Section */}
        <section className="py-20 bg-white relative overflow-hidden">
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative group overflow-hidden rounded-3xl aspect-[4/5] max-w-md mx-auto lg:mx-0">
                  {/* Phone Animation */}
                  <PhoneAnimation />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-100 rounded-full opacity-15"></div>
                </div>
              </motion.div>

              {/* Right Side - FAQ */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4 order-1 lg:order-2"
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

                    <a
                      href="mailto:josh@ekkomedia.net"
                      className="inline-flex items-center bg-white hover:bg-gray-100 text-blue-900 font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl border-2 border-white/20"
                    >
                      LET'S TALK
                    </a>
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
                    <div className="grid grid-cols-2 gap-8 text-center">
                      <div>
                        <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tight">
                          500+
                        </div>
                        <div className="text-white/80 text-sm font-medium tracking-wide">
                          Creators
                        </div>
                      </div>
                      <div>
                        <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tight">
                          10M+
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
