import Button from "@mui/material/Button";
import "./index.css";

const ContactUs = () => {
  return (
    <div className="footer-section">
      <h1> Ready to Get Started? </h1>
      <hr
        style={{
          width: "3rem",
          borderTop: "3px solid white",
          borderRadius: "20px",
        }}
      />
      <p className="paragraph">
        Looking for professional IT services and software solutions? We are a
        top firm offering custom software solutions on advanced technologies to
        help businesses propel to the next generation of software development.
      </p>
      {/* <button> CONTACT US NOW </button> */}
      <Button variant="contained" color="success">
        CONTACT US NOW
      </Button>
   
      {/* <button> CONTACT US NOW </button> */}
    </div>
  );
};
export default ContactUs;
