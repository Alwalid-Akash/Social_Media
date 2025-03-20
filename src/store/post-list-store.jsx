import React, { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => { },
  deletePost: () => { },
};

export const Postlist = createContext(DEFAULT_CONTEXT); // ✅ Ensure correct context export

const postlistReducer = (currentPostList, action) => {
  return currentPostList;
};

const DEFAULT_POSTLIST = [
  {
    id: "1",
    title: "go to munchen",
    body: "it would be very great to visit munchen",
    reactions: "7",
    userId: "user-9",
    tags: ["vacation", "visit", "enjoy"],
  },
  {
    id: "2",
    title: "go for higher study",
    body: "i will go for higher study",
    reactions: "1",
    userId: "user-9",
    tags: ["vacation", "visit", "enjoy"],
  },
];

const PostListProvider = ({ children }) => {
  const [postlist, dispatchpostList] = useReducer(postlistReducer, DEFAULT_POSTLIST);

  const addPost = () => { };
  const deletePost = (id) => { // ✅ Implement delete functionality
    console.log("Deleted post with ID:", id);
  };

  return (
    <Postlist.Provider value={{ postlist, addPost, deletePost }}> {/* ✅ Provide context */}
      {children}
    </Postlist.Provider>
  );
};

export default PostListProvider;
