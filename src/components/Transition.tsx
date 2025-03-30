
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TransitionProps {
  children: ReactNode;
}

const Transition = ({ children }: TransitionProps) => {
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-background z-50 flex items-center justify-center"
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
        exit={{ height: "100%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Transition;