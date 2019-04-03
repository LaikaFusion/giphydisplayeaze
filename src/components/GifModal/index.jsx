import React, { useRef, useState, useEffect } from "react";
import "./GifModal.css";

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
  const [copyText, setCopyText] = useState("");

  const copyToClipboard = e => {
    const curUrl = copyText;
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopyText("Copied!");
    //to make sure it reverts
    setTimeout(() => {
      setCopyText(curUrl);
    }, 2000);
  };

  const stopProp = (e)=>{
    e.stopPropagation()
  }
  //this is to intially set the copyText correctly
  useEffect(() => {
    setCopyText(info.embed);
  }, []);

  const info = modalObj.info;
  let username = determineName(info.user);

  return (
    <div className="GifModalBackground" onClick = {()=>{
      setgifModal({display: false})
    }}>
      <div className="gifModalCard" onClick= {stopProp}>
        <a href={info.directLink}>
          <img alt={info.title} key={info.title} src={info.imgUrl} />
        </a>
        <div className="modalTextArea">
          <div>{info.title.toUpperCase()}</div>
          
          <div>{info.user ? `User: ${username}` : ""}</div>
         
          <textarea
            className="copyTextArea"
            onClick={copyToClipboard}
            readOnly
            ref={textAreaRef}
            value={copyText}
          />
        </div>
      </div>
    </div>
  );
};

export default index;
