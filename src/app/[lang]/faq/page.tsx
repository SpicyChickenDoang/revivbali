import { getDictionary } from "@/server/get-dictionary";
import { Locale } from "@/i18n-config";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappNumber } from "@/lib/constant";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { getMessage } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const translations = {
    en: {
      title: "NAD+ Therapy FAQ — Full Questions & Answers | Reviv Indonesia",
      description:
        "Complete answers about NAD+ IV therapy in Bali — how it works, safety, dosage, cost, side effects, and how to book with Reviv Indonesia.",
      url: "https://revivindonesia.com/en/faq",
    },
    id: {
      title: "FAQ Terapi NAD+ — Pertanyaan & Jawaban Lengkap | Reviv Indonesia",
      description:
        "Jawaban lengkap tentang terapi NAD+ IV di Bali — cara kerja, keamanan, dosis, biaya, efek samping, dan cara pemesanan di Reviv Indonesia.",
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
        en: "https://revivindonesia.com/en/faq",
        id: "https://revivindonesia.com/id/faq",
        "x-default": "https://revivindonesia.com/en/faq",
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      type: "website",
      url: t.url,
      images: [
        {
          url: "https://revivindonesia.com/og-faq.jpg",
          width: 1200,
          height: 630,
          alt: "NAD+ Therapy FAQ — Reviv Indonesia",
        },
      ],
    },
  };
}

export default async function FaqPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);
  const d = dictionary.aiFaqPage;

  const heroImage = PlaceHolderImages.find((img) => img.id === "faq-page");

  const message = getMessage("moreAboutNad", lang);

  const faqs = [
    { question: d.q1, answer: d.a1 },
    { question: d.q2, answer: d.a2 },
    { question: d.q3, answer: d.a3 },
    { question: d.q4, answer: d.a4 },
    { question: d.q5, answer: d.a5 },
    { question: d.q6, answer: d.a6 },
    { question: d.q7, answer: d.a7 },
    { question: d.q8, answer: d.a8 },
    { question: d.q9, answer: d.a9 },
    { question: d.q10, answer: d.a10 },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
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
              {d.title}
            </h1>
            <p className="text-xl text-white">{d.description}</p>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="px-4 py-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-6 flex flex-col gap-3"
            >
              <h2 className="text-zinc-800 text-lg font-semibold">
                {faq.question}
              </h2>
              <p className="text-black">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-10 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-800">
            {d.cta_title}
          </h2>
          <p className="text-gray-500 text-lg">{d.cta_description}</p>
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
              <p className="text-white">{d.cta_button}</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
