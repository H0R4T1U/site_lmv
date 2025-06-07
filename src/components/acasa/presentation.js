const Presentation = () => {
  return (
    <section className="py-12 px-4 sm:px-8 bg-[var(--beige-background)]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
        {/* Left: Text Content */}
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold my-font mb-4 text-[var(--complementary-text)]">
            Cine suntem
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4 text-[var(--complementary-text)]">
            Pensiunea noastră este un colț de liniște și relaxare în mijlocul naturii.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-4 text-[var(--complementary-text)]">
            În apropiere de atracții turistice deosebite din Munții Apuseni.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-4 text-[var(--complementary-text)]">
            Vă așteptăm cu drag pentru a descoperi farmecul locurilor și ospitalitatea noastră.
          </p>

          {/* Buttons for mobile */}
          <div className="flex flex-col sm:flex-row sm:gap-4 mt-6 lg:hidden">
            <a
              href="tel:+40770158970"
              className="text-center bg-[var(--brown-background)] text-[var(--primary-text)] font-medium px-6 py-3 rounded mb-3 sm:mb-0 hover:brightness-110 transition"
            >
              📞 Sună acum
            </a>
            <a
              href="https://wa.me/40770158970"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center bg-[var(--primary-background)] text-[var(--primary-text)] font-medium px-6 py-3 rounded hover:brightness-110 transition"
            >
              💬 Contact pe WhatsApp
            </a>
          </div>
        </div>

        {/* Buttons for desktop */}
        <div className="hidden lg:flex flex-col gap-4 min-w-[220px]">
          <a
            href="tel:+40762575657"
            className="text-center bg-[var(--brown-background)] text-[var(--primary-text)] font-medium px-6 py-3 rounded hover:brightness-110 transition"
          >
            📞 Sună acum
          </a>
          <a
            href="https://wa.me/40762575657"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center bg-[var(--primary-background)] text-[var(--primary-text)] font-medium px-6 py-3 rounded hover:brightness-110 transition"
          >
            💬 Contact pe WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
