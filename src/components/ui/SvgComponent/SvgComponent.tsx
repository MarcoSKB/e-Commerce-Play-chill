"use client";
import { motion } from "framer-motion";

interface Props {
  keyProp: string;
  viewBox: string;
  paths: {
    data: string;
    fill: string;
  }[];
}

const SvgComponent: React.FC<Props> = ({
  keyProp,
  viewBox = "0 0 24 24",
  paths,
}) => {
  return (
    <motion.svg
      key={keyProp}
      whileHover={{ pathOffset: 0 }}
      initial={{ opacity: 0, pathOffset: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
    >
      {paths.map((path, idx) => (
        <motion.path
          key={idx}
          d={path.data}
          fill={path.fill}
          whileHover={{ pathOffset: 1 }}
          initial={{ opacity: 0, pathOffset: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </motion.svg>
  );
};

export default SvgComponent;
