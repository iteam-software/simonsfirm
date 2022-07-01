import React, { useState } from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import Name from "../components/Name";
const AttorneyCard = ({ src, name, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  return (
    <div
      css={css`
        padding: 1% 2%;
      `}
    >
      <Link to={`/${url}`}>
        <img
          css={css`
            border-radius: 100%;
            max-width: 225px;
          `}
          onMouseOver={handleMouseOver}
          onFocus={handleMouseOver}
          onMouseOut={handleMouseOut}
          onBlur={handleMouseOut}
          src={src}
          alt={name}
        />
        <Name name={name} isHovered={isHovered} />
      </Link>
    </div>
  );
};
export default AttorneyCard;
