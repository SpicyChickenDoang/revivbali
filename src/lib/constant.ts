import type { LucideProps } from "lucide-react";
import { Zap, Sparkles, BatteryCharging, Plane, Dna } from "lucide-react";

export const iconMap: { [key: string]: React.ElementType<LucideProps> } = {
  "nad-reboot-100": Sparkles,
  "nad-restore-200": BatteryCharging,
  "nad-revive-250": Plane,
  "nad-regenerate-500": Dna,
  "nad-elite-750": Zap,
};

export const slugToColor: { [key: string]: string } = {
  "nad-reboot-100": "text-blue-400",
  "nad-restore-200": "text-purple-500",
  "nad-revive-250": "text-orange-500",
  "nad-regenerate-500": "text-red-500",
  "nad-elite-750": "text-green-500",
};

export const slugToGradient: { [key: string]: string } = {
  "nad-reboot-100": "from-blue-500/10 to-card",
  "nad-restore-200": "from-purple-500/10 to-card",
  "nad-revive-250": "from-orange-500/10 to-card",
  "nad-regenerate-500": "from-red-500/10 to-card",
  "nad-elite-750": "from-green-500/10 to-card",
};

export const buttonToBorder: { [key: string]: string } = {
  "nad-reboot-100": "border-blue-500",
  "nad-restore-200": "border-purple-500",
  "nad-revive-250": "border-orange-500",
  "nad-regenerate-500": "border-red-500",
  "nad-elite-750": "border-green-500",
};

export const softBorder: { [key: string]: string } = {
  "nad-reboot-100": "border-blue-200",
  "nad-restore-200": "border-purple-200",
  "nad-revive-250": "border-orange-200",
  "nad-regenerate-500": "border-red-200",
  "nad-elite-750": "border-green-200",
};

export const carouselImages = [
  {
    id: 1,
    src: "/assets/images/people/_1.webp",
    alt: "three girls smiling having iv drips",
  },
  {
    id: 2,
    src: "/assets/images/people/_2.webp",
    alt: "a family having iv drips by the pool side",
  },
  {
    id: 3,
    src: "/assets/images/people/_3.webp",
    alt: "three guys chilling having iv drips",
  },
  {
    id: 4,
    src: "/assets/images/people/_4.webp",
    alt: "a family having iv drips by the beach side",
  },
  {
    id: 5,
    src: "/assets/images/people/_5.webp",
    alt: "a cople having iv drips by the pool side",
  },
  {
    id: 6,
    src: "/assets/images/people/_6.webp",
    alt: "a family of 6 having iv drips by the pool side",
  },
  {
    id: 8,
    src: "/assets/images/people/_8.webp",
    alt: "a school of adults having iv drips",
  },
];

export const userTesti = [
  {
    photos: "/assets/images/testimonies/_6.webp",
    image: "/assets/images/testimonies/user-one.webp",
    country: "/assets/images/indonesian.png",
    name: "Chloe Goldstein",
    comment:
      "“My friend and I had an incredible in-home visit with Nurse Nadia. We were able to make an appointment with her with little notice and she came directly to our hotel room.”",
  },
  {
    photos: "/assets/images/testimonies/_2.webp",
    image: "/assets/images/testimonies/user-two.webp",
    country: "/assets/images/indonesian.png",
    name: "Tommy Hilfigher",
    comment:
      "“Professional and trustworthy service. The packaging was secure, and the medicine was exactly as prescribed. I feel safe ordering from here.”",
  },
  {
    photos: "/assets/images/testimonies/_3.webp",
    image: "/assets/images/testimonies/user-three.webp",
    country: "/assets/images/indonesian.png",
    name: "Alexandra Ivan",
    comment:
      "“Amazing service, 10/10 recommend! Nurse Nadia was very professional, helpful and friendly! Felt so much better after the infusion a pleasant experience with them”",
  },
  {
    photos: "/assets/images/testimonies/_4.webp",
    image: "/assets/images/testimonies/user-four.webp",
    country: "/assets/images/indonesian.png",
    name: "Amanda Teixeira",
    comment:
      "“Amazing service. The nurse Louisa was so kind and sweet with me, super patient, explained me everything, keep me calm and comfortable.”",
  },
  {
    photos: "/assets/images/testimonies/_5.webp",
    image: "/assets/images/testimonies/user-five.webp",
    country: "/assets/images/indonesian.png",
    name: "Justin William",
    comment:
      "“I was impressed by how fast the delivery was! Ordered my medicine in the evening and it arrived at my villa within an hour. Truly reliable service in Bali.”",
  },
  {
    photos: "/assets/images/testimonies/_6.webp",
    image: "/assets/images/testimonies/user-six.webp",
    country: "/assets/images/indonesian.png",
    name: "Tarryn Dugan",
    comment:
      "“I was visited by Bagus today after Bali Belly symptoms all night and day. He was professional, caring, asked the right questions and explained everything clearly. I highly recommended his home service! ”",
  },
];

