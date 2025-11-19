export interface CompanyDetails {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode?: string;
  country: string;
  hours: string;
  googleMapsQuery: string;
  services: Array<{ name: string; description: string }>;
  equipment: Array<{ name: string; description: string }>;
}

export const company: CompanyDetails = {
  name: "LV Brothers Developers",
  description: "We undertake Real Estate, civil construction, contracting works, residential and commercial building works and supply earth moving equipment with experienced operators. We deliver reliable, on‑time projects with quality workmanship and safe practices.",
  phone: "+91 7207944303",
  email: "info@lvbrothers.in",
  addressLine1: "SM Residency, beside Tirumala High School",
  addressLine2: "Lawsons Bay Colony, Pedda Waltair",
  city: "Vizag(Visakhapatnam)",
  state: "Andhra Pradesh",
  pincode: "530017",
  country: "India",
  hours: "Mon–Sat: 10:00 AM – 6:00 PM",
  googleMapsQuery: "LV Brothers Developers, India",
  services: [
    {
      name: "Real Estate",
      description: "We handle real estate projects from concept to handover, combining experienced engineers, transparent project management and rigorous safety practices to deliver quality on time.",
    },
    {
      name: "Contract Works",
      description: "We manage contract works end-to-end—clear scopes, competitive bids, certified teams and systematic quality & safety checks to ensure projects are delivered as promised.",
    },
    {
      name: "Civil Construction & Contracting",
      description: "Our civil construction and contracting services pair engineering excellence with skilled crews and robust safety controls to build durable infrastructure with predictable outcomes.",
    },
    {
      name: "Residential & Commercial Building Works",
      description: "We deliver homes and commercial spaces with attention to structural integrity, finishes and compliance—managed by certified engineers and supervised teams who prioritize safety and client satisfaction.",
    },
    {
      name: "Site Development & Leveling",
      description: "From survey and grading to drainage and compaction, our teams prepare sites precisely and safely so your project begins on a solid foundation.",
    },
    {
      name: "Road & Foundation Works",
      description: "We execute roadworks and foundation systems using correct materials, skilled execution and rigorous quality checks to meet design specifications and long-term performance requirements.",
    },
    {
      name: "Construction",
      description: "Covering planning, civil works, MEP coordination and finishes, our construction teams deliver projects with disciplined execution, budget control and strict safety oversight.",
    },
    {
      name: "Earth Movers on Hire (Hourly/Daily/Contract)",
      description: "Choose from a modern fleet for short- or long-term requirements. Every machine is operated by trained personnel and supported by safety-first procedures to maximize productivity and minimize downtime.",
    },
  ],
  equipment: [
    {
      name: "JCB Excavators & Loaders",
      description: "Our fleet offers a powerful and versatile range of machinery to handle every stage of site development, excavation, and construction. From JCB backhoe loaders and Tata Hitachi hydraulic excavators to cranes, dozers, tractors with trolleys, water tankers, and cement mixers, we provide the right equipment for every job. Whether it’s excavation, trenching, lifting, grading, rock breaking, or material transport, each machine is operated by skilled professionals to ensure efficiency, safety, and precision. Available on hourly, daily, or contract basis, our equipment and attachments are designed to deliver faster and more reliable results, making your projects smoother and more productive.",
    },
  ],
  tagline: ""
};


