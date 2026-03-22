"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// import { useEffect, useState } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { CardBlog } from "../ui/card-blog";

export const Blog = ({ dictionary, lang }: { dictionary: any; lang: any }) => {
  // const [articles, setArticles] = useState([]);
  // useEffect(() => {
  // 	fetchArticles(locale).then((data) => {
  // 		setArticles(data);
  // 	});
  // }, [locale]);

  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <p className="text-primary_color uppercase font-medium text-center">
            {dictionary.label}
          </p>
          <h3 className="text-4xl font-semibold text-zinc-800 text-center">
            {dictionary.title}
          </h3>
          <div className="flex items-center">
            <Swiper
              loop
              modules={[Autoplay]}
              spaceBetween={20}
              speed={1000}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="rounded-lg"
            >
              <SwiperSlide>
                <CardBlog
                  bannerImage="banner-nad-benefit"
                  datePost="12-03-2026"
                  titleArticle="NAD+ Benefits: What the Research Actually Says"
                  introArticle="The wellness industry is full of bold claims about NAD+. We cut through the noise and look at what the clinical literature actually supports."
                  slug={`/${lang}/blog/nad-benefit-research`}
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardBlog
                  bannerImage="banner-nad-dosage"
                  datePost="12-03-2026"
                  titleArticle="NAD+ Dosage Guide: 100mg vs 250mg vs 500mg vs 750mg"
                  introArticle="Not all NAD+ doses are created equal. Here's how to figure out which tier actually matches your goals — and why getting that decision right matters more than most people realize."
                  slug={`/${lang}/blog/nad-dosage-guide`}
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardBlog
                  bannerImage="banner-nad-side-effects"
                  datePost="12-03-2026"
                  titleArticle="NAD+ IV Side Effects: What to Expect During Treatment"
                  introArticle="Thinking about booking an NAD+ infusion but unsure what you're getting into? Here's an honest breakdown of what your body will actually experience — and why most of it is a good sign."
                  slug={`/${lang}/blog/nad-iv-side-effects`}
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardBlog
                  bannerImage="banner-nad-iv-suplements"
                  datePost="12-03-2026"
                  titleArticle="NAD+ IV Therapy vs. Supplements: Why IV Wins"
                  introArticle="Everyone's talking about NAD+. But how you take it matters just as much as whether you take it. Here's what the science actually says about the best delivery method."
                  slug={`/${lang}/blog/nad-iv-vs-suplements`}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
