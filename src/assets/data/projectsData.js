const sanadmin =
  "https://res.cloudinary.com/djznkldpb/image/upload/v1693664411/samples/portifolio-images/sanadmin_diqtfk.jpg";
const nsrphoto =
  "https://res.cloudinary.com/djznkldpb/image/upload/v1693664411/samples/portifolio-images/nsrphoto_dc5x90.jpg";
const oldportifolio =
  "https://res.cloudinary.com/djznkldpb/image/upload/v1693664411/samples/portifolio-images/oldportifolio_n7a2kb.jpg";
const nsrcategory =
  "https://res.cloudinary.com/djznkldpb/image/upload/v1693838356/samples/portifolio-images/nsrcategory_yww6y6.jpg";
import mernjwt from "../images/project/merjwt.jpg";

export const projectData = [
  {
    id: 1,
    title: "MERN Stack Authentication With JWT(Advanced)",
    githublink: "https://github.com/san-21/MERN-Jwt-Authentication",
    demolink: "https://mernjwt-ui.onrender.com/",
    img: mernjwt,
    status: "Done for Now",
  },
  {
    id: 2,
    title: "Full Stack Admin Dashboard",
    githublink: "https://github.com/san-21/MERN-sanshop",
    demolink: "https://sanshop.onrender.com/",
    img: sanadmin,
    status: "Done for Now",
  },
];
export const smallProjects = [
  {
    id: 1,
    title: "NordStromRack-Clone",
    tech: "React",
    tech2: "MUI",
    githublink: "https://github.com/AdwaSoft/nordstromrack-landingpage-clone",
    demolink: "https://nordstromrack-com.onrender.com",
    img: nsrcategory,
    img2: nsrphoto,
  },
  {
    id: 2,
    title: "First-old-portifolio-Starter",
    tech: "React",
    tech2: "MUI",
    githublink: "https://github.com/AdwaSoft/react-portifolio",
    demolink: "https://melketsedekcheru.netlify.app/",
    img: oldportifolio,
  },
];
