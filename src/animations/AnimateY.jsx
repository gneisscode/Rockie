import React from "react";
import { motion } from "framer-motion";

const AnimateY = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 100, }}
      animate={{ y: 0,  }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateY;


