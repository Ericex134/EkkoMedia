"use client";

import { useRef, useEffect, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface RocketAnimationProps {
  animationData?: any;
  className?: string;
}

export default function RocketAnimation({
  animationData,
  className = "",
}: RocketAnimationProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [rocketAnimation, setRocketAnimation] = useState<any>(null);

  useEffect(() => {
    // Load the animation data
    fetch("/videos/rocket.json")
      .then((response) => response.json())
      .then((data) => setRocketAnimation(data))
      .catch((error) =>
        console.error("Error loading rocket animation:", error)
      );
  }, []);

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center ${className}`}
    >
      {rocketAnimation ? (
        <Lottie
          lottieRef={lottieRef}
          animationData={rocketAnimation}
          loop={true}
          autoplay={true}
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        // Loading fallback
        <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center rounded-2xl">
          <div className="text-white text-center">
            <div className="text-6xl mb-4">🚀</div>
            <div className="text-lg font-semibold">Loading Animation...</div>
            <div className="text-sm opacity-75 mt-2">Rocket Animation</div>
          </div>
        </div>
      )}
    </div>
  );
}
