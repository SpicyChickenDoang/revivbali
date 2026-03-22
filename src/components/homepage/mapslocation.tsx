"use client";

import { useState } from "react";
import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import MapsBali from "../ui/maps-bali";
import MapsJakarta from "../ui/maps-jakarta";
import MapsLombok from "../ui/maps-lombok";

const baliBranches = [
  {
    address: "Jl. Legian No.369 X, Legian, Kuta, Badung Regency, Bali 80361",
    name: "Seminyak",
    phoneNumber: "081225259993",
    linkMaps: "https://maps.app.goo.gl/VZEhZDW8sAadNgdh6",
  },
  {
    address:
      "Jl. Puri Gading, Jimbaran, South Kuta, Badung Regency, Bali 80361",
    name: "Jimbaran",
    phoneNumber: "081225259993",
    linkMaps: "https://maps.app.goo.gl/kAiDoSfpm1fRfWTcA",
  },
  {
    address:
      "Jl. Raya Canggu No.12, Canggu, Kec. Kuta Utara, Kabupaten Badung, Badung, Bali 80351",
    name: "Canggu",
    phoneNumber: "082221122311",
    linkMaps: "https://maps.app.goo.gl/JmcKg5kFWsdQPVnu5",
  },
  {
    address:
      "Jl. Batur Sari No.33, Sanur Kauh, Denpasar Selatan, Kota Denpasar, Bali 80228",
    name: "Sanur",
    phoneNumber: "082221122311",
    linkMaps: "https://maps.app.goo.gl/63Ls1VN8p8khiHW37?g_st=ic",
  },
  {
    address:
      "Jl. Umalas 1 No.6, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung, Bali 80361",
    name: "Umalas",
    phoneNumber: "081225259993",
    linkMaps: "https://maps.app.goo.gl/EqiKuhShnbneW4Wh8?g_st=ic",
  },
  {
    address:
      "Jl. Jantuk Angsa Desa No.20, Pererenan, Kec. Mengwi, Kabupaten Badung, Bali 80351",
    name: "Pererenan",
    phoneNumber: "082221122311",
    linkMaps: "https://maps.app.goo.gl/fRJuxZEuW6gAxxV97?g_st=ic",
  },
  {
    address:
      "Jl. Pantai Berawa No.93, Tibubeneng, Kec. Kuta Utara, Kabupaten Badung, Bali 80363",
    name: "Tibubeneng",
    phoneNumber: "081225259993",
    linkMaps: "https://maps.app.goo.gl/eEU5icmLmCPQjm299",
  },
];
const jakartaBranches = [
  {
    address:
      "Jl. Peternakan No.13, RT.5/RW.1, Kp. Tengah, Kec. Kramat jati, Jakarta, Daerah Khusus Ibukota Jakarta 13540",
    name: "Jakarta",
    phoneNumber: "082221122311",
    linkMaps: "https://maps.app.goo.gl/y1Z3prLKn5nQwTLz9",
  },
];
const lombokBranches = [
  {
    address:
      "Jl. Rangkap 2, Kuta, Kec. Pujut, Kabupaten Lombok Tengah, Nusa Tenggara Bar. 83573",
    name: "Lombok",
    phoneNumber: "082221122311",
    linkMaps: "https://maps.app.goo.gl/K3GbDGzxaHTkrGXn9",
  },
];

export const MapsLocation = ({ dictionary }: { dictionary: any }) => {
  const [activeCity, setActiveCity] = useState("bali");
  return (
    <section className={`py-10 px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <p className="text-primary_color uppercase font-medium text-center">
            {dictionary.label}
          </p>
          <h3 className="text-3xl sm:text-4xl font-semibold text-zinc-800 text-center">
            {dictionary.title}
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <button
              onClick={() => setActiveCity("bali")}
              className={`text-lg text-gray-500 text-center pb-2 ${
                activeCity === "bali"
                  ? "border-b text-primary_color font-medium"
                  : "border-b border-transparent"
              }`}
            >
              Bali
            </button>
            <button
              onClick={() => setActiveCity("lombok")}
              className={`text-lg text-gray-500 text-center pb-2 ${
                activeCity === "lombok"
                  ? "border-b text-primary_color font-medium"
                  : "border-b border-transparent"
              }`}
            >
              Lombok
            </button>
            <button
              onClick={() => setActiveCity("jakarta")}
              className={`text-lg text-gray-500 text-center pb-2 ${
                activeCity === "jakarta"
                  ? "border-b text-primary_color font-medium"
                  : "border-b border-transparent"
              }`}
            >
              Jakarta
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-6 h-full md:h-[400px]">
            {activeCity === "bali" ? (
              <MapsBali />
            ) : activeCity === "jakarta" ? (
              <MapsJakarta />
            ) : (
              <MapsLombok />
            )}

            <div className="flex flex-col gap-4 h-[430px] sm:h-full overflow-y-auto pr-2">
              {(activeCity === "bali"
                ? baliBranches
                : activeCity === "jakarta"
                  ? jakartaBranches
                  : lombokBranches
              ).map((branch, index) => (
                <div
                  key={index}
                  className="border flex flex-col gap-2 p-4 rounded-lg"
                >
                  <p className="text-primary_color">{branch.name}</p>
                  <p>{branch.address}</p>

                  <div className="flex items-center gap-2">
                    <FaWhatsapp className="size-5 text-primary_color" />
                    <p>{branch.phoneNumber}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaLocationDot className="size-5 text-primary_color" />
                    <a
                      href={branch.linkMaps}
                      className="hover:text-primary_color"
                      target="_blank"
                    >
                      {dictionary.viewMaps}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
