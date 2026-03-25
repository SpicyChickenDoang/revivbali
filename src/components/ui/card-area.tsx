import Link from "next/link";
type CustomProps = {
  location: string;
  description: string;
  slug: string;
};

export const CardArea = ({ location, description, slug }: CustomProps) => {
  return (
    <Link
      href={`${slug}`}
      className="bg-white border p-4 rounded-lg flex flex-col gap-2"
    >
      <h3 className="text-xl text-primary_color font-semibold">{location}</h3>
      <p className="text-black">{description}</p>
      <div className="flex items-center justify-end">
        <div className="px-6 py-2 cta_btn w-fit">
          <p className="text-white">View Detail</p>
        </div>
      </div>
    </Link>
  );
};
