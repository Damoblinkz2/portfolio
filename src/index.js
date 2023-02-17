import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import reportWebVitals from "./reportWebVitals";

const Nav = () => {
  return (
    <header className="nav-bar">
      {/* navigation */}
      <nav className="nav">
        {/* logo */}
        <a href="#" className="logo">
          MY PORTFOLIO
        </a>

        {/* menu */}
        <ul className="menu-list">
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
        </ul>
        {/* bars */}
        <div className="toggle"></div>
      </nav>
    </header>
  );
};

const Content = () => {
  return (
    <section>
      <div className="text-container">
        <p>Hello,</p>
        <p>I'M ADEDAMOLA</p>
        <p>Frontend Web Developer</p>
        <span className="hire-btn">
          <a href="mailto:adedamolatomide@gmail.com">Hire me</a>
        </span>
        <span className="down-cv">
          <a href="https://drive.google.com/file/d/18z7k3MQMBXpMmi9K3vvO2GJY39C6y5T_/view?usp=drivesdk">
            Download CV
          </a>
        </span>
      </div>
      <img alt="model" className="model" src="images/model-bg.png" />
    </section>
  );
};

const About = () => {
  return (
    <div className="about-container about">
      <img src="images/model.jpg" alt="about-img" />
      <div class="about-text">
        <h2>About Me</h2>
        <h4>Web Developer</h4>
        <p>
          Hello,My name is Yusuf Adedamola. I am a frontend web developer with
          3+ years of experience in this field.
        </p>
        <p>
          My aim is to leverage a proven knowledge of a web developer skills to
          sufficiently fill the role of a frontend web developer in your
          company/team.
        </p>
        <span className="hire-btn">
          <a href="mailto:adedamolatomide@gmail.com">Hire me</a>
        </span>
        <span className="down-cv">
          <a href="https://drive.google.com/file/d/18z7k3MQMBXpMmi9K3vvO2GJY39C6y5T_/view?usp=drivesdk">
            Download CV
          </a>
        </span>
      </div>
    </div>
  );
};

const services = [
  {
    id: 1,
    class: "box-1",
    spanNo: 1,
    heading: "Project Collaboration",
    details:
      "I have the ability and the necessary skills to collaborate with other developers in team in other the achieve the team's objective.",
  },
  {
    id: 2,
    class: "box-2",
    spanNo: 2,
    heading: "Frontend Web Development",
    details:
      "I build the front UI of a website with front end languages and technologies that makes the webpages load fast without leaving SEO practice behind.",
  },
  {
    id: 3,
    class: "box-3",
    spanNo: 3,
    heading: "JavaScript Debugging",
    details: "I help in JavaScript debugging and website updating.",
  },
];

const eachService = services.map((service) => {
  return (
    <div className="col-lg-4 column" key={service.id}>
      <div className={service.class}>
        <p className="numbering">
          <span>{service.spanNo}</span>
        </p>
        <p className="heading">{service.heading}</p>
        <p className="heading">{service.details}</p>
      </div>
    </div>
  );
});

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="services-text">
          <h2>Services</h2>
        </div>
        {/* --GRID---- */}
        <div className="box-container row">{eachService}</div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skill">
      <h2>Skills</h2>
      <div className="skills-bar container">
        <div className="bar">
          <div className="info">
            <span>HTML</span>
          </div>
          <div className="progress-line html">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>css</span>
          </div>
          <div className="progress-line css">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>BOOTSTRAP</span>
          </div>
          <div className="progress-line bootstrap">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>JAVASCRIPT</span>
          </div>
          <div className="progress-line js">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>JQUERY</span>
          </div>
          <div className="progress-line jquery">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>REACT JS</span>
          </div>
          <div className="progress-line react">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>GIT</span>
          </div>
          <div className="progress-line git">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
    id: 1,
    img: "images/project/hero-banner.jpg",
    name: "FUTRAS",
    des: "fitness and nutrition",
    github: "https://github.com/Damoblinkz2/futras/",
    live: "https://futras.vercel.app",
  },
  {
    id: 2,
    img: "images/project/image-hero-desktop.png",
    name: "SNAP",
    des: "remote workspace",
    github: "https://github.com/Damoblinkz2/snap/",
    live: "https://snap-damoblinkz.vercel.app",
  },
  {
    id: 3,
    img: "images/project/image-hero.jpg",
    name: "LOOPSTUDIO",
    des: "VR technology",
    github: "https://github.com/Damoblinkz2/loopstudio/",
    live: "https://loopstudio-one.vercel.app",
  },
  {
    id: 4,
    img: "images/project/elegant.jpg",
    name: "ELEGANT STYLE",
    des: "beauty & skincare",
    github: "https://github.com/Damoblinkz2/elegant-style/",
    live: "https://elegant-style.vercel.app",
  },
  {
    id: 5,
    img: "images/project/vego--hero.jpg",
    name: "VEGO BANK",
    des: "banking",
    github: "https://github.com/Damoblinkz2/vegobank/",
    live: "https://vegobank.vercel.app",
  },
  {
    id: 6,
    img: "images/project/vegosite.jpg",
    name: "VEGOBANK WEB",
    des: "banking website",
    github: "https://github.com/Damoblinkz2/vegoweb/",
    live: "https://vegoweb.vercel.app",
  },
];

const newProject = projects.map((eachProject) => {
  return (
    <div className="col-lg-3 column" key={eachProject.id}>
      <div className="inner">
        <div className="inner-img">
          <img src={eachProject.img} alt="project" />
        </div>
        <div className="inner-note">
          <h3>{eachProject.name}</h3>
          <h6>{eachProject.des}</h6>
          <div className="links">
            <span>
              <a href={eachProject.github}>Github</a>
            </span>
            <span>
              <a href={eachProject.live}>Live Site</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

const Projects = () => {
  return (
    <div className="project">
      <div className="container">
        <h2>Projects</h2>
        <div className="row">{newProject}</div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <h2>MY PORTFOLIO</h2>
      <p>ADEDAMOLA</p>
      <div class="social-icons">
        <a href="mailto:adedamolatomide@gmail.com">
          <i className="fab fa-google"></i>
        </a>
        <a href="https://twitter.com/Damoblinkz?t=I6soy_66vEfb000amZpNMg&s=09">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/iam_damoblinkz/">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/adedamola-olatomide-19191b213">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>

      <p class="copyright">Copyright by ADEDAMOLA</p>
    </footer>
  );
};

const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <Content />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
