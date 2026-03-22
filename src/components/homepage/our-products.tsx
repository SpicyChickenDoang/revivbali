import { CardProduct } from "../ui/card-product";
import { treatments } from "@/lib/treatments";

export const OurProducts = ({
  dictionary,
  lang,
}: {
  dictionary: any;
  lang: string;
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {treatments.map((treatment, index) => (
              <CardProduct
                key={index}
                gradient={treatment.gradient}
                border={treatment.border}
                image={treatment.image}
                color={treatment.color}
                nameProduct={treatment.name}
                descProduct={
                  lang != "id"
                    ? treatment.shortDescription
                    : treatment.shortDescriptionId
                }
                expects={lang != "id" ? treatment.expects : treatment.expectsId}
                priceProduct={treatment.price}
                slug={`${lang}/treatments/${treatment.slug}`}
                message={treatment.message}
                lang={lang}
                konektorCta={treatment.cta}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
