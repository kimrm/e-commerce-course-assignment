import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  FormField,
  LabelField,
  SubmitButton,
  ValidationLabel,
} from "./Contact.styles";
import { motion } from "framer-motion";

const schema = yup
  .object({
    name: yup.string().required("Please enter your name."),
    email: yup.string().email().required("We need your e-mail to contact you."),
    message: yup.string().required("Please enter a message."),
  })
  .required();

type ContactProps = {
  onSuccess: () => void;
};

export default function Contact(props: ContactProps) {
  const { onSuccess } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data: FieldValues) {
    console.log(data);
    reset();
    onSuccess();
  }
  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <FormField>
        <LabelField>
          <label htmlFor="name">Name</label>
          {errors.name && (
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
              {errors.name?.message}
            </ValidationLabel>
          )}
        </LabelField>
        <input {...register("name", { required: true })} />
      </FormField>
      <FormField>
        <LabelField>
          <label htmlFor="name">E-mail</label>
          {errors.email && (
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
              {errors.email?.message}
            </ValidationLabel>
          )}
        </LabelField>
        <input {...register("email", { required: true })} />
      </FormField>
      <FormField>
        <LabelField>
          <label htmlFor="name">Message</label>
          {errors.message && (
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
              {errors.message?.message}
            </ValidationLabel>
          )}
        </LabelField>
        <textarea rows={5} {...register("message", { required: true })} />
      </FormField>
      <SubmitButton>Send</SubmitButton>
    </motion.form>
  );
}
