import React from "react";
import "./GifPage.css";
const index = ({ items, imageClick }) => {
  return (
    <div className="gifpage">
      {items.map((e) => {
        //detects if the images heigh it bigger then it's width to allow more consistent spacing. IF the document is bellow 450px it makes the images take up more room
        let imgSrc = e.images.fixed_width_downsampled.url;
        if (
          e.images.fixed_width_downsampled.height > 200 ||
          document.documentElement.clientWidth < 450
        ) {
          imgSrc = e.images.fixed_height_downsampled.url;
        }
        return (
          <img
            onClick={() => {
              imageClick({
                display: true,
                info: {
                  directLink: e.url,
                  user: e.user,
                  title: e.title,
                  embed: e.embed_url,
                  imgUrl: e.images.original.url,
                  rating: e.rating
                }
              });
            }}
            alt={e.slug}
            key={e.slug}
            src={imgSrc}
          />
        );
      })}
    </div>
  );
};

export default index;
