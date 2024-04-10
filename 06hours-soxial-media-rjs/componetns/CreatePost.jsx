import React, { useContext, useRef } from "react";
import { PostList } from "../store/Posts-list-store";

function CreatePost() {
  const { addpost } = useContext(PostList);
  const useridElement = useRef();
  const postitleElement = useRef();
  const postbodyElement = useRef();
  const tagesElement = useRef();
  const reactionsElement = useRef();
  const handleonchange = (event) => {
    event.preventDefault();
    const userid = useridElement.current.value;
    const postitle = postitleElement.current.value;
    const postbody = postbodyElement.current.value;
    const tages = tagesElement.current.value;
    const reactions = reactionsElement.current.value;
    addpost(userid, postbody, postitle, tages, reactions);
  };
  return (
    <>
      <form>
        <div class="mb-3 create post" onClick={handleonchange}>
          <label for="title" class="form-label">
            enter title
          </label>
          <input
            ref={postitleElement}
            type="text"
            class="form-control"
            id="title"
            placeholder="how r u feeling "
          />
        </div>
        <div class="mb-3">
          <label for="body" class="form-label">
            enter your caption
          </label>
          <textarea
            type="text"
            class="form-control"
            id="body"
            rows="4"
            ref={postbodyElement}
          />
        </div>
        <div class="mb-3">
          <label for="userid" class="form-label">
            enter your userid
          </label>
          <input type="text" class="body" id="body" ref={useridElement} />
        </div>
        <div class="mb-3">
          <label for="reaction" class="form-label">
            enter your reaction
          </label>
          <input type="text" class="body" id="body" ref={reactionsElement} />
        </div>

        <div class="mb-3">
          <label for="reaction" class="form-label">
            enter your tages
          </label>
          <input type="text" class="body" id="body" ref={tagesElement} />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default CreatePost;
