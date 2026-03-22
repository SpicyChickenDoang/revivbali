export const MarkerPage = ({ dictionary }: { dictionary: any }) => {
  const markers = [
    {
      title: dictionary.sessionsValue,
      desc: dictionary.nad,
    },
    {
      title: dictionary.licensed,
      desc: dictionary.label,
    },
    {
      title: dictionary.cepatSehat,
      desc: dictionary.since,
    },
    {
      title: dictionary.availability,
      desc: dictionary.villaService,
    },
  ];
  return (
    <section className="px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {markers.map((mark, idx) => (
            <div key={idx} className="flex flex-col gap-2 items-center">
              <h3 className="text-xl sm:text-2xl font-semibold text-primary_color">
                {mark.title}
              </h3>
              <p className="text-black">{mark.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
