import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import './GifModal.css';

import GifLoader from '../GifLoader';

// giphy will no always give a display name if there is no extra formatting over the normal username. Not all gifs have a user object

const determineName = userObj => {
  if (!userObj) {
    return '';
  }
  if (userObj.display_name) {
    return userObj.display_name;
  }
  return userObj.username;
};

const index = ({ modalObj, setgifModal }) => {
  const textAreaRef = useRef(null);

  const [copyText, setCopyText] = useState('Copy to clipboard');
  // to use the browser copy api, a text area is needed. This is hidden with css
  const copyToClipboard = () => {
    textAreaRef.current.select();
    document.execCommand('copy');
    setCopyText('Copied!');
    // to make sure it reverts
    setTimeout(() => {
      setCopyText('Copy to clipboard');
    }, 2000);
  };
  // due to the multiple clickable elements in the modal this is needed to stop the modal from closing when the box around it is clicked
  const stopProp = e => {
    e.stopPropagation();
  };

  const { info } = modalObj;
  const username = determineName(info.user);

  return (
    <div
      className="GifModalBackground"
      onClick={() => {
        setgifModal({ display: false });
      }}
      onKeyPress={e => {
        if (e.key === 'Escape') {
          setgifModal({ display: false });
        }
      }}
    >
      <div role="Main" className="gifModalCard" onClick={stopProp}>
        <a href={info.directLink}>
          <GifLoader slug={info.title} imgSrc={info.imgUrl} />
        </a>
        <div className="modalTextArea">
          <div className="gifTitle">
            {info.title ? info.title.toUpperCase().split('GIF')[0] : 'Untitled'}
          </div>

          <div>{info.user ? `By ${username}` : ''}</div>
          <div className="bottomRow">
            <div className="copyButton" onClick={copyToClipboard}>
              {copyText}
            </div>

            <textarea
              className="copyTextArea"
              readOnly
              ref={textAreaRef}
              value={info.embed}
              style={{ display: 'none' }}
            />
            <div className="modalRatingArea">
              {info.rating ? `${info.rating.toUpperCase()}` : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
index.defaultProps = {
  setgifModal: () => {},
};
index.propTypes = {
  modalObj: PropTypes.shape({ info: PropTypes.object.isRequired }).isRequired,
  setgifModal: PropTypes.func,
};
export default index;
