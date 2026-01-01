import { motion } from "framer-motion";
import { Heart, CheckCircle, Shield, Users } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
                Nous optimisons l'avenir avec la{" "}
                <span className="text-primary">donnée</span>.
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed">
                Optix est une entreprise visionnaire qui transforme le raw data
                en solutions technologiques percutantes pour propulser votre
                croissance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
                  alt="L'équipe Optix au travail"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider">
                Notre Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                Démocratiser l'excellence technologique par la data.
              </h2>
              <p className="text-neutral-600 leading-relaxed text-base md:text-lg">
                Chez Optix, nous pensons que chaque entreprise, peu importe sa
                taille, mérite d'accéder à des outils technologiques de pointe.
                Notre mission est de simplifier la complexité de la donnée pour
                en faire un levier de décision stratégique et de croissance
                durable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary-800 rounded-full text-sm font-bold uppercase tracking-wider">
                Notre Vision
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                Devenir le partenaire privilégié de la transformation numérique.
              </h2>
              <p className="text-neutral-600 leading-relaxed text-base md:text-lg">
                Nous aspirons à construire un futur où la technologie et
                l'éthique coexistent harmonieusement. Notre vision est d'être à
                l'avant-garde de l'innovation IA et Data-driven, tout en restant
                profondément attachés à nos valeurs de respect et de
                responsabilité.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-12 md:mb-16">
            Nos Valeurs Cardinales
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Respect",
                icon: Heart,
                desc: "Nous valorisons chaque individu, chaque idée et chaque partenaire.",
              },
              {
                title: "Éthique",
                icon: Shield,
                desc: "La transparence et l'intégrité sont au cœur de toutes nos interactions.",
              },
              {
                title: "Responsabilité",
                icon: CheckCircle,
                desc: "Nous assumons l'impact de nos solutions sur la société et l'environnement.",
              },
            ].map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-neutral-100"
                >
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 text-sm md:text-base">
                    {value.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 mx-auto mb-6 text-secondary" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
            Envie de rejoindre l'aventure ?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 md:mb-12 max-w-2xl mx-auto">
            Nous sommes toujours à la recherche de talents passionnés par la
            data et l'innovation technologique.
          </p>
          <button className="bg-secondary text-neutral-900 px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-secondary-600 hover:scale-105 transition-all">
            Voir nos opportunités
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
