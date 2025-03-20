import { MdDelete } from "react-icons/md";
import React, { useContext } from "react";
import { Postlist } from "../store/post-list-store"; // ✅ Correct context import

const Post = ({ post }) => {
  const { deletePost } = useContext(Postlist); // ✅ Use correct context

  return (
    <div className="card post-card" style={{ width: "28rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)} // ✅ Call deletePost function
          >
            <MdDelete />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tags) => (
          <span key={tags} className="badge text-bg-primary hastag">{tags}</span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          Total Reactions {post.reactions}
        </div>
      </div>
    </div>
  );
};

export default Post;
