import axios from 'axios';

const key = process.env.REACT_APP_GIPHY_KEY;
const responseAmount = 25;
let curOffset = 0;

const request = (gifsRating = 'G') => {
  return (
    axios
      .get('https://api.giphy.com/v1/gifs/trending', {
        params: {
          api_key: key,
          rating: gifsRating,
          limit: responseAmount,
          offset: curOffset,
        },
      })
      // this does need to be destructured to allow iteration
      .then(({ data }) => {
        curOffset += responseAmount;
        return data.data;
      })
      .catch(error => {
        console.log(error);
      })
  );
};

export default request;
