"use client";

import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

type ListingCoord = { lat: number; lng: number };
type Listing = {
  slug: string;
  name: string;
  excerpt?: string;
  coords?: ListingCoord;
  website?: string;
  phoneTel?: string;
  priceFrom?: string;
};

const DefaultIcon = L.icon({
  iconUrl: "/images/marker-icon.png",
  iconRetinaUrl: "/images/marker-icon-2x.png",
  shadowUrl: "/images/marker-shadow.png",
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function MapClient({
  listings,
  center = { lat: 53.8276, lng: -1.7957 },
  zoom = 14,
}: {
  listings: Listing[];
  center?: ListingCoord;
  zoom?: number;
}) {
  useEffect(() => {
    // ensure leaflet images (marker) path works for some bundlers
    // nothing required here if icons are in /public/images/
  }, []);

  const markers = listings
    .filter((l) => l.coords && typeof l.coords.lat === "number" && typeof l.coords.lng === "number")
    .map((l, i) => (
      <Marker key={l.slug || i} position={[l.coords!.lat, l.coords!.lng]}>
        <Popup>
          <div className="text-sm">
            <strong>{l.name}</strong>
            <div className="mt-1">{l.excerpt}</div>
            <div className="mt-2">
              {l.priceFrom ? <span className="block">From: {l.priceFrom}</span> : null}
              {l.phoneTel ? <a href={l.phoneTel} className="underline block mt-1">Call</a> : null}
              {l.website ? <a href={l.website} target="_blank" rel="noreferrer" className="underline block mt-1">Visit</a> : null}
            </div>
          </div>
        </Popup>
      </Marker>
    ));

  return (
    <div className="w-full h-[420px] rounded-md overflow-hidden">
      <MapContainer center={[center.lat, center.lng]} zoom={zoom} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='© OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers}
      </MapContainer>
    </div>
  );
}
