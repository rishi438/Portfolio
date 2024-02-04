// @ts-nocheck
import { projects } from "../utils/basic_utils";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <section className="font-poppins max-container">
      <h1 className="head-text">
        My{" "}
        <span
          className="red-gradient-text font-medium
      drop-shadow"
        >
          Projects{" "}
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-stone-500">
        <p>
          "I've embarked on a multitude of projects and products over the years,
          but what sets these apart is their open-source nature. If you stumble
          upon something that catches your eye, delve into the codebase and
          share your insights for potential improvements. Your collaboration is
          immensely appreciated, and together, we can elevate these projects to
          new heights!
        </p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div
                className="btn-front rounded-xl flex justify-center
                items-center"
              >
                <img
                  src={project.icon_url}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-medium">
                {project.name}
              </h4>
              <p className="text-stone-600">{project.description}</p>
              <div
                className="mt-5 flex items-center gap-2
                font-poppins"
              >
                <Link
                  to={project.link}
                  target="_blank"
                  className="font-medium text-red-600"
                >
                  Link to the Project
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Home;
