import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";
import "./App.css";
import request from "./api";
import GifPage from "./components/GifPage";
import GifModal from "./components/GifModal";
import LoadingAnimation from "./components/LoadingAnimation";
import TopBar from "./components/TopBar/";
import FilmReelSpinner from "./components/FilmReelScroller"

const App = () => {
  const [gifModal, setgifModal] = useState({
    display: false,
    info: {
      directLink: "",
      userName: "",
      title: "",
      embed: "",
      imgUrl: ""
    }
  });
  const [data, setData] = useState([]);
  const [curRating, setcurRating] = useState("G");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await request(curRating);
    setData([...data, ...result]);
  };
  const changeRating =(newRating)=>{
    setcurRating(newRating);
    setData([]);
    fetchData();
  }
  return (
    
    <div className="App">
    <FilmReelSpinner />
      <TopBar changeRating={changeRating} curRating={curRating} />
      <InfiniteScroll
      className= "gifPageContainer"
        hasMore={true}
        initialLoad={false}
        loader={
          <div className="loader filmOutline" key={0}>
            <LoadingAnimation />
          </div>
        }
        loadMore={fetchData}
      >
        <GifPage imageClick={setgifModal} items={data} />
      </InfiniteScroll>

      {gifModal.display ? (
        <GifModal setgifModal={setgifModal} modalObj={gifModal} />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
