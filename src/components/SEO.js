import React from "react";
import { Helmet } from "react-helmet";

export default function SEO({ pageTitle, canonical_url, description }) {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <title>{`${
        pageTitle ? pageTitle : "Home Page"
      } - The Simons Firm - LLP`}</title>
      <link rel="canonical_url" href={canonical_url} />
      {description && <meta name="description" content={description.includes("FRIEDA") ? `${description} (FRIEDA SIMONS BURNES)` : description} />}
    </Helmet>
  );
}
