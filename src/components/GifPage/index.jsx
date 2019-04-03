import React from "react";
import './GifPage.css';
const index = ({ items }) => {
  return (
    <div className="gifpage">
      {items.map((e, i) => {
        return <img alt={e.slug} src={e.images.fixed_width.url} />;
      })}
    </div>
  );
};

export default index;
