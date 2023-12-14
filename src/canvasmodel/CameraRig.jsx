import { useSnapshot } from "valtio";
import state from "../store";
import { useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";

function CameraRig({ children }) {
  const group = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });

  return <group ref={group}>{children}</group>;
}

export default CameraRig;
