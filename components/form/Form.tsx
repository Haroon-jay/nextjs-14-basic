"use client";

import formSchema from "@/lib/schema/formSchema";
import CustomForm from "@/components/form/CustomForm";

const FormComp = () => {
  return (
    <CustomForm
      defaultValues={{
        name: "",
        nickname: "",
        age: 0,
      }}
      schema={formSchema}
      fields={[
        { name: "name", label: "Name" },
        { name: "nickname", label: "Nickname" },
        { name: "age", label: "Age", type: "number" },
      ]}
      cardWrapperProps={{
        title: "My Form",
      }}
    />
  );
};

export default FormComp;
