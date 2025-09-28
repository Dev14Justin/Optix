import { motion, Variants } from 'framer-motion';

const services = [
  {
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
    title: 'Applications Web',
    description: "Des applications web performantes, scalables et centrées sur l'utilisateur.",
  },
  {
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
    ),
    title: 'Applications Mobiles',
    description: 'Des expériences mobiles natives et hybrides fluides pour iOS et Android.',
  },
  {
    icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>
    ),
    title: 'Intelligence Artificielle',
    description: "Intégrez l'IA pour automatiser, prédire et optimiser vos processus métier.",
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
    <section className="bg-gray-50 py-20">
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
            className="text-3xl md:text-4xl font-bold text-texte-principal"
          >
            Nos Services
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="mt-4 text-lg text-texte-secondaire max-w-2xl mx-auto"
          >
            Nous transformons vos idées en réalité numérique avec des solutions innovantes et sur-mesure.
          </motion.p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="relative p-8 bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <motion.div
                whileHover={{ rotate: [0, -15, 15, 0], transition: { duration: 0.5 } }}
                className="flex justify-center mb-6"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-center text-texte-principal">{service.title}</h3>
              <p className="mt-2 text-center text-texte-secondaire">{service.description}</p>
              <motion.div
                className="absolute top-0 left-0 w-full h-full border-2 border-transparent rounded-xl"
                whileHover={{
                  borderColor: '#0c00ff',
                  transition: { duration: 0.3 },
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;