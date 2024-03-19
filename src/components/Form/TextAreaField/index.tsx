import { useState } from "react";
import { Input, FormField, LabelField, ValidationLabel } from "../index.styles";
import { motion } from "framer-motion";

type TextAreaFieldProps = {
  type: string;
  id: string;
  placeholder: string;
  label: string;
  rows: number;
};

export default function TextAreaField(props: TextAreaFieldProps) {
  const [validationError] = useState("This field is required");
  return (
    <FormField>
      <LabelField>
        <label htmlFor={props.id}>{props.label}</label>
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
      <Input as="textarea" {...props} />
    </FormField>
  );
}
