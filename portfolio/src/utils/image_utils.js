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
  typescript,
} from "../assets/icons";
import { wizklub, infinity_learn } from "../assets/work";

export const skills = [
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: flask,
    name: "Flask",
    type: "Backend",
  },
  {
    imageUrl: django,
    name: "django",
    type: "Backend",
  },
  {
    imageUrl: vue,
    name: "Vue",
    type: "Frontend",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "Backend",
  },
  {
    imageUrl: nginx,
    name: "Nginx",
    type: "Proxy",
  },
  {
    imageUrl: postgres,
    name: "Postgres",
    type: "Database",
  },
  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    imageUrl: aws,
    name: "AWS",
    type: "Deployment",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
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
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: application,
    theme: "btn-back-red",
    name: "Social Network",
    description:
      "Developed a web application that connects people on social media using Vue.js, postgres and Django",
    link: "https://github.com/rishi438/django-vue",
  },
  {
    iconUrl: application,
    theme: "btn-back-green",
    name: "Flask",
    description:
      "A flask based web Application that executes schedules tasks and sends emails asyncronously using Vue, flask, celery, rabbitMQ and go",
    link: "https://github.com/rishi438/flask",
  },
  {
    iconUrl: application,
    theme: "btn-back-blue",
    name: "user Management",
    description:
      "A web application to manage users similar to CMS using fastAPI and Vue",
    link: "https://github.com/rishi438/User-Management ",
  },
  {
    iconUrl: application,
    theme: "btn-back-blue",
    name: "Basic Go Web Application",
    description: "A basic Go webserver that hooks to web",
    link: "https://github.com/rishi438/go_webserver",
  },
];
