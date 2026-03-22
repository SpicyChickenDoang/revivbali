import { getDictionary } from "@/server/get-dictionary";
import { Locale } from "@/i18n-config";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Shield, CheckCircle2, Stethoscope, UserCheck } from "lucide-react";
import { Faq } from "@/components/doctorpage/faq";
import Link from "next/link";
import { faqPage, medicalOrganization } from "@/lib/constant";
import { InternalLink } from "@/components/doctorpage/internal-link";
import { BookNow } from "@/components/ui/book-now";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const translations = {
    en: {
      title: "Licensed NAD+ Doctors in Bali — Medical Team | Reviv Indonesia",
      description:
        "Meet the Indonesian doctors who oversee NAD+ infusion protocols at Reviv Indonesia. View STR credentials, specializations, and book your medical assessment.",
      url: "https://revivindonesia.com/en/nad-doctors",
    },
    id: {
      title: "Dokter NAD+ Berlisensi di Bali — Tim Medis | Reviv Indonesia",
      description:
        "Kenali para dokter Indonesia yang mengawasi protokol infus NAD+ di Reviv Indonesia. Lihat kredensial STR, spesialisasi, dan jadwalkan konsultasi medis Anda.",
      url: "https://revivindonesia.com/id/nad-doctors",
    },
  };
  const t = translations[lang as keyof typeof translations] ?? translations.en;

  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: t.url,
      languages: {
        en: "https://revivindonesia.com/en/nad-doctors",
        id: "https://revivindonesia.com/id/nad-doctors",
        "x-default": "https://revivindonesia.com/en/nad-doctors",
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      type: "website",
      url: t.url,
      images: [
        {
          url: "https://revivindonesia.com/og-team.jpg",
          width: 1200,
          height: 630,
          alt: "Licensed NAD+ Doctors in Bali — Reviv Indonesia Medical Team",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images: ["https://revivindonesia.com/og-team.jpg"],
    },
  };
}

