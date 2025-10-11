"use client";

import { useRef, useEffect, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface MeasurableLottieAnimationProps {
  animationData?: any;
  className?: string;
}

export default function MeasurableLottieAnimation({
  animationData,
  className = "",
}: MeasurableLottieAnimationProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [measurableAnimation, setMeasurableAnimation] = useState<any>(null);

  useEffect(() => {
    // Load the animation data
    fetch("/videos/measurable-animation.json")
      .then((response) => response.json())
      .then((data) => setMeasurableAnimation(data))
      .catch((error) =>
        console.error("Error loading measurable animation:", error)
      );
  }, []);

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center ${className}`}
    >
      {measurableAnimation ? (
        <Lottie
          lottieRef={lottieRef}
          animationData={measurableAnimation}
          loop={true}
          autoplay={true}
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        // Loading fallback
        <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center rounded-2xl">
          <div className="text-white text-center">
            <div className="text-6xl mb-4">📊</div>
            <div className="text-lg font-semibold">Loading Animation...</div>
            <div className="text-sm opacity-75 mt-2">
              Measurable Impact Animation
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
