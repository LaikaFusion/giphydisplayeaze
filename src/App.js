import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";
import "./App.css";
import request from "./api";
import GifPage from "./components/GifPage";
import GifModal from "./components/GifModal";
import LoadingAnimation from "./components/LoadingAnimation";
import TopBar from "./components/TopBar/";

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
    const result = await request();
    setData([...data, ...result]);
  };

  return (
    <div className="App">
      <TopBar setcurRating={setcurRating} curRating={curRating} />
      <InfiniteScroll
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
    </div>
  );
};

export default App;
