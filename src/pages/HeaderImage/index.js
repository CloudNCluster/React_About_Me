import React from "react";
import "./index.css";
const HeaderImage = () => {
  const imageUrl =
    "https://as1.ftcdn.net/v2/jpg/04/46/11/48/1000_F_446114886_GjCFG3JoSN26d08f1lvMmMxVHrMjqeVs.jpg";

  return <img src={imageUrl} alt="Header" className="header-image" />;
};

export default HeaderImage;
