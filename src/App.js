import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import './App.css';
import request from './api';
import GifPage from './components/GifPage';
import GifModal from './components/GifModal';
import LoadingAnimation from './components/LoadingAnimation';
import TopBar from './components/TopBar';
import FilmReelSpinner from './components/FilmReelScroller';

const App = () => {
  const [gifModal, setgifModal] = useState({
    display: false,
    info: {
      directLink: '',
      userName: '',
      title: '',
      embed: '',
      imgUrl: '',
    },
  });
  const [data, setData] = useState([]);
  const [curRating, setcurRating] = useState('G');

  // seperation is needed to allow async support
  const fetchData = async () => {
    const result = await request(curRating);
    setData([...data, ...result]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const changeRating = newRating => {
    setcurRating(newRating);
    setData([]);
    fetchData();
  };
  return (
    <div className="App">
      <TopBar changeRating={changeRating} curRating={curRating} />
      <InfiniteScroll
        className="gifPageContainer"
        hasMore
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
      <FilmReelSpinner />

      {gifModal.display ? (
        <GifModal setgifModal={setgifModal} modalObj={gifModal} />
      ) : (
        ''
      )}
    </div>
  );
};

export default App;
