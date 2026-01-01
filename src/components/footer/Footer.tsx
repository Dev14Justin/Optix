import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="mb-6">
                <img
                  src="/logo_optix.png"
                  alt="Logo Optix"
                  className="h-10 md:h-12 w-auto mb-6"
                />
                <p className="text-neutral-400 leading-relaxed mb-6 text-sm md:text-base">
                  Transformons vos défis numériques en opportunités de
                  croissance grâce à nos solutions technologiques optimisées
                  avec la Data.
                </p>
                <div className="flex space-x-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-700 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">
                Nos Services
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {[
                  "Applications Web",
                  "Applications Mobiles",
                  "Intégration IA",
                  "Analyse de Données",
                  "Optimisation",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-neutral-400 hover:text-secondary transition-colors duration-300 text-sm md:text-base"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">
                Nos Solutions
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {[
                  { name: "KpiHub", link: "/projets" },
                  { name: "InEvent", link: "/projets" },
                  { name: "Consulting Data", link: "/services" },
                ].map((solution) => (
                  <li key={solution.name}>
                    <Link
                      to={solution.link}
                      className="text-neutral-400 hover:text-secondary transition-colors duration-300 text-sm md:text-base"
                    >
                      {solution.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 md:mt-8">
                <h5 className="text-sm md:text-base font-semibold mb-3 md:mb-4 text-white">
                  Nos Valeurs
                </h5>
                <ul className="space-y-2">
                  {["Respect", "Éthique", "Responsabilité"].map((value) => (
                    <li
                      key={value}
                      className="text-neutral-400 text-sm flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Contact & Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white">
                Contact
              </h4>
              <div className="space-y-4 mb-6 md:mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a
                    href="mailto:equipeoptix@gmail.com"
                    className="text-neutral-400 hover:text-secondary transition-colors text-sm md:text-base"
                  >
                    equipeoptix@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a
                    href="tel:+22870266960"
                    className="text-neutral-400 hover:text-secondary transition-colors text-sm md:text-base"
                  >
                    +228 70266960
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-neutral-400 text-sm md:text-base">
                    Lomé - Togo
                  </span>
                </div>
              </div>

              <div>
                <h5 className="text-sm md:text-base font-semibold mb-3 md:mb-4 text-white">
                  Liens Légaux
                </h5>
                <ul className="space-y-2">
                  {[
                    "Mentions Légales",
                    "Politique de Confidentialité",
                    "CGU",
                    "Cookies",
                  ].map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-neutral-400 hover:text-secondary transition-colors duration-300 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-neutral-800 py-6 md:py-8 text-center">
          <div className="text-neutral-400 text-sm">
            © {currentYear} Optix. Tous droits réservés. | Transformons vos
            défis numériques en opportunités.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
