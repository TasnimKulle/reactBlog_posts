import { createContext, useState } from "react";

export const PostsContext = createContext();
export const PostsProvide = ({ children }) => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Introduction to React", content: "Content of post 1" },
    {
      id: 2,
      title: "Understanding React Router",
      content: "Content of post 2",
    },
    { id: 3, title: "React Hooks in Depth", content: "Content of post 3" },
  ]);
  const addPosts = (post) => {
    setPosts((prevPost) => [...prevPost, { ...post, id: prevPost.length + 1 }]);
  };

  return (
    <PostsContext.Provider value={{ posts, addPosts }}>
      {children}
    </PostsContext.Provider>
  );
};
