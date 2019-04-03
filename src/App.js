import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import "./App.css";
import GifPage from "./components/GifPage";
import GifModal from "./components/GifModal";
//this is temporary data  to use for testing to avoid having to use the api repeatedly
import sampleData from "./testdata";

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
  const [data, setData] = useState([...sampleData.data]);

  return (
    <div className="App">
      <InfiniteScroll
        hasMore={true}
        initialLoad={false}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
        loadMore={() => {
          setData([...data, ...data]);
        }}
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
