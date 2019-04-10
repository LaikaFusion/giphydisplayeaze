import React, { useRef, useState } from "react";
import "./GifModal.css";
import GifLoader from "../GifLoader";

//giphy will no always give a display name if there is no extra formatting over the normal username. Not all gifs have a user object
const determineName = userObj => {
  if (!userObj) {
    return "";
  }
  if (userObj.display_name) {
    return userObj.display_name;
  }
  return userObj.username;
};

const index = ({ modalObj, setgifModal }) => {
  const textAreaRef = useRef(null);
  const [copyText, setCopyText] = useState("Copy to clipboard");

  const copyToClipboard = e => {
    textAreaRef.current.select();
    document.execCommand("copy");
    setCopyText("Copied!");
    //to make sure it reverts
    setTimeout(() => {
      setCopyText("Copy to clipboard");
    }, 2000);
  };

  const stopProp = e => {
    e.stopPropagation();
  };
  //this is to intially set the copyText correctly

  const info = modalObj.info;
  let username = determineName(info.user);

  return (
    <div
      className="GifModalBackground"
      onClick={() => {
        setgifModal({ display: false });
      }}
    >
      <div className="gifModalCard" onClick={stopProp}>
        <a href={info.directLink}>
          <GifLoader slug={info.title} imgSrc={info.imgUrl} />
        </a>
        <div className="modalTextArea">
          <div className="gifTitle">
            {info.title ? info.title.toUpperCase().split("GIF")[0] : "Untitled"}
          </div>

          <div>{info.user ? `By ${username}` : ""}</div>
          <div className="bottomRow">
            <div className="copyButton" onClick={copyToClipboard}>
              {copyText}
            </div>

            <textarea
              className="copyTextArea"
              readOnly
              ref={textAreaRef}
              value={info.embed}
              style={{ display: "none" }}
            />
            <div className="modalRatingArea">
              {info.rating ? `${info.rating.toUpperCase()}` : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
