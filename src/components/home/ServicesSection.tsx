import { motion, type Variants } from 'framer-motion';

const services = [
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
    title: 'Applications Web',
    description: "Des applications web performantes, scalables et centrées sur l'utilisateur.",
    gradient: 'from-blue-600 to-blue-800',
    shadowColor: 'shadow-blue-500/25',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
    ),
    title: 'Applications Mobiles',
    description: 'Des expériences mobiles natives et hybrides fluides pour iOS et Android.',
    gradient: 'from-yellow-500 to-yellow-600',
    shadowColor: 'shadow-yellow-500/25',
  },
  {
    icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>
    ),
    title: 'Intelligence Artificielle',
    description: "Intégrez l'IA pour automatiser, prédire et optimiser vos processus métier.",
    gradient: 'from-purple-600 to-purple-800',
    shadowColor: 'shadow-purple-500/25',
  },
  {
    icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
    ),
    title: 'Analyse de Données',
    description: 'Nous transformons vos données brutes en insights exploitables pour une prise de décision éclairée.',
    gradient: 'from-green-600 to-green-800',
    shadowColor: 'shadow-green-500/25',
  },
  {
    icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
    ),
    title: 'Vente de Données',
    description: 'Accédez à des ensembles de données riches et qualifiées pour alimenter vos modèles et vos stratégies.',
    gradient: 'from-orange-500 to-orange-600',
    shadowColor: 'shadow-orange-500/25',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
    title: 'Optimisation de solutions existantes',
    description: 'Nous optimisons vos solutions existantes grâce à la data pour améliorer leurs performances et leur rentabilité.',
    gradient: 'from-pink-600 to-pink-800',
    shadowColor: 'shadow-pink-500/25',
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

const ServicesSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
          className="text-center"
        >
          <motion.h2
            variants={cardVariants}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Nos Services
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Nous transformons vos idées en réalité numérique avec des solutions innovantes et sur-mesure.
          </motion.p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Gradient background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon container with depth effect */}
              <motion.div
                whileHover={{ 
                  rotate: [0, -10, 10, 0], 
                  scale: 1.1,
                  transition: { duration: 0.6, ease: "easeInOut" } 
                }}
                className="relative flex justify-center mb-8"
              >
                {/* Icon background with gradient and shadow */}
                <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} ${service.shadowColor} shadow-xl flex items-center justify-center group-hover:shadow-2xl transition-all duration-300`}>
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
                  
                  {/* Icon */}
                  <div className="relative z-10">
                    {service.icon}
                  </div>
                  
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-white/30"
                    whileHover={{
                      borderColor: "rgba(255,255,255,0.6)",
                      transition: { duration: 0.3 }
                    }}
                  />
                </div>
                
                {/* Floating particles effect */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5
                  }}
                />
                <motion.div
                  className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: 1
                  }}
                />
              </motion.div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-center text-gray-800 group-hover:text-gray-900 transition-colors duration-300 mb-4">
                  {service.title}
                </h3>
                <p className="text-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* Hover border effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300"
                whileHover={{
                  background: "linear-gradient(135deg, rgba(12, 0, 255, 0.05), rgba(254, 225, 0, 0.05))",
                  transition: { duration: 0.3 },
                }}
              />
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-16 transition-all duration-300 rounded-full" />
            </motion.div>
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default ServicesSection;