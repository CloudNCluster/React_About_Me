import { Link } from "react-router-dom";
import './Error.css';
import { useLocation } from "react-router-dom";
const Error = () => {
  const location = useLocation();

  return (
    <>
      <h1 className="text"> <label style={{color: 'red'}}>{location.pathname}</label> page Not found </h1>
      <Link className="errorlink" to=''> Go To Home </Link>
    </>
  );
};
export default Error;
