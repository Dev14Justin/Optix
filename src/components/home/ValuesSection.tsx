import { motion } from 'framer-motion';

const values = [
  {
    icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    ),
    title: 'Respect',
    description: 'Nous valorisons chaque individu et chaque idée, favorisant un environnement de collaboration et de confiance.',
  },
  {
    icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    ),
    title: 'Éthique',
    description: 'Nos solutions sont conçues avec une intégrité totale, en respectant la confidentialité et la sécurité des données.',
  },
  {
    icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    ),
    title: 'Responsabilité',
    description: "Nous nous engageons sur des résultats mesurables et assumons la responsabilité de l'impact de notre travail.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const ValuesSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-texte-principal"
        >
          Nos Valeurs Fondamentales
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-lg text-texte-secondaire max-w-3xl mx-auto"
        >
          Au cœur de notre démarche, trois piliers qui guident chacune de nos actions et collaborations.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-16 grid gap-12 md:grid-cols-3"
        >
          {values.map((value) => (
            <motion.div key={value.title} variants={itemVariants} className="flex flex-col items-center">
              <div className="p-4 bg-gray-100 rounded-full">
                {value.icon}
              </div>
              <h3 className="mt-6 text-2xl font-bold text-texte-principal">{value.title}</h3>
              <p className="mt-2 text-texte-secondaire">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;