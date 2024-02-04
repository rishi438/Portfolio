// @ts-nocheck
import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import geckoScene from "../assets/3d/gecko.glb";

const Gecko = ({ current_anime, set_current_anime, ...props }) => {
  const gecko_ref = useRef();
  const { scene, animations } = useGLTF(geckoScene);
  const { actions } = useAnimations(animations, gecko_ref);

  let is_initial = useRef(true);
  useEffect(() => {
    Object.values(actions).forEach((action) =>
      action !== "FG_Idle_A" ? action.stop() : null,
    );
    if (is_initial.current && set_current_anime != "FG_Idle_A") {
      const initial_anime_executor = async () => {
        await new Promise((resolve) =>
          setTimeout(() => {
            set_current_anime("FG_Emote_Wave_A");
            resolve();
          }, 200),
        );
        await new Promise((resolve) =>
          setTimeout(() => {
            set_current_anime("FG_Idle_A");
            resolve();
          }, 1683),
        );
      };
      initial_anime_executor();
      is_initial.current = false;
    }
    if (actions[set_current_anime]) {
      actions[current_anime].play();
    }
    actions[current_anime].play();
  }, [current_anime, actions]);

  return (
    <mesh ref={gecko_ref} {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Gecko;
