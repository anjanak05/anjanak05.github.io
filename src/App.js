import "./App.css";
import Navbar from "./Components/Navbar";
import {
  FaMapMarkedAlt,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { ImDownload, ImLocation } from "react-icons/im";
import { MdEmail, MdSmartphone } from "react-icons/md";
import { IoIosMailOpen } from "react-icons/io";
import { TiGlobeOutline } from "react-icons/ti";
import GitHubCalendar from "react-github-calendar";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const skillsData = [
    { name: "HTML", image: "/html.png" },
    { name: "CSS", image: "/css.png" },
    { name: "JavaScript", image: "/javascript.png" },
    { name: "React", image: "/react.png" },
    { name: "Redux", image: "/redux.png" },
    { name: "NodeJs", image: "/node.png" },
    { name: "Express", image: "/expressjs.png" },
    { name: "MongoDb", image: "/mongodb.png" },
    { name: "Github", image: "/github.png" },
    { name: "Chakra UI", image: "/chakrui.png" },
  ];

  const projectsData = [
    {
      name: "Bath & Body Works Clone",
      about:
        "Bath & Body Works, LLC. is an American retail store chain that sells soaps, lotions, fragrances, and candles.",
      gitUrl: "https://github.com/anjanak05/ProjectUnit3-Bath-Body",
      liveUrl: "https://beamish-palmier-e5b41f.netlify.app/",
      image: "/bathBody_1.png",
      techStack: "HTML | CSS | Javascript",
    },

    {
      name: "Geekbuying Clone",
      about:
        "Geekbuying is one of the leading E-commerce websites delivering a wide range of consumer technology across the globe.",
      gitUrl: "https://github.com/anjanak05/geek_buying",
      liveUrl: "https://warm-truffle-27d4ff.netlify.app/",
      image: "/geekBuying_1.png",
      techStack: "HTML | CSS | Javascript",
    },
    {
      name: "Geekbuying Clone",
      about:
        "Geekbuying is one of the leading E-commerce websites delivering a wide range of consumer technology across the globe.",
      gitUrl: "https://github.com/anjanak05/geek_buying",
      liveUrl: "https://warm-truffle-27d4ff.netlify.app/",
      image: "/geekBuying_1.png",
      techStack: "HTML | CSS | Javascript",
    },
  ];

  (function () {
    emailjs.init("GiaB7EGjDy8SXY52g");
  })();

  function onSubmit(e) {
    e.preventDefault();
    console.log("entery");
    let fullName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userMessage = document.getElementById("message").value;

    var contactParams = {
      from_name: fullName,
      from_email: userEmail,
      message: userMessage,
    };

    emailjs
      .send("service_y95eg08", "template_1vi5fys", contactParams)
      .then((res) => alert("Mail Sent"));
  }

  // const [nameData, setNameData] = useState()
  // const [emailData, setEmailData] = useState()
  // const [msgData, setMsgData] = useState()

  // console.log(nameData, emailData,msgData)
  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   let data={
  //     from_name:nameData,
  //     from_email:emailData,
  //     message:msgData
  //   }
  //   emailjs.sendForm('service_y95eg08', 'template_1vi5fys',data, 'GiaB7EGjDy8SXY52g')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // }
  return (
    <main className="Home" id="home">
      <Navbar className="stickyNavbar"></Navbar>
      {/* <-----------------------------------------------------Home start----------------------------------------------> */}
      <section id="home" className="Home">
        <div class="item">
          <div>
            <p className="nameDesign">Hi, I'm</p>
            <p className="nameDesign">Anjana Kushwaha</p>
            <p className="fullstackName"> Full Stack Web Developer </p>
            <p style={{ marginTop: "2%" }}>
              <a
                href="https://github.com/anjanak05"
                style={{ marginRight: "10px" }}
                target="_blank"
              >
                <FaGithub color="#CA82F8"></FaGithub>
              </a>
              <a
                href="https://www.linkedin.com/in/anjana-kushwaha/"
                target="_blank"
              >
                <FaLinkedin color="#CA82F8"></FaLinkedin>
              </a>
            </p>
            <p style={{ marginTop: "2%", color: "#ca82f8" }}>
              <a
                className="btnResume"
                href="/Anjana_Kushwaha_Resume.pdf"
                download="Anjana Kushwaha Resume"
              >
                <ImDownload></ImDownload> Resume
              </a>
            </p>
          </div>

          <video width="470" marginTop="-40%" height="490" autoPlay muted loop>
            <source src="homeVideo.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      {/* <--------------------------------------------Home end---------------------------------> */}

      {/* <--------------------------------------------About Start---------------------------------> */}

      <section id="about" className="About">
        <h1>About</h1>
        <div>
          <img src="/about.jpg" alt="ffd" />
          <div className="aboutsecondSection">
            <p>
              Solutions-focused{" "}
              <span style={{ color: "#ca82f8" }}>Front-End Developer</span>,
              skilled in designing and developing web apps using HTML, CSS,
              JavaScript, React, and Redux. Worked on independent and
              collaborative projects. Passionate about creating responsive and
              adaptive web designs.
            </p>

            <div className="mainAbbout">
              <div className="aboutContactSEction">
                <ImLocation color="#CA82F8"></ImLocation>
                <p style={{ marginTop: "-0.9%", marginLeft: "2%" }}>
                  {" "}
                  Bhopal, Madhya Pradesh
                </p>
              </div>
              <div className="aboutContactSEction">
                <MdEmail color="#CA82F8"></MdEmail>
                <p style={{ marginTop: "-0.9%", marginLeft: "2%" }}>
                  {" "}
                  anjana4523@gmail.com
                </p>
              </div>

              <div className="aboutContactSEction">
                <FaPhoneAlt color="#CA82F8"></FaPhoneAlt>
                <p style={{ marginTop: "-2%", marginLeft: "2%" }}>
                  {" "}
                  +917869580521
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <--------------------------------------------About end---------------------------------> */}
      {/* <--------------------------------------------Skills Start---------------------------------> */}

      <section id="skills" className="Skills">
        <h1>Skills</h1>
        <div className="skillsSection">
          {skillsData.map((e) => (
            <div>
              <img src={e.image}></img>
              <p>{e.name}</p>
            </div>
          ))}
        </div>
      </section>
      {/* <--------------------------------------------Skills end---------------------------------> */}
      {/* <--------------------------------------------Projects start---------------------------------> */}

      <section id="project" className="Project">
        <h1>Project</h1>
        <div className="projectGrid">
          {projectsData.map((e) => (
            <div className="projectContainer">
              <p>{e.name}</p>
              <div>
                <img src={e.image}></img>
                <div>
                  <p className="aboutProject">{e.about}</p>
                  <p> Tech Stack: {e.techStack}</p>
                  <div className="projectBtns">
                    <a href={e.gitUrl}>
                      <FaGithub></FaGithub> Code
                    </a>
                    <a href={e.liveUrl}>
                      <FaExternalLinkAlt
                        style={{ marginRight: "4px", marginTop: "-2px" }}
                      ></FaExternalLinkAlt>
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h4 className="githubName">Github Stats </h4>

        <div className="githubStats">
          <a href="https://awesome-github-stats.azurewebsites.net/index.html??cardType=github&theme=graywhite&Border=CA82F8&Ring=CA82F8">
            <img
              alt="anjanak05's GitHub Stats"
              src="https://awesome-github-stats.azurewebsites.net/user-stats/anjanak05?cardType=github&theme=graywhite&Border=CA82F8&Ring=CA82F8"
            />
          </a>

          <a href="https://streak-stats.demolab.com/?user=DenverCoder1&theme=dark"></a>
          <img src="https://github-readme-streak-stats.herokuapp.com?user=anjanak05&ring=CA82F8&fire=CA82F8&currStreakNum=CA82F8&currStreakLabel=CA82F8&border=CA82F8" />
        </div>
        <h4 className="githubName">Github Activity </h4>
        <div className="githubActivity">
          <GitHubCalendar
            username="anjanak05"
            color="#ca82f8"
            year={new Date().getFullYear()}
          />
        </div>
      </section>
      {/* <--------------------------------------------Project end---------------------------------> */}
      {/* <--------------------------------------------Contact start---------------------------------> */}

      <section id="contact" className="Contact">
        <h1>Contact</h1>
        <div className="contactContainer">
          <div>
            <h3>My Address</h3>
            <ul style={{ listStyle: "none", lineHeight: "40px" }}>
              <li>
                <span>
                  <FaMapMarkedAlt color="#ca82f8"></FaMapMarkedAlt>
                </span>{" "}
                Bhopal, Madhya Pradesh
              </li>
              <li>
                <span>
                  <MdSmartphone color="#ca82f8"></MdSmartphone>
                </span>{" "}
                +917869580521
              </li>
              <li>
                <span>
                  <IoIosMailOpen color="#ca82f8"></IoIosMailOpen>
                </span>{" "}
                anjna4523@gmail.com
              </li>
              <li>
                <span>
                  <TiGlobeOutline color="#ca82f8"></TiGlobeOutline>
                </span>{" "}
                https://anjanak05.github.io/
              </li>
              <li>
                <span>
                  <FaGithub color="#ca82f8"></FaGithub>
                </span>{" "}
                anjanak05
              </li>
              <li>
                <span>
                  <FaLinkedin color="#ca82f8"></FaLinkedin>
                </span>{" "}
                anjana-kushwaha
              </li>
            </ul>
          </div>
          <div className="formContainer">
            <form>
              <div className="msg">
                <textarea
                  name="message"
                  //  onChange={(e)=> setMsgData(e.target.value)}
                  className="form-control"
                  id="message"
                  required
                  cols="30"
                  rows="7"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="nameEmail">
                <div>
                  <input
                    // onChange={(e)=> setNameData(e.target.value)}
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
                <div>
                  <input
                    // onChange={(e)=> setEmailData(e.target.value)}
                    id="email"
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div>
                <button onClick={onSubmit} class="buttonFormSubmit">
                  Contact Me
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
export default App;
