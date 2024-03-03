import { BackDrop, ModalContent } from "./Modal.styles";
import { motion } from "framer-motion";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal(props: ModalProps) {
  const { children, onClose } = props;

  function handleClose() {
    onClose();
  }

  return (
    <>
      <BackDrop onClick={handleClose} />
      <ModalContent as={motion.div} initial={{ y: -100 }} animate={{ y: 0 }}>
        {children}
        <button onClick={handleClose}>Close</button>
      </ModalContent>
    </>
  );
}
