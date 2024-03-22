import { BackDrop, ModalContent, ModalContainer } from "./Modal.styles";
import { motion } from "framer-motion";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal(props: ModalProps) {
  const { children, onClose } = props;

  function handleClose(event: React.MouseEvent<HTMLDivElement>) {
    event.bubbles = false;
    event.stopPropagation();
    onClose();
  }

  return (
    <>
      <ModalContainer>
        <BackDrop onClick={handleClose} />
        <ModalContent as={motion.div} initial={{ y: -100 }} animate={{ y: 0 }}>
          {children}
        </ModalContent>
      </ModalContainer>
    </>
  );
}
