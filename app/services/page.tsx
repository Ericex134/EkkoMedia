"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Target,
  Camera,
  Calendar,
  Megaphone,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Influencer Marketing",
      description:
        "We build creative influencer solutions that drive unrivalled results. We work with brands to design an influencer strategy that moves the needle. We then deliver a campaign with the perfect influencer advocates handling the whole content creation and amplification process, ensuring high-impact campaigns that resonate with your target audience.",
      features: [
        "Full funnel influencer marketing campaigns",
        "Influencer seeding and gifting",
        "Influencer affiliates",
        "Paid influencer partnerships",
        "Influencer paid social and whitelisting",
        "Brand ambassador programmes",
        "Influencer events",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Paid Social Media and Whitelisting",
      description:
        "We layer our organic influencer content with the power of paid social to amplify the content, driving deeper engagement and conversions with our target audience. Our team expertly negotiates usage rights for influencer content, repurposes it for a variety of platforms and then uses insight driven strategies to drive real action for our clients.",
      features: [
        "Usage rights negotiation",
        "Content repurposing for multiple platforms",
        "Insight-driven strategies",
        "Brand and influencer channel management",
        "Improved ranking and performance",
        "Incremental performance optimization",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Social Media Strategy and Management",
      description:
        "Social media is constantly adapting with new platforms, algorithms and trends. Attention spans are at an all-time low, and social content has to adapt. Our team goes beyond basic management. We craft winning strategies that command attention and build your social media accounts to do just that.",
      features: [
        "Community engagement strategies",
        "Social listening and monitoring",
        "Content creation and optimization",
        "Trend analysis and adaptation",
        "Culturally relevant content",
        "Account growth and management",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Content Production",
      description:
        "Ekko Media's production department creates attention-grabbing video and image content that converts for brands. Our team is extremely experienced in delivering and producing a wide variety of content all the way from ideation to full production and asset creation.",
      features: [
        "Photography and videography",
        "Long and short form content",
        "Graphic design and branding",
        "Full production services",
        "Asset creation and optimization",
        "Content ideation and strategy",
      ],
      color: "from-red-500 to-red-600",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Events and Experiential",
      description:
        "We build physical experiences that leave a lasting impact on our clients' target audiences. Nowadays, basic events aren't good enough. They need to be exciting and create an emotion. Our team understand modern culture and curates memorable experiences and then puts the pieces together to make them viral online.",
      features: [
        "Trade show activities and booths",
        "Launch parties and events",
        "Community events and activations",
        "PR events and coordination",
        "Full event planning and operation",
        "Viral online experience creation",
      ],
      color: "from-orange-500 to-orange-600",
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
                  SERVICES
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
                Comprehensive{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                  influencer marketing
                </span>{" "}
                solutions that{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                  drive results
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
              Build lasting connections with your{" "}
              <span className="text-cyan-300 font-semibold">
                target audience
              </span>{" "}
              through our proven strategies and expert execution.
            </motion.p>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-500"></div>
            <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-700"></div>
            <div className="absolute top-1/2 right-10 w-5 h-5 bg-blue-400 rounded-full animate-bounce delay-300"></div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6`}
                  >
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    Get Started
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>

                {/* Image/Visual */}
                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="relative">
                    <div
                      className={`w-full h-80 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}
                    >
                      <div className="text-white text-center">
                        <div className="text-6xl mb-4 opacity-80">
                          {service.icon}
                        </div>
                        <p className="text-xl font-semibold">
                          {service.title} Visual
                        </p>
                      </div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-100 rounded-full opacity-20"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-200 rounded-full opacity-10"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven process ensures every campaign delivers maximum impact
              and measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description:
                  "We dive deep into your brand, audience, and goals to create a tailored influencer marketing strategy.",
              },
              {
                step: "02",
                title: "Influencer Selection",
                description:
                  "Using our data-driven platform, we identify and vet the perfect influencers for your campaign.",
              },
              {
                step: "03",
                title: "Campaign Execution",
                description:
                  "We manage the entire process from content creation to amplification across all platforms.",
              },
              {
                step: "04",
                title: "Analysis & Optimization",
                description:
                  "We track performance, analyze results, and optimize for continuous improvement.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss how our services can help you achieve your marketing
              goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
              >
                Start Your Campaign
              </Link>
              <Link
                href="/work"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
