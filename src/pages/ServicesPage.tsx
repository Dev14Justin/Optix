import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Cloud,
  Brain,
  Settings,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Applications Web",
    desc: "Solutions sur mesure, performantes et scalables utilisant les dernières technologies comme React, Next.js et Node.js.",
    icon: Monitor,
    features: [
      "Interface Responsive",
      "Performance Optimisée",
      "Architecture Cloud",
      "Sécurité Renforcée",
    ],
  },
  {
    title: "Applications Mobiles",
    desc: "Développement natif et hybride pour iOS et Android, offrant une expérience utilisateur fluide et intuitive.",
    icon: Smartphone,
    features: [
      "iOS & Android",
      "UI/UX Moderne",
      "Notifications Push",
      "Mode Hors-ligne",
    ],
  },
  {
    title: "SaaS & Plateformes",
    desc: "Conception de logiciels en tant que service (SaaS) robustes pour répondre à des besoins métiers spécifiques.",
    icon: Cloud,
    features: [
      "Multi-tenancy",
      "Gestion des Abonnements",
      "APIs Robustes",
      "Dashboard Analytique",
    ],
  },
  {
    title: "Intelligence Artificielle",
    desc: "Intégration de modèles d'IA et de Machine Learning pour automatiser et optimiser vos processus métiers.",
    icon: Brain,
    features: [
      "NLP & Vision",
      "Analyse Prédictive",
      "Automatisation",
      "Large Language Models",
    ],
  },
  {
    title: "Automatisation Data",
    desc: "Simplifiez vos flux de travail en automatisant la collecte, le traitement et la visualisation de vos données.",
    icon: Settings,
    features: [
      "Workflows Automatisés",
      "Pipelines ETL",
      "Reporting Temps Réel",
      "Intégration API",
    ],
  },
  {
    title: "Conseil Stratégique Data",
    desc: "Accompagnement dans la définition de votre stratégie data pour transformer l'information en avantage compétitif.",
    icon: TrendingUp,
    features: [
      "Audit Data",
      "Gouvernance",
      "Architecture",
      "Accompagnement Change",
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Header */}
      <section className="bg-primary py-20 md:py-24 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nos Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Des solutions technologiques de pointe conçues pour extraire le
              maximum de valeur de vos données.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 -mt-12 md:-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-neutral-100 flex flex-col h-full"
                >
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 mb-8 flex-grow text-sm md:text-base">
                    {service.desc}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-neutral-700"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="text-primary font-bold flex items-center group text-sm md:text-base">
                    En savoir plus
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Comment nous travaillons
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-base md:text-lg">
              Une méthodologie éprouvée pour garantir le succès de vos projets
              technologiques.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Découverte",
                desc: "Analyse approfondie de vos besoins et de vos données.",
              },
              {
                step: "02",
                title: "Conception",
                desc: "Design de la solution et choix de l'architecture technique.",
              },
              {
                step: "03",
                title: "Développement",
                desc: "Réalisation agile avec des cycles de retours courts.",
              },
              {
                step: "04",
                title: "Déploiement",
                desc: "Lancement de la solution et suivi des performances.",
              },
            ].map((step) => (
              <div key={step.step} className="relative">
                <div className="text-6xl md:text-7xl font-black text-primary/5 absolute -top-6 md:-top-8 -left-2">
                  {step.step}
                </div>
                <div className="relative pt-4">
                  <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 text-sm md:text-base">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-10 blur-3xl -mr-20 -mt-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
                Prêt à transformer vos idées en réalité ?
              </h2>
              <p className="text-lg md:text-xl mb-10 md:mb-12 text-white/90 max-w-2xl mx-auto">
                Discutons de votre projet et voyons comment nos services peuvent
                vous aider à atteindre vos objectifs.
              </p>
              <button className="bg-secondary text-neutral-900 px-8 py-3 md:px-10 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-secondary-600 transition-colors">
                Démarrer un projet
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
