import React from "react";
import "./GifPage.css";
const index = ({ items }) => {
  return (
    <div className="gifpage">
      {items.map((e, i) => {
        if (
          e.images.fixed_width_downsampled.innerWidth > 200 ||
          document.documentElement.clientWidth < 500
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
