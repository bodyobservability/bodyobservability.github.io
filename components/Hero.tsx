'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center max-w-4xl mx-auto text-center"
      >
        {/* Logo Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <Image
            src="/bodyobservability-app-icon.png"
            alt="Body Observability"
            width={200}
            height={200}
            className="rounded-3xl"
          />
        </motion.div>

        {/* Logo Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <Image
            src="/bodyobservability-app-name.png"
            alt="Body Observability"
            width={500}
            height={80}
            className="w-full max-w-md mx-auto"
          />
        </motion.div>

        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-4xl md:text-6xl font-light tracking-wide mb-8"
        >
          Optimize Yourself.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-400 font-light tracking-wide max-w-2xl mb-12"
        >
          Redefining how we understand and optimize human health through advanced body scanning and data-driven insights.
        </motion.p>

        {/* Coming Soon Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="inline-block px-8 py-4 border border-white/20 rounded-full"
        >
          <p className="text-sm md:text-base font-medium tracking-widest uppercase">
            Coming Soon
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
