import React from "react";
import "./GifPage.css";
const index = ({ items }) => {
  return (
    <div className="gifpage">
      {items.map((e, i) => {
        //detects if the images heigh it bigger then it's width to allow more consistent spacing. IF the document is bellow 450px it makes the images take up more room
        let imgSrc = e.images.fixed_width_downsampled.url;
        if (
          e.images.fixed_width_downsampled.height > 200 ||
          document.documentElement.clientWidth < 450
        ) {
          imgSrc = e.images.fixed_height_downsampled.url;
        }
        return <img alt={e.slug} key={e.slug} src={imgSrc} />;
      })}
    </div>
  );
};

export default index;
