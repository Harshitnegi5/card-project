import { motion } from "framer-motion";
import React, { useState } from "react";
import "./Button.css"

function Button() {
  const [isClick, setisClick] = useState(false);

  return (
    <motion.div className="w-full h-screen bg-fuchsia-700 relative z-[4] flex justify-center items-center">
      <motion.button
        layout
        style={{
          backgroundColor: isClick ? "blue" : "purple",
          borderRadius: isClick ? "50px" : "0",
        }}
        onClick={() => setisClick(!isClick)}
        className="px-6 py-2  border-0 outline-0 bg-green-500 font-semibold text-lg text-black"
      >
        Click me
      </motion.button>
    </motion.div>
  );
}

export default Button;
