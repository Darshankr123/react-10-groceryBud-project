import React, { useState } from "react";

const SingleItem = ({ name, id, completed, removeItem, editItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => editItem(id)}
      />
      <p
        style={{
          textDecoration: `${completed ? "line-through" : "none"}`,
        }}
      >
        {name}
      </p>
      <button className="btn remove-btn" onClick={() => removeItem(id)}>
        delete
      </button>
    </div>
  );
};

export default SingleItem;
