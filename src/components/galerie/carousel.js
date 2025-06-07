import { useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

const carouselImages = [
  "/carousel/carousel-image1.jpg",
  "/carousel/carousel-image2.jpg",
  "/carousel/carousel-image3.jpg",
  "/carousel/carousel-image4.jpg",
  "/carousel/carousel-image5.jpg",
  "/carousel/carousel-image6.jpg",
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % carouselImages.length);
  const prev = () =>
    setIndex(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length,
    );

  const swipeHandlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="relative flex items-center justify-center">
      {/* Săgeată stânga în afara caruselului */}
      <button
        onClick={prev}
        className="hidden sm:block absolute -left-12 top-1/2 -translate-y-1/2 text-[var(--primary-text)]  bg-[var(--brown-background)]  text-xl px-3 py-2 rounded-full shadow hover:brightness-110 transition"
      >
        ‹
      </button>

      <section
        {...swipeHandlers}
        className="w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl relative"
      >
        <Image
          src={carouselImages[index]}
          alt={`Pășune ${index + 1}`}
          fill
          className="object-cover transition-all duration-500"
        />
      </section>

      {/* Săgeată dreapta în afara caruselului */}
      <button
        onClick={next}
        className="hidden sm:block absolute -right-12 top-1/2 -translate-y-1/2 text-[var(--primary-text)]  bg-[var(--brown-background)] text-xl px-3 py-2 rounded-full shadow hover:brightness-110 transition"
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
