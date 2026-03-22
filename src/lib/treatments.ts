export type Treatment = {
  id: string;
  slug: string;
  name: string;
  category: "IV Therapy" | "Vitamin Injections" | "Aesthetics";
  price: number;
  shortDescription: string;
  shortDescriptionId: string;
  expects: string;
  expectsId: string;
  longDescription: string;
  longDescriptionId: string;
  benefits: string[];
  imageId: string;
  hue: number;
  message: string;
  image: string;
  color: string;
  border: string;
  gradient: string;
  cta: string;
};

export const treatments: Treatment[] = [
  {
    id: "nad-1",
    slug: "nad-reboot-100",
    name: "NAD+ Reboot 100",
    price: 2390000,
    shortDescription:
      "Light anti aging therapy to refresh your skin, energy, and focus for your body.",
    shortDescriptionId:
      "Terapi anti-aging ringan untuk menyegarkan kulit, meningkatkan energi, dan fokus tubuh Anda.",
    expects:
      "Clients typically notice a mild energy lift and mental brightness within 2-4 hours — a calibration session before stepping up.",
    expectsId:
      "Umumnya, klien merasakan peningkatan energi ringan dan kejernihan pikiran dalam 2-4 jam — sesi awal sebelum melangkah ke tahap berikutnya.",
    longDescription:
      "Pure Nicotinamide Adenine Dinucleotide (NAD+) — a coenzyme derived from Vitamin B3 — fuels over 500 reactions that keep your cells healthy and youthful. NAD+ Reboot 100 delivers a gentle yet effective introduction to cellular renewal. Ideal for beginners seeking natural anti-aging, smoother skin texture, improved mood, and steady daily energy.",
    longDescriptionId:
      "Nicotinamide Adenine Dinucleotide (NAD+) murni — koenzim yang berasal dari Vitamin B3 — mendukung lebih dari 500 reaksi penting untuk menjaga kesehatan dan vitalitas sel. NAD+ Reboot 100 memberikan pengenalan yang lembut namun efektif terhadap proses regenerasi sel. Cocok untuk pemula yang mencari solusi anti-aging alami, membantu memperhalus tekstur kulit, meningkatkan suasana hati, serta menjaga energi harian tetap stabil.",
    benefits: [
      "Natural anti-aging",
      "Smoother skin texture",
      "Improved mood",
      "Steady daily energy",
    ],
    category: "IV Therapy",
    imageId: "nad-reboot-100",
    hue: 30,
    message:
      "Hello [uniquecode] revivindonesia.com! I'd like to book NAD+ Reboot 100 treatment!",
    cta: "https://chat.revivindonesia.com/nadreboot100",
    image: "/assets/images/products/r-biru.webp",
    color: "text-blue-500",
    border: "border-blue-100",
    gradient: "from-blue-50/80",
  },
  /* {
      id: 'nad-2',
      slug: "nad-restore-200",
      name: "NAD+ Restore 200",
      price: 2990000,
      shortDescription: "Daily anti-aging infusion to restore energy, clarity, and skin vitality.",
      longDescription: "NAD+ Restore 200 supports collagen production, promotes radiant skin, and revitalizes cellular energy. Perfect for professionals or travelers who want to fight early signs of aging, dryness, or dullness. Regular sessions help maintain smoother skin, sharper focus, and balanced mood — keeping you vibrant through Bali’s demanding pace.",
      benefits: ['Fights early signs of aging', 'Restores skin vitality', 'Sharper focus', 'Balanced mood'],
      category: 'IV Therapy',
      imageId: 'nad-restore-200',
      hue: 270,
      message: "Hello [uniquecode] revivindonesia.com! I’d like to book NAD+ Restore 200 treatment!",
      cta: "https://chat.revivindonesia.com/nadrestore200"
  }, */
  {
    id: "nad-3",
    slug: "nad-revive-250",
    name: "NAD+ Revive 250",
    price: 3390000,
    expects:
      "Clients typically report sharper mental clarity within 4-6 hours, noticeably improved energy by the following morning, and deeper sleep quality over the next 3 days.",
    expectsId:
      "Umumnya, klien merasakan peningkatan kejernihan mental dalam 4–6 jam, energi yang lebih terasa keesokan harinya, serta kualitas tidur yang lebih dalam dalam 3 hari berikutnya.",
    shortDescription:
      "Advanced NAD+ therapy for visible skin glow and deep anti-aging repair.",
    shortDescriptionId:
      "Terapi NAD+ lanjutan untuk kulit tampak lebih glowing dan perbaikan anti-aging yang lebih mendalam.",
    longDescription:
      "For those seeking stronger results, NAD+ Revive 250 penetrates deeper into cellular metabolism, stimulating natural collagen and DNA repair. It helps reduce inflammation, smooth fine lines, and improve overall complexion while enhancing mood and energy. Recommended for moderate fatigue, early skin aging, and mild oxidative stress.",
    longDescriptionId:
      "Untuk Anda yang menginginkan hasil lebih optimal, NAD+ Revive 250 bekerja lebih dalam pada metabolisme sel, merangsang produksi kolagen alami dan proses perbaikan DNA. Terapi ini membantu mengurangi peradangan, menyamarkan garis halus, serta meningkatkan tampilan kulit secara keseluruhan, sekaligus meningkatkan mood dan energi. Direkomendasikan untuk kondisi kelelahan sedang, tanda awal penuaan kulit, dan stres oksidatif ringan.",
    benefits: [
      "Deep anti-aging repair",
      "Reduces inflammation",
      "Smooths fine lines",
      "Enhances mood and energy",
    ],
    category: "IV Therapy",
    imageId: "nad-revive-250",
    hue: 170,
    message:
      "Hello [uniquecode] revivindonesia.com! I'd like to book NAD+ Revive 250 treatment!",
    cta: "https://chat.revivindonesia.com/nadrevive250",
    image: "/assets/images/products/r-orange.webp",
    color: "text-orange-500",
    border: "border-orange-100",
    gradient: "from-orange-50/80",
  },
  {
    id: "nad-4",
    slug: "nad-regenerate-500",
    name: "NAD+ Regenerate 500",
    price: 3890000,

    expects:
      "Clients frequently describe a 'system reset' — significantly clearer cognition, physical energy restoration, and improved recovery time.",
    expectsId:
      "Klien sering menggambarkan efeknya seperti 'reset sistem' — kejernihan kognitif yang meningkat, pemulihan energi fisik, serta waktu pemulihan yang lebih cepat.",
    shortDescription:
      "Powerful anti-aging and skin rejuvenation therapy for longevity seekers.",
    shortDescriptionId:
      "Terapi anti-aging yang kuat untuk peremajaan kulit dan mendukung kesehatan jangka panjang.",
    longDescription:
      "NAD+ Regenerate 500 is a concentrated anti-aging treatment that restores skin elasticity, supports cellular turnover, and reactivates natural energy pathways. This therapy aids in reducing wrinkles, improving tone, and promoting youthful radiance from the inside out. Ideal for individuals looking to counter visible aging or post-travel exhaustion while boosting long-term vitality.",
    longDescriptionId:
      "NAD+ Regenerate 500 adalah terapi anti-aging intensif yang membantu mengembalikan elastisitas kulit, mendukung regenerasi sel, dan mengaktifkan kembali jalur energi alami tubuh. Terapi ini membantu mengurangi kerutan, memperbaiki warna kulit, serta menghadirkan tampilan yang lebih muda dari dalam. Cocok untuk Anda yang ingin mengatasi tanda penuaan atau kelelahan setelah perjalanan, sekaligus meningkatkan vitalitas jangka panjang.",
    benefits: [
      "Restores skin elasticity",
      "Supports cellular turnover",
      "Reduces wrinkles",
      "Boosts long-term vitality",
    ],
    category: "IV Therapy",
    imageId: "nad-regenerate-500",
    hue: 220,
    message:
      "Hello [uniquecode] revivindonesia.com! I'd like to book NAD+ Regenerate 500 treatment!",
    cta: "https://chat.revivindonesia.com/nadregenerate500",
    image: "/assets/images/products/r-merah.webp",
    color: "text-red-500",
    border: "border-red-100",
    gradient: "from-red-50/80",
  },
  {
    id: "nad-5",
    slug: "nad-elite-750",
    name: "NAD+ Elite 750",
    price: 4390000,
    expects:
      "Clients report the most sustained effects elevated baseline energy, sharper cognition, and improved sleep that continues 2-3 weeks.",
    expectsId:
      "Klien melaporkan efek yang paling bertahan lama berupa peningkatan energi dasar, kejernihan kognitif yang lebih baik, serta kualitas tidur yang meningkat hingga 2-3 minggu.",
    shortDescription:
      "Maximum-strength NAD+ infusion for advanced anti-aging and radiant skin.",
    shortDescriptionId:
      "Infus NAD+ dengan kekuatan maksimal untuk anti-aging tingkat lanjut dan kulit yang lebih bercahaya.",
    longDescription:
      "Our most intensive NAD+ therapy, NAD+ Elite 750 delivers deep cellular renewal, enhanced mitochondrial function, and accelerated skin regeneration. Designed for those seeking to extend healthspan and preserve youthfulness, this infusion helps reduce oxidative damage, lift mood, and produce a brighter, more even skin tone. Perfect for biohackers, executives, and long-stay visitors pursuing complete rejuvenation.",
    longDescriptionId:
      "Sebagai terapi NAD+ paling intensif, NAD+ Elite 750 memberikan regenerasi sel yang mendalam, meningkatkan fungsi mitokondria, serta mempercepat peremajaan kulit. Dirancang untuk Anda yang ingin memperpanjang kesehatan dan menjaga keremajaan, terapi ini membantu mengurangi kerusakan oksidatif, meningkatkan mood, serta menghasilkan kulit yang lebih cerah dan merata. Cocok untuk individu dengan gaya hidup aktif, profesional, maupun Anda yang menginginkan peremajaan menyeluruh.",
    benefits: [
      "Deep cellular renewal",
      "Accelerated skin regeneration",
      "Reduces oxidative damage",
      "Brighter skin tone",
    ],
    category: "IV Therapy",
    imageId: "nad-elite-750",
    hue: 120,
    message:
      "Hello [uniquecode] revivindonesia.com! I'd like to book NAD+ Elite 750 treatment!",
    cta: "https://chat.revivindonesia.com/nadelite750",
    image: "/assets/images/products/r-hijau.webp",
    color: "text-green-500",
    border: "border-green-100",
    gradient: "from-green-50/80",
  },
];
