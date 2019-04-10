import React from 'react';
import PropTypes from 'prop-types';

import './TopBar.css';

const ratings = ['Y', 'G', 'PG', 'PG-13', 'R'];

const index = ({ curRating, changeRating }) => {
  return (
    <div className="TopBar">
      <div className="siteTitle">Gif Theater</div>
      <div className="ratingSelector">
        {ratings.map(e => {
          let classes = 'rating';
          if (curRating === e) {
            classes = 'rating activeSelector';
          }
          return (
            <div
              onClick={() => {
                changeRating(e);
              }}
              key={e}
              className={classes}
              tabIndex={1}
            >
              {e}
            </div>
          );
        })}
      </div>
    </div>
  );
};

index.defaultProps = {
  curRating: 'G',
};
index.propTypes = {
  curRating: PropTypes.string,
  changeRating: PropTypes.func.isRequired,
};

export default index;
