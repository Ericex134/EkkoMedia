"use client";

import { useRef, useEffect, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface StrategyLottieAnimationProps {
  animationData?: any;
  className?: string;
}

export default function StrategyLottieAnimation({
  animationData,
  className = "",
}: StrategyLottieAnimationProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [strategyAnimation, setStrategyAnimation] = useState<any>(null);

  useEffect(() => {
    // Load the animation data
    fetch("/videos/strategy.json")
      .then((response) => response.json())
      .then((data) => setStrategyAnimation(data))
      .catch((error) =>
        console.error("Error loading strategy animation:", error)
      );
  }, []);

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center ${className}`}
    >
      {strategyAnimation ? (
        <Lottie
          lottieRef={lottieRef}
          animationData={strategyAnimation}
          loop={true}
          autoplay={true}
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        // Loading fallback
        <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center rounded-2xl">
          <div className="text-white text-center">
            <div className="text-6xl mb-4">🎯</div>
            <div className="text-lg font-semibold">Loading Animation...</div>
            <div className="text-sm opacity-75 mt-2">Strategy Animation</div>
          </div>
        </div>
      )}
    </div>
  );
}
