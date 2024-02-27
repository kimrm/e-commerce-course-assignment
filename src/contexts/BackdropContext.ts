import { createContext } from "react";

export interface BackdropContextType {
  toggleBackdrop: () => void;
}

const BackdropContext = createContext<BackdropContextType | undefined>(
  undefined
);

export default BackdropContext;
