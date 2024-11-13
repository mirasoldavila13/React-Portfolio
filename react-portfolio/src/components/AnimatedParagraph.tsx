import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedParagraphProps {
  children: ReactNode;
  delay?: number;
}

const AnimatedParagraph: React.FC<AnimatedParagraphProps> = ({ children, delay = 0 }) => (
  <motion.p
    className="text-content"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.5, 
      delay, 
      // Add support for reduced motion
      ...(window.matchMedia("(prefers-reduced-motion: reduce)").matches && {
        duration: 0, 
        y: 0 
      })
    }}>
    {children}
  </motion.p>
);

export default AnimatedParagraph;
