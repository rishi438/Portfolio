const PLANE_TRAITS = {
  PLANE_I: {
    576: {
      SCALE: [1.8, 1.8, 1.8],
      POSITION: [0, -1, -0.3],
      ROTATION: [0, 20, -0.095],
    },
    768: {
      SCALE: [1.68, 1.68, 1.68],
      POSITION: [0, -0.85, 0.3],
      ROTATION: [-0.005, 20, -0.15],
    },
    M768: {
      SCALE: [1.65, 1.65, 1.65],
      POSITION: [-0.08, -0.65, 0.9],
      ROTATION: [0, 20, -0.035],
    },
  },
  PLANE_II: {
    576: {
      SCALE: [0.55, 0.55, 0.55],
      POSITION: [-1.75, 0.95, -2],
      ROTATION: [-3.25, 0.4, 3.15],
    },
    768: {
      SCALE: [0.6, 0.6, 0.6],
      POSITION: [-1.5, 1.09, 0.9],
      ROTATION: [3, 0.28, 3.15],
    },
    M768: {
      SCALE: [0.5, 0.5, 0.5],
      POSITION: [-2.5, 1, 1],
      ROTATION: [3.0005, 0.2, 3.085],
    },
  },
};
const GECKO_TRAITS = {
  576: {
    POSITION: [0, -35, -10],
    ROTATION: [-0.05, -0.2, -0.01],
    SCALE: [5.5, 5.5, 5.5],
  },
  768: {
    POSITION: [0, -35, -10],
    ROTATION: [-0.05, -0.2, -0.01],
    SCALE: [5.5, 5.5, 5.5],
  },
  M768: {
    POSITION: [0.6, -35, -15],
    ROTATION: [-0.05, -0.2, -0.01],
    SCALE: [4.5, 4.5, 4.5],
  },
};
export { PLANE_TRAITS, GECKO_TRAITS };
