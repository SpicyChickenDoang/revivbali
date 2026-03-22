import { OurProducts } from "@/components/homepage/our-products";
import { Locale } from "@/i18n-config";
import { whatsappNumber } from "@/lib/constant";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { getDictionary } from "@/server/get-dictionary";
import Image from "next/image";
import Link from "next/link";
import { FaBrain, FaHome, FaStar, FaWhatsapp } from "react-icons/fa";
import { IoFlash } from "react-icons/io5";
import { MdScience } from "react-icons/md";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const translations = {
    en: {
      title: "NAD+ Therapy in Canggu | Reviv Indonesia",
      description:
        "Same-day NAD+ IV therapy delivered to your Canggu villa by STR-licensed Indonesian physicians. Dosages from 100mg to 750mg. Canggu, Berawa, Echo Beach, Pererenan covered.",
      url: "https://revivindonesia.com/en/nad-canggu",
    },
    id: {
      title: "Terapi NAD+ di Canggu | Reviv Indonesia",
      description:
        "Terapi NAD+ IV di hari yang sama, langsung ke villa Anda di Canggu oleh dokter Indonesia berlisensi STR. Dosis dari 100mg hingga 750mg. Melayani Canggu, Berawa, Echo Beach, Pererenan.",
      url: "https://revivindonesia.com/id/nad-canggu",
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

export default async function NadCangguPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  const heroImage = PlaceHolderImages.find(
    (img) => img.id === "nad-canggu-hero",
  );

  const testimonies = [
    {
      image:
        PlaceHolderImages.find((img) => img.id === "nad-canggu-testi1")
          ?.imageUrl || "",
      name: "Alex K",
      comment:
        "I run a software company remotely from Canggu. After the second NAD+ session, my afternoon energy was consistent instead of crashing. The cognitive return on investment is clear and measurable.",
    },
    {
      image:
        PlaceHolderImages.find((img) => img.id === "nad-canggu-testi2")
          ?.imageUrl || "",
      name: "Sandra M",
      comment:
        "I've received NAD+ therapy in Singapore and Los Angeles. RevivIndonesia's medical team is professional, protocols are sound, and the villa service model eliminates clinic visit friction entirely.",
    },
    {
      image:
        PlaceHolderImages.find((img) => img.id === "nad-canggu-testi3")
          ?.imageUrl || "",
      name: "Yuha J",
      comment:
        "Great experience with the NAD+ therapy. The doctors were professional and the treatment was very comfortable. I felt clearer mentally and had more energy within a day. Highly recommended if you're staying in Bali.",
    },
  ];

  const coverageAreas = [
    "Canggu",
    "Batu Bolong",
    "Echo Beach",
    "Berawa",
    "Pererenan",
    "Tibubeneng",
    "Umalas",
  ];

  const message =
    lang != "id"
      ? "Hello Reviv Canggu! I would like to book a NAD+ infusion."
      : "Halo Reviv Canggu! Saya ingin memesan layanan infus NAD+.";

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
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-white">
              {dictionary.nadCanggu.title}
            </h1>
            <p className="text-xl text-white">
              {dictionary.nadCanggu.description}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6">
            <h3 className="text-lg text-gray-500">
              {dictionary.nadCanggu.introOne}
            </h3>
            <h3 className="text-lg text-gray-500">
              {dictionary.nadCanggu.introTwo}
            </h3>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl sm:text-4xl font-semibold text-zinc-800 text-center">
              {dictionary.nadCanggu.whyCanggu}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-4 border rounded-lg flex flex-col gap-2">
                <div className="p-4 rounded-full bg_gradient w-fit">
                  <FaBrain className="text-white size-8" />
                </div>
                <h3 className="font-medium text-lg text-gray-500">
                  {dictionary.nadCanggu.point1}
                </h3>
                <p className="text-black">{dictionary.nadCanggu.desc1}</p>
              </div>
              <div className="bg-white p-4 border rounded-lg flex flex-col gap-2">
                <div className="p-4 rounded-full bg_gradient w-fit">
                  <IoFlash className="text-white size-8" />
                </div>
                <h3 className="font-medium text-lg text-gray-500">
                  {dictionary.nadCanggu.point2}
                </h3>
                <p className="text-black">{dictionary.nadCanggu.desc2}</p>
              </div>
              <div className="bg-white p-4 border rounded-lg flex flex-col gap-2">
                <div className="p-4 rounded-full bg_gradient w-fit">
                  <MdScience className="text-white size-8" />
                </div>
                <h3 className="font-medium text-lg text-gray-500">
                  {dictionary.nadCanggu.point3}
                </h3>
                <p className="text-black">{dictionary.nadCanggu.desc3}</p>
              </div>
              <div className="bg-white p-4 border rounded-lg flex flex-col gap-2">
                <div className="p-4 rounded-full bg_gradient w-fit">
                  <FaHome className="text-white size-8" />
                </div>
                <h3 className="font-medium text-lg text-gray-500">
                  {dictionary.nadCanggu.point4}
                </h3>
                <p className="text-black">{dictionary.nadCanggu.desc4}</p>
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
              {dictionary.nadCanggu.cangguTestimonial}
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
              {dictionary.nadCanggu.cangguCoverage}
            </h3>
            <p className="text-gray-500 text-lg">
              {dictionary.nadCanggu.coverageDesc}
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
            src="/assets/images/nad-canggu.webp"
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
                {dictionary.nadCanggu.scheduleTitle}
              </h1>
              <p className="text-white text-lg text-center">
                {dictionary.nadCanggu.scheduleDesc}
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
                  <p className="text-white">{dictionary.nadCanggu.cta}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
