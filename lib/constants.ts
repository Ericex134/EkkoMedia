// Brand logos and information
export interface Brand {
  name: string;
  logo: string;
  color: string;
  website?: string;
}

export const BRANDS: Brand[] = [
  {
    name: "Netflix",
    logo: "/images/brands/netflix.svg",
    color: "from-red-500 to-red-600",
    website: "https://netflix.com"
  },
  {
    name: "Ubisoft",
    logo: "/images/brands/ubisoft.svg",
    color: "from-blue-600 to-blue-700",
    website: "https://ubisoft.com"
  },
  {
    name: "Revolut",
    logo: "/images/brands/revolut.svg",
    color: "from-purple-500 to-purple-600",
    website: "https://revolut.com"
  },
  {
    name: "Hostinger",
    logo: "/images/brands/hostinger.svg",
    color: "from-orange-500 to-orange-600",
    website: "https://hostinger.com"
  },
  {
    name: "SandboxVR",
    logo: "/images/brands/sandboxvr.svg",
    color: "from-green-500 to-green-600",
    website: "https://sandboxvr.com"
  },
  {
    name: "Spotify",
    logo: "/images/brands/spotify.svg",
    color: "from-green-400 to-green-500",
    website: "https://spotify.com"
  },
  {
    name: "Adobe",
    logo: "/images/brands/adobe.svg",
    color: "from-red-400 to-red-500",
    website: "https://adobe.com"
  },
  {
    name: "Figma",
    logo: "/images/brands/figma.svg",
    color: "from-purple-400 to-purple-500",
    website: "https://figma.com"
  }
];

// Testimonial data
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  logo: string;
  color: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Ekko Media delivered exceptional results for our gaming campaign. Their strategic approach to influencer marketing helped us reach our target audience with authentic content that truly resonated. The team's expertise in the gaming space is unmatched.",
    author: "Liam Redman",
    role: "Content Creators Manager",
    company: "Ubisoft",
    logo: "/images/brands/ubisoft.svg",
    color: "from-blue-600 to-blue-800"
  },
  {
    quote: "Working with Ekko Media transformed our digital presence. Their creative campaigns and strategic influencer partnerships helped us achieve unprecedented engagement rates. The ROI exceeded our expectations by 300%.",
    author: "Mariana Afonso",
    role: "Partnership Team Lead",
    company: "Hostinger",
    logo: "/images/brands/hostinger.svg",
    color: "from-orange-500 to-red-600"
  },
  {
    quote: "Ekko Media's innovative approach to experiential marketing combined with influencer partnerships created buzz that lasted months. Their VR campaign for Squid Game was a masterclass in creative execution.",
    author: "Sarah Chen",
    role: "Global Marketing Director",
    company: "Netflix",
    logo: "/images/brands/netflix.svg",
    color: "from-red-600 to-red-800"
  },
  {
    quote: "The YouTube campaign Ekko Media created for us went viral and trended #2 globally. Their understanding of fintech marketing and creator relationships is exceptional. We saw a 500% increase in app downloads.",
    author: "James Mitchell",
    role: "Head of Growth Marketing",
    company: "Revolut",
    logo: "/images/brands/revolut.svg",
    color: "from-purple-600 to-blue-600"
  },
  {
    quote: "Ekko Media's experiential marketing expertise brought our VR experience to life. The influencer partnerships they secured created authentic buzz that drove foot traffic to our locations worldwide.",
    author: "Alex Rodriguez",
    role: "VP of Marketing",
    company: "SandboxVR",
    logo: "/images/brands/sandboxvr.svg",
    color: "from-green-500 to-emerald-600"
  }
];

