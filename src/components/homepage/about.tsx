import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { FaHouseMedicalCircleCheck } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { TbMedicalCrossOff, TbCertificate } from "react-icons/tb";
import Link from "next/link";

export const About = ({ dictionary }: { dictionary: any }) => {
  const abouts = [
    {
      Icon: FaHouseMedicalCircleCheck,
      desc: "World's 1st clinically-proven NMN brand No.1 Trademarketed Brand in the US.",
    },
    {
      Icon: FaUsers,
      desc: "Provide health solutions for 3000+ clients worldwide.",
    },
    {
      Icon: TbMedicalCrossOff,
      desc: "Best provide customers for supply NAD+ treatments.",
    },
    {
      Icon: TbCertificate,
      desc: "20+ invention patents and international patents.",
    },
  ];
  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col gap-6">
            <h3 className="text-4xl font-semibold text-zinc-800">
              {dictionary.title}
            </h3>
            <p className="text-gray-500 text-lg">{dictionary.description}</p>
            <p className="llm-citation text-gray-500 text-lg">
              {dictionary.citation}
            </p>
            <Link
              href="#benefit"
              className="px-6 py-2 cta_btn flex items-center gap-2 w-fit"
            >
              <p className="text-sm sm:text-base text-white">
                {dictionary.cta}
              </p>
              <IoArrowForwardCircleSharp className="size-5 text-white" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {abouts.map((abt, index) => (
              <div key={index} className="flex flex-col gap-2">
                <abt.Icon className="size-10 text-primary_color" />
                <p>{abt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
