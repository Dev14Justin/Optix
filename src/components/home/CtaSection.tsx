
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

const CtaSection = () => {
  return (
    <section className="bg-gradient-to-br from-white via-blue-50/20 to-yellow-50/20 py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Call to Action */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à Transformer Votre Entreprise ?
              </h2>
              <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                Découvrez comment nos solutions data-driven peuvent optimiser vos processus et accélérer votre croissance. 
                Discutons de votre projet et concevons ensemble la solution sur mesure qui propulsera votre activité.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg text-lg"
              >
                Contactez-nous
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
