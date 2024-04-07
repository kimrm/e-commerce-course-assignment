import { useState } from "react";
import Contact from "../../components/Form/Contact";
import Modal from "../../components/Modal";
import { ContactFormContainer } from "./ContactPage.styles";
import ScrollToTop from "../../components/ScrollToTop";

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOnSuccess() {
    setIsModalOpen(true);
  }

  return (
    <>
      <ScrollToTop />
      <div>
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <h2>Thank you</h2>
            <p>We will get back to you as soon as possible.</p>
            <button className="primary" onClick={() => setIsModalOpen(false)}>
              Close
            </button>
          </Modal>
        )}
        <h1>Contact us</h1>
        <p>Send us a message and we will get back to you</p>
        <ContactFormContainer>
          <Contact onSuccess={handleOnSuccess} />
        </ContactFormContainer>
      </div>
    </>
  );
}
