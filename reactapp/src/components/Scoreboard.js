import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "./Animation";

function Scoreboard() {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show">
      List of all people who took the test, sorted by most points <br />
      Needed username & score from backend
    </motion.div>
  );
}

export default Scoreboard;
