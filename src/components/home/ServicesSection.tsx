import { motion, type Variants } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Brain,
  PieChart,
  Database,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Applications Web",
    description:
      "Des applications web performantes, scalables et centrées sur l'utilisateur.",
    color: "primary",
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description:
      "Des expériences mobiles natives et hybrides fluides pour iOS et Android.",
    color: "secondary",
  },
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description:
      "Intégrez l'IA pour automatiser, prédire et optimiser vos processus métier.",
    color: "primary",
  },
  {
    icon: PieChart,
    title: "Analyse de Données",
    description:
      "Nous transformons vos données brutes en insights exploitables pour une prise de décision éclairée.",
    color: "primary",
  },
  {
    icon: Database,
    title: "Vente d'Insights",
    description:
      "Accédez à des ensembles de rapports analytiques anonymisés riches et qualifiés pour alimenter vos modèles et vos stratégies.",
    color: "secondary",
  },
  {
    icon: Zap,
    title: "Optimisation de solutions existantes",
    description:
      "Nous optimisons vos solutions existantes grâce à la data pour améliorer leurs performances et leur rentabilité.",
    color: "primary",
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
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const ServicesSection = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            variants={cardVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
          >
            Nos Services
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            Nous transformons vos idées en réalité numérique avec des solutions
            innovantes et sur-mesure.
          </motion.p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isPrimary = service.color === "primary";

            return (
              <motion.div
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group relative p-6 md:p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100"
              >
                {/* Icon container */}
                <motion.div
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    scale: 1.1,
                    transition: { duration: 0.6, ease: "easeInOut" },
                  }}
                  className="flex justify-center mb-6 md:mb-8"
                >
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${
                      isPrimary ? "bg-primary" : "bg-secondary"
                    } shadow-xl flex items-center justify-center group-hover:shadow-2xl transition-all duration-300`}
                  >
                    <IconComponent
                      className={`w-8 h-8 md:w-10 md:h-10 ${
                        isPrimary ? "text-white" : "text-neutral-900"
                      }`}
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-center text-neutral-800 group-hover:text-neutral-900 transition-colors duration-300 mb-3 md:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-center text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 ${
                    isPrimary ? "bg-primary" : "bg-secondary"
                  } group-hover:w-16 transition-all duration-300 rounded-full`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