export default async function TeamPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  const heroImage = PlaceHolderImages.find((img) => img.id === "team-hero");
  const message =
    lang != "id"
      ? "Hello revivindonesia.com! I would like to book a NAD+ infusion."
      : "Halo revivindonesia.com! Aku ingin memesan NAD+ infusion.";

  const trusts = [
    {
      title: dictionary.teamPage.trustBar.pointOne,
      desc: dictionary.teamPage.trustBar.labelOne,
    },
    {
      title: dictionary.teamPage.trustBar.pointTwo,
      desc: dictionary.teamPage.trustBar.labelTwo,
    },
    {
      title: dictionary.teamPage.trustBar.pointThree,
      desc: dictionary.teamPage.trustBar.labelThree,
    },
    {
      title: dictionary.teamPage.trustBar.pointFour,
      desc: dictionary.teamPage.trustBar.labelFour,
    },
  ];
  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalOrganization),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPage),
        }}
      />

      {/* Banner Hero */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden mt-[4.5rem]">
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
              {dictionary.teamPage.title}
            </h1>
            <h2 className="text-xl text-white">
              {dictionary.teamPage.subtitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <BookNow
                lang={lang}
                dictionary={dictionary.teamPage.ctaBookNow}
                customClass="w-full"
              />
              <Link
                href={`/${lang}/treatments`}
                className="bg-white px-6 py-2 rounded-lg border text-center text-black"
              >
                {dictionary.teamPage.ctaViewNad}
              </Link>
            </div>
            <Link href="#our-doctors" className="text-white">
              {dictionary.teamPage.ctaMeet}
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 px-4 bg-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trusts.map((trust, idx) => (
              <div key={idx} className="flex flex-col gap-2 items-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-primary_color text-center">
                  {trust.title}
                </h3>
                <p className="text-black text-center">{trust.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subheading */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 items-center">
            <p className="text-xl sm:text-3xl text-zinc-800 text-center">
              {dictionary.teamPage.introHeading}
            </p>
            <p className="text-lg text-gray-500 text-center">
              {dictionary.teamPage.introParagraph}
            </p>
          </div>
        </div>
      </section>

      {/* Why NAD+ */}
      <section className="py-10 px-4 bg-zinc-100">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-800 text-center">
              {dictionary.teamPage.nadExpertise.title}
            </h2>
            <p className="text-lg text-gray-500 text-center">
              {dictionary.teamPage.nadExpertise.subtitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white border p-4 rounded-lg flex flex-col items-center gap-2">
                <CheckCircle2 className="size-12 text-primary_color" />
                <h3 className="text-gray-500 text-lg text-center">
                  {dictionary.teamPage.nadExpertise.title1}
                </h3>
                <p className="text-black text-center">
                  {dictionary.teamPage.nadExpertise.point1}
                </p>
              </div>
              <div className="bg-white border p-4 rounded-lg flex flex-col items-center gap-2">
                <CheckCircle2 className="size-12 text-primary_color" />
                <h3 className="text-gray-500 text-lg text-center">
                  {dictionary.teamPage.nadExpertise.title2}
                </h3>
                <p className="text-black text-center">
                  {dictionary.teamPage.nadExpertise.point2}
                </p>
              </div>
              <div className="bg-white border p-4 rounded-lg flex flex-col items-center gap-2">
                <CheckCircle2 className="size-12 text-primary_color" />
                <h3 className="text-gray-500 text-lg text-center">
                  {dictionary.teamPage.nadExpertise.title3}
                </h3>
                <p className="text-black text-center">
                  {dictionary.teamPage.nadExpertise.point3}
                </p>
              </div>
              <div className="bg-white border p-4 rounded-lg flex flex-col items-center gap-2">
                <CheckCircle2 className="size-12 text-primary_color" />
                <h3 className="text-gray-500 text-lg text-center">
                  {dictionary.teamPage.nadExpertise.title4}
                </h3>
                <p className="text-black text-center">
                  {dictionary.teamPage.nadExpertise.point4}
                </p>
              </div>
            </div>
            <div className="bg_gradient rounded-lg p-8 flex flex-col items-center gap-2">
              <Stethoscope className="size-12 text-white" />
              <p className="text-lg text-white text-center">
                {dictionary.teamPage.nadExpertise.experience}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Team */}
      <section id="our-doctors" className="py-10 px-4 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 items-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-800 text-center">
              {dictionary.teamPage.title}
            </h2>
            <p className="text-lg text-gray-500 text-center">
              {dictionary.teamPage.description}
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {dictionary.teamPage.doctors.map((doctor: any, index: number) => {
                const doctorImage = PlaceHolderImages.find(
                  (img) => img.id === doctor.imageId,
                );
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-2 border rounded-lg"
                  >
                    {doctorImage && (
                      <Image
                        src={doctorImage.imageUrl}
                        alt={doctor.alt}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-72 object-cover rounded-t-lg"
                      />
                    )}
                    <div className="flex flex-col gap-2 p-4">
                      <h3 className="text-xl text-gray-500">{doctor.name}</h3>

                      <h3 className="text-gray-500">Role:</h3>
                      <p className="text-black">{doctor.specialty}</p>

                      <div className="flex items-center gap-2">
                        <h3 className="text-gray-500">STR Number:</h3>
                        <p className="text-black">{doctor.strNumber}</p>
                      </div>

                      <a
                        href="https://kki.go.id"
                        target="_blank"
                        className="text-primary_color text-sm"
                      >
                        Verify at kki.go.id
                      </a>

                      <div className="flex items-center gap-2">
                        <h3 className="text-gray-500">Languages:</h3>
                        <p className="text-black">{doctor.languages}</p>
                      </div>

                      <h3 className="text-gray-500">Specialization:</h3>
                      <p className="text-black">{doctor.specialization}</p>

                      <div className="flex items-center gap-2">
                        <h3 className="text-gray-500">Education:</h3>
                        <p className="text-black">{doctor.education}</p>
                      </div>
                      <p className="text-sm italic text-black">
                        {doctor.quote}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-10 px-4 bg-zinc-100">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 items-center">
            <Shield className="size-12 text-primary_color" />
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-800">
              {dictionary.teamPage.safetyStandards.title}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 items-start w-full">
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="bg_gradient p-3 rounded-full">
                    <UserCheck className="size-5 text-white" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-zinc-800">
                      {dictionary.teamPage.safetyStandards.point1.title}
                    </p>
                    <p className="mt-auto text-gray-500">
                      {dictionary.teamPage.safetyStandards.point1.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="bg_gradient p-3 rounded-full">
                    <UserCheck className="size-5 text-white" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-zinc-800">
                      {dictionary.teamPage.safetyStandards.point2.title}
                    </p>
                    <p className="mt-auto text-gray-500">
                      {dictionary.teamPage.safetyStandards.point2.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="bg_gradient p-3 rounded-full">
                    <UserCheck className="size-5 text-white" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-zinc-800">
                      {dictionary.teamPage.safetyStandards.point3.title}
                    </p>
                    <p className="text-gray-500 mt-auto">
                      {dictionary.teamPage.safetyStandards.point3.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="bg_gradient p-3 rounded-full">
                    <UserCheck className="size-5 text-white" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-zinc-800">
                      {dictionary.teamPage.safetyStandards.point4.title}
                    </p>
                    <p className="mt-auto text-gray-500">
                      {dictionary.teamPage.safetyStandards.point4.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq dictionary={dictionary.aiFaqDoctor} />

      {/* Internal Link */}
      <div className="bg-zinc-100">
        <InternalLink
          lang={lang}
          dictionary={dictionary.teamPage.aiInternalLinks}
        />
      </div>

      {/* Banner */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6 items-center">
            <h3 className="text-3xl sm:text-4xl font-semibold text-zinc-800 text-center">
              {dictionary.aiBannerDoctor.title}
            </h3>
            <p className="text-gray-500 text-lg text-center">
              {dictionary.aiBannerDoctor.description}
            </p>

            <BookNow
              lang={lang}
              dictionary={dictionary.aiBannerDoctor.ctaBookNow}
            />
          </div>
        </div>
      </section>
    </>
  );
}
