import { motion } from "framer-motion";
import { useState } from "react";

interface Event {
  name: String;
  date: String;
  description: String;
  tags: String;
}

export default function EventCard(props: Event) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(!isOpen);
    console.log("open");
  };

  return (
    <div className="App">
      <motion.div
        layout="position"
        transition={{ layout: { duration: 0.5, type: "spring" } }}
        onClick={open}
        className="card"
        style={{
          borderRadius: "1rem",
          boxShadow: "0px 10px 30px rgba(0,0,0, 0.5 ",
        }}
      >
        <motion.h1 layout="position">{props.name}</motion.h1>
        {isOpen && (
          <motion.div
            layout="position"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="expand pr-2 pl-2"
          >
            <div>{props.date}</div>
            <div>{props.description}</div>
            <div>{props.tags}</div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
