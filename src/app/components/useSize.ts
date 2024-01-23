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

type MobileSize = ["320", "480"] | ["375", "667"] | ["414", "736"]; // px
type TablitteSize = ["768", "1024"] | ["800", "1280"] | ["1024", "768"];
/**
 *
 *  use Window Dimension
 *
 * */
const useSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [{ isMobile, isTab }, setDevise] = useState<Devices>({
    isMobile: false,
    isTab: false,
  });

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    const isMobile: boolean = width < 414;
    const isTab: boolean = !isMobile && width < 1024;
    setDevise({ isMobile, isTab });
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [window.innerWidth]);

  return { width, height, isMobile, isTab };
};

export default useSize;
