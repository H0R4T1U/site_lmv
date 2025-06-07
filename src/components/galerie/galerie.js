import Image from "next/image";

const Galerie = () => {
  const galerie = [
    {
      name: "🏡 Bucătărie",
      image: "/galerie/gallery-image1.jpg",
      desc: "Bucătărie complet utilată Spațiu luminos, dotat cu frigider, aragaz, filtru de cafea și veselă – tot ce ai nevoie pentru mese ca acasă.",
    },
    {
      name: "☕ Espressor & ceainic",
      image: "/galerie/gallery-image2.jpg",
      desc: "Dimineți cu aer curat și o cafea bună. Espressorul și ceainicul sunt pregătite pentru momentele de răsfăț.",
    },
    {
      name: "🍽️ Bucătărie ",
      image: "/galerie/gallery-image3.jpg",
      desc: "Zile în familie Bucătărie rustic-modernă, cu masă spațioasă pentru grupuri sau familii. Locul perfect pentru povești și mâncare caldă.",
    },
    {
      name: "🌲 Foișor din lemn",
      image: "/galerie/gallery-image4.jpg",
      desc: "Foișor acoperit din lemn, ideal pentru mese în aer liber, seri cu grătar sau momente de liniște în natură.",
    },
    {
      name: "🌿 Grădină + masă în aer liber",
      image: "/galerie/gallery-image5.jpg",
      desc: "Locul perfect pentru un mic dejun la aer curat sau pentru citit o carte sub razele blânde ale soarelui de munte.",
    },
    {
      name: "💧 Ciubăr",
      image: "/galerie/gallery-image6.jpg",
      desc: "Ciubăr cu apă caldă pentru relaxare totală, oferim ciubăr la cerere – o experiență rustică și revigorantă, perfectă după o zi pe traseu.",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold my-font text-center mb-12">
        Spațiile noastre, create pentru confort și odihnă
      </h2>
      <div className="grid gap-10 md:grid-cols-3">
        {galerie.map((plant, i) => (
          <div
            key={i}
            className="bg-[var(--brown-background)] p-6 rounded-2xl shadow-md flex flex-col items-start"
          >
            <div className="w-full h-40 relative mb-4 rounded-xl overflow-hidden">
              <Image
                src={plant.image}
                alt={plant.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl text-[var(--primary-text)] my-font font-semibold mb-2">
              {plant.name}
            </h3>
            <p className="text-sm text-[var(--primary-text)] leading-relaxed">{plant.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Galerie;
