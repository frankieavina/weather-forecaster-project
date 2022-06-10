import axios from 'axios';

const getCoordinates = async (location) => {
  try {
    const results = await axios.get(`https://geocode.maps.co/search?q=${location}`);
    return results;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

export default getCoordinates;
