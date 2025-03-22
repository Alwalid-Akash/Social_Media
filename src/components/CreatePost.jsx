import React, { useContext, useRef } from "react";
import { Postlist } from "../store/post-list-store";
const CreatePost = () => {

  const { addPost } = useContext(Postlist)


  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();



  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(","); // Convert comma-separated string to array


    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(
      userId,
      title,
      body,
      reactions,
      tags
    )

  }

  return (
    <form className="create-post" onSubmit={handleSubmit}>

      <div className="mb-3">
        <label htmlFor="userId" className="form-label">User ID</label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Enter User ID"
        />
      </div>


      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input
          type="text"
          ref={titleElement}
          className="form-control"
          id="title"
          placeholder="Post Title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Content</label>
        <textarea
          type="text" rows="4"
          ref={bodyElement}
          className="form-control"
          id="body"
          placeholder="Post Content"
        />
      </div>


      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Reactions</label>
        <input
          type="number"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="Enter number of reactions"
        />
      </div>



      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Tags</label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Enter tags (comma-separated)"
        />
      </div>





      <button type="submit" className="btn btn-primary">Post</button>
    </form>

  )
}
export default CreatePost