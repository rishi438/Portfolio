// @ts-nocheck
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PLANE_TRAITS } from "../utils/constant";
import Loader from "../components/Loader";
import Island from "../models/island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import Plane_II from "../models/Plane_II";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
  const [is_rotating, set_is_rotating] = useState(false);
  const [current_stage, set_current_stage] = useState(1);
  const adjust_island_screen_size = () => {
    let screen_scale;
    let screen_position = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    if (innerWidth < 768) {
      screen_scale = [0.9, 0.9, 0.9];
    } else {
      screen_scale = [1, 1, 1];
    }
    return [screen_scale, screen_position, rotation];
  };
  const adjust_plane_screen_size = (PLANE_TRAITS) => {
    let screen_scale, screen_position, width, rotation;
    if (innerWidth < 576) {
      width = "576";
    } else if (innerWidth < 768 && innerWidth > 576) {
      width = "768";
    } else {
      width = "M768";
    }
    screen_scale = PLANE_TRAITS[width]["SCALE"];
    screen_position = PLANE_TRAITS[width]["POSITION"];
    rotation = PLANE_TRAITS[width]["ROTATION"];
    return [screen_scale, screen_position, rotation];
  };
  const [island_scale, island_position, rotation] = adjust_island_screen_size();
  const [plane_I_scale, plane_I_position, plane_I_rotation] =
    adjust_plane_screen_size(PLANE_TRAITS["PLANE_I"]);
  const [plane_II_scale, plane_II_position, plane_II_rotation] =
    adjust_plane_screen_size(PLANE_TRAITS["PLANE_II"]);
  return (
    <section className="w-full h-screen relative">
      <div
        className="absolute top-28 left-0 right-0 z-10 flex
       items-center justify-center"
      >
        {current_stage && <HomeInfo current_stage={current_stage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${is_rotating ? "cursor-grabbing" : "cursor-grab"}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2.4} />
          <ambientLight intensity={0.3} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" />
          <Bird />
          <Sky is_rotating={is_rotating} />
          <Plane_II
            is_rotating={is_rotating}
            scale={plane_II_scale}
            position={plane_II_position}
            rotation={plane_II_rotation}
          />
          <Island
            position={island_position}
            scale={island_scale}
            rotation={rotation}
            is_rotating={is_rotating}
            set_is_rotating={set_is_rotating}
            set_current_stage={set_current_stage}
          />
          <Plane
            is_rotating={is_rotating}
            scale={plane_I_scale}
            position={plane_I_position}
            rotation={plane_I_rotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
