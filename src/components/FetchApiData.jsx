import { useState, useEffect, createContext } from "react";
import axios from "axios";
import ApiDataDetails from "./ApiDataDetails";
import Pagination from "./Pagination";
export const ApiData = createContext();

const FetchApiData = () => {
  const baseURL = "https://jsonplaceholder.typicode.com/posts";

  const [post, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  // console.log(post, "data");

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = post.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <ApiData.Provider value={currentPosts}>
        <ApiDataDetails />
      </ApiData.Provider>
      <Pagination
        totalPosts={post.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        
      />
    </div>
  );
};

export default FetchApiData;
