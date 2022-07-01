import React, { useEffect, useState } from "react";

import AttorneysContainer from "../components/AttorneysContainer";
import Layout from "../components/Layout";
import Banner from "../components/Banner";

export const NavIsTransparentContext = React.createContext();

export default ({ location }) => {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    const changeNavBackground = () => {
      if (window.pageYOffset > 0) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };
    changeNavBackground();
    window.addEventListener("scroll", changeNavBackground);
    //Cleanup
    return () => {
      window.removeEventListener("scroll", changeNavBackground);
    };
  }, []);
  return (
    <NavIsTransparentContext.Provider value={isTop}>
      <Layout
        url={location.href}
        pageTitle="Home Page"
        description="Simon's Law Home Page"
      >
        <Banner />
        <AttorneysContainer />
      </Layout>
    </NavIsTransparentContext.Provider>
  );
};
