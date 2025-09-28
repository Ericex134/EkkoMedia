"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Target, Globe, TrendingUp } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Integrity First",
      description:
        "We believe trust is the foundation of every partnership. We act transparently and honor every commitment — with brands, creators, and audiences alike.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Creator-Centric Approach",
      description:
        "Creators aren’t just media slots — they’re partners. We treat them with respect so they can represent your brand authentically and sustainably.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Results With Accountability",
      description:
        "Every dollar matters. We back strategy with data, measure outcomes, and take responsibility for delivering real impact.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Agility Over Bureaucracy",
      description:
        "The digital space moves fast — and so do we. We adapt quickly, solve problems directly, and keep campaigns moving without unnecessary delays.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Long-Term Thinking",
      description:
        "We build relationships, not transactions. Whether with creators or brands, our goal is to create scalable, lasting partnerships that grow in value over time.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>

          {/* Floating geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-500/25 to-pink-500/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>

          {/* Hexagonal pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 0l15 8.66v17.32L30 34.64l-15-8.66V8.66L30 0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          {/* Animated lines */}
          <div className="absolute top-20 left-20 w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-10 w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse delay-300"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center"
          >
            {/* Main Title with Unique Typography */}
            <div className="mb-8">
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 leading-none tracking-tight"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  OUR
                </span>
              </motion.h1>

              <motion.h2
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-wide"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  STORY
                </span>
              </motion.h2>
            </div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className="text-2xl md:text-3xl font-light text-gray-300 max-w-4xl mx-auto leading-relaxed">
                From{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                  humble beginnings
                </span>{" "}
                to{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                  industry leadership
                </span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Discover the journey that made Ekko Media the go-to influencer
              agency for{" "}
              <span className="text-cyan-300 font-semibold">
                audience engagement
              </span>{" "}
              and authentic brand partnerships.
            </motion.p>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-500"></div>
            <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-700"></div>
            <div className="absolute top-1/2 right-10 w-5 h-5 bg-blue-400 rounded-full animate-bounce delay-300"></div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Ekko Media is a global influencer marketing agency, operating in
                both Hong Kong and the United Kingdom. Our mission is to bridge
                the gap between brands and creators, to create a seamless
                transition into producing highly engaging and impactful content
                for brands.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Influencer marketing in this modern day of age is the most
                powerful tool to raise your brands awareness, we help these
                brands navigate the complicated world and wild west that is
                social media.
              </p>
              <a
                href="mailto:josh@ekkomedia.net"
                className="btn-primary text-lg px-8 py-4"
              >
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <Users size={80} className="mx-auto mb-4 opacity-80" />
                  <p className="text-xl font-semibold">Our Mission Visual</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-100 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-200 rounded-full opacity-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape how we work
              with our clients and creators.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join the brands that trust us to deliver exceptional influencer
              marketing results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:josh@ekkomedia.net"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
