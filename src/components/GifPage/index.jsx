import React from 'react';
import PropTypes from 'prop-types';

import './GifPage.css';

import GifLoader from '../GifLoader';

// detects if the images height is bigger then it's width to allow more consistent spacing. If the document is bellow 450px it makes the images take up more room. This helps a lot with spacing

const pickSize = image => {
  if (
    image.images.fixed_width_downsampled.height > 200 ||
    document.documentElement.clientWidth < 520
  ) {
    return image.images.fixed_height_downsampled.url;
  }
  return image.images.fixed_width_downsampled.url;
};

const index = ({ items, imageClick }) => {
  return (
    <div className="gifpage">
      {items.map(image => (
        <div key={image.slug} className="filmOutline">
          <GifLoader
            onclickFunc={() => {
              imageClick({
                display: true,
                info: {
                  directLink: image.url,
                  user: image.user,
                  title: image.title,
                  embed: image.embed_url,
                  imgUrl: image.images.original.url,
                  rating: image.rating,
                },
              });
            }}
            slug={image.slug}
            imgSrc={pickSize(image)}
          />
        </div>
      ))}
    </div>
  );
};

export default index;

index.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  imageClick: PropTypes.func.isRequired,
};
