import { IProduct } from "@/types";

export const products: IProduct[] = [
  {
    id: "1",
    name: "Automotive",
    description:
      "Comprehensive automotive solutions including fabricated components and refractory systems for the automotive industry.",
    imageUrl:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop",
    subCategories: [
      {
        id: "1-1",
        name: "Fabricated",
        description:
          "Custom fabricated automotive components and parts manufacturing with precision engineering.",
        imageUrl:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
        features: [
          "Custom Metal Fabrication",
          "Precision Welding Services",
          "Quality Control Testing",
          "Automotive Grade Materials",
        ],
      },
      {
        id: "1-2",
        name: "Refractory",
        description:
          "High-temperature resistant materials and systems for automotive manufacturing processes.",
        imageUrl:
          "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&h=300&fit=crop",
        features: [
          "Heat Resistant Materials",
          "Furnace Lining Solutions",
          "Temperature Monitoring",
          "Maintenance Services",
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Industry",
    description:
      "Industrial solutions and services for various manufacturing and processing industries.",
    imageUrl:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop",
    features: [
      "Industrial Equipment Installation",
      "Process Optimization",
      "Maintenance & Repair Services",
      "Technical Consultation",
    ],
  },
  {
    id: "3",
    name: "Security System",
    description:
      "Complete security solutions including surveillance systems and access control for industrial facilities.",
    imageUrl:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop",
    subCategories: [
      {
        id: "3-1",
        name: "CCTV",
        description:
          "Advanced closed-circuit television systems for comprehensive facility monitoring and security.",
        imageUrl:
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
        features: [
          "HD/4K Camera Systems",
          "24/7 Monitoring Solutions",
          "Remote Access Capability",
          "Motion Detection Technology",
        ],
      },
      {
        id: "3-2",
        name: "Access Control",
        description:
          "Sophisticated access control systems to secure your facilities and manage personnel entry.",
        imageUrl:
          "https://images.unsplash.com/photo-1586281010595-b6c0afc4a4a2?w=400&h=300&fit=crop",
        features: [
          "Biometric Access Systems",
          "Card Reader Integration",
          "Time Attendance Tracking",
          "Multi-level Security Zones",
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Insulating",
    description:
      "Professional insulation solutions for industrial applications, energy efficiency, and temperature control.",
    imageUrl:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop",
    features: [
      "Thermal Insulation Systems",
      "Energy Efficiency Solutions",
      "Fire Resistant Materials",
      "Installation & Maintenance",
    ],
  },
];
