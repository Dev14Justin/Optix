import { motion, type Variants } from 'framer-motion';
import { Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Area, AreaChart } from 'recharts';

const data = [
  { name: 'Jan', value: 400, growth: 15 },
  { name: 'Fev', value: 300, growth: 8 },
  { name: 'Mar', value: 600, growth: 25 },
  { name: 'Avr', value: 800, growth: 32 },
  { name: 'Mai', value: 700, growth: 28 },
  { name: 'Juin', value: 900, growth: 35 },
  { name: 'Juil', value: 1100, growth: 42 },
  { name: 'Août', value: 950, growth: 38 },
];

const stats = [
  { label: 'Performance Moyenne', value: '87%', icon: '📈' },
  { label: 'Croissance Mensuelle', value: '+28%', icon: '🚀' },
  { label: 'Satisfaction Client', value: '94%', icon: '⭐' },
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

const DataInsightsSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-400/3 to-blue-400/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={cardVariants}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6"
          >
            La Donnée au Service de la Performance
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Nous ne nous contentons pas de collecter des données. Nous les faisons parler pour révéler des opportunités, 
            anticiper les tendances et vous donner une longueur d'avance sur vos concurrents.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Content */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Analytics Avancés</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Notre approche analytique transforme des ensembles de données complexes en visualisations claires 
                et en stratégies actionnables. Nous utilisons des algorithmes avancés pour identifier les patterns 
                cachés et optimiser vos performances.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Insights Prédictifs</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Anticipez les tendances futures grâce à nos modèles prédictifs. Nous analysons les données historiques 
                pour vous fournir des prévisions précises et des recommandations stratégiques qui vous donnent un 
                avantage concurrentiel.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Chart */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Évolution des Performances</h3>
              <p className="text-gray-600 text-sm">Données en temps réel sur 8 mois</p>
            </div>
            
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0c00ff" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#0c00ff" stopOpacity={0.05}/>
                    </linearGradient>
                    <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#fee100" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#fee100" stopOpacity={0.05}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" strokeOpacity={0.3} />
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
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E5E7EB',
                      borderRadius: '12px',
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                      color: '#1F2937',
                    }}
                    labelStyle={{ color: '#374151', fontWeight: 'bold' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#0c00ff"
                    strokeWidth={3}
                    fill="url(#colorValue)"
                    dot={{ r: 4, fill: '#0c00ff', strokeWidth: 2, stroke: '#FFFFFF' }}
                    activeDot={{ r: 6, fill: '#fee100', stroke: '#0c00ff', strokeWidth: 2 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="growth"
                    stroke="#fee100"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ r: 3, fill: '#fee100' }}
                    activeDot={{ r: 5, fill: '#0c00ff', stroke: '#fee100', strokeWidth: 2 }}
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
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DataInsightsSection;
