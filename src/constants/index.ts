import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  meta,
  hexa,
  hilink,
  nike,
  hoobank,
  gpt,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
];
const projects = [
  {
    name: "METAVERSE-13 ",
    description: "Modern UI/UX Metaverse-13 with scrolling animations.",
    tags: [
      {
        name: "react/next.js",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: meta,
    source_code_link: "https://github.com/sfjgnjhdskgas/METAVERSE-13",
  },

  {
    name: "Hi-Link",
    description: "Modern UI/UX Hi-Link",
    tags: [
      {
        name: "react/next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hilink,
    source_code_link: "https://github.com/sfjgnjhdskgas/hi-link",
  },
  {
    name: "Hexa-Shop",
    description:
      "Modern UI/UX eCommerce with light , dark mode and shopping cart",
    tags: [
      {
        name: "react/next.js",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hexa,
    source_code_link: "https://github.com/sfjgnjhdskgas/Hexa-_-shop",
  },
  {
    name: "Nike",
    description: "Modern UI/UX Nike",
    tags: [
      {
        name: "react/next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nike,
    source_code_link: "https://github.com/sfjgnjhdskgas/nike",
  },
  {
    name: "Hoo-Bank",
    description: "Modern UI/UX Hoo-Bank with scrolling animations.",
    tags: [
      {
        name: "react/next.js",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hoobank,
    source_code_link: "https://github.com/sfjgnjhdskgas/hoo-bank_animated",
  },
  {
    name: "GPT-3",
    description: "Modern UI/UX GPT-3",
    tags: [
      {
        name: "react/next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gpt,
    source_code_link: "https://github.com/sfjgnjhdskgas/gpt-3",
  },
];

export { services, technologies, projects };
