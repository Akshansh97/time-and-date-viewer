"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function ClockWithImage() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="your-container-class"
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <div className="heading">
        <h1>Current Time</h1>
      </div>
      {/* Time */}
      <div className="time">{time.toLocaleTimeString()}</div>
      <div className="date">{time.toLocaleDateString()}</div>

      {/* Image
      <Image
        src="https://4kwallpapers.com/images/walls/thumbs_3t/23948.jpg"
        alt="Background"
        width={3160} 
        height={300} 
      /> */}
    </div>
  );
}
