type CustomProps = {
  Icon: React.ElementType;
  title: string;
  description: string;
};

export const CardAuthority = ({ Icon, title, description }: CustomProps) => {
  return (
    <div className="border p-4 rounded-lg">
      <div className="flex items-center gap-4">
        <Icon className="size-12 text-primary_color" />
        <div className="flex flex-col gap-2">
          <h3 className="text-lg text-primary_color font-semibold">{title}</h3>
          <p className="text-black">{description}</p>
        </div>
      </div>
    </div>
  );
};
