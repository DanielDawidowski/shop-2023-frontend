import { useState } from "react";
import { motion } from "framer-motion";

function Image({ src, alt }) {
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 600);
  };

  return <motion.img onLoad={imageLoaded} src={src} alt={alt} loading="lazy" />;
}

export default Image;
