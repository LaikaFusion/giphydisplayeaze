import React, { useContext } from "react";
import "./App.css";
import GifPage from "./components/GifPage";
//this is temporary data  to use for testing to avoid having to use the api repeatedly
import sampleData from "./testdata";

const GifModalContext = React.createContext({display:false})

const App = () => {
  const gifModal = useContext(GifModalContext);
  const data = sampleData.data;
  return (
    <div className="App">
      <GifPage items={data} />
      {gifModal.display ? "A":"B"}
    </div>
  );
};

export default App;
