import { getDictionary } from "@/server/get-dictionary";
import { Locale } from "@/i18n-config";
// import { TrustedCare } from "@/components/trusted-care";
// import { WellnessWherever } from "@/components/wellness-wherever";
// import { Testimonials } from "@/components/testimonials";
// import { Hero } from "@/components/hero";
import { Hero } from "@/components/homepage/hero";
// import { WhyWeExist } from "@/components/why-we-exist";
// import { DesignedForFeelings } from "@/components/designed-for-feelings";
// import {
//   slugToGradient,
//   buttonToBorder,
//   slugToColor,
//   softBorder,
// } from "@/lib/constant";
// import { FinalCta } from "@/components/final-cta";
import { WhatsappButton } from "@/components/whatsapp-button";
// import { About } from "@/components/homepage/about";
// import { Benefit } from "@/components/homepage/benefit";
// import { TrustSignal } from "@/components/homepage/trust-signal";
// import { WhyChooseUs } from "@/components/homepage/why-choose-us";
import { Testimoni } from "@/components/homepage/testimoni";
// import { Banner } from "@/components/homepage/banner";
import { Faq } from "@/components/homepage/faq";
import { MapsLocation } from "@/components/homepage/mapslocation";
// import { Blog } from "@/components/homepage/blog";
import { OurProducts } from "@/components/homepage/our-products";
import { AboutNad } from "@/components/homepage/about-nad";
import { MarkerPage } from "@/components/homepage/marker";
import { WhyReviv } from "@/components/homepage/why-reviv";
import { BannerCta } from "@/components/homepage/banner-cta";
import { MedicalAuthority } from "@/components/homepage/medical-authority";
import { NadArea } from "@/components/homepage/nad-area";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const translations = {
    en: {
      title: "Reviv Indonesia",
      description:
        "Feel younger at the cellular level — Reviv Indonesia brings licensed NAD+ IV therapy to your Bali villa, same day, from Rp 2.39M.",
      url: "https://revivindonesia.com/en",
    },
    id: {
      title: "Reviv Indonesia",
      description:
        "Rasakan perubahan di tingkat seluler — Reviv Indonesia menghadirkan terapi NAD+ IV berlisensi langsung ke villa Bali Anda, hari ini, mulai Rp 2,39 juta.",
      url: "https://revivindonesia.com/id",
    },
  };
  const t = translations[lang as keyof typeof translations] ?? translations.en;

  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: t.url,
      languages: {
        en: "https://revivindonesia.com/en/",
        id: "https://revivindonesia.com/id/",
        "x-default": "https://revivindonesia.com/en/",
      },
    },
  };
}

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const { lang } = params;

  const dictionary = await getDictionary(lang);

  return (
    <div className="flex flex-col">
      {/* <Hero dictionary={dictionary.hero} /> */}
      <Hero lang={lang} dictionary={dictionary.aiHero} />

      <div className="bg-gray-50">
        <MarkerPage dictionary={dictionary.aiMark} />
      </div>

      {/* <div className="bg-gray-50">
        <About dictionary={dictionary.about} />
      </div> */}

      {/* <div className="bg-zinc-100">
        <AboutNad dictionary={dictionary.aboutNad} lang={lang} />
      </div> */}

      {/* <div className="bg-background">
        <WhyWeExist dictionary={dictionary.whyWeExist} />
      </div> */}

      {/* <div className="bg-zinc-100">
        <DesignedForFeelings
          dictionary={dictionary.designedForFeelings}
          lang={lang}
          slugToGradient={slugToGradient}
          buttonToBorder={buttonToBorder}
          slugToColor={slugToColor}
          softBorder={softBorder}
        />
      </div> */}

      {/* <div className="bg-zinc-100">
        <Benefit dictionary={dictionary.benefit} />
      </div> */}

      <div id="our-products" className="bg-white">
        <OurProducts dictionary={dictionary.designedForFeelings} lang={lang} />
      </div>

      <div className="bg-gray-50">
        <WhyReviv dictionary={dictionary.aiWhyReviv} />
      </div>

      <div className="bg-white">
        <BannerCta lang={lang} dictionary={dictionary.aiBanner} />
      </div>

      <div id="about-nad" className="bg-gray-50">
        <AboutNad dictionary={dictionary.aiAboutNad} lang={lang} />
      </div>

      <div className="bg-white">
        <MedicalAuthority
          lang={lang}
          dictionary={dictionary.aiMedicalAuthority}
        />
      </div>

      {/* <div className="bg-zinc-100">
        <TrustSignal dictionary={dictionary.trustedCare} />
      </div> */}

      {/* <div className="bg-background">
        <TrustedCare dictionary={dictionary.trustedCare} />
      </div> */}

      {/* <div className="bg-gray-50">
        <WhyChooseUs dictionary={dictionary.whyChooseUs} />
      </div> */}

      <div className="bg-gray-50">
        <Testimoni dictionary={dictionary.aiTestimonials} />
      </div>

      {/* <div className="bg-card">
        <WellnessWherever dictionary={dictionary.wellnessWherever} />
      </div> */}
      {/* <div className="bg-background">
        <Testimonials dictionary={dictionary.testimonials} />
      </div> */}

      {/* <Banner dictionary={dictionary.finalCta} /> */}

      {/* <FinalCta dictionary={dictionary.finalCta} /> */}

      <div className="bg-white">
        <Faq dictionary={dictionary.faq} />
      </div>

      <div className="bg-gray-50">
        <NadArea dictionary={dictionary.aiNadArea} lang={lang} />
      </div>

      <div className="bg-white">
        <MapsLocation dictionary={dictionary.wellnessWherever} />
      </div>

      {/* <div className="bg-gray-50">
        <Blog lang={lang} dictionary={dictionary.blog} />
      </div> */}

      <WhatsappButton />
    </div>
  );
}
