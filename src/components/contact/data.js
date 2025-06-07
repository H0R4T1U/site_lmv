const Data = () => {
  return (
    <section className="space-y-10">
      <h1 className="text-4xl font-bold  text-[var(--complementary-text)] text-center">Contact</h1>

      <div className="bg-[var(--brown-background)] text-[var(--primary-text)] p-6 rounded-xl shadow-md space-y-4 text-lg">
        <p className="flex items-center gap-2">
          📧 <strong>Email:</strong>{" "}
          <a
            href="mailto:horatiubanciu11@gmail.com"
            className="hover:text-[var(--wheat)] transition-colors duration-200"
          >
            horatiubanciu11@gmail.com
          </a>
        </p>
        <p className="flex items-center gap-2">
          📞 <strong>Telefon:</strong>{" "}
          <a
            href="tel:+40770158970"
            className="hover:text-[var(--wheat)] transition-colors duration-200"
          >
            +40 770 158 970
          </a>
        </p>
        <p className="flex items-center gap-2">
          📍 <strong>Adresă:</strong>{" "}
          <a
            href="https://www.google.com/maps?client=firefox-b-d&um=1&ie=UTF-8&fb=1&gl=ro&sa=X&geocode=Kc2zq096yUhHMY2K988SRTCQ&daddr=Valea+Aleului,+Pietroasa+417365"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--wheat)] transition-colors duration-200"
          >
            Gurani Nr. 248, Valea Aleului, Pietroasa, Bihor
          </a>
        </p>
      </div>

      <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1505.6643013953576!2d22.579739928088145!3d46.59643980182256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4748c97a4fabb3cd%3A0x90304512cff78a8d!2sPensiunea%20La%20Maison%20Verte!5e0!3m2!1sro!2sro!4v1748811315021!5m2!1sro!2sro"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="La Maison Verte - Locație"
        ></iframe>
      </div>
    </section>
  );
};

export default Data;
