import Image from "next/image";
import Link from "next/link";
import { IoArrowForwardCircleSharp } from "react-icons/io5";

export const AboutNad = ({
  dictionary,
  lang,
}: {
  dictionary: any;
  lang: any;
}) => {
  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <p className="text-primary_color uppercase font-medium text-center">
            {dictionary.label}
          </p>
          <h3 className="text-3xl sm:text-4xl font-semibold text-zinc-800 text-center">
            {dictionary.title}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="flex flex-col gap-6">
              <p className="text-lg text-gray-500">{dictionary.description}</p>
              <p className="text-lg text-gray-500">
                {dictionary.descriptionTwo}
              </p>
              <div className="flex items-center justify-start">
                <Link
                  href={`/${lang}/what-is-nad`}
                  className="px-6 py-2 cta_btn flex items-center justify-center gap-2 w-full sm:w-fit"
                >
                  <p className="text-white">{dictionary.learnMore}</p>
                  <IoArrowForwardCircleSharp className="size-5 text-white" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {/* <div className="bg-gray-100 rounded-lg w-full h-64 sm:h-96 flex items-center justify-center">
                PLACEHOLDER IMAGE
              </div> */}
              <Image
                src="/assets/images/about-nad+.webp"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-60 sm:h-96 object-cover rounded-lg"
                alt="about nad+ explanation"
              />
              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/34099519/"
                  target="_blank"
                  className="border px-2 rounded-md"
                >
                  PubMed: Yoshino et al. 2021
                </a>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/23870130/"
                  target="_blank"
                  className="border px-2 rounded-md"
                >
                  PubMed: Mouchiroud et al. 2013
                </a>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/26785481/"
                  target="_blank"
                  className="border px-2 rounded-md"
                >
                  PubMed: Verdin 2015
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
