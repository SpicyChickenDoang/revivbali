import { Ri24HoursFill } from "react-icons/ri";
import { CardWhy } from "../ui/card-why";
import { TbRibbonHealth } from "react-icons/tb";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { RiHospitalLine } from "react-icons/ri";

export const WhyReviv = ({ dictionary }: { dictionary: any }) => {
  const whys = [
    {
      Icon: Ri24HoursFill,
      title: dictionary.benefitOne.point,
      description: dictionary.benefitOne.desc,
      reason: dictionary.benefitOne.reason,
    },
    {
      Icon: TbRibbonHealth,
      title: dictionary.benefitTwo.point,
      description: dictionary.benefitTwo.desc,
      reason: dictionary.benefitTwo.reason,
    },
    {
      Icon: MdOutlineAttachMoney,
      title: dictionary.benefitThree.point,
      description: dictionary.benefitThree.desc,
      reason: dictionary.benefitThree.reason,
    },
    {
      Icon: AiOutlineHome,
      title: dictionary.benefitFour.point,
      description: dictionary.benefitFour.desc,
      reason: dictionary.benefitFour.reason,
    },
    {
      Icon: RiHospitalLine,
      title: dictionary.benefitFive.point,
      description: dictionary.benefitFive.desc,
      reason: dictionary.benefitFive.reason,
    },
  ];
  return (
    <section className="px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 items-center">
          <p className="text-primary_color uppercase font-medium text-center">
            {dictionary.label}
          </p>
          <h3 className="text-3xl sm:text-4xl font-semibold text-zinc-800 text-center">
            {dictionary.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {whys.map((why, idx) => (
              <CardWhy
                key={idx}
                Icon={why.Icon}
                title={why.title}
                description={why.description}
                subDescription={why.reason}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
