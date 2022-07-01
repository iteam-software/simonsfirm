import React from "react";
import { css } from "@emotion/core";
const StaffMember = ({ name, title, thumbnail, html }) => {
  return (
    <div
      css={css`
          display: flex;
          flex-direction: column;
          margin: 5% 10%;
          
          @media screen and (min-width: 900px) {
            flex-direction: row;
          }
        `}
    >
      <div
        css={css`
            margin: 5% auto;
            font-weight: bold;
            text-align: center;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;

            @media screen and (min-width: 900px) {
              margin: 0 10%;
            }
          `}
      >
        <img
          css={css`
              border-radius: 100%;
              max-width: 200px;
            `}
          src={thumbnail}
          alt={name}
        />
        <h4 css={css`margin-top: 10px;`}>{name}</h4>
      </div>
      <div
        css={css`
          display: flex;
          flex-flow: row wrap;
          align-content: center;
        `}
      >
        <h4
          css={css`
            margin: 0 auto 5%;
            font-weight: bold;
            width: 100%;
          `}
        >
          {name}, {title}
        </h4>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
};
export default StaffMember;
