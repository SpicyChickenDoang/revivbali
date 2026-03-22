type CustomProps = {
  Icon: React.ElementType;
  title: string;
  description: string;
  subDescription: string;
};

export const CardWhy = ({
  Icon,
  title,
  description,
  subDescription,
}: CustomProps) => {
  return (
    <div className="border p-4 rounded-lg bg-white flex flex-col gap-4 items-center">
      <Icon className="size-12 text-primary_color" />
      <h3 className="text-xl text-primary_color font-semibold">{title}</h3>
      <p className="text-black text-center">{description}</p>
      <div className="border w-full"></div>
      <p className="text-sm italic text-center">{subDescription}</p>
    </div>
  );
};
