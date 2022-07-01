import React from "react";
import { css } from "@emotion/core";
const Name = ({ isHovered, name }) => {
  return (
    <div
      css={css`
        background-color: ${isHovered ? "#ddd" : ""};
        border-radius: 5px;
        letter-spacing: 1px;
        margin: 20px 0;
        color: black;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        transition: all ease-in-out 0.3s;
        &:hover {
          background: #ddd;
        }
      `}
    >
      {name}
    </div>
  );
};

export default Name;
