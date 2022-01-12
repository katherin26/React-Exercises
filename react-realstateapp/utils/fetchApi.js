import axios from "axios";

/*   'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': '7b760b1092mshe837c1179b68733p13c26bjsn905c8dda768f' */

const baseUrl = "http://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const response = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "7b760b1092mshe837c1179b68733p13c26bjsn905c8dda768f",
    },
  });
};
