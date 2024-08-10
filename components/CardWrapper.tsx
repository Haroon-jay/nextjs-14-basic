import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CardWrapper = ({ children, title }: CardWrapperProps) => {
  return (
    <Card className="shadow-md mt-1">
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent className="pt-1">{children}</CardContent>
    </Card>
  );
};

export default CardWrapper;
