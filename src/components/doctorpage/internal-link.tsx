"use client";

import Link from "next/link";

export const InternalLink = ({
  lang,
  dictionary,
}: {
  lang: any;
  dictionary: any;
}) => {
  const internalLinks = [
    {
      title: dictionary.link1_title,
      description: dictionary.link1_desc,
      href: `/${lang}/#about-nad`,
    },
    {
      title: dictionary.link2_title,
      description: dictionary.link2_desc,
      href: `/${lang}/nad-canggu`,
    },
    {
      title: dictionary.link3_title,
      description: dictionary.link3_desc,
      href: `/${lang}/nad-seminyak`,
    },
    {
      title: dictionary.link4_title,
      description: dictionary.link4_desc,
      href: `/${lang}/nad-ubud`,
    },
    {
      title: dictionary.link5_title,
      description: dictionary.link5_desc,
      href: `/${lang}/faq`,
    },
    {
      title: dictionary.link6_title,
      description: dictionary.link6_desc,
      href: `/${lang}/safety`,
    },
  ];
  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col gap-6 items-center">
          <h3 className="text-3xl sm:text-4xl font-semibold text-zinc-800 text-center">
            {dictionary.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {internalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-white flex flex-col gap-2 p-5 border rounded-lg w-full"
              >
                <p className=" text-gray-500 text-lg">{link.title}</p>
                <p className="text-black">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
