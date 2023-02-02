import { Fragment, useState } from "react";
import AnimatedTextSolve from "./AnimatedText/AnimatedTextSolve";
import AboutPopup from "./popup/AboutPopup";

const aboutData = {
  firstName: "Herm",
  lastName: "Tac",
  bithday: "Established 2020",
  address: "UT Dallas",
  phn: "+1 (844) HERMTAC",
  email: "hey@hermtac.com",
  serviceLists: [
    "Website Development",
    "Digital Experience",
    "Content Marketing",
    "Social Media Design",
    "Shared Web Hosting",
  ],
  skills: {
    programming: [
      { name: "WordPress", value: "95" },
      { name: "JavaScript", value: "80" },
      { name: "Angular", value: "90" },
    ],
    language: [
      { name: "English", value: "95" },
      { name: "Russian", value: "80" },
      { name: "Arabic", value: "90" },
    ],
  },
  education: [
    { year: "2014 - 2016", unv: "Oxford Univercity", degree: "Master Degree" },
    { year: "2010 - 2014", unv: "Texas Univercity", degree: "Bachelor Degree" },
    { year: "2008 - 2010", unv: "Simone College", degree: "Associate Degree" },
  ],
  working: [
    {
      year: "2018 - running",
      company: "Envato Elements",
      deg: "Exclusive Author",
    },
    { year: "2015 - 2018", company: "Avo Corporation", deg: "Content Manager" },
    { year: "2012 - 2015", company: "FC Barcelona", deg: "Football Player" },
  ],
  partnersLogos: [
    "img/partners/1.png",
    "img/partners/2.png",
    "img/partners/3.png",
    "img/partners/4.png",
  ],
};

const About = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <AboutPopup
        open={popup}
        close={() => setPopup(false)}
        aboutData={aboutData}
      />
      <div className="edrea_tm_section hidden animated" id="about">
        <div className="section_inner">
          <div className="edrea_tm_about">
            <div className="left">
              <div className="image">
                <img src="img/thumbs/1-1.jpg" alt="" />
                <div className="main" data-img-url="/img/about/1.jpg" />
              </div>
            </div>
            <div className="right">
              <div className="short">
                <h3 className="name">
                  <span className="hermtac-font">
                    <span className="hermtac-orange">Hermes </span>
                    <span className="hermtac-purple">Tacticle</span>
                  </span>
                </h3>
                <h3 className="job">
                  <AnimatedTextSolve />
                </h3>
              </div>
              <div className="text">
                <p>
                HermTac is an Ideation, Design, Engineering, Prototype and Manufacturing company
                for innovative consumer, healthcare and technology products.
                </p>
              </div>
              <div className="edrea_tm_button">
                <a href="#" onClick={() => setPopup(true)}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;
