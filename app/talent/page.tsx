"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";

export default function Talent() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder and CEO",
      image: "/images/team-member-1.jpg",
      bio: "Visionary leader with 8+ years in influencer marketing, building Ekko Media from the ground up to become a trusted partner for leading brands.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Sarah Johnson",
      role: "Operations Lead",
      image: "/images/team-member-1.jpg",
      bio: "Strategic operations expert ensuring seamless campaign execution and client satisfaction across all our influencer marketing initiatives.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Client Services",
      image: "/images/team-member-1.jpg",
      bio: "Client relationship specialist with deep expertise in brand partnerships and campaign strategy development.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Emma Thompson",
      role: "Senior Campaigns Manager",
      image: "//images/team-member-1.jpg4.jpg",
      bio: "Creative campaign strategist with a proven track record of delivering high-impact influencer marketing campaigns.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "David Kim",
      role: "Account Manager",
      image: "//images/team-member-1.jpg5.jpg",
      bio: "Dedicated account manager focused on building lasting relationships and ensuring campaign success for our clients.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Lisa Wang",
      role: "Exclusive Talent Manager",
      image: "//images/team-member-1.jpg6.jpg",
      bio: "Talent acquisition specialist with an extensive network of top-tier influencers across gaming, tech, and entertainment.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "James Wilson",
      role: "Senior Brand Partnerships Executive",
      image: "//images/team-member-1.jpg7.jpg",
      bio: "Partnership development expert with a keen eye for identifying strategic brand collaborations and growth opportunities.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Rachel Green",
      role: "Senior Campaigns Executive",
      image: "//images/team-member-1.jpg8.jpg",
      bio: "Campaign execution specialist with expertise in content creation, social media strategy, and performance optimization.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Michael Brown",
      role: "Campaign Executive",
      image: "//images/team-member-1.jpg9.jpg",
      bio: "Detail-oriented campaign manager ensuring flawless execution and delivery of all influencer marketing initiatives.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Sophie Davis",
      role: "Junior Influencer Executive",
      image: "//images/team-member-1.jpg10.jpg",
      bio: "Emerging talent in influencer relations with a passion for connecting brands with the right creators for maximum impact.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Tom Anderson",
      role: "Influencer Partnerships Coordinator",
      image: "//images/team-member-1.jpg11.jpg",
      bio: "Partnership coordination specialist managing relationships with our extensive network of influencers and content creators.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Nina Patel",
      role: "Executive Assistant",
      image: "//images/team-member-1.jpg12.jpg",
      bio: "Organizational expert ensuring smooth operations and supporting our leadership team in delivering exceptional results.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
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
                  TEAM
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
                Meet the{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                  passionate professionals
                </span>{" "}
                behind{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                  Ekko Media's success
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
              Our diverse team brings together expertise in{" "}
              <span className="text-cyan-300 font-semibold">
                influencer marketing
              </span>{" "}
              and{" "}
              <span className="text-cyan-300 font-semibold">
                creative strategy
              </span>
              .
            </motion.p>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-500"></div>
            <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-700"></div>
            <div className="absolute top-1/2 right-10 w-5 h-5 bg-blue-400 rounded-full animate-bounce delay-300"></div>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "11+", label: "Years In The Industry" },
              { number: "18", label: "Countries We Operate In" },
              { number: "100+", label: "Brands That Trust Us" },
              { number: "6", label: "Key Industry Sectors" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience in
              influencer marketing, brand partnerships, and creative strategy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-64 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <p className="text-sm opacity-80">Team Member Photo</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  <div className="flex space-x-3">
                    <a
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-primary-600 transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-gray-400 hover:text-primary-600 transition-colors"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href={member.social.instagram}
                      className="text-gray-400 hover:text-primary-600 transition-colors"
                    >
                      <Instagram size={18} />
                    </a>
                    <a
                      href="mailto:contact@ekkomedia.com"
                      className="text-gray-400 hover:text-primary-600 transition-colors"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why You Need Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why You Need Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise, experience, and proven track record make us the
              ideal partner for your influencer marketing needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10x", label: "Award Winning Agency" },
              { number: "47m+", label: "Database of Influencers" },
              { number: "1000+", label: "Campaigns Launched" },
              { number: "86%", label: "Returning Customer Base" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gray-50 rounded-xl p-8"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              We're always looking for talented individuals who share our
              passion for influencer marketing and creative excellence.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Explore Current Vacancies
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our expert team can help you achieve your
              marketing goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Get In Touch
              </Link>
              <Link
                href="/services"
                className="btn-secondary text-lg px-8 py-4"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