export const locationsFooter = [
  {
    image: "/assets/images/map/seminyak.webp",
    address: "Jl. Legian No.369 X, Legian, Kuta, Badung Regency, Bali 80361",
    name: "Reviv Seminyak",
    slogan: "Find Out Why Patients Love Us",
    linkMaps: "https://maps.app.goo.gl/VZEhZDW8sAadNgdh6",
    rating: "4.9",
    review: "396",
  },
  {
    image: "/assets/images/map/jimbaran.webp",
    address:
      "Jl. Puri Gading, Jimbaran, South Kuta, Badung Regency, Bali 80361",
    name: "Reviv Jimbaran",
    slogan: "Discover Our Patient's Stories",
    linkMaps: "https://maps.app.goo.gl/kAiDoSfpm1fRfWTcA",
    rating: "5.0",
    review: "516",
  },
  {
    image: "/assets/images/map/canggu.webp",
    address:
      "Jl. Raya Canggu No.12, Canggu, Kec. Kuta Utara, Kabupaten Badung, Badung, Bali 80351",
    name: "Reviv Canggu",
    slogan: "See Our Patient's Experiences",
    linkMaps: "https://maps.app.goo.gl/JmcKg5kFWsdQPVnu5",
    rating: "5.0",
    review: "338",
  },
  {
    image: "/assets/images/map/sanur.webp",
    address:
      "Jl. Batur Sari No.33, Sanur Kauh, Denpasar Selatan, Kota Denpasar, Bali 80228",
    name: "Reviv Sanur",
    slogan: "Read Our Top Reviews",
    linkMaps: "https://maps.app.goo.gl/63Ls1VN8p8khiHW37?g_st=ic",
    rating: "5.0",
    review: "345",
  },
  {
    image: "/assets/images/map/umalas.webp",
    address:
      "Jl. Umalas 1 No.6, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung, Bali 80361",
    name: "Reviv Umalas",
    slogan: "Explore Our Stellar Ratings",
    linkMaps: "https://maps.app.goo.gl/EqiKuhShnbneW4Wh8?g_st=ic",
    rating: "5.0",
    review: "546",
  },
  {
    image: "/assets/images/map/pererenan.webp",
    address:
      "Jl. Jantuk Angsa Desa No.20, Pererenan, Kec. Mengwi, Kabupaten Badung, Bali 80351",
    name: "Reviv Pererenan",
    slogan: "Check Our Patient's Reviews",
    linkMaps: "https://maps.app.goo.gl/fRJuxZEuW6gAxxV97?g_st=ic",
    rating: "5.0",
    review: "442",
  },
  {
    image: "/assets/images/map/tibubeneng.webp",
    address:
      "Jl. Pantai Berawa No.93, Tibubeneng, Kec. Kuta Utara, Kabupaten Badung, Bali 80363",
    name: "Reviv Tibubeneng",
    slogan: "Fast Help In Bali's Busiest Shortcut",
    linkMaps: "https://maps.app.goo.gl/eEU5icmLmCPQjm299",
    rating: "5.0",
    review: "218",
  },
  {
    image: "/assets/images/map/lombok.webp",
    address:
      "Jl. Batu Jangkih, Kec. Praya Bar. Daya, Kabupaten Lombok Tengah, Lombok, Nusa Tenggara Bar. 83571",
    name: "Reviv Lombok",
    slogan: "When Tourist Fall Sick, We Move Fast",
    linkMaps: "https://maps.app.goo.gl/8hhdync7x6MYPYhj6",
    rating: "5.0",
    review: "9",
  },
];

