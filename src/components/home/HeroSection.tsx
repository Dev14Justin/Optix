import { motion, type Variants } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

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
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative bg-primary overflow-hidden min-h-screen flex items-center">
      {/* Éléments décoratifs d'arrière-plan - formes simples sans dégradés */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-16 py-20 sm:py-24 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6"
          >
            Transformer la <span className="text-secondary">Donnée</span>
            <br />
            en <span className="text-secondary">Décision</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-10 sm:mb-12 px-4"
          >
            Chez <span className="font-semibold text-secondary">Optix</span>,
            nous concevons des solutions technologiques sur-mesure qui
            transforment vos données brutes en stratégies gagnantes et en
            opportunités de croissance.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-neutral-900 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-secondary-600 hover:shadow-2xl transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <span>Découvrir nos solutions</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white/30 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-white hover:text-primary transition-all duration-300 w-full sm:w-auto backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              <span>Télécharger des Insights</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Formes géométriques animées - couleurs simples */}
      <motion.div
        className="absolute top-20 left-10 sm:left-20 w-24 sm:w-32 h-24 sm:h-32 bg-secondary/30 rounded-full"
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1],
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 sm:right-20 w-36 sm:w-48 h-36 sm:h-48 border-4 border-secondary/40 rounded-2xl"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.1, 1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute top-32 right-20 sm:right-32 w-32 sm:w-44 h-32 sm:h-44 rounded-full border-4 border-white/30"
        animate={{
          rotate: [0, -180, -360],
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/4 w-0 h-0 border-l-[16px] sm:border-l-[22px] border-r-[16px] sm:border-r-[22px] border-b-[28px] sm:border-b-[38px] border-l-transparent border-r-transparent border-b-secondary/40"
        animate={{
          y: [0, 20, 0],
          rotate: [0, 120, 240, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/4 left-1/3 w-16 sm:w-24 h-16 sm:h-24 bg-white/20 rounded-lg"
        animate={{
          rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
          scale: [1, 0.8, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/3 w-28 sm:w-36 h-28 sm:h-36 border-2 border-white/30 rounded-full"
        animate={{
          rotate: [0, -90, -180, -270, -360],
          scale: [1, 1.1, 1, 0.9, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default HeroSection;
