import { OurProducts } from "@/components/homepage/our-products";
import { Locale } from "@/i18n-config";
import { whatsappNumber } from "@/lib/constant";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { getDictionary } from "@/server/get-dictionary";
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaStar, FaWhatsapp } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { TbBrightnessUpFilled, TbRibbonHealth } from "react-icons/tb";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const translations = {
    en: {
      title: "NAD+ Therapy in Seminyak | Reviv Indonesia",
      description:
        "Same-day NAD+ IV therapy delivered to your Seminyak villa or hotel by STR-licensed Indonesian physicians. Dosages from 100mg to 750mg. Seminyak, Petitenget, Kerobokan, Oberoi covered.",
      url: "https://revivindonesia.com/en/nad-seminyak",
    },
    id: {
      title: "Terapi NAD+ di Seminyak | Reviv Indonesia",
      description:
        "Terapi NAD+ IV di hari yang sama, langsung ke villa atau hotel Anda di Seminyak oleh dokter Indonesia berlisensi STR. Dosis dari 100mg hingga 750mg. Melayani Seminyak, Petitenget, Kerobokan, Oberoi.",
      url: "https://revivindonesia.com/id/nad-seminyak",
    },
  };
  const t = translations[lang as keyof typeof translations] ?? translations.en;

  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: t.url,
      languages: {
        en: "https://revivindonesia.com/en/nad-canggu",
        id: "https://revivindonesia.com/id/nad-canggu",
        "x-default": "https://revivindonesia.com/en/nad-canggu",
      },
    },
  };
}

export default async function NadSeminyakPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  const heroImage = PlaceHolderImages.find(
    (img) => img.id === "nad-seminyak-hero",
  );

  const testimonies = [
    {
      image:
        PlaceHolderImages.find((img) => img.id === "nad-seminyak-testi1")
          ?.imageUrl || "",
      name: "Michael T",
      comment:
        "I'm 45 and I like to enjoy myself in Seminyak. Started doing NAD+ monthly after reading about it in a longevity blog. My skin looks better, my energy is more stable, and honestly I think it's helping me recover from nights out faster too.",
    },
    {
      image:
        PlaceHolderImages.find((img) => img.id === "nad-seminyak-testi2")
          ?.imageUrl || "",
      name: "Gotti L",
      comment:
        "After a few busy nights in Seminyak, the NAD+ infusion helped me recover much faster than I expected. The doctors were very professional and the whole treatment was comfortable. I noticed better energy and sleep the following day.",
    },
    {
      image:
        PlaceHolderImages.find((img) => img.id === "nad-seminyak-testi3")
          ?.imageUrl || "",
      name: "Daniel K",
      comment:
        "I was sceptical at first — I thought it was just a fancy hangover drip. It's not. The difference after a 250mg session is in how I feel for the rest of the week. More consistent, less inflamed. I've made it a monthly routine.",
    },
  ];

  const coverageAreas = [
    "Seminyak",
    "Petitenget",
    "Kerobokan",
    "Oberoi",
    "Batu Belig",
    "Double Six",
    "Legian",
  ];

  const message =
    lang != "id"
      ? "Hello Reviv Seminyak! I would like to book a NAD+ infusion."
      : "Halo Reviv Seminyak! Saya ingin memesan layanan infus NAD+.";

  return (
    <>
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden mt-[4.5rem]">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center max-w-4xl px-4">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl font-semibold text-white">
              {dictionary.nadSeminyak.title}
            </h1>
            <p className="text-xl text-white">
              {dictionary.nadSeminyak.description}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6">
            <h3 className="text-lg text-gray-500">
              {dictionary.nadSeminyak.introOne}
            </h3>
            <h3 className="text-lg text-gray-500">
              {dictionary.nadSeminyak.introTwo}
            </h3>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl sm:text-4xl font-semibold text-zinc-800 text-center">
              {dictionary.nadSeminyak.whySeminyak}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-4 border rounded-lg flex flex-col gap-2">
                <div className="p-4 rounded-full bg_gradient w-fit">
                  <IoMdRefresh className="text-white size-8" />
                </div>
                <h3 className="font-medium text-lg text-gray-500">
                  {dictionary.nadSeminyak.point1}
                </h3>
                <p className="text-black">{dictionary.nadSeminyak.desc1}</p>
              </div>
              <div className="bg-white p-4 border rounded-lg flex flex-col gap-2">
                <div className="p-4 rounded-full bg_gradient w-fit">
                  <TbRibbonHealth className="text-white size-8" />
                </div>
                <h3 className="font-medium text-lg text-gray-500">
                  {dictionary.nadSeminyak.point2}
                </h3>
                <p className="text-black">{dictionary.nadSeminyak.desc2}</p>
              </div>
              <div className="bg-white p-4 border rounded-lg flex flex-col gap-2">
                <div className="p-4 rounded-full bg_gradient w-fit">
                  <TbBrightnessUpFilled className="text-white size-8" />
                </div>
                <h3 className="font-medium text-lg text-gray-500">
                  {dictionary.nadSeminyak.point3}
                </h3>
                <p className="text-black">{dictionary.nadSeminyak.desc3}</p>
              </div>
              <div className="bg-white p-4 border rounded-lg flex flex-col gap-2">
                <div className="p-4 rounded-full bg_gradient w-fit">
                  <FaHome className="text-white size-8" />
                </div>
                <h3 className="font-medium text-lg text-gray-500">
                  {dictionary.nadSeminyak.point4}
                </h3>
                <p className="text-black">{dictionary.nadSeminyak.desc4}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurProducts dictionary={dictionary.designedForFeelings} lang={lang} />

      <section className="px-4 py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl sm:text-4xl font-semibold text-zinc-800 text-center">
              {dictionary.nadSeminyak.seminyakTestimonial}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonies.map((test, idx) => (
                <div
                  key={idx}
                  className="bg-white flex flex-col gap-4 p-4 rounded-lg"
                >
                  <p className="text-black">{test.comment}</p>
                  <div className="flex items-center gap-4">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      src={test.image}
                      alt="patient profile"
                      className="rounded-full size-16 object-cover"
                    />
                    <div className="flex flex-col gap-2">
                      <p className="text-lg text-gray-500">{test.name}</p>
                      <div className="flex gap-1">
                        <FaStar className="size-5 text-yellow-400" />
                        <FaStar className="size-5 text-yellow-400" />
                        <FaStar className="size-5 text-yellow-400" />
                        <FaStar className="size-5 text-yellow-400" />
                        <FaStar className="size-5 text-yellow-400" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl sm:text-4xl font-semibold text-zinc-800">
              {dictionary.nadSeminyak.seminyakCoverage}
            </h3>
            <p className="text-gray-500 text-lg">
              {dictionary.nadSeminyak.coverageDesc}
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              {coverageAreas.map((idx) => (
                <div key={idx} className="border px-4 py-2 rounded-lg">
                  <p className="text-black">{idx}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative overflow-hidden">
          <Image
            src="/assets/images/nad-seminyak.webp"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-[450px] object-cover"
            alt="feel younger"
          />
          <div className="absolute top-0 inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col gap-6 max-w-4xl px-4">
              <h1 className="text-4xl md:text-6xl font-semibold text-white text-center">
                {dictionary.nadSeminyak.scheduleTitle}
              </h1>
              <p className="text-white text-lg text-center">
                {dictionary.nadSeminyak.scheduleDesc}
              </p>
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <Link
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    message,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 cta_btn hover:scale-105 transition-all flex items-center gap-2 w-fit"
                >
                  <FaWhatsapp className="size-5 text-white" />
                  <p className="text-white">{dictionary.nadSeminyak.cta}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
