"use client";

import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { formSchema } from "@/lib/schema";
import { sleep } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import CardWrapper from "../CardWrapper";
import CustomInput from "./CustomInput";

const FormComp = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      nickname: "",
      age: 0,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoading(true);
    await sleep(1000);
    setLoading(false);
    toast({
      title: "Success!",
      variant: "success",
      duration: 3000,
    });
    console.log(data);
  };

  const { pending } = useFormStatus();
  return (
    <CardWrapper
    //   label="Login to your account"
    //   title="Login"
    //   backButtonHref="/auth/register"
    //   backButtonLabel="Don't have an account? Register here."
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 
         min-w-[350px] 
        "
        >
          <div className="space-y-4">
            <CustomInput control={form.control} name="name" label="Name" />
            <CustomInput
              control={form.control}
              name="nickname"
              label="Nickname"
            />
            {/* <FormField
              control={form.control}
              name="nickname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nickname</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <CustomInput
              control={form.control}
              name="age"
              label="Age"
              type="number"
            />
          </div>
          <Button type="submit" className="w-full" disabled={pending}>
            {loading ? "Loading..." : "Submit"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default FormComp;
