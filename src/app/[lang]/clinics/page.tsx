import { Locale } from "@/i18n-config";
import { clinicLocations } from "@/lib/constant";
import { getDictionary } from "@/server/get-dictionary";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default async function ClinicsPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  return (
    <section className="bg-gray-50 py-10 px-4 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl font-semibold text-zinc-800 text-center">
            {dictionary.clinic.title}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {clinicLocations.map((clinic, index) => (
              <div
                key={index}
                className="bg-white flex flex-col gap-2 p-3 rounded-3xl"
              >
                <div className="relative">
                  <Image
                    src={clinic.image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-60 object-cover rounded-3xl"
                    alt={clinic.branch}
                  />
                  <p className="absolute top-2 right-2 px-2 py-1 text-sm rounded-lg bg-white text-primary-green">
                    {clinic.branch}
                  </p>
                </div>
                <p className="font-medium text-gray-500">{clinic.name}</p>
                <p className="text-sm text-black">{clinic.address}</p>
                <a
                  href={clinic.prewritten}
                  target="_blank"
                  className="mt-auto px-6 py-2 rounded-3xl bg_gradient hover:bg-cyan-500 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="size-5 text-white" />
                  <p className="text-white">{dictionary.clinic.whatsappUs}</p>
                </a>
                <a
                  href={clinic.urlMaps}
                  target="_blank"
                  className="rounded-3xl px-6 py-2 border"
                >
                  <p className="text-black text-center">
                    {dictionary.clinic.navigateUs}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
