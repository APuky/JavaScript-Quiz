import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "./Animation";
import axios from "axios";

function Scoreboard() {
  const dataHandler = () => {
    const promise = axios.get("http://127.0.0.1:8000/api/users/scoreboard");
    const data = promise.then((res) => console.log(res.data));

    return data;
  };

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      onClick={() => dataHandler()}
    >
      List of all people who took the test, sorted by most points <br />
      Needed username & score from backend
    </motion.div>
  );
}

export default Scoreboard;
