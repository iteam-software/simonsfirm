import React from "react";
import { css } from "@emotion/core";
const List = ({ array, type = "square" }) => {
  const listItems = array.map((el, i) => {
    if (typeof(el) === "string") {
      return <li key={i}>{el}</li>;
    } else {
      return (
        <li key={i}>
          {el.name}
          {el.supporting && <List array={el.supporting} type="circle" />}
        </li>
      );
    }
  });
  return (
    <ul
      css={css`
        list-style-type: ${type};
        margin: 0 0 0 1.25em;
      `}
    >
      {listItems}
    </ul>
  );
};

export default List;
