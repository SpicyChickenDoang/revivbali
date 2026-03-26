import { Locale } from "@/i18n-config";
import { whatsappNumber } from "@/lib/constant";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { getMessage } from "@/lib/utils";
import { getDictionary } from "@/server/get-dictionary";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const translations = {
    en: {
      title: "Safety & Screening | Reviv Indonesia",
      description:
        "Learn about NAD+ IV therapy in Bali — how it works, safety screening, dosage, pricing, potential side effects, and how to book with Reviv Indonesia.",
      url: "https://revivindonesia.com/en/faq",
    },
    id: {
      title: "Keamanan & Skrining | Reviv Indonesia",
      description:
        "Pelajari terapi NAD+ IV di Bali — cara kerja, proses skrining keamanan, dosis, harga, potensi efek samping, serta cara melakukan pemesanan di Reviv Indonesia.",
      url: "https://revivindonesia.com/id/faq",
    },
  };

  const t = translations[lang as keyof typeof translations] ?? translations.en;

  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: t.url,
      languages: {
        en: "https://revivindonesia.com/en/safety",
        id: "https://revivindonesia.com/id/safety",
        "x-default": "https://revivindonesia.com/en/safety",
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      type: "website",
      url: t.url,
      images: [
        {
          url: "https://revivindonesia.com/og-safety.jpg",
          width: 1200,
          height: 630,
          alt: "Safety & Screening — Reviv Indonesia",
        },
      ],
    },
  };
}

export default async function SafetyPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);
  const d = dictionary.aiSafetyPage;

  const heroImage = PlaceHolderImages.find((img) => img.id === "safety-page");

  const message = getMessage("moreAboutNad", lang);

  return (
    <>
      <section className="relative h-[40vh] w-full flex items-center justify-center overflow-hidden mt-[4.5rem]">
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
            <h1 className="text-3xl md:text-6xl font-semibold text-white">
              {d.hero.title}
            </h1>
            <p className="text-xl text-white">{d.hero.description}</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {d.markers.items.map((mark, idx) => (
              <div key={idx} className="flex flex-col gap-2 items-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-primary_color">
                  {mark.title}
                </h3>
                <p className="text-black">{mark.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          <h3 className="text-3xl sm:text-4xl font-semibold text-zinc-800 text-center">
            {d.screening.title}
          </h3>
          <div className="grid grid-cols-4 gap-6">
            {d.screening.steps.map((d, idx) => (
              <div key={idx} className="border rounded-lg p-4">
                <div className="flex flex-col gap-2">
                  <p className="text-lg font-medium text-gray-500">{d.title}</p>
                  <p className="text-black">{d.desc}</p>
                  <p className="text-sm italic">{d.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          <h3 className="text-3xl sm:text-4xl font-semibold text-zinc-800 text-center">
            {d.eligibility.title}
          </h3>
          <p className="text-gray-500 text-lg text-center">
            {d.eligibility.description}
          </p>
          <div className="grid grid-cols-2 gap-6">
            {d.eligibility.items.map((d, idx) => (
              <div key={idx} className="bg-white border rounded-lg p-4">
                <div className="flex flex-col gap-2">
                  <p className="text-primary_color text-lg font-semibold">
                    {d.title}
                  </p>
                  <p className="text-black">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          <h3 className="text-3xl sm:text-4xl font-semibold text-zinc-800 text-center">
            {d.protocols.title}
          </h3>
          <p className="text-gray-500 text-lg text-center">
            {d.protocols.description}
          </p>
          <div className="grid grid-cols-3 gap-2">
            {d.protocols.items.map((d, idx) => (
              <div key={idx} className="bg-white border p-4 rounded-lg">
                <div className="flex flex-col gap-2">
                  <p className="text-2xl">{d.mark}</p>
                  <p className="text-gray-500 text-lg font-medium">{d.title}</p>
                  <p className="text-black">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-10 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-800">
            {d.cta.title}
          </h2>
          <p className="text-gray-500 text-lg">{d.cta.description}</p>
          <div className="flex justify-center">
            <Link
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                message,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 cta_btn flex items-center gap-2"
            >
              <FaWhatsapp className="size-5 text-white" />
              <p className="text-white">{d.cta.button}</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
