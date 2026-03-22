import { CardAuthority } from "../ui/card-authority";
import { PiCertificate } from "react-icons/pi";
import { IoTelescopeOutline } from "react-icons/io5";
import { RiHospitalLine } from "react-icons/ri";
import { PiNeedle } from "react-icons/pi";
import Link from "next/link";

export const MedicalAuthority = ({
  lang,
  dictionary,
}: {
  lang: any;
  dictionary: any;
}) => {
  const medicals = [
    {
      Icon: PiCertificate,
      title: dictionary.authorityOne.title,
      description: dictionary.authorityOne.description,
    },
    {
      Icon: IoTelescopeOutline,
      title: dictionary.authorityTwo.title,
      description: dictionary.authorityTwo.description,
    },
    {
      Icon: RiHospitalLine,
      title: dictionary.authorityThree.title,
      description: dictionary.authorityThree.description,
    },
    {
      Icon: PiNeedle,
      title: dictionary.authorityFour.title,
      description: dictionary.authorityFour.description,
    },
  ];
  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 items-center">
          <p className="text-primary_color uppercase font-medium">
            {dictionary.label}
          </p>
          <h3 className="text-3xl sm:text-4xl font-semibold text-zinc-800 text-center">
            {dictionary.title}
          </h3>
          <p className="text-gray-500 text-lg text-center">
            {dictionary.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {medicals.map((med, idx) => (
              <CardAuthority
                key={idx}
                Icon={med.Icon}
                title={med.title}
                description={med.description}
              />
            ))}
          </div>
          <p className="text-black text-sm">{dictionary.verify}</p>
          <Link
            href={`/${lang}/nad-doctors`}
            className="px-6 py-2 cta_btn w-full sm:w-fit"
          >
            <p className="text-white text-center">{dictionary.meetMedical}</p>
          </Link>
        </div>
      </div>
    </section>
  );
};
