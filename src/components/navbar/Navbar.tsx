

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-texte-principal">
            Optix
          </div>
          <div>
            <a href="#" className="text-gray-600 hover:text-primary px-3 py-2">Services</a>
            <a href="#" className="text-gray-600 hover:text-primary px-3 py-2">Projet</a>
            <a href="#" className="text-gray-600 hover:text-primary px-3 py-2">A Propos</a>
            <a href="#" className="text-gray-600 hover:text-primary px-3 py-2">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
