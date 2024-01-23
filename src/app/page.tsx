"use client";

import React from "react";
import Terminal from "./components/Terminal";

const RootPage: React.FC = () => {
  return (
    <div className=" flex flex-col items-center">
      <h1 className="font-black text-3xl pt-5">Terminal</h1>
      <Terminal />
    </div>
  );
};

export default RootPage;
