"use client";

import { useRef, useEffect, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface PartnershipLottieAnimationProps {
  animationData?: any;
  className?: string;
}

export default function PartnershipLottieAnimation({
  animationData,
  className = "",
}: PartnershipLottieAnimationProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [businessTeamAnimation, setBusinessTeamAnimation] = useState<any>(null);

  useEffect(() => {
    // Load the animation data
    fetch("/videos/Business-team.json")
      .then((response) => response.json())
      .then((data) => setBusinessTeamAnimation(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center ${className}`}
    >
      {businessTeamAnimation ? (
        <Lottie
          lottieRef={lottieRef}
          animationData={businessTeamAnimation}
          loop={true}
          autoplay={true}
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        // Loading fallback
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center rounded-2xl">
          <div className="text-white text-center">
            <div className="text-6xl mb-4">🤝</div>
            <div className="text-lg font-semibold">Loading Animation...</div>
            <div className="text-sm opacity-75 mt-2">Partnership Animation</div>
          </div>
        </div>
      )}
    </div>
  );
}
