// @ts-nocheck

import { useEffect, useRef } from 'react';
import PlaneScene from '../assets/3d/flying_circus.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Plane_II = ({ is_rotating, ...props }) => {
  const { scene, animations } = useGLTF(PlaneScene);
  const plane_2_ref = useRef();
  const { actions } = useAnimations(animations, plane_2_ref);
  useEffect(() => {
    if (is_rotating) {
      actions['Dynamic pose'].play();
    } else {
      actions['Dynamic pose'].stop();
    }
  });
  return (
    <mesh ref={plane_2_ref} {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane_II;
