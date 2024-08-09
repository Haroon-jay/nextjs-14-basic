import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "@/lib/schema";

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder?: string;
  type?: string;
}

const CustomInput = ({
  control,
  name,
  label,
  placeholder = "",
  type = "text",
}: CustomInput) => {
  return (
    <div className="mt-1">
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class mt-1"
                type={type}
                {...field}
              />
            </FormControl>
            <FormMessage className="mt-2" />
          </>
        )}
      />
    </div>
  );
};

export default CustomInput;
