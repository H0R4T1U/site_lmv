// Cele 3 topicuri principale
const Cards = () => {
  return (
    <section className="grid gap-8 md:grid-cols-3">
      {/* Card 1 */}
      <div className="bg-[var(--brown)] rounded-3xl shadow-md p-8 flex flex-col justify-between h-full">
        <h2 className="text-2xl text-[var(--primary-text)] font-semibold my-font mb-4">
          Povestea Noastră
        </h2>
        <p className="flex-grow text-[var(--primary-text)]">
          La Maison Verte a început ca un proiect de familie, inspirat de dorința de a crea un loc 
          unde oamenii să se poată bucura de liniștea muntelui.
           Am ales Padișul pentru frumusețea sa autentică și pentru legătura profundă cu natura.
        </p>
        <p className="mt-4 text-sm text-[var(--primary-text)]">
         Cu răbdare și pasiune, am transformat o casă simplă într-o pensiune primitoare,
          unde fiecare cameră, colț de grădină sau obiect decorativ spune o parte din povestea noastră.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-[var(--brown)] rounded-3xl shadow-md p-8 flex flex-col justify-between h-full">
        <h2 className="text-2xl text-[var(--primary-text)] font-semibold my-font mb-4">
          Valorile Noastre
        </h2>
        <p className="flex-grow text-[var(--primary-text)]">
          Punem accent pe curățenie, respect și ospitalitate sinceră. 
          Credem că oaspeții noștri merită nu doar un loc unde să doarmă, 
          ci o experiență plăcută, atent construită.
        </p>
        <p className="mt-4 text-sm text-[var(--primary-text)]">
          Suntem dedicați unui stil de viață sustenabil, iar valorile noastre
           se reflectă în fiecare alegere: de la sursele 
           locale de hrană la modul în care întreținem spațiile.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-[var(--brown)] rounded-3xl shadow-md p-8 flex flex-col justify-between h-full">
        <h2 className="text-2xl text-[var(--primary-text)] font-semibold my-font mb-4">
          Practicile Noastre
        </h2>
        <p className="flex-grow text-[var(--primary-text)]">
          Camerele sunt atent pregătite înainte de fiecare sosire,
           iar spațiile comune sunt curățate zilnic pentru a menține
            un standard ridicat de igienă și confort.
        </p>
        <p className="mt-4 text-sm text-[var(--primary-text)]">
          Ne ocupăm personal de fiecare detaliu – de la lenjerie curată și prosoape proaspete
           până la ciubărul pregătit la cerere      </p>
      </div>
    </section>
  );
};

export default Cards;
