import { motion } from "framer-motion";

export const BgRight1Variants = {
  visible: (i) => ({
    x: "0",
    y: "0",
    transition: {
      delay: i * 0.3,
      duration: 2,
    },
  }),
  hidden: { x: "10%", y: "-15%" },
};
export const BgLeft1Variants = {
  visible: (i) => ({
    x: "0",
    y: "0",
    transition: {
      delay: i * 0.3,
      duration: 2,
    },
  }),
  hidden: { x: "-22%", y: "22%" },
};
export const BgLeft2Variants = {
  visible: (i) => ({
    x: "0",
    y: "0",
    transition: {
      delay: i * 0.2,
      duration: 2,
    },
  }),
  hidden: { x: "-20%", y: "20%" },
};
export const BgLeft3Variants = {
  visible: (i) => ({
    x: "0",
    y: "0",
    transition: {
      delay: i * 0.1,
      duration: 2,
    },
  }),
  hidden: { x: "-25%", y: "25%" },
};
export const FormLogin = {
  visible: (i) => ({
    x: "0",
    y: "0",
    transition: {
      delay: i * 0.3,
      duration: 2,
    },
  }),
  hidden: { y: "-10%" },
};