export const clinicLocations = [
  {
    image: "/assets/images/map/pererenan.webp",
    branch: "Pererenan",
    address:
      "Jl. Jantuk Angsa Desa No.20, Pererenan, Kec. Mengwi, Kabupaten Badung, Bali 80351",
    name: "Pharmacy 24/7 Med Delivery & IV Drip. Home Service Only.",
    urlMaps: "https://maps.app.goo.gl/vD88GGdM933QJF7G8",
    phoneNumber: "082221122311",
    prewritten:
      "https://api.whatsapp.com/send?phone=6282221122311&text=Hello+pharmacybali.com+by+Cepat+Sehat+Clinic+in+Pererenan.+I%27m+interested+in+learning+more+about+your+IV+drip+services.+Could+you+provide+some+details%3F+Thank+you",
  },
  {
    image: "/assets/images/map/tibubeneng.webp",
    branch: "Tibubeneng",
    address:
      "Jl. Pantai Berawa No.93, Tibubeneng, Kec. Kuta Utara, Kabupaten Badung, Bali 80363",
    name: "Bali belly, Immunity, Hangover IV Drip Homecare & Pharmacy 24/7",
    urlMaps: "https://maps.app.goo.gl/eEU5icmLmCPQjm299",
    phoneNumber: "081225259993",
    prewritten:
      "https://api.whatsapp.com/send?phone=6285819292434&text=Hello+ivdripbali.com+by+Cepat+Sehat+Clinic+in+Berawa.+I%27m+interested+in+learning+more+about+your+IV+drip+services.+Could+you+provide+some+details%3F+Thank+you ",
  },
  {
    image: "/assets/images/map/umalas-iv.webp",
    branch: "Umalas",
    address:
      "Jl. Umalas 1 No.6, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung, Bali 80361",
    name: "IV Drip Bali Home Service - Bali Belly - Hangover - Immune Booster",
    urlMaps: "https://maps.app.goo.gl/Fu83Nok9ZG1hesfRA",
    phoneNumber: "081225259993",
    prewritten:
      "https://api.whatsapp.com/send?phone=6285819292434&text=Hello+ivdripbali.com+by+Cepat+Sehat+Clinic+in+Umalas.+I%27m+interested+in+learning+more+about+your+IV+drip+services.+Could+you+provide+some+details%3F+Thank+you",
  },
  {
    image: "/assets/images/map/sanur.webp",
    branch: "Denpasar",
    address:
      "Jl. Batur Sari No.33, Sanur Kauh, Denpasar Selatan, Kota Denpasar, Bali 80228",
    name: "24/7 Pharmacy Bali - Online Med Delivery Service & IV Drips",
    urlMaps: "https://maps.app.goo.gl/LjGyvWc2URJ1mMAB7",
    phoneNumber: "082221122311",
    prewritten:
      "https://api.whatsapp.com/send?phone=6282221122311&text=Hello+pharmacybali.com+by+Cepat+Sehat+Clinic+in+Sanur.+I%27m+interested+in+learning+more+about+your+IV+drip+services.+Could+you+provide+some+details%3F+Thank+you",
  },
  {
    image: "/assets/images/map/seminyak.webp",
    branch: "Seminyak",
    address: "Jl. Legian No.369, Legian, Kuta, Badung Regency, Bali 80361",
    name: "24/7 Bali Belly Home Doctor & Infusion Therapy",
    urlMaps: "https://maps.app.goo.gl/7FqTR882ZMwrWB1g9",
    phoneNumber: "081225259993",
    prewritten:
      "https://api.whatsapp.com/send?phone=6281225259993&text=Hello+ivdripbali.com+by+Cepat+Sehat+Clinic+in+Seminyak.+I%27m+interested+in+learning+more+about+your+IV+drip+services.+Could+you+provide+some+details%3F+Thank+you",
  },
  {
    image: "/assets/images/map/canggu.webp",
    branch: "Canggu",
    address:
      "Jl. Raya Canggu No.14, Canggu, Kec. Kuta Utara, Kabupaten Badung, Bali 80351",
    name: "24/7 Apotek Online Pharmacy - Med Delivery - Doctor & IV Drip Home Service",
    urlMaps: "https://maps.app.goo.gl/Qr3AdJ5ix8prizqe7",
    phoneNumber: "082221122311",
    prewritten:
      "https://api.whatsapp.com/send?phone=6282221122311&text=Hello+pharmacybali.com+by+Cepat+Sehat+Clinic+in+Canggu.+I%27m+interested+in+learning+more+about+your+IV+drip+services.+Could+you+provide+some+details%3F+Thank+you",
  },
  {
    image: "/assets/images/map/umalas-clinic.webp",
    branch: "Umalas (BGM)",
    address:
      "Jl. Umalas 1 No.6, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung, Bali 80361",
    name: "Klinik Pratama Bali General Medical",
    urlMaps: "https://maps.app.goo.gl/B8mAVXWoHYzLLbKSA",
    phoneNumber: "081225259993",
    prewritten:
      "https://api.whatsapp.com/send?phone=6281225259993&text=Hello+Klinik+BGM+Umalas.+I%27m+interested+in+learning+about+your+services.+Could+you+provide+some+details%3F+Thank+you",
  },
  {
    image: "/assets/images/map/jimbaran.webp",
    branch: "Jimbaran",
    address:
      "Jl. Raya Puri Gading II No.20, Jimbaran, Kuta, Kabupaten Badung, Bali 80361",
    name: "IV Drip Clinic - Mobile Home Service Bali (24/7) - Bali Belly - Immunity - Hangover",
    urlMaps: "https://maps.app.goo.gl/R1RWVjutrXUCkQ6v8",
    phoneNumber: "081225259993",
    prewritten:
      "https://api.whatsapp.com/send?phone=6285819292434&text=Hello+ivdripbali.com+by+Cepat+Sehat+Clinic+in+Jimbaran.+I%27m+interested+in+learning+more+about+your+IV+drip+services.+Could+you+provide+some+details%3F+Thank+you",
  },
  {
    image: "/assets/images/map/lombok-clinic.webp",
    branch: "Lombok",
    address:
      "Jl. Rangkap 2, Kuta, Kec. Pujut, Kabupaten Lombok Tengah, Nusa Tenggara Bar. 83573",
    name: "IV Drip Clinic - Mobile Home Service Lombok (24/7)",
    urlMaps: "https://maps.app.goo.gl/wYiDxFaTdd14WPbG6",
    phoneNumber: "082221122311",
    prewritten:
      "https://api.whatsapp.com/send?phone=6282221122311&text=Hello%20Cepat%20Sehat%20Clinic%20in%20Lombok.%20I%27m%20interested%20in%20learning%20more%20about%20your%20IV%20drip%20services.%20Could%20you%20provide%20some%20details%3F%20Thank%20you",
  },
  {
    image: "/assets/images/map/jakarta.webp",
    branch: "Jakarta",
    address:
      "Jl. Peternakan No.13, RT.5/RW.1, Kp. Tengah, Kec. Kramat jati, Jakarta, Daerah Khusus Ibukota Jakarta 13540",
    name: "24/7 Klinik Cepat Sehat - Homecare & Apotek Delivery",
    urlMaps: "https://maps.app.goo.gl/2qP1jgNCvcRqJfWm7",
    phoneNumber: "082221122311",
    prewritten:
      "https://api.whatsapp.com/send?phone=6282221122311&text=Hello+Klinik+Cepat+Sehat+Jakarta.+I%27m+interested+in+learning+about+your+services.+Could+you+provide+some+details%3F+Thank+you",
  },
];

