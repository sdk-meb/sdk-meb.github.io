"use client";

import { useState, useEffect } from "react";

interface Devices {
  isTab: boolean;
  isMobile: boolean;
}

type UseSize = {
  width: number;
  height: number;
} & Devices;

type MobileSize = [320, 480] | [375, 667] | [414, 736]; // px
type TabletSize = [768, 1024] | [800, 1280] | [1024, 768];

/**
 * use Window Dimension
 */
const useSize = () => {
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [{ isMobile, isTab }, setDevice] = useState<Devices>({
    isMobile: false,
    isTab: false,
  });

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    const mobileThreshold = 414;
    const tabletThreshold = 1024;

    const isMobile: boolean = window.innerWidth < mobileThreshold;
    const isTab: boolean = !isMobile && window.innerWidth < tabletThreshold;

    setDevice({ isMobile, isTab });
  };

  useEffect(() => {
    if (!window) return;

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return { width, height, isMobile, isTab } as UseSize;
};

export default useSize;
