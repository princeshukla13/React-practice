import React, { useContext } from "react";
import HomePost from "./HomePost";
import { PostList as postlistdata } from "../store/Posts-list-store";

function PostList() {
  const { postList } = useContext(postlistdata);
  return (
    <>
      {postList.map((post) => (
        <HomePost key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;
