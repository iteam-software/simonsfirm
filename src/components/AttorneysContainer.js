import React, { useContext } from "react";
import AttorneyCard from "./AttorneyCard";
import { css } from "@emotion/core";
import { AttorneysAndPracticeAreasContext } from "./Layout";

const AttorneysContainer = () => {
  const data = useContext(AttorneysAndPracticeAreasContext);
  const attorneys = data.attorneys.nodes.map(el => {
    const { thumbnail, name } = el.childMarkdownRemark.frontmatter;
    const url = `attorneys/${el.name}`;
    return <AttorneyCard key={el.id} src={thumbnail} name={name} url={url} />;
  });
  return (
    <section
      css={css`
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 768px) {
          flex-direction: column;
          flex: 1 0 50%;
          margin: 0;
          padding: 0;
        }
      `}
    >
      {attorneys}
    </section>
  );
};

export default AttorneysContainer;
