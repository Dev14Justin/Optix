import { motion, type Variants } from "framer-motion";
import { BarChart3, Calendar, ArrowRight } from "lucide-react";

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

const SolutionsSection = () => {
  return (
    <section className="bg-neutral-50 py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Éléments décoratifs */}
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
            Nos Solutions Innovantes
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed"
          >
            Découvrez nos plateformes technologiques en cours de développement
            qui transforment des secteurs entiers grâce à l'innovation et à la
            puissance des données.
          </motion.p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* KpiHub Solution */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3 },
            }}
            className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-800 group-hover:text-neutral-900 transition-colors">
                  KpiHub
                </h3>
                <p className="text-primary font-medium text-sm md:text-base">
                  Plateforme Web • Influence Marketing
                </p>
              </div>
            </div>

            <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-6">
              <strong>KpiHub</strong> est une plateforme web révolutionnaire qui
              permet aux influenceurs de présenter leurs performances à travers
              un portfolio dynamique basé sur des indicateurs clés (KPI). Elle
              aide les marques à évaluer, comparer et collaborer avec les bons
              profils grâce à des données fiables et transparentes.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-neutral-600">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Portfolio dynamique avec KPI en temps réel
              </div>
              <div className="flex items-center text-sm text-neutral-600">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Évaluation et comparaison transparente des profils
              </div>
              <div className="flex items-center text-sm text-neutral-600">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Collaboration facilitée entre marques et influenceurs
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                En Développement
              </span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-primary hover:text-primary-700 font-medium text-sm flex items-center gap-1 transition-colors duration-300"
              >
                <span>En savoir plus</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

          {/* InEvent Solution */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3 },
            }}
            className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-secondary rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-7 h-7 md:w-8 md:h-8 text-neutral-900" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-800 group-hover:text-neutral-900 transition-colors">
                  InEvent
                </h3>
                <p className="text-secondary-700 font-medium text-sm md:text-base">
                  Plateforme Mobile & Web • Événementiel
                </p>
              </div>
            </div>

            <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-6">
              <strong>InEvent</strong> est une plateforme mobile et web qui
              digitalise et simplifie toute la gestion d'organisation des
              événements et leur promotion. Elle permet aux organisateurs de
              trouver et gérer facilement leurs prestataires logistiques, aux
              participants de trouver des événements et faire du réseautage
              intelligent et ciblé, et aux entreprises d'accéder à des insights
              socio-économiques à forte valeur ajoutée.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-neutral-600">
                <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                Gestion complète d'événements digitalisée
              </div>
              <div className="flex items-center text-sm text-neutral-600">
                <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                Réseautage intelligent et ciblé
              </div>
              <div className="flex items-center text-sm text-neutral-600">
                <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                Insights socio-économiques avancés
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/20 text-secondary-800">
                En Développement
              </span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-secondary-700 hover:text-secondary-800 font-medium text-sm flex items-center gap-1 transition-colors duration-300"
              >
                <span>En savoir plus</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
