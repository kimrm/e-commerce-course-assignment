import { BackDrop, ModalContent, Button, ModalContainer } from "./Modal.styles";
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
      <ModalContainer>
        <ModalContent as={motion.div} initial={{ y: -100 }} animate={{ y: 0 }}>
          {children}
          <Button className="primary" onClick={handleClose}>
            Close
          </Button>
        </ModalContent>
      </ModalContainer>
    </>
  );
}
