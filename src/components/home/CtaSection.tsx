import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

const CtaSection = () => {
  return (
    <section className="bg-neutral-50 py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Call to Action */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          className="text-center"
        >
          <div className="bg-primary rounded-2xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Prêt à Transformer Votre Entreprise ?
              </h2>
              <p className="text-white/90 mb-8 md:mb-10 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                Découvrez comment nos solutions data-driven peuvent optimiser
                vos processus et accélérer votre croissance. Discutons de votre
                projet et concevons ensemble la solution sur mesure qui
                propulsera votre activité.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary text-neutral-900 px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold hover:bg-secondary-600 transition-all duration-300 shadow-lg text-base md:text-lg inline-flex items-center gap-2"
              >
                <span>Contactez-nous</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
