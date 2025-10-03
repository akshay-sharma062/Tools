"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(formattedTime);
    };

    updateClock(); // initialize immediately
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Digital Clock</h1>
        <div className="px-8 py-4 bg-gray-800 rounded-2xl shadow-lg">
          <span className="text-6xl font-mono text-green-400">{time}</span>
        </div>
      </div>
    </div>
  );
}
