import React from "react";

interface StaticMapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  size?: string; // e.g., '600x300'
  apiKey: string;
}

const StaticMap: React.FC<StaticMapProps> = ({
  latitude,
  longitude,
  zoom = 15,
  size = "600x300",
  apiKey,
}) => {
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=${zoom}&size=${size}&markers=color:red%7C${latitude},${longitude}&key=${apiKey}`;

  return (
    <img
      src={mapUrl}
      alt="Lokasi Glomiks"
      style={{ maxWidth: "100%", height: "auto" }}
    />
  );
};

export default StaticMap;
