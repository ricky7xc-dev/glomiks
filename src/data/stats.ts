export interface IStat {
  number: string;
  label: string;
  description?: string;
}

export const companyStats: IStat[] = [
  {
    number: "10+",
    label: "Years Experience",
    description: "Serving industries across Indonesia",
  },
  {
    number: "100+",
    label: "Projects Completed",
    description: "Successful project deliveries",
  },
  {
    number: "50+",
    label: "Expert Team Members",
    description: "Qualified professionals",
  },
  {
    number: "24/7",
    label: "Support Available",
    description: "Round-the-clock assistance",
  },
];
