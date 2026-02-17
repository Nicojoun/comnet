import "../../assets/styles/Meteo.scss";

function Meteo() {
  return (
    <section className="meteo">
      <header className="meteo-top">
        <h1 className="meteo-topTitle">Meteo</h1>
      </header>

      <div className="meteo-board">
        <section className="meteo-col meteo-col--today">
          <h2 className="meteo-colTitle">Aujourd&apos;hui</h2>

          <div className="meteo-slot">
            <h3 className="meteo-slotTitle">Matin</h3>
            <p className="meteo-label">Temperature</p>
            <p className="meteo-temp">9 deg</p>
            <p className="meteo-climate">Climat pluvieux</p>
          </div>

          <div className="meteo-slot">
            <h3 className="meteo-slotTitle">Apres-midi</h3>
            <p className="meteo-label">Temperature</p>
            <p className="meteo-temp">16 deg</p>
            <p className="meteo-climate">Climat ensoleille</p>
          </div>
        </section>

        <section className="meteo-col meteo-col--outfit">
          <h2 className="meteo-colTitle">Tenue conseillee</h2>
          <p className="meteo-outfitTemp">16 deg</p>
          <div className="meteo-outfitIcon" aria-hidden="true">TENUE</div>
          <p className="meteo-outfitText">
            Legere et decontractee
            <br />
            ideale pour un temps ensoleille
          </p>
        </section>

        <section className="meteo-col meteo-col--tomorrow">
          <div className="meteo-colHead">
            <h2 className="meteo-colTitle">Demain</h2>
            <span className="meteo-dateTag">Mer. 5 -&gt;</span>
          </div>

          <div className="meteo-slot">
            <h3 className="meteo-slotTitle">Matin</h3>
            <p className="meteo-label">Temperature</p>
            <p className="meteo-temp">12 deg</p>
            <p className="meteo-climate">Climat nuageux</p>
          </div>

          <div className="meteo-slot">
            <h3 className="meteo-slotTitle">Apres-midi</h3>
            <p className="meteo-label">Temperature</p>
            <p className="meteo-temp">19 deg</p>
            <p className="meteo-climate">Climat ensoleille</p>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Meteo;
