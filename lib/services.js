import axios from "axios";
const fetchFromCMS = async (path) => {
   const url = `${
      process.env.NODE_ENV === "production"
         ? `https://fast-everglades-34008.herokuapp.com/${path}`
         : //? `https://strapi-x39d.onrender.com/${path}`
           `http://localhost:5000/${path}`
   } `;
   const res = await axios.get(url);
   return res.data;
};
export default fetchFromCMS;
