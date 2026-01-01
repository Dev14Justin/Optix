import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "L'avenir de l'IA dans le développement web",
    excerpt:
      "Découvrez comment l'intelligence artificielle transforme la façon dont nous construisons des applications web modernes.",
    author: "Marie Dubois",
    date: "15 Décembre 2025",
    category: "Intelligence Artificielle",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Data Analytics : Les tendances 2026",
    excerpt:
      "Explorez les nouvelles tendances en analyse de données qui façonneront le futur des entreprises data-driven.",
    author: "Pierre Martin",
    date: "10 Décembre 2025",
    category: "Data Science",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    readTime: "7 min",
  },
  {
    id: 3,
    title: "Optimisation des performances web",
    excerpt:
      "Guide complet pour améliorer les performances de vos applications web et offrir une expérience utilisateur exceptionnelle.",
    author: "Sophie Laurent",
    date: "5 Décembre 2025",
    category: "Développement",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
    readTime: "6 min",
  },
  {
    id: 4,
    title: "SaaS : Construire une architecture scalable",
    excerpt:
      "Les meilleures pratiques pour concevoir des applications SaaS robustes et évolutives.",
    author: "Thomas Rousseau",
    date: "1 Décembre 2025",
    category: "SaaS",
    image:
      "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=2071",
    readTime: "8 min",
  },
];

const BlogPage = () => {
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
              Notre Blog
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Articles, guides et analyses sur les technologies, la data et
              l'innovation numérique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {blogPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100 group"
              >
                {/* Featured Image */}
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-primary text-white rounded-full text-xs font-bold flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <button className="text-primary font-bold flex items-center group-hover:gap-2 transition-all">
                    Lire l'article
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:ml-0 transition-all" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-neutral-100 text-neutral-900 px-8 py-4 rounded-xl font-bold hover:bg-neutral-200 transition-colors">
              Charger plus d'articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Ne manquez aucun article
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-10">
            Recevez nos derniers articles directement dans votre boîte mail
            chaque semaine.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
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

export default BlogPage;
