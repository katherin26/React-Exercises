import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "7b760b1092mshe837c1179b68733p13c26bjsn905c8dda768f", // process.env.NEXT_PUBLIC_RAPID_API_KEY,
    },
  });

  return data;
};
