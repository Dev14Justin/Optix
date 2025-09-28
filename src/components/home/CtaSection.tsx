
import { motion } from 'framer-motion';

const CtaSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Prêt à transformer vos données en opportunités ?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discutons de votre projet. Chez Optix, nous sommes prêts à relever vos défis et à concevoir la solution sur mesure qui propulsera votre activité.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#0a00d1' }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block bg-primary text-white font-bold rounded-xl px-8 py-4 text-lg transition-colors duration-300"
            style={{ backgroundColor: '#0c00ff' }}
          >
            Contactez-nous
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
