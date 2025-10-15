import { motion, type Variants } from 'framer-motion';

const HeroSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 overflow-hidden min-h-screen flex items-center">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-16 py-24 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-8xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6"
          >
            Transformer la{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text font-bold text-transparent">
              Donnée
            </span>
            <br />
            en{' '}
            <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text font-bold text-transparent">
              Décision
            </span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-normal mb-12"
          >
            Chez <span className="font-semibold text-yellow-400">Optix</span>, nous concevons des solutions technologiques sur-mesure qui transforment vos données brutes en stratégies gagnantes et en opportunités de croissance.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <span>Découvrir nos solutions</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white/30 text-white font-bold py-4 px-8 rounded-xl hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
            >
              Télécharger des Insights
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Animated Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full"
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: 'easeInOut',
          times: [0, 0.5, 1]
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-48 h-48 border-4 border-yellow-400/40 rounded-2xl"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.1, 1, 0.9, 1],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: 'linear'
        }}
      />
      
      <motion.div
        className="absolute top-32 right-32 w-44 h-44 rounded-full border-4 border-blue-300/40"
        animate={{
          rotate: [0, -180, -360],
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          ease: 'easeInOut'
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-0 h-0 border-l-[22px] border-r-[22px] border-b-[38px] border-l-transparent border-r-transparent border-b-yellow-400/40"
        animate={{
          y: [0, 20, 0],
          rotate: [0, 120, 240, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: 'easeInOut'
        }}
      />
      
      <motion.div
        className="absolute top-1/4 left-1/3 w-24 h-24 bg-gradient-to-br from-purple-400/30 to-blue-400/30 rounded-lg"
        animate={{
          rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
          scale: [1, 0.8, 1.2, 0.9, 1],
        }}
        transition={{ 
          duration: 14, 
          repeat: Infinity, 
          ease: 'linear'
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-36 h-36 border-2 border-white/30 rounded-full"
        animate={{
          rotate: [0, -90, -180, -270, -360],
          scale: [1, 1.1, 1, 0.9, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ 
          duration: 16, 
          repeat: Infinity, 
          ease: 'easeInOut'
        }}
      />
    </section>
  );
};

export default HeroSection;
