import React from "react";

const reviews = [
  {
    name: "Alina",
    country: "Romania",
    flag: "🇷🇴",
    rating: 5,
    message:
      "Zona este superbă, iar gazdele sunt cele mai drăguțe persoane, ne-au ajutat cu tot ce am cerut. Facilități bune, casă și grădină foarte spațioase cu multe locuri de relaxare.",
  },
  {
    name: "Cristina",
    country: "France",
    flag: "🇫🇷",
    rating: 4,
    message:
      "Gazdele au fost foarte amabile și gata să ajute oricând. Cameră spațioasă, bucătărie comună complet utilată.",
  },
  {
    name: "Tibor",
    country: "Hungary",
    flag: "🇭🇺",
    rating: 5,
    message:
      "Foarte curat, gazde prietenoase, locație liniștită în mijlocul naturii.",
  },
];

const Reviews = () => {
  return (
    <section className="py-12 px-4 sm:px-8 bg-[var(--brown-background)] text-[var(--primary-text)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold my-font text-center mb-8">
          Ce spun clienții
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[var(--primary-background)] p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-2">{review.flag}</span>
                <h3 className="text-lg font-semibold">{review.name}</h3>
              </div>
              <div className="flex items-center mb-2">
                {Array.from({ length: review.rating }, (_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
                {Array.from({ length: 5 - review.rating }, (_, i) => (
                  <span key={i} className="text-gray-300 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm">{review.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
