import useImageLoader from "../../hooks/useImageLoader";
import { motion } from "framer-motion";
import styled from "styled-components";

const ImageContainer = styled(motion.img)`
  height: ${(props) => props.height} || "auto";
  width: ${(props) => props.width} || "auto";
`;

const PlaceholderContainer = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
}
export default function Image(props: ImageProps) {
  const { isLoaded } = useImageLoader(props.src);
  return (
    <>
      {!isLoaded && <PlaceholderContainer />}
      {isLoaded && (
        <ImageContainer
          as={motion.img}
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          {...props}
        ></ImageContainer>
      )}
    </>
  );
}
