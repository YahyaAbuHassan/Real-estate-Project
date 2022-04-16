import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "f27ce26dd3mshb732dce4227cd83p1f4896jsncd4396cdda2c",
    },
  });
    
  return data;
}