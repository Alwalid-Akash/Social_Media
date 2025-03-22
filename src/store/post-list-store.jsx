import React, { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => { },
  deletePost: () => { },
};

export const Postlist = createContext(DEFAULT_CONTEXT);

const postlistReducer = (currentPostList, action) => {
  let newPostList = currentPostList; // Initialize newPostList

  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }

  return newPostList; // Return updated newPostList
};

const DEFAULT_POSTLIST = [
  {
    id: "1",
    title: "go to germany",
    body: "it would be very great if you  visit TU Chemnitz",
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

  const addPost = (userId, title, body, reactions, tags) => {
    const newPost = {
      id: Date.now(),  // Unique ID (you could also use something else)
      userId: userId,
      title: title,
      body: body,
      reactions: reactions,
      tags: tags  // Assuming tags are passed as a comma-separated string
    };

    dispatchpostList({
      type: "ADD_POST",
      payload: newPost,
    });
  };

  const deletePost = (postId) => {
    dispatchpostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <Postlist.Provider value={{ postlist, addPost, deletePost }}>
      {children}
    </Postlist.Provider>
  );
};

export default PostListProvider;
