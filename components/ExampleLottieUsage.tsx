"use client";

import StrategyLottieAnimation from "./StrategyLottieAnimation";
import PartnershipLottieAnimation from "./PartnershipLottieAnimation";
import CampaignLottieAnimation from "./CampaignLottieAnimation";

// Example of how to use Lottie animations with your JSON files
export default function ExampleLottieUsage() {
  // Import your Lottie JSON files like this:
  // const businessTeamAnimation = require("../public/videos/Business team.json");
  // const strategyAnimation = require("../public/videos/strategy-animation.json");
  // const campaignAnimation = require("../public/videos/campaign-animation.json");

  return (
    <div className="space-y-8">
      {/* Example usage with animation data */}
      <div className="w-full h-64 bg-gray-100 rounded-lg">
        {/* 
        <StrategyLottieAnimation animationData={strategyAnimation} />
        <PartnershipLottieAnimation animationData={businessTeamAnimation} />
        <CampaignLottieAnimation animationData={campaignAnimation} />
        */}

        {/* Current usage without animation data (shows fallback) */}
        <StrategyLottieAnimation />
        <PartnershipLottieAnimation />
        <CampaignLottieAnimation />
      </div>
    </div>
  );
}
