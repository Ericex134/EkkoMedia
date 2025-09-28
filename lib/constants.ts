// Brand logos and information
export interface Brand {
  name: string;
  logo: string;
  color: string;
  website?: string;
}

export const BRANDS: Brand[] = [
  {
    name: "Ekster",
    logo: "/images/brands/Ekster.png",
    color: "from-red-500 to-red-600",
    website: "https://netflix.com",
  },
  {
    name: "Holafly",
    logo: "/images/brands/Holafly.png",
    color: "from-blue-600 to-blue-700",
    website: "https://ubisoft.com",
  },
  {
    name: "invideo",
    logo: "/images/brands/invideo.png",
    color: "from-purple-500 to-purple-600",
    website: "https://revolut.com",
  },
  {
    name: "Manscaped",
    logo: "/images/brands/Manscaped.png",
    color: "from-orange-500 to-orange-600",
    website: "https://hostinger.com",
  },
  {
    name: "Quillbot",
    logo: "/images/brands/Quillbot.png",
    color: "from-green-500 to-green-600",
    website: "https://sandboxvr.com",
  },
  {
    name: "Raycon",
    logo: "/images/brands/Raycon.png",
    color: "from-green-400 to-green-500",
    website: "https://spotify.com",
  },
  {
    name: "Straight Arrow News",
    logo: "/images/brands/Straightarrownews.jpeg",
    color: "from-green-400 to-green-500",
    website: "https://spotify.com",
  },
];

// FAQ data
export interface FAQ {
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQ[] = [
  {
    question: "Why influencer marketing?",
    answer:
      "With the creator economy being valued at 21 billion USD and growing, influencer marketing is a must for brands trying to capitalise on new marketing strategies to tap into the lucrative Gen Z audience.",
  },
  {
    question: "How can I ensure creators are going to post?",
    answer:
      "We ensure that our campaigns are carried out and maintained by legally binding contracts to the creators. Meaning creators are legally obligated to post, our team proofreads and ensures that these contracts are safe for all parties.",
  },
  {
    question: "What even is influencer marketing?",
    answer:
      "It is a form of social media marketing that influencers use to promote products/services of brands. Influencer marketing comes in different forms, such as gifting, seeding and your typical paid partnership.",
  },
  {
    question: "What is an influencer?",
    answer:
      "An influencer is a user that can range from any following, even as low as the 100s! However, influencers are typically categories by their size, ranging from: nano, micro, macro and mega creators. Our network covers creators from all ranges, allowing us to be very flexible with not only rates, but also account size!",
  },
  {
    question: "What are some key metrics to determine success?",
    answer:
      "This really depends on your goals and what you are prioritising. If you're trying to focus on sales, obviously ROI, sales generated and conversation rates from influencer landing pages are all great ways. For brand awareness, it could range from metrics such as impressions, aROI, EMV as well as the general audience sentiment. If you're trying to prioritise content generation, it could range from number of creatives produced, number of creatives with organic usage obtained, audience sentiment, cost per asset.",
  },
  {
    question: "How does the whole process look like?",
    answer:
      "We begin by establishing our partnership. Typically we try to understand the type of KPI's and results you're trying to achieve. We then move onto pitching our creators. From there we handle all legal related things with our creators, and ensure content is posted on time, meeting your deadlines. We then enter a review period, trying to understand how effective the content was. From there we continuously optimise and try to establish long term and high ROI partnerships.",
  },
];

// Company statistics
export const COMPANY_STATS = {
  creators: "500+",
  brands: "100+",
  countries: "18",
  years: "6+",
  campaigns: "1000+",
  satisfaction: "95%",
};

// Contact information
export const CONTACT_INFO = {
  email: "hello@ekkomedia.com",
  phone: "+1 (555) 123-4567",
  address: "123 Business Street, Suite 100",
  city: "New York, NY 10001, USA",
  hours: "Mon-Fri from 9am to 6pm",
};
