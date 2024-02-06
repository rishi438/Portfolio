// @ts-nocheck
import { useAnimations, useGLTF } from "@react-three/drei";
import birdScene from "../assets/3d/bird.glb";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Bird = () => {
  const { scene, animations } = useGLTF(birdScene);
  const bird_ref = useRef();
  const { actions } = useAnimations(animations, bird_ref);
  useEffect(() => {
    actions["Take 001"].play();
  }, []);
  useFrame(({ clock, camera }) => {
    bird_ref.current.position.y = Math.sin(clock.elapsedTime) * 0.015 + 2;
    if (bird_ref.current.position.x > camera.position.x + 10) {
      bird_ref.current.rotation.y = Math.PI;
    } else if (bird_ref.current.position.x < camera.position.x - 10) {
      bird_ref.current.rotation.y = 0;
    }
    if (bird_ref.current.rotation.y === 0) {
      bird_ref.current.position.x += 0.009;
      bird_ref.current.position.z -= 0.009;
    } else {
      bird_ref.current.position.x -= 0.009;
      bird_ref.current.position.z += 0.009;
    }
  });
  return (
    <mesh ref={bird_ref} position={[-5, 0, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
