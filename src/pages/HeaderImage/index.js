import React from "react";
import "./index.css";
const HeaderImage = () => {
  const imageUrl =
    "https://as1.ftcdn.net/v2/jpg/04/46/11/48/1000_F_446114886_GjCFG3JoSN26d08f1lvMmMxVHrMjqeVs.jpg";

  return (
    <figure>
      <img
        src={imageUrl}
        alt="Header_image_displays_here"
        className="header-image"
      />
      <figcaption>This Image is for CNC</figcaption>
    </figure>
  );
};

export default HeaderImage;
