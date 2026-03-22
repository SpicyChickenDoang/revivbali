"use client";

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

type Branch = {
  name: string;
  lat: number;
  lng: number;
  image: string;
  viewMap: string;
  rating: string;
};

const branches: Branch[] = [
  {
    name: "24/7 Bali Belly Home Doctor & Infusion Therapy. (Seminyak)",
    lat: -8.7085285,
    lng: 115.1720993,
    image: "/assets/img/branch_seminyak.png",
    viewMap: "https://maps.app.goo.gl/pd6oaCqVY7T6Px5t6",
    rating: "4.9",
  },
  {
    name: "IV Drip Clinic - Mobile Home Service Bali (24/7) - Bali Belly - Immunity - Hangover. (Jimbaran)",
    lat: -8.8030159,
    lng: 115.1517049,
    image: "/assets/img/branch_jimbaran.png",
    viewMap: "https://maps.app.goo.gl/5yUDkQhDydMX8mVg6",
    rating: "5.0",
  },
];

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = { lat: -8.6905, lng: 115.2122 };

export default function MapsBali() {
  const [selected, setSelected] = useState<Branch | null>(null);

  return (
    <div className="w-full mx-auto">
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string}
      >
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
          {branches.map((branch, i) => (
            <Marker
              key={i}
              position={{ lat: branch.lat, lng: branch.lng }}
              title={branch.name}
              onClick={() => setSelected(branch)}
            />
          ))}

          {selected && (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => setSelected(null)}
            >
              <div style={{ maxWidth: "200px" }}>
                <Image
                  src={selected.image}
                  alt={selected.name}
                  width={200}
                  height={90}
                  className="w-full h-[90px] object-cover"
                />

                <div className="flex items-center gap-2 justify-between my-2">
                  <p className="text-left text-xs font-medium">
                    {selected.name}
                  </p>

                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${selected.lat},${selected.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 bg-[#D3F7FF] rounded-full"
                  >
                    <Image
                      src="/assets/img/direction_icon.png"
                      width={20}
                      height={20}
                      alt="direction icon"
                      className="w-5 h-5"
                    />
                  </a>
                </div>

                <p className="text-xs font-medium text-gray-500 flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <span>{selected.rating} Rating</span>
                </p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
