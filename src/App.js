import React, { useState } from "react";
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
  const data = sampleData.data;
  return (
    <div className="App">
      <GifPage imageClick={setgifModal} items={data} />
      {gifModal.display ? <GifModal modalObj={gifModal} /> : "B"}
    </div>
  );
};

export default App;
