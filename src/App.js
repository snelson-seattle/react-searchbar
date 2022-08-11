import { getPosts } from "./api/api";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ListPage from "./ListPage";

function App() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    console.log("use effect");
    getPosts()
      .then((jsonData) => {
        setPosts(jsonData);
        return jsonData;
      })
      .then((jsonData) => {
        setSearchResults(jsonData);
      });
  }, []);

  return (
    <>
      <SearchBar posts={posts} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} />
    </>
  );
}

export default App;
