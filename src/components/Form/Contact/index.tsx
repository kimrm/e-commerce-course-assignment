import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  FormField,
  LabelField,
  SubmitButton,
  ValidationLabel,
} from "../Form.styles";
import { motion } from "framer-motion";

const schema = yup
  .object({
    name: yup.string().required("Please enter your name.").min(3),
    email: yup
      .string()
      .email()
      .required("Please provide a valid e-mail address."),
    subject: yup.string().required("Please enter a subject.").min(3),
    message: yup.string().required("Please enter a message.").min(3),
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
        </LabelField>
        <input title="Name" {...register("name", { required: true })} />
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
      </FormField>
      <FormField>
        <LabelField>
          <label htmlFor="email">E-mail</label>
        </LabelField>
        <input title="E-mail" {...register("email", { required: true })} />
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
      </FormField>
      <FormField>
        <LabelField>
          <label htmlFor="subject">Subject</label>
        </LabelField>
        <input title="Subject" {...register("subject", { required: true })} />
        {errors.subject && (
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
            {errors.subject?.message}
          </ValidationLabel>
        )}
      </FormField>
      <FormField>
        <LabelField>
          <label htmlFor="message">Message</label>
        </LabelField>
        <textarea
          title="Message"
          rows={5}
          {...register("message", { required: true })}
        />
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
      </FormField>
      <SubmitButton>Send</SubmitButton>
    </motion.form>
  );
}
