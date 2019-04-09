import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";
import "./App.css";
import request from "./api";
import GifPage from "./components/GifPage";
import GifModal from "./components/GifModal";
import LoadingAnimation from "./components/LoadingAnimation";

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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await request();
    setData([...data,...result]);
  };

  return (
    <div className="App">
      <InfiniteScroll
        hasMore={true}
        initialLoad={false}
        loader={
          <div className="loader" key={0}>
            <div>Loading ...</div>
            <LoadingAnimation/>
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
