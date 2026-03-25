import { getDictionary } from "@/server/get-dictionary";
import { Locale } from "@/i18n-config";
import Image from "next/image";
import Link from "next/link";
import { Pill, Droplets, Zap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappNumber } from "@/lib/constant";
import { BookNow } from "@/components/ui/book-now";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const translations = {
    en: {
      title: "What Is NAD+ Therapy? | Reviv Indonesia",
      description:
        "NAD+ (nicotinamide adenine dinucleotide) is a coenzyme essential for cellular energy, DNA repair, and anti-aging. Learn how IV NAD+ therapy works, its benefits, and why it outperforms oral supplements.",
      url: "https://revivindonesia.com/en/what-is-nad",
    },
    id: {
      title: "Apa Itu Terapi NAD+? | Reviv Indonesia",
      description:
        "NAD+ (nicotinamide adenine dinucleotide) adalah koenzim penting untuk energi seluler, perbaikan DNA, dan anti-penuaan. Pelajari cara kerja terapi NAD+ IV, manfaatnya, dan mengapa lebih efektif dari suplemen oral.",
      url: "https://revivindonesia.com/id/what-is-nad",
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

export default async function WhatIsNadPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  const message =
    lang != "id"
      ? "Hello revivindonesia.com! I'm interested in NAD+ therapy. Can you help me choose the right protocol?"
      : "Halo revivindonesia.com! Saya tertarik dengan terapi NAD+. Bisakah Anda membantu saya memilih protokol yang tepat?";
  return (
    <>
      {/* Hero Section */}
      <section className="mt-[4.5rem] py-10 px-4 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-zinc-800 text-center max-w-4xl mx-auto">
              {dictionary.whatIsNadPage.title}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <Image
                src="/assets/images/nad-theraphy.webp"
                alt="nad+ therapy"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-72 sm:h-[380px] object-cover rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <p className="text-xl md:text-2xl font-semibold text-zinc-800">
                  {dictionary.whatIsNadPage.introHeading}
                </p>
                <p className="text-lg text-gray-500 font-medium">
                  {dictionary.whatIsNadPage.introSubheading}
                </p>
                <p className="text-black">
                  {dictionary.whatIsNadPage.longDescription}
                </p>
                <p className="text-black">
                  {dictionary.whatIsNadPage.endDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What is NAD+ Section */}
      <section className="py-10 px-4 bg-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6 items-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-800 text-center">
              {dictionary.whatIsNadPage.whatIsNad.title}
            </h2>
            <p className="text-gray-500 text-lg">
              {dictionary.whatIsNadPage.whatIsNad.subtitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-4 flex flex-col gap-2 items-center">
                <Zap className="size-12 text-primary_color" />
                <h3 className="text-zinc-800 font-medium text-lg text-center">
                  {dictionary.whatIsNadPage.whatIsNad.point1.title}
                </h3>
                <p className="text-gray-500 text-center">
                  {dictionary.whatIsNadPage.whatIsNad.point1.description}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 flex flex-col gap-2 items-center">
                <Zap className="size-12 text-primary_color" />
                <h3 className="text-zinc-800 font-medium text-lg text-center">
                  {dictionary.whatIsNadPage.whatIsNad.point2.title}
                </h3>
                <p className="text-gray-500 text-center">
                  {dictionary.whatIsNadPage.whatIsNad.point2.description}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 flex flex-col gap-2 items-center">
                <Zap className="size-12 text-primary_color" />
                <h3 className="text-zinc-800 font-medium text-lg text-center">
                  {dictionary.whatIsNadPage.whatIsNad.point3.title}
                </h3>
                <p className="text-gray-500 text-center">
                  {dictionary.whatIsNadPage.whatIsNad.point3.description}
                </p>
              </div>
            </div>
            <div className="bg_gradient p-6 rounded-lg">
              <p className="text-lg font-medium text-white text-center">
                {dictionary.whatIsNadPage.whatIsNad.point4}
              </p>
              <p className="text-lg font-medium text-white text-center">
                {dictionary.whatIsNadPage.whatIsNad.withoutNad}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Why NAD+ Declines Section */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6 items-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-800 text-center">
              {dictionary.whatIsNadPage.nadDecline.title}
            </h2>
            <p className="text-gray-500 text-lg text-center">
              {dictionary.whatIsNadPage.nadDecline.subtitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="p-6 bg-white rounded-lg flex flex-col items-center gap-2">
                <p className="text-3xl font-bold text-primary_color">50%</p>
                <p className="font-semibold text-zinc-800">
                  {dictionary.whatIsNadPage.nadDecline.stat1.age}
                </p>
                <p className="text-gray-500">
                  {dictionary.whatIsNadPage.nadDecline.stat1.description}
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg flex flex-col items-center gap-2">
                <p className="text-3xl font-bold text-primary_color">80%</p>
                <p className="font-semibold text-zinc-800">
                  {dictionary.whatIsNadPage.nadDecline.stat2.age}
                </p>
                <p className="text-gray-500">
                  {dictionary.whatIsNadPage.nadDecline.stat2.description}
                </p>
              </div>
            </div>
            <div className="bg_gradient p-6 rounded-lg">
              <p className="font-medium text-white text-lg text-center">
                {dictionary.whatIsNadPage.nadDecline.lifestyleFactors}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* IV vs Supplements Section */}
      <section className="py-10 px-4 bg bg-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6 items-center">
            <Droplets className="size-12 text-primary_color" />
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-800 text-center">
              {dictionary.whatIsNadPage.ivVsSupplements.title}
            </h2>
            <p className="text-gray-500 text-lg text-center">
              {dictionary.whatIsNadPage.ivVsSupplements.subtitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="border rounded-lg bg-white">
                <div className="bg-white p-4 border-b rounded-t-lg">
                  <div className="flex items-center gap-2">
                    <Pill className="size-5 text-primary_color" />
                    <h3 className="font-bold text-zinc-800">
                      {
                        dictionary.whatIsNadPage.ivVsSupplements.supplements
                          .title
                      }
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-col gap-2">
                    {[
                      dictionary.whatIsNadPage.ivVsSupplements.supplements
                        .point1,
                      dictionary.whatIsNadPage.ivVsSupplements.supplements
                        .point2,
                      dictionary.whatIsNadPage.ivVsSupplements.supplements
                        .point3,
                      dictionary.whatIsNadPage.ivVsSupplements.supplements
                        .point4,
                    ].map((point, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <p className="text-black">- {point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="border rounded-lg bg-white">
                <div className="bg-white p-4 border-b rounded-t-lg">
                  <div className="flex items-center gap-2">
                    <Pill className="size-5 text-primary_color" />
                    <h3 className="font-bold text-zinc-800">
                      {dictionary.whatIsNadPage.ivVsSupplements.ivTherapy.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-col gap-2">
                    {[
                      dictionary.whatIsNadPage.ivVsSupplements.ivTherapy.point1,
                      dictionary.whatIsNadPage.ivVsSupplements.ivTherapy.point2,
                      dictionary.whatIsNadPage.ivVsSupplements.ivTherapy.point3,
                      dictionary.whatIsNadPage.ivVsSupplements.ivTherapy.point4,
                      dictionary.whatIsNadPage.ivVsSupplements.ivTherapy.point5,
                    ].map((point, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <p className="text-black">- {point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Research Section */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6 items-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-800 text-center">
              {dictionary.whatIsNadPage.research.title}
            </h2>
            <p className="text-gray-500 text-lg text-center">
              {dictionary.whatIsNadPage.research.subtitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="p-6 bg-white rounded-lg flex flex-col gap-6">
                <h3 className="font-bold text-zinc-800 capitalize">
                  {dictionary.whatIsNadPage.research.animalStudies.title}
                </h3>
                <div className="flex flex-col gap-2">
                  {[
                    dictionary.whatIsNadPage.research.animalStudies.point1,
                    dictionary.whatIsNadPage.research.animalStudies.point2,
                    dictionary.whatIsNadPage.research.animalStudies.point3,
                    dictionary.whatIsNadPage.research.animalStudies.point4,
                  ].map((point, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <p className="text-black">- {point}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-white rounded-lg flex flex-col gap-6">
                <h3 className="font-bold text-zinc-800 capitalize">
                  {dictionary.whatIsNadPage.research.humanStudies.title}
                </h3>
                <div className="flex flex-col gap-2">
                  {[
                    dictionary.whatIsNadPage.research.humanStudies.point1,
                    dictionary.whatIsNadPage.research.humanStudies.point2,
                    dictionary.whatIsNadPage.research.humanStudies.point3,
                    dictionary.whatIsNadPage.research.humanStudies.point4,
                  ].map((point, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <p className="text-black">- {point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What to Expect Section */}
      <section className="py-10 px-4 bg-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-800 text-center">
              {dictionary.whatIsNadPage.whatToExpect.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg">
                <div className="bg_gradient p-4 border rounded-t-lg">
                  <h3 className="font-bold text-white capitalize">
                    {
                      dictionary.whatIsNadPage.whatToExpect.beforeTreatment
                        .title
                    }
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-col gap-2">
                    {[
                      dictionary.whatIsNadPage.whatToExpect.beforeTreatment
                        .point1,
                      dictionary.whatIsNadPage.whatToExpect.beforeTreatment
                        .point2,
                      dictionary.whatIsNadPage.whatToExpect.beforeTreatment
                        .point3,
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <p className="text-black">- {point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg">
                <div className="bg_gradient p-4 border rounded-t-lg">
                  <h3 className="font-bold text-white capitalize">
                    {
                      dictionary.whatIsNadPage.whatToExpect.duringTreatment
                        .title
                    }
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-col gap-2">
                    {[
                      dictionary.whatIsNadPage.whatToExpect.duringTreatment
                        .point1,
                      dictionary.whatIsNadPage.whatToExpect.duringTreatment
                        .point2,
                      dictionary.whatIsNadPage.whatToExpect.duringTreatment
                        .point3,
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <p className="text-black">- {point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg">
                <div className="bg_gradient p-4 border rounded-t-lg">
                  <h3 className="font-bold text-white capitalize">
                    {dictionary.whatIsNadPage.whatToExpect.afterTreatment.title}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-col gap-2">
                    {[
                      dictionary.whatIsNadPage.whatToExpect.afterTreatment
                        .point1,
                      dictionary.whatIsNadPage.whatToExpect.afterTreatment
                        .point2,
                      dictionary.whatIsNadPage.whatToExpect.afterTreatment
                        .point3,
                    ].map((point, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <p className="text-black">- {point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Dosing Section */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-800 text-center">
              {dictionary.whatIsNadPage.dosing.title}
            </h2>
            <p className="text-gray-500 text-lg text-center">
              {dictionary.whatIsNadPage.dosing.subtitle}
            </p>
            <div className="overflow-x-auto">
              <div className="overflow-hidden rounded-lg border">
                <table className="w-full text-sm">
                  <thead className="bg-white">
                    <tr>
                      <th className="p-4 text-left font-bold text-zinc-800">
                        {dictionary.whatIsNadPage.dosing.tableHeaders.product}
                      </th>
                      <th className="p-4 text-left font-bold text-zinc-800">
                        {dictionary.whatIsNadPage.dosing.tableHeaders.dose}
                      </th>

                      <th className="p-4 text-left font-bold text-zinc-800">
                        {dictionary.whatIsNadPage.dosing.tableHeaders.bestFor}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-4 font-medium text-zinc-800">
                        {dictionary.whatIsNadPage.dosing.products.reboot.name}
                      </td>
                      <td className="p-4 text-gray-600">
                        {dictionary.whatIsNadPage.dosing.products.reboot.dose}
                      </td>

                      <td className="p-4 text-gray-600">
                        {
                          dictionary.whatIsNadPage.dosing.products.reboot
                            .bestFor
                        }
                      </td>
                    </tr>
                    <tr className="border-t bg-white">
                      <td className="p-4 font-medium text-zinc-800">
                        {dictionary.whatIsNadPage.dosing.products.revive.name}
                      </td>
                      <td className="p-4 text-gray-600">
                        {dictionary.whatIsNadPage.dosing.products.revive.dose}
                      </td>

                      <td className="p-4 text-gray-600">
                        {
                          dictionary.whatIsNadPage.dosing.products.revive
                            .bestFor
                        }
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4 font-medium text-zinc-800">
                        {
                          dictionary.whatIsNadPage.dosing.products.regenerate
                            .name
                        }
                      </td>
                      <td className="p-4 text-gray-600">
                        {
                          dictionary.whatIsNadPage.dosing.products.regenerate
                            .dose
                        }
                      </td>

                      <td className="p-4 text-gray-600">
                        {
                          dictionary.whatIsNadPage.dosing.products.regenerate
                            .bestFor
                        }
                      </td>
                    </tr>
                    <tr className="border-t bg-white">
                      <td className="p-4 font-medium text-zinc-800">
                        {dictionary.whatIsNadPage.dosing.products.elite.name}
                      </td>
                      <td className="p-4 text-gray-600">
                        {dictionary.whatIsNadPage.dosing.products.elite.dose}
                      </td>

                      <td className="p-4 text-gray-600">
                        {dictionary.whatIsNadPage.dosing.products.elite.bestFor}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="relative overflow-hidden">
          <Image
            src="/assets/images/ready-get-iv.webp"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-[450px] object-cover"
            alt="ready"
          />
          <div className="absolute top-0 inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col gap-6 max-w-4xl px-4">
              <h1 className="text-4xl md:text-6xl font-semibold text-white text-center">
                {dictionary.whatIsNadPage.cta.title}
              </h1>
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <BookNow
                  lang={lang}
                  dictionary={dictionary.whatIsNadPage.cta.button}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
