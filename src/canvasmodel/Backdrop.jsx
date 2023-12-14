import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { easing } from "maath";

function Backdrop() {
  return (
    <AccumulativeShadows>
      <RandomizedLight amount={4}></RandomizedLight>
    </AccumulativeShadows>
  );
}

export default Backdrop;
