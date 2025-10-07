"use client";
import { useEffect } from "react";
import fluidCursor from "../hooks/UseFluidCursor"

const FluidCursor = () => {
  useEffect(() => {
    fluidCursor();
  }, []);

  return (
    <div className="fixed top-0 left-0 z-0 pointer-events-none">
      <canvas id="fluid" className="w-screen h-screen" style={{
      mixBlendMode: "normal",
      background: "#ffffff", // pure white background for perfect match
      opacity: 1,
    }} />
    </div>
  );
};

export default FluidCursor;