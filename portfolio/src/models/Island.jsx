// @ts-nocheck
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: nimzu (https://sketchfab.com/nimzuk)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907
Title: Fox's islands
*/

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import islandScene from "../assets/3d/island.glb";

const Island = ({
  set_current_stage,
  is_rotating,
  set_is_rotating,
  ...props
}) => {
  const island_ref = useRef();
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene);
  const last_x = useRef(0);
  const rotation_speed = useRef(0);
  const damping_factor = 0.95;
  const handle_pointer_down = (e) => {
    e.stopPropagation();
    e.preventDefault();
    set_is_rotating(true);
    const client_x = e.touches ? e.touches[0].clientX : e.clientX;
    last_x.current = client_x;
  };
  const handle_pointer_up = (e) => {
    e.stopPropagation();
    e.preventDefault();
    set_is_rotating(false);
  };
  const handle_pointer_move = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (is_rotating) {
      const client_x = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (client_x - last_x.current) / viewport.width;
      island_ref.current.rotation.y += delta * 0.01 * Math.PI;
      last_x.current = client_x;
      rotation_speed.current = delta * 0.01 * Math.PI;
    }
  };
  const handle_key_down = (e) => {
    if (e.key === "ArrowLeft") {
      if (!is_rotating) set_is_rotating(true);
      island_ref.current.rotation.y += 0.01 * Math.PI;
    } else if (e.key == "ArrowRight") {
      if (!is_rotating) set_is_rotating(true);
      island_ref.current.rotation.y -= 0.01 * Math.PI;
    }
  };
  const handle_key_up = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      set_is_rotating(false);
    }
  };
  useFrame(() => {
    if (!is_rotating) {
      rotation_speed.current *= damping_factor;
      if (Math.abs(rotation_speed.current) < 0.0001) {
        rotation_speed.current = 0;
      }
    } else {
      const rotation = island_ref.current.rotation.y;
      const normalize_rotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
      switch (true) {
        case normalize_rotation >= 5.43 && normalize_rotation <= 5.85:
          set_current_stage(4);
          break;
        case normalize_rotation >= 0.85 && normalize_rotation <= 1.3:
          set_current_stage(3);
          break;
        case normalize_rotation >= 2.4 && normalize_rotation <= 2.6:
          set_current_stage(2);
          break;
        case normalize_rotation >= 4.25 && normalize_rotation <= 4.75:
          set_current_stage(1);
          break;
        default:
          set_current_stage(null);
      }
    }
  });
  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handle_pointer_down);
    canvas.addEventListener("pointerup", handle_pointer_up);
    canvas.addEventListener("pointermove", handle_pointer_move);
    document.addEventListener("keydown", handle_key_down);
    document.addEventListener("keyup", handle_key_up);
    return () => {
      canvas.removeEventListener("pointerdown", handle_pointer_down);
      canvas.removeEventListener("pointerup", handle_pointer_up);
      canvas.removeEventListener("pointermove", handle_pointer_move);
      document.removeEventListener("keydown", handle_key_down);
      document.removeEventListener("keyup", handle_key_up);
    };
  }, [gl, handle_pointer_down, handle_pointer_up, handle_pointer_move]);
  return (
    <group {...props} ref={island_ref} dispose={null}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </group>
  );
};

export default Island;
