'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiBook, FiCode, FiHeart } from 'react-icons/fi';

const highlights = [
  {
    icon: FiCode,
    title: 'Web Development',
    description: 'Passionate about creating beautiful and functional web applications',
  },
  {
    icon: FiBook,
    title: 'Continuous Learning',
    description: 'Always exploring new technologies and improving my skills',
  },
  {
    icon: FiAward,
    title: 'Problem Solver',
    description: 'Love tackling complex challenges with creative solutions',
  },
  {
    icon: FiHeart,
    title: 'Team Player',
    description: 'Enjoy collaborating and sharing knowledge with others',
  },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
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
            About Me
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            className="glass-effect rounded-2xl p-8 md:p-12 shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <motion.p
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              I&apos;m <span className="font-bold gradient-text">Piyush Bhandari</span>, a dedicated 
              B.Tech CSE student at GGSIPU, Delhi. I&apos;m passionate about technology and love creating 
              innovative web solutions that make a difference.
            </motion.p>
            
            <motion.p
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              My journey in tech has been exciting and diverse. From freelance video editing to 
              teaching students, I&apos;ve gained valuable experience that complements my technical skills. 
              I believe in continuous learning and always strive to stay updated with the latest 
              technologies.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
            >
              Currently, I&apos;m looking for internship opportunities where I can apply my skills, 
              learn from experienced professionals, and contribute to meaningful projects. Let&apos;s 
              build something amazing together! 🚀
            </motion.p>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              className="glass-effect rounded-xl p-6 card-hover"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <motion.div
                className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <highlight.icon className="text-white" size={28} />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <div className="glass-effect rounded-2xl p-8 md:p-10 shadow-xl">
            <div className="flex items-start gap-4">
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FiBook className="text-white" size={24} />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  Education
                </h3>
                <p className="text-xl text-gray-700 dark:text-gray-300 font-semibold mb-1">
                  B.Tech in Computer Science Engineering
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Guru Gobind Singh Indraprastha University (GGSIPU), Delhi
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
