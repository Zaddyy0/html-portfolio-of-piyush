'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiTv, FiCode, FiBook, FiActivity } from 'react-icons/fi';

const hobbies = [
  {
    icon: FiTv,
    title: 'Anime & Netflix',
    description: 'Watching anime series and Netflix shows',
    emoji: '📺',
    color: 'from-red-500 to-pink-600',
  },
  {
    icon: FiCode,
    title: 'Web Development',
    description: 'Making special websites out of interest',
    emoji: '💻',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: FiBook,
    title: 'Reading',
    description: 'Reading novels, manga, and manhwa',
    emoji: '📚',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    icon: FiActivity,
    title: 'Sports & Fitness',
    description: 'Exercising and playing volleyball',
    emoji: '🏐',
    color: 'from-green-500 to-teal-600',
  },
];

export default function Hobbies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="hobbies" className="py-20 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            My Hobbies
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <motion.p
            className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            When I&apos;m not coding, here&apos;s what I love to do
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              className="glass-effect rounded-2xl p-8 card-hover relative overflow-hidden group"
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{
                delay: 0.4 + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${hobby.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  className="text-6xl mb-4"
                  animate={{
                    rotate: [0, 10, -10, 10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  {hobby.emoji}
                </motion.div>

                <motion.div
                  className={`w-14 h-14 bg-gradient-to-br ${hobby.color} rounded-lg flex items-center justify-center mb-4 shadow-lg`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <hobby.icon className="text-white" size={24} />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                  {hobby.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  {hobby.description}
                </p>
              </div>

              {/* Decorative corner */}
              <motion.div
                className={`absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br ${hobby.color} rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </div>

        {/* Fun fact section */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto glass-effect rounded-2xl p-8 md:p-10 shadow-xl text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1, type: "spring" }}
        >
          <motion.div
            className="text-5xl mb-4"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            🎉
          </motion.div>
          <h3 className="text-2xl font-bold gradient-text mb-4">
            Balance is Key!
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I believe in maintaining a healthy work-life balance. These hobbies help me stay
            creative, motivated, and energized for my coding projects!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
