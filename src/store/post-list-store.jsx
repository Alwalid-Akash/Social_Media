import React from "react";
import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => { },
  deletePost: () => { },
};

export const Postlist = createContext(DEFAULT_CONTEXT);

const postlistReducer = (currentPostList, action) => {
  return currentPostList;
};

const DEFAULT_POSTLIST = [
  {
    id: "1",
    title: "go to munchen",
    body: "it would be very great to visit munchen",
    reactions: "1",
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
  const deletePost = () => { };

  return (
    <Postlist.Provider value={{ postlist, addPost, deletePost }}>
      {children}
    </Postlist.Provider>
  );
};

export default PostListProvider
