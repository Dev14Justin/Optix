import { motion, type Variants } from 'framer-motion';
import { useState } from 'react';

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

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // Ici vous pouvez ajouter la logique d'envoi de l'email
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
          className="text-center"
        >
          <motion.div
            variants={cardVariants}
            className="mb-8"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </motion.div>

          <motion.h2
            variants={cardVariants}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Restez Connecté avec Optix
          </motion.h2>
          
          <motion.p
            variants={cardVariants}
            className="text-blue-100 text-lg max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Recevez nos dernières actualités, insights sur la data, et découvrez en avant-première 
            nos nouvelles solutions technologiques. Rejoignez une communauté d'innovateurs passionnés.
          </motion.p>

          <motion.div
            variants={cardVariants}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Votre adresse email"
                      className="w-full px-6 py-4 bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 shadow-lg"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>S'abonner</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </motion.button>
                </div>
                
                {isSubscribed && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-500/20 border border-green-400/30 rounded-xl p-4 text-green-100 text-center"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Merci ! Vous êtes maintenant abonné à notre newsletter.</span>
                    </div>
                  </motion.div>
                )}
              </form>

              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-blue-100">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm">Actualités Tech</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-blue-100">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm">Insights Data</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-blue-100">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm">Nouvelles Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="mt-8 text-blue-200"
          >
            <p className="text-sm">
              🔒 Vos données sont protégées. Pas de spam, désabonnement facile.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
