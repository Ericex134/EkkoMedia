"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ExternalLink,
  Play,
  Users,
  Eye,
  Heart,
  TrendingUp,
} from "lucide-react";

export default function Work() {
  const caseStudies = [
    {
      id: 1,
      title: "Squid Game VR Launch Campaign",
      client: "Sandbox VR & Netflix",
      description:
        "Combining the reach of influencers with experiential events to launch Squid Game in VR for Sandbox VR and Netflix.",
      image: "/images/case-study-1.jpg",
      category: "Experiential Marketing",
      stats: [
        { icon: <Eye className="w-5 h-5" />, number: "4.4M", label: "Views" },
        {
          icon: <Heart className="w-5 h-5" />,
          number: "5%",
          label: "Engagements",
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          number: "#2",
          label: "Trending on YouTube",
        },
      ],
      results: [
        "Generated 4.4M total views across all platforms",
        "Achieved 5% engagement rate, 2x industry average",
        "Reached #2 trending on YouTube",
        "Created viral moments that extended campaign reach",
      ],
    },
    {
      id: 2,
      title: "Revolut YouTube Trending Campaign",
      client: "Revolut",
      description:
        "Helping Revolut go trending with YouTube influencer marketing, creating authentic content that resonated with their target audience.",
      image: "//images/case-study-1.jpg2.jpg",
      category: "YouTube Marketing",
      stats: [
        {
          icon: <Users className="w-5 h-5" />,
          number: "100k+",
          label: "New Followers",
        },
        {
          icon: <Heart className="w-5 h-5" />,
          number: "13.74%",
          label: "Engagement Rate",
        },
        {
          icon: <Eye className="w-5 h-5" />,
          number: "11.7M",
          label: "Total Views",
        },
      ],
      results: [
        "Gained 100k+ new followers across platforms",
        "Achieved 13.74% engagement rate",
        "Generated 11.7M total views",
        "Established Revolut as a trending brand",
      ],
    },
    {
      id: 3,
      title: "ASUS ROG Global TikTok Launch",
      client: "ASUS",
      description:
        "The launch of ASUS ROG globally on TikTok, creating engaging content that showcased the brand's gaming expertise.",
      image: "//images/case-study-1.jpg3.jpg",
      category: "TikTok Marketing",
      stats: [
        {
          icon: <Eye className="w-5 h-5" />,
          number: "291k",
          label: "Total Views",
        },
        {
          icon: <Heart className="w-5 h-5" />,
          number: "3.3%",
          label: "Engagement Rate",
        },
        {
          icon: <Users className="w-5 h-5" />,
          number: "100K+",
          label: "Engagements",
        },
      ],
      results: [
        "Generated 291k total views on TikTok",
        "Achieved 3.3% engagement rate",
        "Created 100K+ total engagements",
        "Established ASUS ROG presence on TikTok",
      ],
    },
    {
      id: 4,
      title: "Ubisoft Motorsports Challenge",
      client: "Ubisoft",
      description:
        "Engaging motorsports fans through influencer challenges for Ubisoft, creating interactive content that drove engagement.",
      image: "//images/case-study-1.jpg4.jpg",
      category: "Gaming Marketing",
      stats: [
        {
          icon: <Eye className="w-5 h-5" />,
          number: "2M+",
          label: "Impressions",
        },
        {
          icon: <Heart className="w-5 h-5" />,
          number: "1.51M",
          label: "Views",
        },
        {
          icon: <Users className="w-5 h-5" />,
          number: "200",
          label: "Content Pieces",
        },
      ],
      results: [
        "Generated 2M+ total impressions",
        "Created 1.51M video views",
        "Produced 200+ content pieces",
        "Engaged motorsports community effectively",
      ],
    },
    {
      id: 5,
      title: "Tech Brand Partnership Campaign",
      client: "Leading Tech Brand",
      description:
        "Strategic influencer partnerships that positioned our client as an innovative leader in the tech space.",
      image: "//images/case-study-1.jpg5.jpg",
      category: "Tech Marketing",
      stats: [
        { icon: <Eye className="w-5 h-5" />, number: "5.2M", label: "Reach" },
        {
          icon: <Heart className="w-5 h-5" />,
          number: "8.5%",
          label: "Engagement Rate",
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          number: "150%",
          label: "ROI Increase",
        },
      ],
      results: [
        "Achieved 5.2M total reach",
        "Generated 8.5% engagement rate",
        "Increased ROI by 150%",
        "Established thought leadership position",
      ],
    },
    {
      id: 6,
      title: "Fashion Brand Ambassador Program",
      client: "Premium Fashion Brand",
      description:
        "Long-term brand ambassador program that built authentic relationships and drove sustained growth.",
      image: "//images/case-study-1.jpg6.jpg",
      category: "Fashion Marketing",
      stats: [
        {
          icon: <Users className="w-5 h-5" />,
          number: "50+",
          label: "Ambassadors",
        },
        {
          icon: <Eye className="w-5 h-5" />,
          number: "12M",
          label: "Impressions",
        },
        {
          icon: <Heart className="w-5 h-5" />,
          number: "6.8%",
          label: "Engagement Rate",
        },
      ],
      results: [
        "Recruited 50+ brand ambassadors",
        "Generated 12M total impressions",
        "Achieved 6.8% engagement rate",
        "Built long-term brand loyalty",
      ],
    },
  ];

  const categories = [
    "All",
    "Experiential Marketing",
    "YouTube Marketing",
    "TikTok Marketing",
    "Gaming Marketing",
    "Tech Marketing",
    "Fashion Marketing",
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
                  WORK
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
                Discover how we've helped{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                  leading brands
                </span>{" "}
                create{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                  impactful campaigns
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
              Influencer marketing campaigns that{" "}
              <span className="text-cyan-300 font-semibold">
                drive real results
              </span>{" "}
              and build lasting brand connections.
            </motion.p>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-500"></div>
            <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-700"></div>
            <div className="absolute top-1/2 right-10 w-5 h-5 bg-blue-400 rounded-full animate-bounce delay-300"></div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === 0
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <div className="w-full h-64 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Play size={48} className="mx-auto mb-4 opacity-80" />
                      <p className="text-lg font-semibold">Case Study Visual</p>
                      <p className="text-sm opacity-80">{caseStudy.client}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {caseStudy.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {caseStudy.title}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-4">
                    {caseStudy.client}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {caseStudy.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {caseStudy.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="flex items-center justify-center text-primary-600 mb-2">
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-gray-900">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Results:
                    </h4>
                    <ul className="space-y-2">
                      {caseStudy.results.map((result, resultIndex) => (
                        <li
                          key={resultIndex}
                          className="flex items-start text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      href={`/work/${caseStudy.id}`}
                      className="text-primary-600 font-semibold hover:text-primary-700 transition-colors flex items-center"
                    >
                      Learn More
                      <ExternalLink className="ml-2" size={16} />
                    </Link>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors">
                        <Heart size={18} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors">
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overall Stats */}
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
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The results speak for themselves. Here's what we've achieved for
              our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50M+", label: "Total Views Generated" },
              { number: "2.5M+", label: "Engagements Created" },
              { number: "500+", label: "Campaigns Delivered" },
              { number: "95%", label: "Client Satisfaction Rate" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
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

      {/* Client Testimonials */}
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to
              say about working with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Working with Ekko Media over the past 12 months on our Creator Campaigns have been an absolute pleasure. The passion and creativity the whole team brings are second to none.",
                author: "Liam Redman",
                role: "Content Creators Manager",
                company: "Leading Tech Brand",
              },
              {
                quote:
                  "We've been partnering with Ekko Media for almost a year now, and it's been a great experience. What stands out the most is their dedication to producing high-quality content.",
                author: "Mariana Afonso",
                role: "Partnership Team Lead",
                company: "Global Brand",
              },
              {
                quote:
                  "I've been working with Ekko Media for over a year, and I'm consistently impressed by their professionalism and responsiveness. Their commitment and clear communication make them a trusted partner.",
                author: "Julien Nef",
                role: "Marketing Specialist",
                company: "SaaS Company",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="text-4xl text-primary-600 mb-4">"</div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-primary-600 font-medium">
                    {testimonial.company}
                  </div>
                </div>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
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
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's work together to create an influencer marketing campaign
              that delivers exceptional results for your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
              >
                Start Your Campaign
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
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
