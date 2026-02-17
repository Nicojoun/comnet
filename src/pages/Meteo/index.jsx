import { useEffect, useState } from "react";
import "../../assets/styles/Meteo.scss";

const DEFAULT_SLOT = {
  temp: "--",
  label: "nuageux",
  style: "cloudy",
};

const getClimateFromCode = (code) => {
  if (code === 0) return { label: "ensoleille", style: "sunny" };
  if ([1, 2, 3, 45, 48].includes(code)) return { label: "nuageux", style: "cloudy" };
  if (
    [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 71, 73, 75, 77, 80, 81, 82, 85, 86, 95, 96, 99].includes(
      code
    )
  ) {
    return { label: "pluvieux", style: "rainy" };
  }

  return { label: "nuageux", style: "cloudy" };
};

const pickSlotForDate = (times, temps, codes, date, targetHour) => {
  const dateIndexes = times
    .map((time, index) => ({ time, index }))
    .filter((entry) => entry.time.startsWith(`${date}T`));

  if (!dateIndexes.length) return DEFAULT_SLOT;

  const best = dateIndexes.reduce((closest, entry) => {
    const hour = Number(entry.time.slice(11, 13));
    const distance = Math.abs(hour - targetHour);
    const closestHour = Number(closest.time.slice(11, 13));
    const closestDistance = Math.abs(closestHour - targetHour);
    return distance < closestDistance ? entry : closest;
  });

  const tempValue = temps[best.index];
  const codeValue = codes[best.index];
  const climate = getClimateFromCode(codeValue);

  return {
    temp: typeof tempValue === "number" ? Math.round(tempValue) : "--",
    label: climate.label,
    style: climate.style,
  };
};

function Meteo() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dateTag, setDateTag] = useState("");
  const [slots, setSlots] = useState({
    todayMorning: DEFAULT_SLOT,
    todayAfternoon: DEFAULT_SLOT,
    tomorrowMorning: DEFAULT_SLOT,
    tomorrowAfternoon: DEFAULT_SLOT,
  });

  useEffect(() => {
    const fetchMeteo = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=48.8566&longitude=2.3522&hourly=temperature_2m,weather_code&timezone=Europe%2FParis&forecast_days=3"
        );

        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }

        const data = await response.json();
        const times = data?.hourly?.time ?? [];
        const temps = data?.hourly?.temperature_2m ?? [];
        const codes = data?.hourly?.weather_code ?? [];
        const availableDates = [...new Set(times.map((time) => time.slice(0, 10)))];

        if (availableDates.length < 2) {
          throw new Error("Donnees meteo insuffisantes.");
        }

        const today = availableDates[0];
        const tomorrow = availableDates[1];

        const todayMorning = pickSlotForDate(times, temps, codes, today, 9);
        const todayAfternoon = pickSlotForDate(times, temps, codes, today, 15);
        const tomorrowMorning = pickSlotForDate(times, temps, codes, tomorrow, 9);
        const tomorrowAfternoon = pickSlotForDate(times, temps, codes, tomorrow, 15);

        setSlots({
          todayMorning,
          todayAfternoon,
          tomorrowMorning,
          tomorrowAfternoon,
        });

        const tomorrowDate = new Date(`${tomorrow}T00:00:00`);
        const weekday = tomorrowDate
          .toLocaleDateString("fr-FR", { weekday: "short" })
          .replace(".", "");
        const day = tomorrowDate.toLocaleDateString("fr-FR", { day: "numeric" });
        setDateTag(`${weekday}. ${day} ->`);
      } catch (err) {
        setError("Impossible de charger la meteo.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMeteo();
  }, []);

  const outfitTemp =
    typeof slots.todayAfternoon.temp === "number" ? slots.todayAfternoon.temp : "--";

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
            <p className="meteo-temp">{`${slots.todayMorning.temp}°`}</p>
            <div className={`meteo-climateRow meteo-climateRow--${slots.todayMorning.style}`}>
              <p className="meteo-climate">
                Climat
                <br />
                {slots.todayMorning.label}
              </p>
              <div className={`meteo-weather meteo-weather--${slots.todayMorning.style}`} />
            </div>
          </div>

          <div className="meteo-slot">
            <h3 className="meteo-slotTitle">Apres-midi</h3>
            <p className="meteo-label">Temperature</p>
            <p className="meteo-temp">{`${slots.todayAfternoon.temp}°`}</p>
            <div className={`meteo-climateRow meteo-climateRow--${slots.todayAfternoon.style}`}>
              <p className="meteo-climate">
                Climat
                <br />
                {slots.todayAfternoon.label}
              </p>
              <div className={`meteo-weather meteo-weather--${slots.todayAfternoon.style}`} />
            </div>
          </div>
        </section>

        <section className="meteo-col meteo-col--outfit">
          <h2 className="meteo-colTitle">Tenue conseillee</h2>
          <p className="meteo-outfitTemp">{`${outfitTemp}°`}</p>
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
            <span className="meteo-dateTag">{dateTag || "Demain ->"}</span>
          </div>

          <div className="meteo-slot">
            <h3 className="meteo-slotTitle">Matin</h3>
            <p className="meteo-label">Temperature</p>
            <p className="meteo-temp">{`${slots.tomorrowMorning.temp}°`}</p>
            <div className={`meteo-climateRow meteo-climateRow--${slots.tomorrowMorning.style}`}>
              <p className="meteo-climate">
                Climat
                <br />
                {slots.tomorrowMorning.label}
              </p>
              <div className={`meteo-weather meteo-weather--${slots.tomorrowMorning.style}`} />
            </div>
          </div>

          <div className="meteo-slot">
            <h3 className="meteo-slotTitle">Apres-midi</h3>
            <p className="meteo-label">Temperature</p>
            <p className="meteo-temp">{`${slots.tomorrowAfternoon.temp}°`}</p>
            <div className={`meteo-climateRow meteo-climateRow--${slots.tomorrowAfternoon.style}`}>
              <p className="meteo-climate">
                Climat
                <br />
                {slots.tomorrowAfternoon.label}
              </p>
              <div className={`meteo-weather meteo-weather--${slots.tomorrowAfternoon.style}`} />
            </div>
          </div>
        </section>
      </div>

      {loading && <p className="meteo-status">Chargement meteo...</p>}
      {error && <p className="meteo-status meteo-status--error">{error}</p>}
    </section>
  );
}

export default Meteo;
