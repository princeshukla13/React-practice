import React, { createContext, useReducer } from "react";
export const PostList = createContext({
  postList: [],
  addpost: () => {},
  deletepost: () => {},
});
const PostListreducer = (currpostlist, action) => {
  if (action.type === "ADD-POST") {
    newPostlist = [action.payload, ...currpostlist];
  }
  return newPostlist;
};
function Postsliststore({ children }) {
  const [postList, dispatchpostlist] = useReducer(
    PostListreducer,
    DEfault_value
  );
}

const addpost = (userid, postbody, postitle, tages, reactions) => {
  dispatchpostlist({
    type: "ADD-POST",
    payload: {
      id: userid,
      tittle: postitle,
      body: postbody,
      reactions: reactions,
      tags: tages,
    },
  });

  const deletepost = () => {};
  return (
    <PostList.Provider
      value={{
        postList,
        addpost,
        deletepost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};
const DEfault_value = [
  {
    id: "1",
    tittle: " i am going to bhopal",
    body: "hey frds i am going to bhopal",
    reactions: 2,
    userId: "user-2",
    tags: ["vacations", "bhopal", "fun"],
  },
  {
    id: "2",
    tittle: " enjoying my life",
    body: "hey frds  i am enjoying my life in my rules",
    reactions: 4,
    userId: "user-4",
    tags: ["vacations", "bhopal", "fun"],
  },
];

export default Postsliststore;
