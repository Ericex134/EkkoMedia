"use client";

import { useRef, useEffect, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface ScalableLottieAnimationProps {
  animationData?: any;
  className?: string;
}

export default function ScalableLottieAnimation({
  animationData,
  className = "",
}: ScalableLottieAnimationProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [scalableAnimation, setScalableAnimation] = useState<any>(null);

  useEffect(() => {
    // Load the animation data
    fetch("/videos/scalable.json")
      .then((response) => response.json())
      .then((data) => setScalableAnimation(data))
      .catch((error) =>
        console.error("Error loading scalable animation:", error)
      );
  }, []);

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center ${className}`}
    >
      {scalableAnimation ? (
        <Lottie
          lottieRef={lottieRef}
          animationData={scalableAnimation}
          loop={true}
          autoplay={true}
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        // Loading fallback
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center rounded-2xl">
          <div className="text-white text-center">
            <div className="text-6xl mb-4">📈</div>
            <div className="text-lg font-semibold">Loading Animation...</div>
            <div className="text-sm opacity-75 mt-2">
              Scalable Partnerships Animation
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
