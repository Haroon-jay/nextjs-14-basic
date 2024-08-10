declare type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: Record<string, any>;
  phone: string;
  website: string;
  company: Record<string, any>;
};

declare interface CardWrapperProps {
  children?: React.ReactNode;
  title?: string;
}
