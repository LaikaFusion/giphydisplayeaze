import axios from 'axios';
const key = process.env.REACT_APP_GIPHY_KEY;
const responseAmount = 25;
let curOffset = 0;


const request = (gifsRating = "G")=>{
  return axios.get('https://api.giphy.com/v1/gifs/trending', {
    params: {
      api_key: key,
      rating: gifsRating,
      limit: responseAmount,
      offset: curOffset
    }
  })
  .then(function ({data}) {
    curOffset = curOffset + responseAmount;
    return data.data;
  })
  .catch(function (error) {
    console.log(error);
  });
}

export default request;