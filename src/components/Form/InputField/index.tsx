import { useState } from "react";
import { Input, FormField, LabelField, ValidationLabel } from "../index.styles";
import { motion } from "framer-motion";

type InputFieldProps = {
  type: string;
  id: string;
  placeholder: string;
  label: string;
};

export default function InputField(props: InputFieldProps) {
  const { type, id, placeholder, label } = props;
  const [validationError] = useState("error");
  return (
    <FormField>
      <LabelField>
        <label htmlFor={id}>{label}</label>
        {validationError && (
          <ValidationLabel
            as={motion.span}
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              damping: 10,
              stiffness: 1000,
              duration: 0.1,
            }}
          >
            {validationError}
          </ValidationLabel>
        )}
      </LabelField>
      <Input name={id} type={type} id={id} placeholder={placeholder} />
    </FormField>
  );
}
