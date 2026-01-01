import { motion, type Variants } from "framer-motion";
import { Zap, Eye, TrendingUp, Users } from "lucide-react";

const stats = [
  { number: "+30", label: "Projets Réalisés", icon: TrendingUp },
  { number: "2", label: "Solutions digitales", icon: Zap },
  { number: "10", label: "Entreprises partenaires", icon: Users },
  { number: "99%", label: "Taux de Satisfaction", icon: TrendingUp },
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
      type: "spring",
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
      type: "spring",
      bounce: 0.6,
      duration: 0.8,
    },
  },
};

const AboutSection = () => {
  return (
    <section className="bg-neutral-50 py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Éléments décoratifs simples */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            variants={cardVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6"
          >
            Qui Sommes-Nous ?
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-base md:text-lg lg:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed"
          >
            <span className="font-semibold text-primary">Optix</span> est une
            entreprise spécialisée dans la conception de solutions
            technologiques optimisées avec la Data. Nous transformons les défis
            numériques en opportunités de croissance grâce à notre expertise
            technique et notre approche centrée sur l'innovation.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start mb-12 md:mb-16 lg:mb-20">
          {/* Left Column - Mission & Vision */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="space-y-6 md:space-y-8"
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-100 relative hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-800">
                  Notre Mission
                </h3>
              </div>
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                Accompagner nos clients dans leur transformation digitale en
                développant des solutions technologiques innovantes qui tirent
                parti de la puissance de la data pour optimiser leurs processus
                métier et accroître leur compétitivité sur le marché.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-100 relative hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-neutral-900" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-800">
                  Notre Vision
                </h3>
              </div>
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                Devenir le partenaire de référence en solutions data-driven,
                reconnu pour notre excellence technique, notre éthique
                professionnelle et notre capacité à créer des technologies qui
                façonnent l'avenir numérique de nos clients.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image & Statistics */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="space-y-6 md:space-y-8"
          >
            {/* Company Image */}
            <div className="bg-white rounded-2xl shadow-lg border border-neutral-100 overflow-hidden">
              <img
                src="/i.jpeg"
                alt="Activités d'Optix - Solutions technologiques et innovation"
                className="w-full h-48 md:h-64 object-cover"
              />
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={statVariants}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-neutral-100 text-center group hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex justify-center mb-2">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs md:text-sm font-medium text-neutral-600 group-hover:text-neutral-800 transition-colors">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
