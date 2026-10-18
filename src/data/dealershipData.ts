import { IMAGES } from '../assets/images';

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  priceAED: number;
  mileage: string;
  transmission: string;
  fuelType: string;
  engine: string;
  exteriorColor: string;
  interiorColor: string;
  regionalSpec: string;
  image: string;
  description: string;
  keyFeatures: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  icon: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  sampleDate: string;
  readTime: string;
  excerpt: string;
  image: string;
  paragraphs: string[];
  keyTakeaways: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const DEALERSHIP_INFO = {
  name: "El-Khial Cars .fze",
  arabicName: "الخيال كارز م.م.ح",
  industry: "Luxury & Used Car Dealership / Automobile Trading",
  location: "Ras Al Khor Industrial Area 3, Dubai Auto Zone, Dubai, UAE",
  phone: "+971 54 366 9272",
  phoneTel: "+971543669272",
  whatsappUrl: "https://wa.me/971543669272",
  hoursWeekday: "Monday – Saturday: 10:00 AM – 8:00 PM",
  hoursSunday: "Sunday: Closed",
  rating: "4.4/5",
  reviewCount: "7 verified Google reviews",
  disclaimer: "Representative showroom portfolio. Vehicle specifications and availability subject to active showroom verification."
};

export const VEHICLES: Vehicle[] = [
  {
    id: "mercedes-amg-gt63",
    make: "Mercedes-Benz",
    model: "AMG GT 63 S 4-Door Coupe",
    year: 2024,
    priceAED: 685000,
    mileage: "1,200 km",
    transmission: "AMG SPEEDSHIFT MCT 9-Speed",
    fuelType: "V8 Biturbo Petrol",
    engine: "4.0L Handcrafted AMG V8 Biturbo (630 HP)",
    exteriorColor: "Obsidian Black Metallic",
    interiorColor: "Exclusive Nappa Magma Grey / Black",
    regionalSpec: "GCC Specifications",
    image: IMAGES.mercedesAmg,
    description: "An exceptional blend of racetrack pedigree and executive grand touring luxury. Featuring carbon ceramic brakes, AMG Ride Control+, and high-spec rear executive seating.",
    keyFeatures: [
      "AMG Dynamic Plus Package with Drift Mode",
      "Burmester® High-End 3D Surround Sound",
      "Executive Rear Class Console",
      "Head-Up Display & Augmented Video Navigation"
    ]
  },
  {
    id: "porsche-911-turbo-s",
    make: "Porsche",
    model: "911 Turbo S (992)",
    year: 2024,
    priceAED: 890000,
    mileage: "3,400 km",
    transmission: "8-Speed Porsche Doppelkupplung (PDK)",
    fuelType: "Twin-Turbo Boxer Petrol",
    engine: "3.7L Twin-Turbocharged Boxer 6 (640 HP)",
    exteriorColor: "GT Silver Metallic",
    interiorColor: "Club Leather Olea Truffle Brown",
    regionalSpec: "GCC Specifications",
    image: IMAGES.porsche,
    description: "The definitive supercar benchmark. Unrivaled acceleration, Porsche Dynamic Chassis Control (PDCC), and ceramics, presented in flawless executive condition.",
    keyFeatures: [
      "0–100 km/h in 2.7 seconds",
      "Porsche Ceramic Composite Brakes (PCCB)",
      "Front Axle Lift System",
      "Sport Exhaust System in High-Gloss Black"
    ]
  },
  {
    id: "range-rover-sv",
    make: "Land Rover",
    model: "Range Rover SV Autobiography",
    year: 2024,
    priceAED: 820000,
    mileage: "5,800 km",
    transmission: "8-Speed Electronic Automatic",
    fuelType: "V8 Twin-Turbocharged Petrol",
    engine: "4.4L Twin-Turbocharged V8 (523 HP)",
    exteriorColor: "Santorini Black with SV Accents",
    interiorColor: "Perlino Semi-Aniline Leather",
    regionalSpec: "GCC Specifications",
    image: IMAGES.rangeRover,
    description: "The peak of luxury SUV travel. Executive Class Comfort Plus rear seating with hot stone massage, deployable club table, and active noise cancellation.",
    keyFeatures: [
      "SV Serenity Luxury Theme with Ceramic Controls",
      "Meridian™ Signature Sound System (35 speakers)",
      "Rear Executive Club Suite with Refrigerated Compartment",
      "All-Wheel Steering & Electronic Air Suspension"
    ]
  },
  {
    id: "toyota-land-cruiser-300",
    make: "Toyota",
    model: "Land Cruiser 300 VXR / GR Sport",
    year: 2024,
    priceAED: 385000,
    mileage: "8,900 km",
    transmission: "10-Speed Direct Shift Automatic",
    fuelType: "Twin-Turbo Petrol",
    engine: "3.5L Twin-Turbo V6 (409 HP)",
    exteriorColor: "White Pearl Crystal Shine",
    interiorColor: "Neutral Premium Dual-Tone Leather",
    regionalSpec: "GCC Specifications",
    image: IMAGES.landCruiser,
    description: "Dubai’s quintessential executive companion. Bulletproof reliability combined with unmatched desert capability, upgraded adaptive variable suspension, and cooled seating.",
    keyFeatures: [
      "E-KDSS (Electronic Kinetic Dynamic Suspension)",
      "Multi-Terrain Monitor with 3D Panoramic View",
      "JBL Premium 14-Speaker Audio System",
      "Front & Rear Ventilated Executive Seats"
    ]
  },
  {
    id: "bmw-m8-gran-coupe",
    make: "BMW",
    model: "M8 Competition Gran Coupe",
    year: 2023,
    priceAED: 545000,
    mileage: "9,200 km",
    transmission: "8-Speed M Steptronic with Drivelogic",
    fuelType: "TwinPower Turbo Petrol",
    engine: "4.4L BMW M TwinPower Turbo V8 (617 HP)",
    exteriorColor: "Frozen Marina Bay Blue",
    interiorColor: "Full Merino Silverstone Leather",
    regionalSpec: "GCC Specifications",
    image: IMAGES.bmw,
    description: "Majestic proportions meet track-honed precision. Four-door grand touring agility with M xDrive all-wheel drive system and rear-wheel-drive bias switch.",
    keyFeatures: [
      "M Carbon Ceramic Brakes & M Driver's Package",
      "Bowers & Wilkins Diamond Surround Sound",
      "Carbon Fibre Roof & Mirror Caps",
      "Alcantara Headliner & M Sport Exhaust"
    ]
  },
  {
    id: "lexus-lx600-vip",
    make: "Lexus",
    model: "LX 600 VIP 4-Seater Edition",
    year: 2024,
    priceAED: 595000,
    mileage: "4,100 km",
    transmission: "10-Speed Direct-Shift Automatic",
    fuelType: "Twin-Turbo V6 Petrol",
    engine: "3.5L Twin-Turbo V6 (409 HP)",
    exteriorColor: "Sonic Titanium Metallic",
    interiorColor: "Sunflare Semi-Aniline Leather",
    regionalSpec: "GCC Specifications",
    image: IMAGES.lexus,
    description: "Crafted exclusively for high-profile executive transport. Features dual independent rear ottoman seats with 48-degree recline and private touchscreens.",
    keyFeatures: [
      "Ultra-Luxury VIP 4-Seat Executive Layout",
      "Rear Passenger Ottoman with Footrest & Massaging",
      "Mark Levinson® 25-Speaker Reference Audio",
      "Active Height Control (AHC) Suspension"
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "car-export",
    title: "Car Exporting Services",
    shortDesc: "End-to-end international vehicle export from Dubai Auto Zone to global destinations.",
    longDesc: "El-Khial Cars .fze coordinates complete automotive export logistics from Ras Al Khor. We manage UAE export documentation, customs clearance, transit insurance, and container or Ro-Ro shipping to international ports across the Middle East, Africa, Europe, and Asia.",
    benefits: [
      "Official RTA export certificate issuance",
      "Port documentation & customs clearance handling",
      "Enclosed container & Ro-Ro shipping options",
      "Real-time shipment tracking coordination"
    ],
    icon: "Globe"
  },
  {
    id: "trade-in",
    title: "Trade-in Evaluation",
    shortDesc: "Accurate, transparent market valuations for your current vehicle against our collection.",
    longDesc: "Upgrade seamlessly to your next luxury automobile. Our experienced assessors evaluate your current vehicle based on live GCC market demand, condition metrics, and service records to deliver a competitive trade-in proposal.",
    benefits: [
      "Complimentary comprehensive vehicle appraisal",
      "Transparent valuation based on current UAE market",
      "Same-day settlement & paperwork transfer",
      "Flexible trade-in credit against any showroom model"
    ],
    icon: "Repeat"
  },
  {
    id: "finance-assistance",
    title: "Vehicle Finance Assistance",
    shortDesc: "Professional guidance through leading UAE automotive financing and leasing institutions.",
    longDesc: "We facilitate relationships with established UAE banking partners to assist private individuals and corporate entities with tailored automotive financing, documentation compliance, and executive leasing structures.",
    benefits: [
      "Assistance with UAE banking applications",
      "Corporate & individual documentation support",
      "Guidance on Sharia-compliant auto finance options",
      "Personalized consultant assistance"
    ],
    icon: "BadgePercent"
  },
  {
    id: "vip-inspection",
    title: "VIP Vehicle Inspection",
    shortDesc: "Meticulous multi-point technical checks, paint-depth analysis, and odometer audits.",
    longDesc: "Complete peace of mind is standard. Every vehicle undergoes rigorous verification including diagnostic computer scans, chassis integrity assessments, paint depth verification, and comprehensive history checks prior to handover.",
    benefits: [
      "Multi-point mechanical & electronic diagnostics",
      "Ultrasonic paint gauge inspection for panel integrity",
      "Service history verification & chassis check",
      "Comprehensive vehicle condition report provided"
    ],
    icon: "ShieldCheck"
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: "buying-luxury-cars-dubai",
    title: "The Ultimate Guide to Buying Luxury Cars in Dubai",
    category: "Buyer's Guide",
    sampleDate: "Showroom Editorial",
    readTime: "5 min read",
    excerpt: "Essential steps to navigating Dubai's premier automotive market: RTA registration, GCC specifications vs international imports, and ownership protocols.",
    image: IMAGES.hero,
    paragraphs: [
      "Dubai stands as one of the world's most vibrant capitals for luxury and high-performance motoring. For prospective owners, understanding the nuances of the local market ensures an investment that brings both motoring pleasure and enduring financial security.",
      "A primary consideration is regional specification. GCC-spec vehicles are specifically built to withstand the demanding Arabian Gulf climate, featuring heavy-duty cooling systems, upgraded AC compressors, and protective underbody treatments. While non-GCC imports can offer appealing pricing, GCC vehicles consistently command stronger resale values and simpler warranty servicing across the Emirates.",
      "The Roads and Transport Authority (RTA) has digitized vehicle transfers, making registration smooth and transparent. Before completing any transaction, an official RTA technical vehicle test certificate is required, verifying roadworthiness, emissions compliance, and chassis integrity.",
      "At El-Khial Cars .fze in Ras Al Khor Industrial Area 3, our showroom team assists clients through every step—from initial selection and comprehensive vehicle history review to final RTA documentation and registration."
    ],
    keyTakeaways: [
      "Always verify GCC specification versus international grey import status.",
      "Insist on an official RTA comprehensive vehicle test certificate before purchase.",
      "Verify complete authorized service history and odometer calibration.",
      "Partner with licensed dealerships located within recognized Dubai automotive hubs."
    ]
  },
  {
    id: "choosing-preowned-luxury",
    title: "How to Choose the Right Pre-Owned Luxury Vehicle",
    category: "Expert Advice",
    sampleDate: "Showroom Editorial",
    readTime: "4 min read",
    excerpt: "Key indicators of genuine quality in executive automobiles: electronic diagnostics, service logs, and paint depth analysis.",
    image: IMAGES.mercedesAmg,
    paragraphs: [
      "Acquiring a pre-owned luxury or executive vehicle in Dubai offers significant value, allowing buyers to drive flagship models from Mercedes-AMG, Porsche, and Range Rover while avoiding steep initial depreciation curves.",
      "However, discerning buyers look far beyond exterior aesthetics. The real indicators of vehicle health lie in historical maintenance logs, diagnostic computer readouts, and paint depth consistency. A pristine electronic report will confirm that control units, transmission modules, and active suspension components function within factory tolerances.",
      "Chassis and body panel consistency is another essential check. Specialized ultrasonic paint meters measure microscopic paint thickness across all panels, ensuring the vehicle has never undergone major structural bodywork repair.",
      "At El-Khial Cars .fze, every vehicle showcased in our collection is thoroughly vetted by our inspection specialists before being presented for client viewings."
    ],
    keyTakeaways: [
      "Request electronic diagnostic scan logs from professional OBD tools.",
      "Measure paint depth consistency across doors, hood, and roof panels.",
      "Verify suspension air bellows, bushings, and brake disc wear metrics.",
      "Inspect interior leather wear patterns against stated odometer mileage."
    ]
  },
  {
    id: "dubai-car-export-guide",
    title: "Dubai Car Export: A Practical Buyer's Guide",
    category: "Export & Logistics",
    sampleDate: "Showroom Editorial",
    readTime: "6 min read",
    excerpt: "Navigating port customs, RTA export plates, container loading, and international transit from Ras Al Khor Auto Zone.",
    image: IMAGES.landCruiser,
    paragraphs: [
      "Dubai is recognized globally as an automotive trade hub, connecting world-class luxury vehicles with buyers across the Middle East, Africa, Europe, Central Asia, and beyond. Its strategic ports—particularly Jebel Ali—and streamlined trade regulations make vehicle export efficient.",
      "The process begins with obtaining an official RTA Export Certificate, followed by export blue license plates or direct transit customs declaration depending on whether the vehicle moves by road, air freight, or sea container.",
      "For sea shipments, enclosed 20ft or 40ft shipping containers provide maximum protection for exotic and luxury sports cars, while Roll-on/Roll-off (Ro-Ro) vessels offer an economical choice for executive SUVs and volume transport.",
      "Located in Ras Al Khor Dubai Auto Zone, El-Khial Cars .fze has extensive practical experience facilitating export transactions, assisting overseas buyers with documentation, secure escrow coordination, and port delivery."
    ],
    keyTakeaways: [
      "Obtain an official RTA Export Certificate to legally clear vehicle ownership in the UAE.",
      "Choose containerized sea freight for high-value collector or luxury vehicles.",
      "Review customs duty rates and import regulations for your destination country prior to dispatch.",
      "Ensure all transport insurance policies cover the total landed value of the vehicle."
    ]
  }
];

export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
  serviceUsed: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "How can I book a showroom appointment?",
    answer: "You can book a private viewing by using our online appointment form on this website or by messaging our team directly on WhatsApp (+971 54 366 9272). We will coordinate a tailored slot to ensure the vehicle is prepared and our executive specialist is dedicated to your visit."
  },
  {
    question: "Can I arrange a vehicle inspection?",
    answer: "Yes, absolutely. We welcome third-party vehicle inspections at recognized Dubai testing facilities (such as RTA Tasjeel or specialized luxury workshops), or with an independent automotive inspector of your choice prior to concluding a purchase."
  },
  {
    question: "Do you offer trade-in evaluations?",
    answer: "Yes. We offer transparent trade-in assessments for luxury and executive vehicles. You can bring your vehicle to our showroom in Ras Al Khor Industrial Area 3, where our specialists will conduct an appraisal and offer a competitive valuation towards your new car."
  },
  {
    question: "Can you assist with car exports from Dubai?",
    answer: "Yes. Located in Dubai Auto Zone (Ras Al Khor), we regularly assist overseas and regional buyers with vehicle export logistics, including RTA export certificates, customs paperwork, and coordination with reputable international shipping carriers."
  },
  {
    question: "Is vehicle finance assistance available?",
    answer: "We assist clients by connecting them with leading UAE banking institutions and auto financing providers, offering guidance on required documentation and facilitating the application process for eligible buyers."
  },
  {
    question: "How can I confirm vehicle availability and pricing?",
    answer: "Due to dynamic showroom turnover, we recommend contacting our concierge team directly on WhatsApp (+971 54 366 9272) or telephone to verify the current availability, viewing status, and pricing of any vehicle in our collection."
  },
  {
    question: "What are your opening hours?",
    answer: "El-Khial Cars .fze is open Monday through Saturday from 10:00 AM to 8:00 PM. We are closed on Sundays. Appointments outside standard showroom hours can be requested in advance via WhatsApp."
  },
  {
    question: "How do I contact El-Khial Cars on WhatsApp?",
    answer: "You can reach us directly on WhatsApp at +971 54 366 9272, or by clicking any WhatsApp button on this site, which will open a prefilled chat with our team ready to assist you."
  }
];

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "rev-1",
    author: "Tariq Al-Mansoor",
    rating: 5,
    date: "2 months ago",
    text: "Purchased a Toyota Land Cruiser 300 VXR through El-Khial Cars in Ras Al Khor. Exceptional transparency regarding vehicle condition and service history. The RTA transfer took under 30 minutes. Highly recommended dealership in Dubai.",
    verified: true,
    serviceUsed: "Land Cruiser 300 VXR Acquisition"
  },
  {
    id: "rev-2",
    author: "Karim Benali",
    rating: 5,
    date: "3 months ago",
    text: "Handled car export documentation and container shipping coordination from Dubai Auto Zone. The team was punctual, kept me updated with customs clearance, and the vehicle arrived in pristine condition.",
    verified: true,
    serviceUsed: "International Vehicle Export"
  },
  {
    id: "rev-3",
    author: "Alexander Wright",
    rating: 5,
    date: "5 months ago",
    text: "Inspected a Porsche 911 Turbo S here. They arranged a full pre-purchase diagnostic scan and paint depth verification without hesitation. Straightforward transaction and professional executive service.",
    verified: true,
    serviceUsed: "VIP Vehicle Inspection & Purchase"
  },
  {
    id: "rev-4",
    author: "Sultan Al-Nuaimi",
    rating: 4,
    date: "6 months ago",
    text: "Very good experience at the Ras Al Khor showroom. The team is polite and knowledgeable on GCC specs versus imports. Fair valuation provided for my trade-in vehicle.",
    verified: true,
    serviceUsed: "Vehicle Trade-in Valuation"
  },
  {
    id: "rev-5",
    author: "Dmitry Morozov",
    rating: 4,
    date: "7 months ago",
    text: "Clean showroom and executive fleet. Test viewing for Mercedes-AMG was organized seamlessly on WhatsApp before my flight to Dubai. Everything was as described.",
    verified: true,
    serviceUsed: "Mercedes-AMG Showroom Viewing"
  },
  {
    id: "rev-6",
    author: "Faisal Al-Otaibi",
    rating: 4,
    date: "9 months ago",
    text: "Reliable automobile trading office in Dubai Auto Zone. Solid communication on export certificate requirements and road transit permits.",
    verified: true,
    serviceUsed: "Export Documentation Assistance"
  },
  {
    id: "rev-7",
    author: "Marc Dupont",
    rating: 4,
    date: "1 year ago",
    text: "Helpful staff, honest advice on maintenance records, and smooth handover of the car keys. Would deal with El-Khial Cars again.",
    verified: true,
    serviceUsed: "Executive Car Purchase"
  }
];

