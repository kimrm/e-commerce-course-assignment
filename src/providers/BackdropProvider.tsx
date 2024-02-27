import { useState } from "react";
import Backdrop from "../components/Backdrop";
import BackdropContext from "../contexts/BackdropContext";

export default function BackdropProvider(props: { children: React.ReactNode }) {
  const [backdropVisible, setBackdropVisible] = useState(false);
  const { children } = props;

  function toggleBackdrop() {
    setBackdropVisible((prev) => !prev);
  }

  return (
    <>
      <BackdropContext.Provider value={{ toggleBackdrop }}>
        {children}
      </BackdropContext.Provider>
      <Backdrop backdropVisible={backdropVisible} />
    </>
  );
}
