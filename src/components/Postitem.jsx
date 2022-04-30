import React from "react";

const Postitem = (props) => {

  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.item.id} {props.item.title}</strong>
        <div>{props.item.body}</div>
      </div>
      <div className="post__btns">
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Postitem;
