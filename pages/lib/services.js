import axios from "axios";
const fetchFromCMS = async (path) => {
   const url = `http://localhost:5000/${path}`;
   const res = await axios.get(url);
   return res.data;
};
export default fetchFromCMS;
