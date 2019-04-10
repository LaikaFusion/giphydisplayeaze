import React, { useState } from 'react';
import PropTypes from 'prop-types';

import LoadingAnimation from '../LoadingAnimation';

const index = ({ slug, imgSrc, onclickFunc }) => {
  const [Loaded, setLoaded] = useState(false);

  return (
    <div
      role="button"
      className="gifContainer"
      onClick={onclickFunc}
      onKeyUp={onclickFunc}
      tabIndex={0}
    >
      {Loaded ? null : <LoadingAnimation />}
      <img
        style={Loaded ? { width: '100%' } : { display: 'none' }}
        alt={slug}
        key={slug}
        src={imgSrc}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};
index.defaultProps = {
  slug: 'Missing Slug',
};
index.propTypes = {
  slug: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  onclickFunc: PropTypes.func.isRequired,
};
export default index;
