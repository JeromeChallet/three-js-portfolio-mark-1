"use client";
import React from "react";
import { BtnList } from "@/app/data";
import NavButton from "./NavButton";

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative w-0 h-0">
        {BtnList.map((btn, index) => {
          const angleRad = (index * angleIncrement * Math.PI) / 180;

          const radius = "clamp(15rem, 20vmin, 14rem)";

          const x = `calc(${radius} * ${Math.cos(angleRad)})`;
          const y = `calc(${radius} * ${Math.sin(angleRad)})`;

          return <NavButton key={btn.label} x={x} y={y} {...btn} />;
        })}
      </div>
    </div>
  );
};

export default Navigation;
