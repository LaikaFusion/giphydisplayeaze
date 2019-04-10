import React, { useState } from "react";
import LoadingAnimation from "../LoadingAnimation";
const index = ({ slug, imgSrc, onclickFunc = ()=>{} }) => {
  const [Loaded, setLoaded] = useState(false);

  return (
    <div className="gifContainer" onClick={onclickFunc}>
      {Loaded ? null : <LoadingAnimation />}
      <img
        style={Loaded ? {width:"100%"} : { display: "none" }}
        alt={slug}
        key={slug}
        src={imgSrc}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default index;
