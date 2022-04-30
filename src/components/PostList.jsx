import React from "react";
import Postitem from "./Postitem";

const PostList = ({posts, removePost}) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>List</h1>
      {posts.map((item) => (
        <Postitem remove={removePost} key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PostList;
