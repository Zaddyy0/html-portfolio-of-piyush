'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiDatabase, FiLayout, FiServer } from 'react-icons/fi';

const skillCategories = [
  {
    icon: FiCode,
    title: 'Programming Languages',
    skills: [
      { name: 'C/C++', level: 95, color: 'from-blue-500 to-blue-600' },
      { name: 'JavaScript', level: 90, color: 'from-yellow-500 to-yellow-600' },
      { name: 'Python', level: 85, color: 'from-green-500 to-green-600' },
      { name: 'TypeScript', level: 88, color: 'from-blue-600 to-blue-700' },
    ],
  },
  {
    icon: FiLayout,
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 92, color: 'from-cyan-500 to-cyan-600' },
      { name: 'Next.js', level: 90, color: 'from-gray-700 to-gray-800' },
      { name: 'Tailwind CSS', level: 95, color: 'from-teal-500 to-teal-600' },
      { name: 'HTML/CSS', level: 98, color: 'from-orange-500 to-orange-600' },
    ],
  },
  {
    icon: FiServer,
    title: 'Backend & Tools',
    skills: [
      { name: 'Node.js', level: 85, color: 'from-green-600 to-green-700' },
      { name: 'Git', level: 88, color: 'from-red-500 to-red-600' },
      { name: 'REST APIs', level: 87, color: 'from-purple-500 to-purple-600' },
      { name: 'Docker', level: 75, color: 'from-blue-400 to-blue-500' },
    ],
  },
  {
    icon: FiDatabase,
    title: 'Data Structures & Algorithms',
    skills: [
      { name: 'Problem Solving', level: 92, color: 'from-pink-500 to-pink-600' },
      { name: 'Data Structures', level: 90, color: 'from-purple-600 to-purple-700' },
      { name: 'Algorithms', level: 88, color: 'from-indigo-500 to-indigo-600' },
      { name: 'Competitive Programming', level: 85, color: 'from-violet-500 to-violet-600' },
    ],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
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
            Skills & Expertise
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
            Here are some of the technologies and skills I&apos;ve mastered throughout my journey.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass-effect rounded-2xl p-8 shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <category.icon className="text-white" size={28} />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <motion.span
                        className="text-gray-600 dark:text-gray-400 font-semibold"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{
                          delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.1,
                        }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.1,
                          duration: 1,
                          ease: "easeOut",
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/30"
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.1,
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Star Rating for Overall Skills */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto glass-effect rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
            Overall Proficiency
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: 'C/C++', stars: 5 },
              { name: 'Web Development', stars: 5 },
              { name: 'Data Structures & Algorithms', stars: 5 },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="text-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  {skill.name}
                </p>
                <div className="flex gap-1">
                  {[...Array(skill.stars)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                      transition={{
                        delay: 1.4 + index * 0.1 + i * 0.05,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      className="text-2xl"
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
