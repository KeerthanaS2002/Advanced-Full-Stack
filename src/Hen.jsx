import React from "react";
import Egg from "./Egg";

const Hen = ({ need }) => {
  return (
    <div>
      <h2> Hen</h2>
      <Egg need={need} />
    </div>
  );
};

export default Hen;