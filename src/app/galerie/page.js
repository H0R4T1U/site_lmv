"use client";
import SEO from "@/components/seo";
import Navbar from "@/components/navbar";
import Presentation from "@/components/galerie/presentation";
import Carousel from "@/components/galerie/carousel";
import Description from "@/components/galerie/description";
import Footbar from "@/components/footbar";
import Galerie from "@/components/galerie/galerie";

export default function GaleriePage() {
  return (
    <div className="min-h-screen bg-[var(--offwhite)] text-[var(--primary-text)]">
      <SEO
        title="Pășunea Găinilor | delaDeal"
        description="Află cum contribuie pășunea naturală la sănătatea găinilor noastre și la calitatea ouălor pe care le oferim."
      />
      <header>
        <Navbar />
      </header>
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-28 text-[var(--complementary-text)]">
        <Presentation />
        <Carousel />
        <Description />
        <Galerie />
      </main>
      <footer className="mt-auto p-0">
        <Footbar />
      </footer>
    </div>
  );
}
