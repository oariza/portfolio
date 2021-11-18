import bienesRaices from "../assets/bienes-raices.png";
import neoAdmin from "../assets/neo-admin.png";
import blogCafe from "../assets/blog-decafe.png";
import easyBank from "../assets/easybank.png";
import MAO from "../assets/MAO.png";
import xihuala from "../assets/xihuala.png";
import neo from "../assets/neo.png";


export const screenSize = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const projects = [
  {
    title: "Neo Educate",
    type: "Página web / Aplicación nativa",
    technologies: "ReactJs / React Native / CSS / GraphQL",
    image: neo,
    link: "https://www.neoeducate.com/"
  },
  {
    title: "Neo Admin Portal",
    type: "Página web",
    technologies: "HTML / CSS / Bootstrap / Js / Firebase",
    image: neoAdmin,
    link: "https://clever-payne-aa822f.netlify.app/"
  },
  {
    title: "Xihuala App",
    type: "Página web",
    technologies: "React js / Bootstrap / Mongo / Express / Node",
    image: xihuala,
    link: "http://xihuala-app.mybluemix.net/"
  },
  {
    title: "MAO",
    type: "Página web",
    technologies: "HTML / CSS / Bootstrap / Js / Firebase",
    image: MAO,
    link: "https://relaxed-williams-a9e46c.netlify.app/"
  },
  {
    title: "Easybank",
    type: "Página web",
    technologies: "HTML / CSS / Bootstrap",
    image: easyBank,
    link: "https://gracious-einstein-cf3cf7.netlify.app/"
  },
  {
    title: "Bienes raíces",
    type: "Página web",
    technologies: "HTML / CSS",
    image: bienesRaices,
    link: "https://eager-neumann-31384b.netlify.app/"
  },
  {
    title: "Blog de café",
    type: "Página web",
    technologies: "HTML / CSS",
    image: blogCafe,
    link: "https://determined-stonebraker-565de2.netlify.app/"
  },
];
