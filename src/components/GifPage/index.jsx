import React from "react";
import "./GifPage.css";
import GifLoader from "../GifLoader";

const index = ({ items, imageClick }) => {
  return (
    <div className="gifpage">
      {items.map(image => 
        <GifLoader imageClick={imageClick} image={image} />
      )}
    </div>
  );
};

export default index;
