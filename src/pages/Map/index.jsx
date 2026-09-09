import { useEffect, useMemo, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import '../../assets/styles/Map.scss';

function Map() {
  const [origin, setOrigin] = useState('Paris, France');
  const destination = 'Paris, France';
  const [geoError, setGeoError] = useState('');

  useEffect(() => {
    if (!navigator.geolocation) {
      setGeoError('La géolocalisation n’est pas disponible.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setOrigin(`${latitude},${longitude}`);
      },
      () => {
        setGeoError('La géolocalisation est refusée ou indisponible.');
      },
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 300000 }
    );
  }, []);

  const mapSrc = useMemo(() => {
    const originParam = encodeURIComponent(origin);
    const destinationParam = encodeURIComponent(destination);
    return `https://www.google.com/maps?output=embed&dirflg=d&saddr=${originParam}&daddr=${destinationParam}`;
  }, [origin, destination]);

  const directionsUrl = useMemo(() => {
    const originParam = encodeURIComponent(origin);
    const destinationParam = encodeURIComponent(destination);
    return `https://www.google.com/maps/dir/?api=1&origin=${originParam}&destination=${destinationParam}&travelmode=driving`;
  }, [origin, destination]);

  return (
    <div className="map">
      <div className="map-heading">
        <h1 className="map-title">Itineraire</h1>
        <div className="map-qr">
          <QRCodeSVG
            value={directionsUrl}
            size={88}
            level="M"
            includeMargin
            aria-label="QR code de l'itineraire Google Maps"
          />
          <span>Scanner pour ouvrir l&apos;itineraire</span>
        </div>
      </div>
      {geoError && <p className="map-error">{geoError}</p>}
      <div className="map-frame">
        <iframe
          title="Itineraire Google Maps"
          src={mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default Map;
