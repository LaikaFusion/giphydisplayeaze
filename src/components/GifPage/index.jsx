import React from "react";
import './GifPage.css';
const index = ({ items }) => {
  return (
    <div className="gifpage">
      {items.map((e, i) => {
        if(e.images.fixed_width_downsampled.height > 200){
          return <img alt={e.slug} src={e.images.fixed_height_downsampled.url} />;
        }
        return <img alt={e.slug} src={e.images.fixed_width_downsampled.url} />;
      })}
    </div>
  );
};

export default index;
