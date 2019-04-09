import React from "react";
import "./TopBar.css";
const ratings = ["Y", "G", "PG", "PG-13", "R"];

const index = ({ curRating = "G", changeRating }) => {
  return (
    <div className="TopBar">
      <div className="siteTitle">Gif Theater</div>
      <div className="ratingSelector">
        {ratings.map(e => {
          let classes = "rating";
          if (curRating === e) {
            classes = "rating activeSelector";
          }
          return (
            <div onClick={()=>{changeRating(e)}} key={e} className={classes}>
              {e}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
