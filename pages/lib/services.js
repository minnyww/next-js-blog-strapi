import axios from "axios";
const fetchFromCMS = async (path) => {
   const url = `${
      process.env.NODE_ENV === "production"
         ? `https://strapi-x39d.onrender.com/${path}`
         : `http://localhost:1337/${path}`
   } `;
   const res = await axios.get(url);
   return res.data;
};
export default fetchFromCMS;
