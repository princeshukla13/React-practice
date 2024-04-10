import React from "react";

function HomePost({ post }) {
  return (
    <div>
      <div class="card post-cards" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">
            {post.tittle}
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {post.reactions}
              <span class>Reactions</span>
            </span>
          </h5>
          <p class="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span class="badge bg-warning text-dark hastag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePost;
