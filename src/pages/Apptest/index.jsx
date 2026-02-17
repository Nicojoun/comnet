import { useEffect, useState } from "react";

function Apptest() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [temperatureError, setTemperatureError] = useState(null);
  const [weatherType, setWeatherType] = useState(null);

  const getWeatherLabel = (code) => {
    if (code === 0) return "ensoleille";
    if ([1, 2, 3].includes(code)) return "nuageux";
    if ([45, 48].includes(code)) return "brouillard";
    if ([51, 53, 55, 56, 57].includes(code)) return "bruine";
    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "pluie";
    if ([71, 73, 75, 77, 85, 86].includes(code)) return "neige";
    if ([95, 96, 99].includes(code)) return "orage";
    return "indetermine";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userResponse, weatherResponse] = await Promise.all([
          fetch("http://localhost:5000/user"),
          fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=48.8566&longitude=2.3522&current=temperature_2m,weather_code"
          ),
        ]);

        if (!userResponse.ok) {
          throw new Error(`Erreur HTTP : ${userResponse.status}`);
        }

        const userData = await userResponse.json();
        setRows(userData);

        if (!weatherResponse.ok) {
          setTemperatureError("Impossible de charger la temperature.");
          return;
        }

        const weatherData = await weatherResponse.json();
        const currentTemperature = weatherData?.current?.temperature_2m;
        const currentWeatherCode = weatherData?.current?.weather_code;

        if (typeof currentTemperature === "number") {
          setTemperature(currentTemperature);
        } else {
          setTemperatureError("Temperature indisponible.");
        }

        if (typeof currentWeatherCode === "number") {
          setWeatherType(getWeatherLabel(currentWeatherCode));
        }
      } catch (err) {
        setError("Impossible de charger les donnees.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Apptest</h1>

      {temperature !== null && <p>Temperature actuelle : {temperature} deg C</p>}
      {weatherType && <p>Meteo actuelle : {weatherType}</p>}
      {temperatureError && <p style={{ color: "orange" }}>{temperatureError}</p>}

      {loading && <p>Chargement...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && rows.length === 0 && <p>Aucune donnee trouvee.</p>}

      {!loading &&
        !error &&
        rows.map((row) => <pre key={row.id}>{JSON.stringify(row, null, 2)}</pre>)}
    </div>
  );
}

export default Apptest;
