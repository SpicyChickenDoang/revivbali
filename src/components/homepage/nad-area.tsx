import { CardArea } from "../ui/card-area";

export const NadArea = ({
  dictionary,
  lang,
}: {
  dictionary: any;
  lang: any;
}) => {
  const nadAreas = [
    {
      location: dictionary.nadOne.location,
      description: dictionary.nadOne.description,
      slug: "nad-canggu",
    },
    {
      location: dictionary.nadTwo.location,
      description: dictionary.nadTwo.description,
      slug: "nad-seminyak",
    },
    {
      location: dictionary.nadThree.location,
      description: dictionary.nadThree.description,
      slug: "nad-ubud",
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {nadAreas.map((nad, idx) => (
              <CardArea
                key={idx}
                location={nad.location}
                description={nad.description}
                slug={`/${lang}/${nad.slug}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
