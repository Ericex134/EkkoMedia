"use client";

import { useRef, useEffect, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface CampaignLottieAnimationProps {
  animationData?: any;
  className?: string;
}

export default function CampaignLottieAnimation({
  animationData,
  className = "",
}: CampaignLottieAnimationProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [campaignAnimation, setCampaignAnimation] = useState<any>(null);

  useEffect(() => {
    // Load the animation data
    fetch("/videos/campaign-animation.json")
      .then((response) => response.json())
      .then((data) => setCampaignAnimation(data))
      .catch((error) =>
        console.error("Error loading campaign animation:", error)
      );
  }, []);

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center ${className}`}
    >
      {campaignAnimation ? (
        <Lottie
          lottieRef={lottieRef}
          animationData={campaignAnimation}
          loop={true}
          autoplay={true}
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        // Loading fallback
        <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center rounded-2xl">
          <div className="text-white text-center">
            <div className="text-6xl mb-4">⚙️</div>
            <div className="text-lg font-semibold">Loading Animation...</div>
            <div className="text-sm opacity-75 mt-2">
              Campaign Management Animation
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