export const whatsappNumber = "6282395439534";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "RevivIndonesia",
  description:
    "NAD+ anti-aging therapy specialists in Bali, Indonesia. IV NAD+ treatments from 100mg to 750mg delivered to your villa.",
  url: "https://revivindonesia.com",
  telephone: "+62-823-9543-9534",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bali",
    addressCountry: "ID",
  },
  medicalSpecialty: "Anti-Aging Medicine",
  availableService: {
    "@type": "MedicalTherapy",
    name: "NAD+ IV Therapy",
    description:
      "Intravenous NAD+ therapy for cellular regeneration and anti-aging",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
};

export const speakableSpecification = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "NAD+ Therapy Bali | Reviv Indonesia",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".llm-citation", "h1", ".hero-sub"],
  },
};

export const medicalOrganization = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "Reviv Indonesia",
  url: "https://revivindonesia.com",
  logo: "https://revivindonesia.com/logo.png",
  telephone: "+6282395439534",
  medicalSpecialty: ["Regenerative Medicine", "Anti-Aging Medicine"],
  areaServed: {
    "@type": "Place",
    name: "Bali, Indonesia",
  },
  employee: [
    {
      "@type": "Physician",
      name: "dr. Cahyadi Surya, MPH",
      medicalSpecialty: ["Internal Medicine", "Anti-Aging Medicine"],
      credential: "STR.3111100220155405",
      alumniOf: "Universitas Gadjah Mada",
    },
    {
      "@type": "Physician",
      name: "dr. Yahya Albar",
      medicalSpecialty: ["Internal Medicine", "Anti-Aging Medicine"],
      credential: "STR.9811809221170965",
      alumniOf: "Universitas Yarsi",
    },
    {
      "@type": "Physician",
      name: "dr. Ni Wayan Mega Rajuni",
      medicalSpecialty: ["Internal Medicine", "Anti-Aging Medicine"],
      credential: "STR.JI00000727635027",
      alumniOf: "Universitas Warmadewa",
    },
    {
      "@type": "Physician",
      name: "dr. Lorenzo Alexander Pradhana",
      medicalSpecialty: ["Internal Medicine", "Anti-Aging Medicine"],
      credential: "STR.ON0001265548090",
      alumniOf: "Nanjing Medical University",
    },
    {
      "@type": "Physician",
      name: "dr. Anak Agung Gede Wahyu Prabawa",
      medicalSpecialty: ["Internal Medicine", "Anti-Aging Medicine"],
      credential: "STR.WK00000297681330",
      alumniOf: "Universitas Kristen Duta Wacana Yogyakarta",
    },
  ],
};

