// @ts-nocheck
import { useGLTF } from '@react-three/drei';
import skyScene from '../assets/3d/sky.glb';
import { useFrame } from '@react-three/fiber';
const Sky = ({ is_rotating }) => {
  const sky = useGLTF(skyScene);
  const sky_ref = useGLTF(skyScene);
  useFrame((_, delta) => {
    if (is_rotating) {
      sky_ref.current.rotation.y += 0.15 * delta;
    }
  });
  return (
    <mesh ref={sky_ref}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
