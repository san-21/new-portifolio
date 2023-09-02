import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import mongo from "../images/skills/mongodb.png";
import js from "../images/skills/javascript.png";
import reactIcon from "../images/skills/react.png";
import node from "../images/skills/nodejs.png";
import mui from "../images/skills/mui.png";
import github from "../images/skills/github.png";
import devops from "../images/skills/devops.png";
import {
  faXTwitter,
  faLinkedinIn,
  faGithub,
  faInstagram,
  faGit,
  faReact,
  faNodeJs,
  faJs,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faUser,
  faEnvelope,
  faCreditCard,
  faGem,
  faRectangleList,
} from "@fortawesome/free-regular-svg-icons";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
export const navDrawerMenu = [
  {
    title: "Home",
    link: "#home",
    icon: faHouseChimney,
  },
  {
    title: "About",
    link: "#about",
    icon: faUser,
  },
  // {
  //   title: "Resume",
  //   link: "#",
  //   icon: faRectangleList,
  // },
  // {
  //   title: "Skill",
  //   link: "/skills",
  //   icon: faGem,
  // },
  {
    title: "Projects",
    link: "#projects",
    icon: faCreditCard,
  },
  {
    title: "Contact",
    link: "#contact",
    icon: faEnvelope,
  },
];

export const socialIcons = [
  {
    title: "github",
    icon: faGithub,
    link: "https://www.github.com",
  },
  {
    title: "linkedin",
    icon: faLinkedinIn,
    link: "https://www.linkedin.com",
  },
  {
    title: "instagram",
    icon: faInstagram,
    link: "https://www.instagram.com",
  },
  {
    title: "x",
    icon: faXTwitter,
    link: "https://www.x.com",
  },
];

export const skillsData = [
  {
    title: "JavaScript",
    percentage: "70",
    icon: js,
  },
  {
    title: "React",
    percentage: "86",
    icon: reactIcon,
  },
  {
    title: "Node",
    percentage: "85",
    icon: node,
  },
  {
    title: "MongoDb",
    percentage: "80",
    icon: mongo,
  },
  {
    title: "Material UI",
    percentage: "80",
    icon: mui,
  },
  {
    title: "Git & Github",
    percentage: "70",
    icon: github,
  },
  {
    title: "DevOPs",
    percentage: "30",
    icon: devops,
  },
];

export const educationData = [
  {
    title: "BSc In Software Engineering",
    org: "Haramaya University",
    state: "Ethiopia",
    year: "2015",
  },
  {
    title: "HTML ,CSS and Javascript Website Developer Certificate",
    org: "Edureka",
    state: "Online Self Paced",
    year: "2022",
  },
  {
    title: "React and Redux Toolkit Certificate",
    org: "Edureka",
    state: "Live Online",
    year: "2023",
  },

  {
    title: "Mongodb Developer Certificate",
    org: "Edureka",
    state: "Live Online",
    year: "2023",
  },
  {
    title: "Node Js Certificate",
    org: "Edureka",
    state: "Live Online",
    year: "2023",
  },
  {
    title: "Python and Django Full stack",
    org: "Udemy",
    state: "Online Self Paced",
    year: "2021",
  },

  {
    title: "Certificate In Flutter and Dart",
    org: "Udemy",
    state: "Online Self Paced",
    year: "2020",
  },
  {
    title: "Certificate In Cyber Security : Network Security",
    org: "Udemy",
    state: "Online Self Paced",
    year: "2020",
  },
  {
    title: "Certificate In Cyber Security : Hacker Exposed",
    org: "Udemy",
    state: "Online Self Paced",
    year: "2020",
  },
];
