import { motion } from "framer-motion";
import { Download, TrendingUp, BarChart3, FileText } from "lucide-react";

const insights = [
  {
    id: 1,
    title: "Tendances du E-commerce 2026",
    description:
      "Analyse complète des comportements d'achat en ligne et prévisions pour l'année à venir.",
    category: "E-commerce",
    icon: TrendingUp,
    downloadUrl: "#",
    size: "2.4 MB",
    pages: 24,
  },
  {
    id: 2,
    title: "Impact de l'IA sur les PME",
    description:
      "Étude sur l'adoption de l'intelligence artificielle par les petites et moyennes entreprises.",
    category: "Intelligence Artificielle",
    icon: BarChart3,
    downloadUrl: "#",
    size: "1.8 MB",
    pages: 18,
  },
  {
    id: 3,
    title: "Data-Driven Marketing",
    description:
      "Guide pratique pour optimiser vos campagnes marketing grâce aux données.",
    category: "Marketing",
    icon: FileText,
    downloadUrl: "#",
    size: "3.1 MB",
    pages: 32,
  },
];

const InsightsPage = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-20 md:py-24 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Insights & Rapports
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Accédez à nos analyses exclusives et rapports détaillés pour
              prendre des décisions éclairées basées sur les données.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, idx) => {
              const IconComponent = insight.icon;
              return (
                <motion.div
                  key={insight.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all border border-neutral-100 group"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Category */}
                  <span className="text-sm font-bold text-primary uppercase tracking-wider">
                    {insight.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mt-3 mb-4">
                    {insight.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {insight.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-neutral-500 mb-6 pb-6 border-b border-neutral-100">
                    <span>{insight.pages} pages</span>
                    <span>•</span>
                    <span>{insight.size}</span>
                  </div>

                  {/* Download Button */}
                  <button className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" />
                    <span>Télécharger</span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Recevez nos derniers insights
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-10">
            Abonnez-vous à notre newsletter pour recevoir nos analyses
            exclusives directement dans votre boîte mail.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-6 py-4 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-700 transition-colors">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;