// Case study data
export interface CaseStudy {
  id: number;
  title: string;
  client: string;
  description: string;
  image: string;
  category: string;
  stats: {
    icon: string;
    number: string;
    label: string;
  }[];
  results: string[];
  logo: string;
  color: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: "Squid Game VR Launch Campaign",
    client: "Sandbox VR & Netflix",
    description: "Combining the reach of influencers with experiential events to launch Squid Game in VR for Sandbox VR and Netflix.",
    image: "/images/case-studies/squid-game-vr.jpg",
    category: "Experiential Marketing",
    stats: [
      { icon: "Eye", number: "4.4M", label: "Views" },
      { icon: "Heart", number: "5%", label: "Engagements" },
      { icon: "TrendingUp", number: "#2", label: "Trending on YouTube" }
    ],
    results: [
      "Generated 4.4M total views across all platforms",
      "Achieved 5% engagement rate, 2x industry average",
      "Reached #2 trending on YouTube",
      "Created viral moments that extended campaign reach"
    ],
    logo: "/images/brands/sandboxvr.svg",
    color: "from-red-500 via-red-600 to-red-700"
  },
  {
    id: 2,
    title: "Revolut YouTube Trending Campaign",
    client: "Revolut",
    description: "Helping Revolut go trending with YouTube influencer marketing, creating authentic content that resonated with their target audience.",
    image: "/images/case-studies/revolut-youtube.jpg",
    category: "YouTube Marketing",
    stats: [
      { icon: "Users", number: "100k+", label: "New Followers" },
      { icon: "Heart", number: "13.74%", label: "Engagement Rate" },
      { icon: "Eye", number: "11.7M", label: "Total Views" }
    ],
    results: [
      "Gained 100k+ new followers across platforms",
      "Achieved 13.74% engagement rate",
      "Generated 11.7M total views",
      "Established Revolut as a trending brand"
    ],
    logo: "/images/brands/revolut.svg",
    color: "from-gray-800 via-gray-900 to-black"
  }
];

// FAQ data
export interface FAQ {
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQ[] = [
  {
    question: "Why influencer marketing?",
    answer: "With the creator economy being valued at 21 billion USD and growing, influencer marketing is a must for brands trying to capitalise on new marketing strategies to tap into the lucrative Gen Z audience."
  },
  {
    question: "How can I ensure creators are going to post?",
    answer: "We ensure that our campaigns are carried out and maintained by legally binding contracts to the creators. Meaning creators are legally obligated to post, our team proofreads and ensures that these contracts are safe for all parties."
  },
  {
    question: "What even is influencer marketing?",
    answer: "It is a form of social media marketing that influencers use to promote products/services of brands. Influencer marketing comes in different forms, such as gifting, seeding and your typical paid partnership."
  },
  {
    question: "What is an influencer?",
    answer: "An influencer is a user that can range from any following, even as low as the 100s! However, influencers are typically categories by their size, ranging from: nano, micro, macro and mega creators. Our network covers creators from all ranges, allowing us to be very flexible with not only rates, but also account size!"
  },
  {
    question: "What are some key metrics to determine success?",
    answer: "This really depends on your goals and what you are prioritising. If you're trying to focus on sales, obviously ROI, sales generated and conversation rates from influencer landing pages are all great ways. For brand awareness, it could range from metrics such as impressions, aROI, EMV as well as the general audience sentiment. If you're trying to prioritise content generation, it could range from number of creatives produced, number of creatives with organic usage obtained, audience sentiment, cost per asset."
  },
  {
    question: "How does the whole process look like?",
    answer: "We begin by establishing our partnership. Typically we try to understand the type of KPI's and results you're trying to achieve. We then move onto pitching our creators. From there we handle all legal related things with our creators, and ensure content is posted on time, meeting your deadlines. We then enter a review period, trying to understand how effective the content was. From there we continuously optimise and try to establish long term and high ROI partnerships."
  }
];

// Company statistics
export const COMPANY_STATS = {
  creators: "500+",
  brands: "100+",
  countries: "18",
  years: "6+",
  campaigns: "1000+",
  satisfaction: "95%"
};

// Contact information
export const CONTACT_INFO = {
  email: "hello@ekkomedia.com",
  phone: "+1 (555) 123-4567",
  address: "123 Business Street, Suite 100",
  city: "New York, NY 10001, USA",
  hours: "Mon-Fri from 9am to 6pm"
};
