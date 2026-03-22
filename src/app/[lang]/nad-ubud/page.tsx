import { OurProducts } from "@/components/homepage/our-products";
import { Locale } from "@/i18n-config";
import { whatsappNumber } from "@/lib/constant";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { getDictionary } from "@/server/get-dictionary";
import Image from "next/image";
import Link from "next/link";
import { FaBrain, FaStar, FaWhatsapp } from "react-icons/fa";
import { GrYoga } from "react-icons/gr";
import { MdVilla } from "react-icons/md";
import { TbRibbonHealth } from "react-icons/tb";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const translations = {
    en: {
      title: "NAD+ Therapy in Ubud | Reviv Indonesia",
      description:
        "NAD+ IV therapy delivered to your Ubud villa or retreat centre by STR-licensed Indonesian physicians. Dosages from 100mg to 750mg. Ubud, Tegallalang, Payangan, Kedewatan covered. Book 2–3 hours in advance.",
      url: "https://revivindonesia.com/en/nad-ubud",
    },
    id: {
      title: "Terapi NAD+ di Ubud | Reviv Indonesia",
      description:
        "Terapi NAD+ IV langsung ke villa atau pusat retreat Anda di Ubud oleh dokter Indonesia berlisensi STR. Dosis dari 100mg hingga 750mg. Melayani Ubud, Tegallalang, Payangan, Kedewatan. Pesan 2–3 jam sebelumnya.",
      url: "https://revivindonesia.com/id/nad-ubud",
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

export default async function NadUbudPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  const heroImage = PlaceHolderImages.find((img) => img.id === "nad-ubud-hero");

  const testimonies = [
    {
      image:
        PlaceHolderImages.find((img) => img.id === "nad-ubud-testi1")
          ?.imageUrl || "",
      name: "Jennifer L",
      comment:
        "I'm in Ubud for a month-long meditation retreat. Did a 250mg NAD+ session midway through and noticed my sits were clearer, less foggy. It felt like it cleared some of the mental static so I could go deeper.",
    },
    {
      image:
        PlaceHolderImages.find((img) => img.id === "nad-ubud-testi2")
          ?.imageUrl || "",
      name: "David R",
      comment:
        "I booked the NAD+ infusion while staying in Ubud for a wellness retreat. The doctors were very knowledgeable and the treatment was comfortable. I noticed better focus and stable energy over the next few days. It felt like a deeper level of recovery.",
    },
    {
      image:
        PlaceHolderImages.find((img) => img.id === "nad-ubud-testi3")
          ?.imageUrl || "",
      name: "Yuna K",
      comment:
        "During my healing trip in Ubud I decided to try NAD+ therapy. The team arrived at my villa and explained everything clearly. After the session I felt calmer, more focused, and my sleep improved that night. I would definitely recommend it to anyone visiting Ubud.",
    },
  ];

  const coverageAreas = [
    "Ubud",
    "Tegallalang",
    "Payangan",
    "Gianyar",
    "Kedewatan",
    "Campuhan",
    "Mas",
  ];

  const message =
    lang != "id"
      ? "Hello Reviv Ubud! I would like to book a NAD+ infusion."
      : "Halo Reviv Ubud! Saya ingin memesan layanan infus NAD+.";

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
              {dictionary.nadUbud.title}
            </h1>
            <p className="text-xl text-white">
              {dictionary.nadUbud.description}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6">
            <h3 className="text-lg text-gray-500">
              {dictionary.nadUbud.introOne}
            </h3>
            <h3 className="text-lg text-gray-500">
              {dictionary.nadUbud.introTwo}
            </h3>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl sm:text-4xl font-semibold text-zinc-800 text-center">
              {dictionary.nadUbud.whyUbud}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-4 border rounded-3xllg flex flex-col gap-2">
                <div className="p-4 rounded-full bg_gradient w-fit">
                  <GrYoga className="text-white size-8" />
                </div>
                <h3 className="font-medium text-lg text-gray-500">
                  {dictionary.nadUbud.point1}
                </h3>
                <p className="text-black">{dictionary.nadUbud.desc1}</p>
              </div>
              <div className="bg-white p-4 border rounded-lg flex flex-col gap-2">
                <div className="p-4 rounded-full bg_gradient w-fit">
                  <FaBrain className="text-white size-8" />
                </div>
                <h3 className="font-medium text-lg text-gray-500">
                  {dictionary.nadUbud.point2}
                </h3>
                <p className="text-black">{dictionary.nadUbud.desc2}</p>
              </div>
              <div className="bg-white p-4 border rounded-lg flex flex-col gap-2">
                <div className="p-4 rounded-full bg_gradient w-fit">
                  <TbRibbonHealth className="text-white size-8" />
                </div>
                <h3 className="font-medium text-lg text-gray-500">
                  {dictionary.nadUbud.point3}
                </h3>
                <p className="text-black">{dictionary.nadUbud.desc3}</p>
              </div>
              <div className="bg-white p-4 border rounded-lg flex flex-col gap-2">
                <div className="p-4 rounded-full bg_gradient w-fit">
                  <MdVilla className="text-white size-8" />
                </div>
                <h3 className="font-medium text-lg text-gray-500">
                  {dictionary.nadUbud.point4}
                </h3>
                <p className="text-black">{dictionary.nadUbud.desc4}</p>
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
              {dictionary.nadUbud.ubudTestimonial}
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
              {dictionary.nadUbud.ubudCoverage}
            </h3>
            <p className="text-gray-500 text-lg">
              {dictionary.nadUbud.coverageDesc}
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
            src="/assets/images/nad-ubud.webp"
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
                {dictionary.nadUbud.scheduleTitle}
              </h1>
              <p className="text-white text-lg text-center">
                {dictionary.nadUbud.scheduleDesc}
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
                  <p className="text-white">{dictionary.nadUbud.cta}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
