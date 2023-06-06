import MyComponent from "../Social media";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <h1> Ready to Get Started? </h1>
      <p>
        Looking for professional IT services and software solutions? We are a
        top firm offering custom software solutions on advanced technologies to
        help businesses propel to the next generation of software development.
      </p>
      <MyComponent></MyComponent>
      <button> CONTACT US NOW </button>
    </div>
  );
};
export default Footer;
