import axios from "axios";

export const api = axios.create({
  // This api base url is just an example
  // Replace with the url of your api
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Fetching dummy posts from example api
// Replace this method and add additional methods
// to interact with your api
export const getPosts = async () => {
  const response = await api.get("/posts");
  return response.data;
};
