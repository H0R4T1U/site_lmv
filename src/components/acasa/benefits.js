// Benefits
const Benefits = () => {
const benefits = [
  {
  id: 1,
  title: "Curățenie Impecabilă",
  description: "Punem accent pe igienă și confort: camerele sunt atent întreținute, iar standardele noastre de curățenie sunt la cel mai înalt nivel.",
  },
  {
    id: 2,
    title: "Cazare Confortabilă în Inima Naturii",
    description: "Camere spațioase, decorate rustic-modern, pentru un sejur relaxant.",
  },
  {
    id: 3,
    title: "Experiență Autentică de Munte",
    description: "Oferim oaspeților noștri acces la trasee montane, focuri de tabără și liniștea naturii.",
  },
];


  return (
    <section className="py-12 px-4 sm:px-8 bg-[var(--brown-background)] border-b border-t border-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold my-font text-center mb-8 text-[var(--primary-text)]">
          În ce credem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div
              key={b.id}
              className="p-6 bg-[var(--primary-background)] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold my-font mb-2  text-[var(--primary-text)]">
                {b.title}
              </h3>
              <p className="text-base  text-[var(--primary-text)] ">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
