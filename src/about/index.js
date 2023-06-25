import { Button } from "@mui/material";
import "./index.css";

const About = (props) => {
  let myStyle = {
    backgroundColor: props.theme === "dark" ? "#222222" : "",
  };

  return (
    <div className="divbackground" style={myStyle}>
      <p style={{ color: "orange", fontSize: "20px" }}> Why Choose CNC? </p>
      <h1 className="h1">
        CNC is a rapidly growing software solutions company that offers
        customized and innovative solutions.
      </h1>
      <p className="p">
        Our expertise in advanced and emerging technologies, including Java,
        HTML5, CSS, .NET Framework, Data Science, Python, Internet of Things,
        and many more, has allowed us to establish a strong presence in the
        market as a leading technology services company.
      </p>

      <Button className="learnmorebutton" color="primary" variant="contained">
        Learn more
      </Button>
      <img
        className="image"
        src="https://cloudncluster.com/images/transformTechs_icon.png"
        alt="img-not-found"
      />
      <div>
        <h1 className="h1 font"> Our Clients: </h1>
        <div className="imagebar">
          <img
            src="https://cloudncluster.com/images/Kanectify.jpeg"
            alt="img-not-found"
            className="clientimages"
          />
          <img
            src="https://cloudncluster.com/images/Bio9Ventures.png"
            alt="img-not-found"
            className="clientimages ventures"
          />
          <img
            src="https://cloudncluster.com/images/partners/nexus.jpeg"
            alt="img-not-found"
            className="clientimages nexus"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
