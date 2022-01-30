import "./about.css";
import tech from "../../img/tech.png";
import resume from "../../resume/Amal_Mohan_M.pdf";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card">
          <img
            src={tech}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
            I am a tech enthusiast who enjoys debugging and ﬁxing issues no matter how hard it is, I just go for it!
        </p>
        <p className="a-desc">
          I have over 6+ years of experience in both the Tech and Business side of the industry. However I'm more inclined
          to the Tech/R&D division because I'm a passionate programmer who likes to code. <br/>
          If I'm stuck, I'll learn and then code, I don't <span className="high">usually</span> copy/paste.
        </p> <br/>
        <p className="a-desc">If you would like to know more about me, click the button below to download my resume.</p> <br/>
        <a href={resume} target="_blank" rel="noreferrer">
        <button>Download Resume</button>
        </a>
      </div>
    </div>
  );
};

export default About;
