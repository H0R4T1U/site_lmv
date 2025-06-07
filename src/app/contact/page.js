"use client";
import SEO from "@/components/seo";
import Navbar from "@/components/navbar";
import Data from "@/components/contact/data";
import Footbar from "@/components/footbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--offwhite)] text-[var(--complementary-text)] my-font">
      <SEO
        title="Contact | La Maison Verte"
        description="Ia legătura cu noi pentru rezervări sau întrebări legate de cazare, facilități și activități în Munții Apuseni."
      />
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <Navbar />
      </header>
      <main className="flex-grow max-w-3xl mx-auto px-6 py-16 space-y-12">
        <Data />
      </main>
      <footer className="mt-auto p-0">
        <Footbar />
      </footer>
    </div>
  );
}
