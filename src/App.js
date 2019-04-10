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
          <div className="loader" key={0}>
            <div>Loading ...</div>
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
      <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    </div>
  );
};

export default App;
