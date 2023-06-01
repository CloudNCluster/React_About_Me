import { Link } from "react-router-dom";
import "./index.css";

const Error = () => {

  return (
    <>
      <h1 className="text">Page Not found</h1>

      <Link className="errorlink" to="">
        Go To Home
      </Link>
    </>
  );
};

export default Error;
