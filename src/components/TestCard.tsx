import { motion } from "framer-motion";
import { useState } from "react";

export default function TestCard() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(!isOpen);
    console.log("open");
  };
  return (
    <div>
      <motion.div onClick={open}>
        <motion.h1>hello</motion.h1>
        {isOpen && (
          <motion.div>
            hello hello hello hello hello aklje a e aa e oihjlioads f awe a d ae
            fa sfga sfga wsg aewfg a
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
