import React from 'react'
import { motion } from "framer-motion";

const AnimateX = ({children}) => {
   return (
     <motion.div
       initial={{ x: -100, opacity:0 }}
       animate={{ x: 0 , opacity: 1}}
       transition={{ duration: 1,}}
       
     >
       {children}
     </motion.div>
   );
}

export default AnimateX