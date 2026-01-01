import { motion, type Variants } from "framer-motion";
import {
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";
import { TrendingUp, Target, Award } from "lucide-react";

const data = [
  { name: "Jan", value: 400, growth: 15 },
  { name: "Fev", value: 300, growth: 8 },
  { name: "Mar", value: 600, growth: 25 },
  { name: "Avr", value: 800, growth: 32 },
  { name: "Mai", value: 700, growth: 28 },
  { name: "Juin", value: 900, growth: 35 },
  { name: "Juil", value: 1100, growth: 42 },
  { name: "Août", value: 950, growth: 38 },
];

const stats = [
  { label: "Performance Moyenne", value: "87%", icon: TrendingUp },
  { label: "Croissance Mensuelle", value: "+28%", icon: Target },
  { label: "Satisfaction Client", value: "94%", icon: Award },
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

const DataInsightsSection = () => {
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
            La Donnée au Service de la Performance
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-base md:text-lg text-neutral-600 max-w-4xl mx-auto leading-relaxed"
          >
            Nous ne nous contentons pas de collecter des données. Nous les
            faisons parler pour révéler des opportunités, anticiper les
            tendances et vous donner une longueur d'avance sur vos concurrents.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-16">
          {/* Left Column - Content */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="space-y-6 md:space-y-8"
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-800">
                  Analytics Avancés
                </h3>
              </div>
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                Notre approche analytique transforme des ensembles de données
                complexes en visualisations claires et en stratégies
                actionnables. Nous utilisons des algorithmes avancés pour
                identifier les patterns cachés et optimiser vos performances.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-neutral-900" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-800">
                  Insights Prédictifs
                </h3>
              </div>
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                Anticipez les tendances futures grâce à nos modèles prédictifs.
                Nous analysons les données historiques pour vous fournir des
                prévisions précises et des recommandations stratégiques qui vous
                donnent un avantage concurrentiel.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Chart */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-100"
          >
            <div className="mb-6">
              <h3 className="text-lg md:text-xl font-bold text-neutral-800 mb-2">
                Évolution des Performances
              </h3>
              <p className="text-neutral-600 text-sm">
                Données en temps réel sur 8 mois
              </p>
            </div>

            <div className="h-64 md:h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#195BF7" stopOpacity={0.3} />
                      <stop
                        offset="95%"
                        stopColor="#195BF7"
                        stopOpacity={0.05}
                      />
                    </linearGradient>
                    <linearGradient
                      id="colorGrowth"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#FFE101" stopOpacity={0.3} />
                      <stop
                        offset="95%"
                        stopColor="#FFE101"
                        stopOpacity={0.05}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#E5E7EB"
                    strokeOpacity={0.3}
                  />
                  <XAxis
                    dataKey="name"
                    stroke="#6B7280"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#6B7280"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #E5E7EB",
                      borderRadius: "12px",
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      color: "#1F2937",
                    }}
                    labelStyle={{ color: "#374151", fontWeight: "bold" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#195BF7"
                    strokeWidth={3}
                    fill="url(#colorValue)"
                    dot={{
                      r: 4,
                      fill: "#195BF7",
                      strokeWidth: 2,
                      stroke: "#FFFFFF",
                    }}
                    activeDot={{
                      r: 6,
                      fill: "#FFE101",
                      stroke: "#195BF7",
                      strokeWidth: 2,
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="growth"
                    stroke="#FFE101"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ r: 3, fill: "#FFE101" }}
                    activeDot={{
                      r: 5,
                      fill: "#195BF7",
                      stroke: "#FFE101",
                      strokeWidth: 2,
                    }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Statistics Cards */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <IconComponent className="w-10 h-10 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-neutral-600 font-medium text-sm">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default DataInsightsSection;
