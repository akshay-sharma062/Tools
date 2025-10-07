"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Page() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (height && weight) {
      const hMeters = height / 100;
      const calculatedBMI = weight / (hMeters * hMeters);
      const roundedBMI = parseFloat(calculatedBMI.toFixed(1));
      setBmi(roundedBMI);

      if (roundedBMI < 18.5) setCategory("Underweight");
      else if (roundedBMI >= 18.5 && roundedBMI < 24.9)
        setCategory("Normal weight");
      else if (roundedBMI >= 25 && roundedBMI < 29.9)
        setCategory("Overweight");
      else setCategory("Obese");
    } else {
      setBmi(null);
      setCategory("");
    }
  }, [height, weight]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 text-gray-800 p-6">
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-6 text-purple-700 drop-shadow-sm"
      >
        💪 BMI Calculator
      </motion.h1>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <p className="text-gray-600 mb-6 text-center">
          Enter your height (cm) and weight (kg) to calculate your Body Mass
          Index (BMI).
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="number"
            placeholder="Height in cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="p-3 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all hover:shadow-md"
          />
          <input
            type="number"
            placeholder="Weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="p-3 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all hover:shadow-md"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (!height || !weight) {
                alert("⚠️ Please enter both height and weight!");
              }
            }}
            className="bg-purple-600 text-white py-2.5 rounded-xl mt-3 hover:bg-purple-700 transition-all shadow-md"
          >
            Calculate BMI
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: bmi ? 1 : 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6 text-center"
        >
          {bmi && (
            <>
              <h3 className="text-2xl font-bold text-purple-700">
                Your BMI: {bmi}
              </h3>
              <p
                className={`mt-2 text-lg font-medium ${
                  category === "Normal weight"
                    ? "text-green-600"
                    : category === "Underweight"
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                Category: {category}
              </p>
            </>
          )}
        </motion.div>
      </motion.div>

      <div className="mt-8 bg-white/70 backdrop-blur-lg p-4 rounded-xl shadow-sm text-center max-w-md text-sm">
        <h4 className="font-semibold mb-2 text-purple-700">📘 BMI Guide:</h4>
        <ul className="text-gray-700 space-y-1">
          <li>🔹 Below 18.5 — Underweight</li>
          <li>🔹 18.5 to 24.9 — Normal weight ✅</li>
          <li>🔹 25 to 29.9 — Overweight ⚠️</li>
          <li>🔹 30 and above — Obese 🚨</li>
        </ul>
      </div>
    </div>
  );
}

export default Page;
