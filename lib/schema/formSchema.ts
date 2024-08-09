import { z } from "zod";

// The name field should only take strings, and it must be all capital letters
// • The age should be between 5 and 15
// • The nickname should not have any restrictions
// do not allow numbers in the name field
const formSchema = z.object({
  name: z
    .string()
    .refine((name) => name === name.toUpperCase(), {
      message: "Name must be all uppercase",
    })
    .refine((name) => !/\d/.test(name), {
      message: "Name must not contain numbers",
    }),
  // need to coerce to number https://github.com/react-hook-form/resolvers/issues/73
  age: z.coerce.number().int().min(5).max(15),
  nickname: z.string(),
});

export default formSchema;
