import React from "react";
import { css } from "@emotion/core";
const Banner = () => {
  return (
    <section
      css={css`
        background-image: url(/assets/wsffapb_triptych.jpg);
        height: 720px;
        margin: 0 0 5% 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
      }
    `}
    >
      <div className="text-center hidden md:block">
        <div
          css={css`
            font-weight: 500;
            font-size: 48px;
            text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
          `}
        >
          NATIONALLY RECOGNIZED
          <span
            css={css`
              line-height: 52.8px;
              font-weight: 100;
            `}
          >
            - NEW MEXICO ROOTS
          </span>
        </div>
        <div
          css={css`
            line-height: 52.8px;
            font-weight: 100;
            font-size: 17.6px;
          `}
        >
          Our skilled attorneys provide sophisticated and effective
          representation for national and local clients.
        </div>
      </div>
    </section>
  );
};
export default Banner;
