import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  FormGroup,
  FormField,
  LabelField,
  SubmitButton,
  ValidationLabel,
} from "../Form.styles";
import { DeliveryContainer } from "./index.styles";
import { motion } from "framer-motion";
import ScrollToTop from "../../ScrollToTop";

const schema = yup
  .object({
    name: yup.string().required("Please enter your name.").min(3),
    email: yup.string().email().required("Please provide a valid e-mail."),
    address: yup.string().required("Please enter your address.").min(3),
    city: yup.string().required("Please enter your city.").min(3),
    zip: yup.string().required("Please enter your zip code.").min(3),
    phone: yup.string().required("Please enter your phone number.").min(8),
  })
  .required();

type Props = {
  onSuccess: () => void;
};

export default function DeliveryDetails(props: Props) {
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
    <>
      <ScrollToTop />
      <DeliveryContainer>
        <h1>Delivery details</h1>
        <p>
          Please fill in your delivery details to complete the order. We will
          contact you to confirm the order and delivery details.
        </p>
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
              <label htmlFor="subject">Address</label>
            </LabelField>
            <input
              title="Address"
              {...register("address", { required: true })}
            />
            {errors.address && (
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
                {errors.address?.message}
              </ValidationLabel>
            )}
          </FormField>
          <FormGroup>
            <FormField>
              <LabelField>
                <label htmlFor="zip">Zip code</label>
              </LabelField>
              <input title="Zip" {...register("zip", { required: true })} />
              {errors.zip && (
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
                  {errors.zip?.message}
                </ValidationLabel>
              )}
            </FormField>
            <FormField>
              <LabelField>
                <label htmlFor="city">City</label>
              </LabelField>

              <input title="City" {...register("city", { required: true })} />
              {errors.city && (
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
                  {errors.city?.message}
                </ValidationLabel>
              )}
            </FormField>
          </FormGroup>
          <FormField>
            <LabelField>
              <label htmlFor="phone">Phone</label>
            </LabelField>
            <input title="Phone" {...register("phone", { required: true })} />
            {errors.phone && (
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
                {errors.phone?.message}
              </ValidationLabel>
            )}
          </FormField>
          <SubmitButton>Complete order</SubmitButton>
        </motion.form>
      </DeliveryContainer>
    </>
  );
}
