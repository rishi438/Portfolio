// @ts-nocheck
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btn_text }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btn_text}
        <img src={arrow} className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};

const render_content = {
  1: (
    <h1
      className="sm:text-xl sm:leading-snig text-center
        neo-brutalism-red py-4 px-8 text-white mx-5"
    >
      Hi, I am
      <span className="font-medium"> Rishi Karan Reddy</span> 🖖
      <br />A Full Stack Developer from India
    </h1>
  ),
  2: (
    <InfoBox
      text="Thrived in a startup, enhancing full-stack proficiency
            through agile development."
      link="/about"
      btn_text="About"
    />
  ),
  3: (
    <InfoBox
      text=" Fueled continuous product innovation, leading to the creation of multiple offerings that enriched user experiences and sustained competitive advantage."
      link="/projects"
      btn_text="Vist my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Ready to bring your ideas to life or contribute to your team's success? Let's connect with just a few clicks"
      link="/contact"
      btn_text="Let's Talk"
    />
  ),
};

const HomeInfo = ({ current_stage }) => {
  return render_content[current_stage] || null;
};

export default HomeInfo;
