import React from "react";
import LoadingAnimation from '../LoadingAnimation';
const index = ({ image, imageClick }) => {
  //detects if the images heigh it bigger then it's width to allow more consistent spacing. IF the document is bellow 450px it makes the images take up more room
  let imgSrc = image.images.fixed_width_downsampled.url;
  if (
    image.images.fixed_width_downsampled.height > 200 ||
    document.documentElement.clientWidth < 450
  ) {
    imgSrc = image.images.fixed_height_downsampled.url;
  }
  return (
    <div>
      <LoadingAnimation/>
      <img
        onClick={() => {
          imageClick({
            display: true,
            info: {
              directLink: image.url,
              user: image.user,
              title: image.title,
              embed: image.embed_url,
              imgUrl: image.images.original.url,
              rating: image.rating
            }
          });
        }}
        alt={image.slug}
        key={image.slug}
        src={imgSrc}
      />
    </div>
  );
};

export default index;
