// @ts-nocheck
import { skills } from "../utils/basic_utils";
const Home = () => {
  return (
    <section className="font-family-poppins max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span
          className="red-gradient-text font-medium
          drop-shadow"
        >
          Rishi{" "}
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-stone-500">
        <p>
          I'm a versatile Software Developer hailing from India, with a knack
          for crafting intuitive and visually appealing web interfaces{" "}
          <span className="text-blue-500">#frontend</span>. My expertise extends
          to seamlessly integrating APIs, learning new architecting solutions
          and developing robust server-side logic, and optimizing databases
          <span className="text-blue-500">#backend</span> for optimal
          performance. With a passion for problem-solving and a polymathic
          approach, I thrive on delivering high-quality solutions that exceed
          user expectations.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div
                className="btn-front rounded-xl flex justify-center
                items-center"
              >
                <img
                  src={skill.image_url}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
