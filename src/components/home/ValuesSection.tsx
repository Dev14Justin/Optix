import { motion, type Variants } from "framer-motion";
import { Heart, CheckCircle, Shield } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Respect",
    description:
      "Nous respectons nos clients, nos équipes et nos engagements avec intégrité et transparence.",
    color: "primary",
  },
  {
    icon: CheckCircle,
    title: "Éthique",
    description:
      "Nos solutions sont développées dans le respect des bonnes pratiques et des standards éthiques.",
    color: "secondary",
  },
  {
    icon: Shield,
    title: "Responsabilité",
    description:
      "Nous assumons pleinement nos responsabilités envers nos clients et la qualité de nos livrables.",
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

const ValuesSection = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 relative overflow-hidden">
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
            Nos Valeurs Fondamentales
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed"
          >
            Ces valeurs guident chacune de nos décisions et définissent notre
            approche du développement technologique.
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            const isPrimary = value.color === "primary";

            return (
              <motion.div
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300 text-center"
              >
                <motion.div
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.6 },
                  }}
                  className="flex justify-center mb-6"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl ${
                      isPrimary ? "bg-primary" : "bg-secondary"
                    } shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300`}
                  >
                    <IconComponent
                      className={`w-8 h-8 ${
                        isPrimary ? "text-white" : "text-neutral-900"
                      }`}
                    />
                  </div>
                </motion.div>

                <h4 className="text-lg md:text-xl font-bold text-neutral-800 mb-3 group-hover:text-neutral-900 transition-colors">
                  {value.title}
                </h4>
                <p className="text-sm md:text-base text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
