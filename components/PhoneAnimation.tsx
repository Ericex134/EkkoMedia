"use client";

import { useRef, useEffect, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface PhoneAnimationProps {
  animationData?: any;
  className?: string;
}

export default function PhoneAnimation({
  animationData,
  className = "",
}: PhoneAnimationProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [phoneAnimation, setPhoneAnimation] = useState<any>(null);

  useEffect(() => {
    // Load the animation data
    fetch("/videos/phone.json")
      .then((response) => response.json())
      .then((data) => setPhoneAnimation(data))
      .catch((error) => console.error("Error loading phone animation:", error));
  }, []);

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center ${className}`}
    >
      {phoneAnimation ? (
        <Lottie
          lottieRef={lottieRef}
          animationData={phoneAnimation}
          loop={true}
          autoplay={true}
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        // Loading fallback
        <div className="w-full h-full bg-gradient-to-br from-purple-900 via-purple-800 to-black flex items-center justify-center rounded-3xl">
          <div className="text-white text-center">
            <div className="text-6xl mb-4">📱</div>
            <div className="text-lg font-semibold">Loading Animation...</div>
            <div className="text-sm opacity-75 mt-2">Phone Animation</div>
          </div>
        </div>
      )}
    </div>
  );
}
