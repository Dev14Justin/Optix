import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { Mail, Send, CheckCircle, Lock } from "lucide-react";

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

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Ici vous pouvez ajouter la logique d'envoi de l'email
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="bg-primary py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="text-center"
        >
          <motion.div variants={cardVariants} className="mb-8">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Mail className="w-8 h-8 md:w-10 md:h-10 text-neutral-900" />
            </div>
          </motion.div>

          <motion.h2
            variants={cardVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6"
          >
            Restez Connecté avec Optix
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="text-white/90 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-10 md:mb-12"
          >
            Recevez nos dernières actualités, insights sur la data, et découvrez
            en avant-première nos nouvelles solutions technologiques. Rejoignez
            une communauté d'innovateurs passionnés.
          </motion.p>

          <motion.div variants={cardVariants} className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Votre adresse email"
                      className="w-full px-4 py-3 md:px-6 md:py-4 bg-white backdrop-blur-sm border border-neutral-200 rounded-xl text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 shadow-lg"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 md:px-8 md:py-4 bg-secondary text-neutral-900 font-semibold rounded-xl hover:bg-secondary-600 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>S'abonner</span>
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>

                {isSubscribed && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/20 border border-white/30 rounded-xl p-4 text-white text-center"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      <span>
                        Merci ! Vous êtes maintenant abonné à notre newsletter.
                      </span>
                    </div>
                  </motion.div>
                )}
              </form>

              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-white/90">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm">Actualités Tech</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-white/90">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm">Insights Data</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-white/90">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm">Nouvelles Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={cardVariants} className="mt-8 text-white/80">
            <p className="text-sm flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" />
              <span>
                Vos données sont protégées. Pas de spam, désabonnement facile.
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
