import { motion } from "framer-motion";
export default function ClientImageCard({
  imageSrc,
  imageVisible,
  duration,
  delay,
}) {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      className="client-image-card"
      initial="hidden"
      animate={imageVisible ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: duration, delay: delay || 0 }}
    >
      <img src={imageSrc} alt={imageSrc} />
    </motion.div>
  );
}

