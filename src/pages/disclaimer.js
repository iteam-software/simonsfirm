import React from "react";
import Layout from "../components/Layout";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
const disclaimer = () => {
  const Header = styled.h4`
    font-size: 24px;
    padding-top: 20px;
  `;
  return (
    <Layout>
      <div
        className="container lg:mx-auto px-8"
        css={css`
          padding-top: 89px;
          color: #555;
        `}
      >
        <Header>Terms of Use</Header>
        <p>
          The Simons Firm, LLP provides this website subject to your compliance
          with the terms and conditions set forth in these Terms of Use (the
          "Site Terms"). By using this website, you agree to be bound by these
          Site Terms. If you do not agree to these Site Terms, you must not use
          this website. At any time, The Simons Firm, may, in its sole
          discretion, revise or otherwise update these Site Terms by posting
          amended Site Terms on the website. Any changes to the Site Terms will
          be effective immediately upon posting. Your use of the website
          following the posting of updated Site Terms constitutes acceptance of
          those terms. Further, The Simons Firm reserves the right, at any time,
          to modify or discontinue, temporarily or permanently, the website (or
          any part thereof) without notice, as set forth below.
        </p>
        <Header>Advertisement/Informational purposes</Header>
        <p>
          The materials on this website are part of an attorney advertisement
          and provided for informational purposes only.{" "}
        </p>
        <Header>No Legal Advice</Header>
        <p>
          No information contained on this website constitutes legal advice. The
          information and materials on this website are not intended to and do
          not constitute legal advice. This website is not a solicitation for
          the formation of an attorney-client relationship. The facts and
          circumstances for each client and case vary significantly, and The
          Simons Firm cannot guarantee any particular outcome. The information
          provided on the website may not apply to your particular facts or
          circumstances and should not be relied upon as legal advice. The
          website may not reflect the most recent developments in the law, may
          not be applicable in your particular jurisdiction or to your
          particular situation. The Simons Firm advises you to seek legal
          counsel and not to rely on the information contained on the website.{" "}
        </p>
        <Header>No Attorney-Client Relationship</Header>
        <p>
          No attorney-client relationship is created through your use of this
          website. You should not act or rely on any information on the website
          without seeking the advice of a qualified attorney. The Simons Firm
          only accepts clients in accordance with our formal procedures,
          including conflicts check. The Simons Firm renders legal advice only
          after accepting an individual or entity as a client. The Simons Firm
          does not seek to represent anyone desiring representation based upon
          viewing this website in a state, territory or foreign country where
          the website fails to comply with applicable laws and ethical rules.
          Attorneys at The Simons Firm do not seek to practice law in states,
          territories or foreign countries where they are not properly
          authorized to do so.{" "}
        </p>
        <Header>Links to Third-Party Resources</Header>
        <p className="pb-10">
          {" "}
          Third-party resources that can be accessed with links from the website
          are not under the control of The Simons Firm, and The Simons Firm is
          not responsible for the contents of any of these third-party
          resources. The third-party links presented on this website are
          provided for your convenience only. The inclusion of any link on this
          website does not imply any recommendation, approval or endorsement of
          that site by The Simons Firm.
        </p>
      </div>
    </Layout>
  );
};

export default disclaimer;
