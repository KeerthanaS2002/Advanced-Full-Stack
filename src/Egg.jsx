import React from "react";
import HalfBoil from "./Halfboil";

const Egg = ({ need }) => {
  return (
    <div>
      <h3> Egg</h3>
      <HalfBoil need={need} />
    </div>
  );
};
export default Egg;