// @ts-nocheck
import { useAnimations, useGLTF } from '@react-three/drei';
import planeScene from '../assets/3d/plane.glb';
import { useEffect, useRef } from 'react';

const Plane = ({ is_rotating, ...props }) => {
  const { scene, animations } = useGLTF(planeScene);
  const plane_ref = useRef();
  const { actions } = useAnimations(animations, plane_ref);
  useEffect(() => {
    if (is_rotating) {
      actions['Take 001'].play();
    } else {
      actions['Take 001'].stop();
    }
  }, [actions, is_rotating]);
  return (
    <mesh {...props} ref={plane_ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
