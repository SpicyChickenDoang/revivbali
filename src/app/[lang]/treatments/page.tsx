// page.tsx (Server Component)
// import { treatments } from "@/lib/treatments";
import { getDictionary } from "@/server/get-dictionary";
import { Locale } from "@/i18n-config";
// import TreatmentsClient from "@/components/treatments-client";
// import { slugToGradient, buttonToBorder, softBorder } from "@/lib/constant";
import { OurProducts } from "@/components/homepage/our-products";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const translations = {
    en: {
      title: "NAD+ Treatments | Reviv Indonesia",
      description:
        "Choose your NAD+ protocol — Reboot 100mg from Rp 2.39M, Revive 250mg, Regenerate 500mg, or Elite 750mg. All treatments delivered to your Bali villa by STR-licensed physicians. Same-day available.",
      url: "https://revivindonesia.com/en/treatments",
    },
    id: {
      title: "Pilihan Terapi NAD+ | Reviv Indonesia",
      description:
        "Pilih protokol NAD+ Anda — Reboot 100mg mulai Rp 2,39 juta, Revive 250mg, Regenerate 500mg, atau Elite 750mg. Semua perawatan diantar ke villa Bali Anda oleh dokter berlisensi STR. Tersedia hari ini.",
      url: "https://revivindonesia.com/id/treatments",
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

export default async function TreatmentsPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  // const treatmentsByCategory = treatments.reduce(
  //   (acc, treatment) => {
  //     if (!acc[treatment.category]) {
  //       acc[treatment.category] = [];
  //     }
  //     acc[treatment.category].push(treatment);
  //     return acc;
  //   },
  //   {} as Record<string, typeof treatments>,
  // );

  return (
    // <TreatmentsClient
    //   dictionary={dictionary}
    //   treatmentsByCategory={treatmentsByCategory}
    //   lang={lang}
    //   softBorder={softBorder}
    //   buttonToBorder={buttonToBorder}
    //   slugToGradient={slugToGradient}
    // />
    <div className="mt-[4.5rem]">
      <OurProducts dictionary={dictionary.designedForFeelings} lang={lang} />
    </div>
  );
}