export const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who supervises NAD+ infusions at Reviv Indonesia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All NAD+ infusions at Reviv Indonesia are supervised by licensed Indonesian doctors holding valid STR (Surat Tanda Registrasi) credentials from the Indonesian Medical Council. Each physician has completed specialized training in regenerative medicine and NAD+ protocol administration.",
      },
    },
    {
      "@type": "Question",
      name: "How can I verify a doctor's STR credentials?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can verify any doctor's STR number through the Indonesian Medical Council (KKI) online registry at kki.go.id. Enter the STR number to confirm active registration status and medical specialty.",
      },
    },
    {
      "@type": "Question",
      name: "What medical screening happens before NAD+ therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every patient undergoes a pre-infusion medical assessment covering cardiovascular health, current medications, contraindications, metabolic status, and treatment goals. This screening determines eligibility and personalizes NAD+ dosing.",
      },
    },
    {
      "@type": "Question",
      name: "What areas does Reviv Indonesia cover for NAD+ therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reviv Indonesia provides NAD+ infusion therapy across Bali including Canggu, Seminyak, Ubud, Sanur, Nusa Dua, and Uluwatu. Home-visit and hotel-visit services are available in all coverage areas.",
      },
    },
    {
      "@type": "Question",
      name: "Why does NAD+ require specialized physicians?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NAD+ is a metabolic intervention, not a standard IV drip. Effective administration requires understanding of mitochondrial function, cellular metabolism, drug interactions, contraindications, and infusion rate management to ensure patient safety and therapeutic benefit.",
      },
    },
  ],
};
