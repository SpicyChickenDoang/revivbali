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
    name: "24/7 Klinik Cepat Sehat - Homecare & Apotek Delivery (Jakarta)",
    lat: -6.290228065915915,
    lng: 106.86980856169177,
    image: "/assets/img/branch_jakarta.png",
    viewMap: "https://maps.app.goo.gl/TFJPZ6cAEDqnH2cE6",
    rating: "4.9",
  },
];

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = { lat: -6.260971, lng: 106.822618 };

export default function MapsJakarta() {
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
                      src="/assets/img/revamp/direction_icon.png"
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
