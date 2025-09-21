"use client";

import React, { useState, useEffect } from "react";

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
      <div className="time">{time.toLocaleTimeString()}</div>
      <div className="date">{time.toLocaleDateString()}</div>
    </div>
  );
}
