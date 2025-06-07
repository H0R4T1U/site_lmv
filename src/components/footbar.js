const Footbar = () => {
  return (
    <footer className="py-6 px-4 sm:px-8 bg-[var(--primary-background)] border-t border-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs sm:text-sm text-[var(--text-white)]">
          &copy; {new Date().getFullYear()} La Maison Verte. Toate drepturile
          rezervate.
        </p>
      </div>
    </footer>
  );
};

export default Footbar;
