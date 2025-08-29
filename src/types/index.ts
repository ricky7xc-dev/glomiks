export interface ICompanyInfo {
  name: string;
  fullName: string;
  vision: string;
  mission: string;
  description: string;
  services: string[];
  industries: string[];
  established?: string;
  headquarters?: string;
}

export interface IContactInfo {
  address: string;
  phone: string;
  email: string;
  website: string;
}

export interface IContactFormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface IButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

export interface ICardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export interface IProductCardProps {
  product: IProduct;
}

export interface IProductCategory {
  id: string;
  name: string;
  description: string;
  icon?: string;
  products: IProduct[];
}

export interface IProductFilter {
  category?: string;
  hasSubCategories?: boolean;
  searchTerm?: string;
}

export interface ISubCategory {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  features: string[];
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  subCategories?: ISubCategory[];
  features?: string[];
}

export interface IClient {
  id: string;
  name: string;
  logoUrl: string;
  industry?: string;
}

export interface ICompanyInfo {
  name: string;
  fullName: string;
  vision: string;
  description: string;
  services: string[];
  industries: string[];
  established?: string;
  headquarters?: string;
}

export interface IContactInfo {
  address: string;
  phone: string;
  email: string;
  website: string;
}

export interface IContactFormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface IButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

export interface ICardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export interface IProductCardProps {
  product: IProduct;
}
