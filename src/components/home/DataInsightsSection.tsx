import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Fev', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Avr', value: 800 },
  { name: 'Mai', value: 700 },
  { name: 'Juin', value: 900 },
];

const DataInsightsSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-texte-principal">
              La Donnée au Service de la Performance
            </h2>
            <p className="mt-4 text-lg text-texte-secondaire">
              Nous ne nous contentons pas de collecter des données. Nous les faisons parler pour révéler des opportunités, anticiper les tendances et vous donner une longueur d'avance.
            </p>
            <p className="mt-4 text-lg text-texte-secondaire">
              Notre approche analytique transforme des ensembles de données complexes en visualisations claires et en stratégies actionnables.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-80"
          >
            <ResponsiveContainer>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                <XAxis dataKey="name" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderColor: '#fee100',
                    color: '#1C1C1C',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#0c00ff"
                  strokeWidth={3}
                  dot={{ r: 6, fill: '#0c00ff' }}
                  activeDot={{ r: 8, fill: '#fee100', stroke: '#0c00ff' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DataInsightsSection;
