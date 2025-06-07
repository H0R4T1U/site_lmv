// Gallery
const Gallery = () => {
  const images = [
    {
      src: "/acasa/gallery-image1.jpg",
      alt: "Terasa",
      description: "Terasă spațioasă",
    },
    {
      src: "/acasa/gallery-image2.jpg",
      alt: "Echipament BBQ",
      description: "Gradina",
    },
    {
      src: "/acasa/gallery-image3.jpg",
      alt: "Bucatarie",
      description: "Bucătărie utilată complet",
    },
    {
      src: "/acasa/gallery-image4.jpg",
      alt: "cameră",
      description: "Camere imaculate",
    },
    {
      src: "/acasa/gallery-image5.jpg",
      alt: "Băi curate și igienizate",
      description: "Băi curate și igienizate",
    },
    {
      src: "/acasa/gallery-image6.jpg",
      alt: "Camere spațioase",
      description: "Camere spațioase",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-8 bg-[var(--beige-background)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div key={index} className="relative group">
              <div
                className="w-full h-48 sm:h-64 md:h-80 bg-cover  bg-center rounded-lg transition-transform duration-300 transform group-hover:scale-105"
                style={{ backgroundImage: `url('${img.src}')` }}
                aria-label={img.alt}
              ></div>
              <div className="absolute bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)] text-white text-center p-2 rounded-b-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm">{img.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
