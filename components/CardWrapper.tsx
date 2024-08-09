import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface CardWrapperProps {
  children: React.ReactNode;
}

const CardWrapper = ({ children }: CardWrapperProps) => {
  return (
    <Card className="shadow-md mt-1">
      <CardContent className="pt-1">{children}</CardContent>
    </Card>
  );
};

export default CardWrapper;
