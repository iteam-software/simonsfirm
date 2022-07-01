import React from "react";
import { css } from "@emotion/core";

const Marker = props => {
  const { color, name } = props;
  return (
    <div
      css={css`
        position: absolute;
        width: 18px;
        height: 18px;
        background-color: #000;
        border: 2px solid #fff;
        border-radius: 100%;
        background-color: ${color};
        cursor: pointer
        transform: translate(-50%, -50%);
        &:hover {
          z-index: 1;
        }
      `}
      title={name}
    />
  );
};
export default Marker;
