import React from "react";
import "./GifPage.css";
const index = ({ items }) => {
  return (
    <div className="gifpage">
      {items.map((e, i) => {
        //detects if the images heigh it bigger then it's width to allow more consistent spacing. IF the document is bellow 450px it makes the images take up more room
        if (
          e.images.fixed_width_downsampled.height > 200 ||
          document.documentElement.clientWidth < 450
        ) {
          return (
            <img alt={e.slug} key={e.slug} src={e.images.fixed_height_downsampled.url} />
          );
        }
        return <img alt={e.slug} key={e.slug} src={e.images.fixed_width_downsampled.url} />;
      })}
    </div>
  );
};

export default index;
