import React from "react";
import { css } from "@emotion/core";
function Splash({ title }) {
  return (
    <div
      css={css`
        position: sticky;
        /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */

        /* Portrait and Landscape */
        @media only screen and (min-device-width: 320px) and (max-device-width: 750px) and (-webkit-min-device-pixel-ratio: 2) {
          top: 81px;
        }
        /* ----------- iPad 1, 2, Mini and Air ----------- */
        @media only screen and (min-device-width: 768px) and (max-device-width: 1340px) {
          top: 140px;
        }
        /* ----------- iPhone 6, 6S, 7 and 8 ----------- */

        /* Portrait and Landscape */
        @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
          top: 81px;
        }

        @media screen and (min-width: 1342px) and (max-width: 2400px) {
          top: 88px;
        }
      `}
    >
      <div
        className="px-8 lg:pt-2 lg:pl-40 uppercase"
        css={css`
          background-color: #666;
          color: #fff;
          text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
          font-size: 40px;
        `}
      >
        {title}
      </div>
    </div>
  );
}

export default Splash;
