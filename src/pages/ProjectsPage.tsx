import { motion } from "framer-motion";
import { Calendar, Users, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "KpiHub",
    category: "Plateforme Web",
    description:
      "Portfolio dynamique pour influenceurs avec KPI en temps réel et collaboration marque-influenceur.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
    status: "En Développement",
    tech: ["React", "Node.js", "PostgreSQL", "Analytics"],
  },
  {
    id: 2,
    title: "InEvent",
    category: "Mobile & Web",
    description:
      "Plateforme complète de gestion d'événements avec réseautage intelligent et insights socio-économiques.",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=2012",
    status: "En Développement",
    tech: ["React Native", "Next.js", "MongoDB", "AI"],
  },
  {
    id: 3,
    title: "DataFlow Pro",
    category: "Automatisation",
    description:
      "Solution d'automatisation de workflows data avec pipelines ETL et reporting en temps réel.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    status: "Conceptualisation",
    tech: ["Python", "Apache Airflow", "Docker", "Cloud"],
  },
];

const ProjectsPage = () => {
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
              Nos Projets
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Découvrez nos solutions innovantes en cours de développement qui
              transforment des secteurs entiers grâce à la puissance des
              données.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100"
              >
                {/* Project Image */}
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-4 py-2 rounded-full text-xs font-bold ${
                        project.status === "En Développement"
                          ? "bg-primary text-white"
                          : "bg-secondary text-neutral-900"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{project.category}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                    {project.title}
                  </h3>

                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="text-primary font-bold flex items-center group-hover:gap-2 transition-all">
                    En savoir plus
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:ml-0 transition-all" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Vous avez un projet en tête ?
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-10">
            Discutons de vos besoins et créons ensemble la solution qui fera la
            différence.
          </p>
          <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors shadow-lg">
            Démarrer un projet
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
