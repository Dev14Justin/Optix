import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-texte-principal leading-tight"
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
          <button className="bg-primary text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-700 transition duration-300">
            Découvrir nos services
          </button>
        </motion.div>
      </div>
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 bg-accent rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-48 h-48 border-4 border-primary rounded-lg opacity-20"
        animate={{
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
    </section>
  );
};

export default HeroSection;
