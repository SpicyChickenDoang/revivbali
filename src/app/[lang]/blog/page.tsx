import { CardBlog } from "@/components/ui/card-blog";
import { Locale } from "@/i18n-config";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { getDictionary } from "@/server/get-dictionary";
import Image from "next/image";

export default async function BlogPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  const heroImage = PlaceHolderImages.find(
    (img) => img.id === "blog-banner-article",
  );

  return (
    <>
      <section className="relative h-[40vh] w-full flex items-center justify-center overflow-hidden mt-[4.5rem]">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center max-w-4xl px-4">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl font-semibold text-white">
              {dictionary.blog.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CardBlog
              bannerImage="banner-nad-benefit"
              datePost="12-03-2026"
              titleArticle="NAD+ Benefits: What the Research Actually Says"
              introArticle="The wellness industry is full of bold claims about NAD+. We cut through the noise and look at what the clinical literature actually supports."
              slug={`/${lang}/blog/nad-benefit-research`}
            />
            <CardBlog
              bannerImage="banner-nad-dosage"
              datePost="12-03-2026"
              titleArticle="NAD+ Dosage Guide: 100mg vs 250mg vs 500mg vs 750mg"
              introArticle="Not all NAD+ doses are created equal. Here's how to figure out which tier actually matches your goals — and why getting that decision right matters more than most people realize."
              slug={`/${lang}/blog/nad-dosage-guide`}
            />
            <CardBlog
              bannerImage="banner-nad-side-effects"
              datePost="12-03-2026"
              titleArticle="NAD+ IV Side Effects: What to Expect During Treatment"
              introArticle="Thinking about booking an NAD+ infusion but unsure what you're getting into? Here's an honest breakdown of what your body will actually experience — and why most of it is a good sign."
              slug={`/${lang}/blog/nad-iv-side-effects`}
            />
            <CardBlog
              bannerImage="banner-nad-iv-suplements"
              datePost="12-03-2026"
              titleArticle="NAD+ IV Therapy vs. Supplements: Why IV Wins"
              introArticle="Everyone's talking about NAD+. But how you take it matters just as much as whether you take it. Here's what the science actually says about the best delivery method."
              slug={`/${lang}/blog/nad-iv-vs-suplements`}
            />
          </div>
        </div>
      </section>
    </>
  );
}
