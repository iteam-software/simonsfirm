import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const FooterSection = styled.div`
  padding: 0 5%;
  background-color: #222;
  margin: 10px 0;
  font-size: 20px;
`;
const Anchor = styled.a`
  color: #0275d8;
  text-decoration: none;
`;
const Copyright = styled.span`
  font-weight: 900;
`;
export default function Footer() {
  return (
    <footer
      css={css`
        display: flex;
        height: auto;
        background-color: #222;
        box-shadow: 0px 0px 5px #222;
        color: #6f6f6f;
        font-weight: 300;
        line-height: 1.5;
        padding: 20px 5%;

        @media screen and (max-width: 768px) {
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      `}
    >
      <FooterSection>
        <div>
          <Copyright>Simons Firm LLP Copyright © 2015</Copyright> - Attorney
          advertisement. No legal advice has been offered by this website, and
          no attorney-client relationship has been formed with the users of this
          website. The Simons Firm, LLP does not accept any confidential
          information from any potential clients without a telephone
          consultation. See
          <Anchor href="/disclaimer">
            &nbsp;full disclaimer
          </Anchor>
          .
        </div>
        <div>
          Address: 1660A Old Pecos Trail, Santa Fe NM 87505 - Tel: 505 988 5600
          - Fax: 505 982 0185
        </div>
        <div>
          Home page splash by
          <Anchor
            href="https://willyborichardson.com/"
            rel="noopener noreferrer"
          >
            {" "}
            Willy Bo Richardson
          </Anchor>
        </div>
      </FooterSection>
      <FooterSection>
        <p>Login to ShareFile</p>
        <Anchor
          href="http://simonsfirm.sharefile.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            css={css`
              background-color: white;
              max-width: 150px;
              margin: 10px 0 0 0;
            `}
            src="/assets/sharefile-logo.png"
            alt="Login to ShareFile"
          />
        </Anchor>
      </FooterSection>
    </footer>
  );
}
