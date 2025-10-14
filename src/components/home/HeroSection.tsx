import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-5xl md:text-7xl font-bold text-texte-principal leading-tight"
        >
          Transformer la Donnée <br /> en <span className="text-primary">Décision</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-texte-secondaire max-w-2xl mx-auto"
        >
          Chez Optix, nous concevons des solutions technologiques sur-mesure qui transforment vos données brutes en stratégies gagnantes.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-700 transition duration-300 w-full sm:w-auto">
              Découvrir nos solutions
            </button>
            <button className="bg-transparent border-2 border-primary text-primary font-bold py-3 px-8 rounded-xl hover:bg-blue-700 hover:text-white transition-colors duration-300 w-full sm:w-auto">
              Télécharger des Insights
            </button>
          </div>
        </motion.div>
      </div>
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-accent rounded-full opacity-20 dark:opacity-10"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-48 h-48 border-4 border-primary rounded-lg opacity-20 dark:opacity-10"
        animate={{
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-10 right-10 left-20 w-44 h-44 rounded-full border-4 border-gray-400/30"
        animate={{
          rotate: [0, -90, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-4/35 right-3/7 left-3/7 w-44 h-44 border-4 border-gray-400/50"
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          background: 'bleu',
         }}
        animate={{
          y: [0, 15, 0],
          rotate: [0, 45, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  );
};

export default HeroSection;
