"use client";

import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { sleep } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import CardWrapper from "@/components/CardWrapper";
import CustomInput from "@/components/form/CustomInput";

// dynamic, reusable form component

interface Props<T extends z.ZodType<any, any>> {
  defaultValues: z.infer<T>;
  schema: T;
  onSubmit?: (data: z.infer<T>) => void;
  fields: {
    name: string;
    label: string;
    type?: string;
  }[];
  cardWrapperProps?: CardWrapperProps;
}

const CustomForm = <T extends z.ZodType<any, any>>({
  defaultValues,
  schema,
  onSubmit,
  fields,
  cardWrapperProps = { children: null },
}: Props<T>) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const handleSubmit = async (data: z.infer<T>) => {
    if (onSubmit) {
      onSubmit?.(data);
      return;
    }
    setLoading(true);
    await sleep(1000);
    setLoading(false);
    toast({
      title: "Success!",
      variant: "success",
      duration: 3000,
    });
  };

  const { pending } = useFormStatus();

  return (
    <div className="w-full max-w-md">
      <CardWrapper {...cardWrapperProps}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6 min-w-[30px] 
        "
          >
            <div className="space-y-4">
              {fields.map((field) => (
                <CustomInput
                  control={form.control as any}
                  name={field.name as any}
                  label={field.label}
                  type={field.type}
                  key={field.name}
                />
              ))}
            </div>
            <Button type="submit" className="w-full" disabled={pending}>
              {loading ? "Loading..." : "Submit"}
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
};

export default CustomForm;
