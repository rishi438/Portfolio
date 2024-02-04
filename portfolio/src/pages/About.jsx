// @ts-nocheck
import { skills, experiences } from "../utils/basic_utils";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <section className="font-poppins max-container">
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
      <div className="cpy-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className=" mt-5 flex flex-col gap-3 text-stone-500">
          <p>
            Throughout my journey, I've had the privilege of collaborating with
            esteemed companies, where I've honed my skills and had the pleasure
            of working alongside brilliant minds. Here's a snapshot of my
            professional engagements:
          </p>
        </div>
        <div className="mt-12">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="rounded-full object-contain"
                    />
                  </div>
                }
                iconStyle={{
                  background: experience.iconBg,
                }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3
                    className="text-black text-xl font-poppins
                      font-medium"
                  >
                    {experience.title}
                  </h3>
                  <p
                    className="text-stone-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={index}
                      className="text-black-500/50 font-normal pl-1
                        text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Home;
