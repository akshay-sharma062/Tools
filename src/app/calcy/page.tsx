"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value:any) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        const res = eval(input.replace("×", "*").replace("÷", "/"));
        setResult(res);
      } catch {
        setResult("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "7", "8", "9", "÷",
    "4", "5", "6", "×",
    "1", "2", "3", "-",
    "0", ".", "C", "+",
    "=",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-900 to-black p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-80 bg-gray-900/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-800 p-6"
      >
        <motion.div
          className="bg-gray-800/70 text-white text-right p-4 rounded-xl mb-5 shadow-inner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="text-gray-400 text-sm h-5 overflow-hidden">
            {input || "0"}
          </div>
          <motion.div
            key={result}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold"
          >
            {result || "0"}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn, i) => (
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
              key={i}
              onClick={() => handleClick(btn)}
              className={`py-3 rounded-xl text-lg font-semibold shadow-md 
                ${
                  btn === "="
                    ? "col-span-4 bg-purple-600 hover:bg-purple-700 text-white"
                    : btn === "C"
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : ["÷", "×", "-", "+"].includes(btn)
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                    : "bg-gray-700 hover:bg-gray-600 text-white"
                } transition-all duration-200`}
            >
              {btn}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
