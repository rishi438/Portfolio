import {
  css,
  application,
  python,
  flask,
  django,
  vue,
  docker,
  nginx,
  postgres,
  bootstrap,
  aws,
  contact,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  react,
  tailwindcss,
} from "../assets/icons";
import { wizklub, infinity_learn } from "../assets/work";

export const skills = [
  {
    image_url: python,
    name: "Python",
    type: "Backend",
  },
  {
    image_url: flask,
    name: "Flask",
    type: "Backend",
  },
  {
    image_url: django,
    name: "django",
    type: "Backend",
  },
  {
    image_url: vue,
    name: "Vue",
    type: "Frontend",
  },
  {
    image_url: docker,
    name: "Docker",
    type: "Backend",
  },
  {
    image_url: nginx,
    name: "Nginx",
    type: "Proxy",
  },
  {
    image_url: postgres,
    name: "Postgres",
    type: "Database",
  },
  {
    image_url: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    image_url: react,
    name: "React",
    type: "Frontend",
  },
  {
    image_url: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    image_url: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    image_url: aws,
    name: "AWS",
    type: "Deployment",
  },
  {
    image_url: express,
    name: "Express",
    type: "Backend",
  },
  {
    image_url: git,
    name: "Git",
    type: "Version Control",
  },
  {
    image_url: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    image_url: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    image_url: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    image_url: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    image_url: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    image_url: nodejs,
    name: "Node.js",
    type: "Backend",
  },
];

export const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Wizklub",
    icon: wizklub,
    iconBg: "#accbe1",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using flask, python and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Handling Dev environment merging new releases, reviewing code at dev level and deploying the new release in dev environment.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: infinity_learn,
    iconBg: "#fbc3bc",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using flask, python and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "developed UI and integrated API for an app called 'VISTA' using React Native.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    icon_url: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    icon_url: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    icon_url: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    icon_url: application,
    theme: "btn-back-red",
    name: "Social Network",
    description:
      "Developed a web application similar to Facebook using Vue.js, postgres and Django",
    link: "https://github.com/rishi438/django-vue",
  },
  {
    icon_url: application,
    theme: "btn-back-green",
    name: "Flask",
    description:
      "A flask based web Application that executes schedules tasks and sends emails asyncronously using Vue, flask, celery, rabbitMQ and go",
    link: "https://github.com/rishi438/flask",
  },
  {
    icon_url: application,
    theme: "btn-back-blue",
    name: "user Management",
    description:
      "A web application to manage users similar to CMS using fastAPI and Vue",
    link: "https://github.com/rishi438/User-Management ",
  },
  {
    icon_url: application,
    theme: "btn-back-blue",
    name: "Basic Go Web Application",
    description: "A basic Go webserver that hooks to web API hook",
    link: "https://github.com/rishi438/go_webserver",
  },
];
