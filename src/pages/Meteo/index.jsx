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
            <p className="meteo-temp">9°</p>
            <div className="meteo-climateRow meteo-climateRow--rainy">
              <p className="meteo-climate">Climat pluvieux</p>
              <div className="meteo-weather meteo-weather--rainy" />
            </div>
          </div>

          <div className="meteo-slot">
            <h3 className="meteo-slotTitle">Apres-midi</h3>
            <p className="meteo-label">Temperature</p>
            <p className="meteo-temp">16°</p>
            <div className="meteo-climateRow">
              <p className="meteo-climate">Climat ensoleille</p>
              <div className="meteo-weather meteo-weather--sunny" />
            </div>
          </div>
        </section>

        <section className="meteo-col meteo-col--outfit">
          <h2 className="meteo-colTitle">Tenue conseillee</h2>
          <p className="meteo-outfitTemp">16°</p>
          <div className="meteo-outfitIcon" aria-hidden="true" />
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
            <p className="meteo-temp">12°</p>
            <div className="meteo-climateRow">
              <p className="meteo-climate">Climat nuageux</p>
              <div className="meteo-weather meteo-weather--cloudy" />
            </div>
          </div>

          <div className="meteo-slot">
            <h3 className="meteo-slotTitle">Apres-midi</h3>
            <p className="meteo-label">Temperature</p>
            <p className="meteo-temp">19°</p>
            <div className="meteo-climateRow">
              <p className="meteo-climate">Climat ensoleille</p>
              <div className="meteo-weather meteo-weather--sunny" />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Meteo;
