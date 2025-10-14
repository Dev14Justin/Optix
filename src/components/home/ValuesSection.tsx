import { motion, type Variants } from 'framer-motion';

const values = [
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Respect',
    description: 'Nous respectons nos clients, nos équipes et nos engagements avec intégrité et transparence.',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Éthique',
    description: 'Nos solutions sont développées dans le respect des bonnes pratiques et des standards éthiques.',
    gradient: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
      </svg>
    ),
    title: 'Responsabilité',
    description: 'Nous assumons pleinement nos responsabilités envers nos clients et la qualité de nos livrables.',
    gradient: 'from-green-500 to-green-700',
  },
];

const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const ValuesSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={cardVariants}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6"
          >
            Nos Valeurs Fondamentales
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Ces valeurs guident chacune de nos décisions et définissent notre approche du développement technologique.
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
            >
              <motion.div
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.6 }
                }}
                className="flex justify-center mb-6"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300`}>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
                  <div className="relative z-10">
                    {value.icon}
                  </div>
                </div>
              </motion.div>
              
              <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;