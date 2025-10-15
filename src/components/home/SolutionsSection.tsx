import { motion, type Variants } from 'framer-motion';

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

const SolutionsSection = () => {
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
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6"
          >
            Nos Solutions Innovantes
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Découvrez nos plateformes technologiques en cours de développement qui transforment des secteurs entiers 
            grâce à l'innovation et à la puissance des données.
          </motion.p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* KpiHub Solution */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3 }
            }}
            className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">KpiHub</h3>
                <p className="text-blue-600 font-medium">Plateforme Web • Influence Marketing</p>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>KpiHub</strong> est une plateforme web révolutionnaire qui permet aux influenceurs de présenter 
              leurs performances à travers un portfolio dynamique basé sur des indicateurs clés (KPI). Elle aide les 
              marques à évaluer, comparer et collaborer avec les bons profils grâce à des données fiables et transparentes.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Portfolio dynamique avec KPI en temps réel
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Évaluation et comparaison transparente des profils
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Collaboration facilitée entre marques et influenceurs
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                En Développement
              </span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 transition-colors duration-300"
              >
                En savoir plus
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>

          {/* InEvent Solution */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3 }
            }}
            className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">InEvent</h3>
                <p className="text-purple-600 font-medium">Plateforme Mobile & Web • Événementiel</p>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>InEvent</strong> est une plateforme mobile et web qui digitalise et simplifie toute la gestion 
              d'organisation des événements et leur promotion. Elle permet aux organisateurs de trouver et gérer facilement 
              leurs prestataires logistiques, aux participants de trouver des événements et faire du réseautage intelligent 
              et ciblé, et aux entreprises d'accéder à des insights socio-économiques à forte valeur ajoutée.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                Gestion complète d'événements digitalisée
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                Réseautage intelligent et ciblé
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                Insights socio-économiques avancés
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                En Développement
              </span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center gap-1 transition-colors duration-300"
              >
                En savoir plus
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
