// Secțiune FAQ
const Questions = () => {
  return (
    <section className="max-w-4xl mx-auto space-y-8">
      <h2 className="text-3xl text-[var(--complementary-text)] font-semibold my-font text-center mb-6">
        Întrebări Frecvente
      </h2>
      {[
        {
          q: "Aveți baie privată pentru fiecare cameră?",
          a: "Da, fiecare cameră este dotată cu baie privată pentru confortul oaspeților.",
        },
        {
          q: "Aveți bucătărie utilată?",
          a: "Da, bucătăria este complet utilată, cu toate echipamentele necesare pentru gătit.",
        },
        {
          q: "Ciubărul este inclus în preț?",
          a: "Nu, ciubărul se plătește separat și poate fi rezervat la cerere.",
        },
    ].map((item, idx) => (
        <div
          key={idx}
          className="border-l-4 border-[var(--dark-brown)] bg-[var(--brown)] text-[var(--primary-text)] p-6 rounded-2xl shadow-sm"
        >
          <h3 className="text-xl font-medium mb-2">{item.q}</h3>
          <p>{item.a}</p>
        </div>
      ))}
    </section>
  );
};

export default Questions;
