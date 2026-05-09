import Axios from "../axios";

//fetch example
export const fetchExample = async () => {
  try {
    const { data } = Axios.get("/");
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
