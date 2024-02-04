// @ts-nocheck

import { useEffect, useRef } from "react";
import PlaneScene from "../assets/3d/flying_circus.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Plane_II = ({ is_rotating, ...props }) => {
  const { scene, animations } = useGLTF(PlaneScene);
  const plane_2_ref = useRef();
  const { actions } = useAnimations(animations, plane_2_ref);
  useEffect(() => {
    actions["Dynamic pose"].play();
  });
  useFrame(({ clock, camera }, delta) => {
    const speed = 0.25;
    const radius = 28;

    const center_x = camera.position.x + 0.5;
    const center_z = camera.position.z - 43;

    const angle = clock.elapsedTime * speed;

    const new_x = center_x - Math.cos(angle) * radius;
    const new_z = center_z - Math.sin(angle) * radius;

    plane_2_ref.current.position.x = new_x;
    plane_2_ref.current.position.z = new_z;

    // Calculate the derivative of the path to find the slope of the tangent
    const derivative_x = -Math.sin(angle) * radius;
    const derivative_z = Math.cos(angle) * radius;

    // Calculate the angle of rotation based on the tangent
    const rotation_angle = Math.atan2(derivative_z, derivative_x);

    // Rotate the plane around the y-axis
    plane_2_ref.current.rotation.y = rotation_angle + Math.PI; // Add 90 degrees to face the direction of the tangent
  });
  return (
    <mesh ref={plane_2_ref} {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane_II;
