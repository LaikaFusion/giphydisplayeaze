import React, { useState } from "react";
import LoadingAnimation from "../LoadingAnimation";
const index = ({ image, imgSrc, onclickFunc }) => {
  const [Loaded, setLoaded] = useState(false);


  return (
    <div className="gifContainer" onClick={onclickFunc}>
      {Loaded ? null : <LoadingAnimation />}
      <img
        style={Loaded ? {} : { display: "none" }}
        alt={image.slug}
        key={image.slug}
        src={imgSrc}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default index;
