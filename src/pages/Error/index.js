import { Link } from "react-router-dom";
import "./index.css";
import { useLocation } from "react-router-dom";

const Error = () => {
  const location = useLocation();

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
