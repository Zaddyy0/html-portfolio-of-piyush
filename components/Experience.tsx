'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiVideo, FiUsers, FiCalendar } from 'react-icons/fi';

const experiences = [
  {
    icon: FiVideo,
    title: 'Freelance Video Editor',
    company: 'Remote',
    period: 'May 2022 - Jan 2023',
    description: 'Handled more than 5 clients and edited 25+ videos with professional quality',
    skills: ['Video Editing', 'Client Management', 'Creative Design'],
    color: 'from-blue-600 to-cyan-600',
  },
  {
    icon: FiUsers,
    title: 'Home Tuition Tutor',
    company: 'Self-Employed',
    period: 'June 2023 - Present',
    description: 'Teaching more than 6 students, currently providing tuition classes to 3 students',
    skills: ['Teaching', 'Communication', 'Mentoring'],
    color: 'from-purple-600 to-pink-600',
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
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
            Work Experience
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <motion.div
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ delay: 0.4, duration: 1 }}
              style={{ transformOrigin: 'top' }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                className={`relative mb-16 ${
                  index % 2 === 0
                    ? 'md:ml-0 md:mr-auto md:pr-16 md:text-right'
                    : 'md:ml-auto md:mr-0 md:pl-16 md:text-left'
                } md:w-1/2 w-full pl-20 md:pl-0`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.2 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className={`absolute left-8 md:left-auto ${
                    index % 2 === 0 ? 'md:right-[-25px]' : 'md:left-[-25px]'
                  } top-0 w-12 h-12 bg-gradient-to-br ${
                    exp.color
                  } rounded-full flex items-center justify-center shadow-lg z-10`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <exp.icon className="text-white" size={24} />
                </motion.div>

                {/* Content card */}
                <motion.div
                  className="glass-effect rounded-xl p-6 shadow-xl card-hover"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-4 text-gray-600 dark:text-gray-400 justify-start md:justify-start">
                    {index % 2 !== 0 && (
                      <div className="flex items-center gap-2">
                        <FiCalendar size={16} />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                    )}
                    {index % 2 === 0 && (
                      <div className="flex items-center gap-2 md:justify-end">
                        <FiCalendar size={16} />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-1 font-semibold">
                    {exp.company}
                  </p>
                  <p className="text-gray-700 dark:text-gray-400 mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.8 + index * 0.2 + idx * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
