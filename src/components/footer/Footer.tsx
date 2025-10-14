

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-gray-200 dark:border-gray-800 mt-12">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-texte-secondaire">
            © 2025 Optix. Tous droits réservés.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-texte-secondaire hover:text-primary">LinkedIn</a>
            <a href="#" className="text-texte-secondaire hover:text-primary">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
