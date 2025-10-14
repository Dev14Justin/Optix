import { motion, type Variants } from 'framer-motion';

const stats = [
  { number: '50+', label: 'Projets Réalisés' },
  { number: '25+', label: 'Clients Satisfaits' },
  { number: '3', label: 'Années d\'Expérience' },
  { number: '100%', label: 'Taux de Satisfaction' },
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

const statVariants: Variants = {
  offscreen: {
    scale: 0.8,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.6,
      duration: 0.8,
    },
  },
};

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-br from-white via-blue-50/20 to-yellow-50/20 py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-400/3 to-blue-400/3 rounded-full blur-3xl" />
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
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6"
          >
            Qui Sommes-Nous ?
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            <span className="font-semibold text-blue-600">Optix</span> est une entreprise spécialisée dans la conception de solutions technologiques optimisées avec la Data. 
            Nous transformons les défis numériques en opportunités de croissance grâce à notre expertise technique et notre approche centrée sur l'innovation.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column - Mission & Vision */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 relative">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Notre Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Accompagner nos clients dans leur transformation digitale en développant des solutions technologiques 
                innovantes qui tirent parti de la puissance de la data pour optimiser leurs processus métier et 
                accroître leur compétitivité sur le marché.
              </p>
              <div className="absolute bottom-4 right-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 transition-colors duration-300"
                >
                  Lire plus
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 relative">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Notre Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Devenir le partenaire de référence en solutions data-driven, reconnu pour notre excellence technique, 
                notre éthique professionnelle et notre capacité à créer des technologies qui façonnent l'avenir numérique 
                de nos clients.
              </p>
              <div className="absolute bottom-4 right-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 transition-colors duration-300"
                >
                  Lire plus
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Company Image & Statistics */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            className="space-y-8"
          >
            {/* Company Activities Image Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col justify-center">
              <img 
                src="/i.jpeg" 
                alt="Activités d'Optix - Solutions technologiques et innovation" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              
              
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
