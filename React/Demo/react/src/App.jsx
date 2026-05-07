// npm install packages
// npm install framer-motion lucide-react

import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';

export default function PixelWebsite() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center font-mono px-6" style={{ imageRendering: 'pixelated' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="border-4 border-green-400 p-10 shadow-2xl text-center bg-zinc-900"
      >
        <Gamepad2 className="w-16 h-16 mx-auto mb-4 text-green-400" />

        <h1 className="text-4xl font-bold tracking-[0.3em] mb-4 uppercase">
          PIXEL WEBSITE
        </h1>

        <p className="text-gray-300 mb-6">
          Simple retro pixelated website using React + Tailwind CSS
        </p>

        <button className="px-6 py-3 border-2 border-green-400 hover:bg-green-500/20 transition">
          Start Now
        </button>
      </motion.div>
    </div>
  );
}
