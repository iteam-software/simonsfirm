import React, { useState, useEffect, useContext } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Modal from "react-modal";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import classNames from "classnames";
import { AttorneysAndPracticeAreasContext } from "./Layout";
import { NavIsTransparentContext } from "../pages/index";
import DropDownArrow from "./DropDownArrow";
import NewsAndEventsContent from "./NewsAndEventsContent";
import NavDropDownList from "./NavDropDownList";
const NavItem = styled.div`
  font-family: Open Sans, Times, "Times New Roman", serif;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 5px;
  white-space: nowrap;
  font-size: 18px;
  padding: 0.625rem;
  text-shadow: rgba(0, 0, 0, 0.2) 2px 2px 2px;
  text-decoration-color: rgb(226, 226, 226);

  &:hover {
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.1);
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
  }
  @media (min-width: 900px) {
    margin: 0 20px;
  }
  @media (max-width: 768px) {
    padding: 10px 0 0 25px;
  }
`;

const LogoCap = styled.span`
  font-size: 31.25px;
  font-weight: 700;
`;

const LogoSml = styled.span`
  font-size: 20px;
`;

export default function Nav() {
  const data = useContext(AttorneysAndPracticeAreasContext);
  const navIsTransparent = useContext(NavIsTransparentContext);

  const { attorneys, practice_areas } = data;
  useEffect(() => {
    // for screenreader accessibility
    // link: https://stackoverflow.com/questions/48269381/warning-react-modal-app-element-is-not-defined-please-use-modal-setappeleme
    Modal.setAppElement("#___gatsby");
  }, []);

  const newsAndEventsData = useStaticQuery(graphql`
    query NewsAndEventsQuery {
      allFile(filter: { sourceInstanceName: { eq: "news-and-events" } }) {
        nodes {
          name
          childMarkdownRemark {
            id
            html
            frontmatter {
              event_name
              start_date
            }
          }
        }
      }
    }
  `);

  const newsAndEvents = newsAndEventsData.allFile.nodes;
  const [modalIsOpen, setModal] = useState(false);
  const [navIsOpen, setNav] = useState(false);
  const toggleModal = () => setModal(!modalIsOpen);

  const toggleNav = () => setNav(!navIsOpen);

  let navIsOpenClass = classNames({
    block: navIsOpen,
    hidden: !navIsOpen,
  });
  let navClass = classNames({
    isTransparent: navIsTransparent,
    isOpaque: !navIsTransparent,
  });

  const modalStyles = {
    content: {
      color: "black",
      width: "66%",
      height: "40.2%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      zIndex: 4000,
    },
  };

  return (
    <>
      <nav
        className={`${navClass} fixed w-full bg-white text-black z-50`}
        css={css`
          transition: background-color 0.75s ease-in-out;
          .dropdown:hover .dropdown-menu {
            display: block;
          }
        `}
      >
        <div className="menu z-10 flex-wrap md:pb-2 lg:flex md:block md:text-center lg:items-center lg:justify-between ">
          <div
            css={css`
              font-family: Georgia, Times, "Times New Roman", serif;
              &:hover {
                color: #222;
              }
            `}
            href="/"
          >
            <Link to="/">
              <span className="tracking-max inline-block pl-8 pt-4 lg:pl-32 whitespace-no-wrap">
                <LogoSml>THE </LogoSml>
                <LogoCap>S</LogoCap>
                <LogoSml className="font-bold">IMONS </LogoSml>
                <LogoCap>F</LogoCap>
                <LogoSml className="font-bold mr-3">IRM </LogoSml>
              </span>
              <LogoSml className="mx-3 hidden lg:inline-block tracking-max">
                | LLP
              </LogoSml>
              <small className="block font-open-sans pl-8 pb-2">
                Nationally Recognized – New Mexico Roots
              </small>
            </Link>
          </div>
          <div className="absolute top-0 right-0 md:hidden mr-2 mt-10">
            <button
              onClick={toggleNav}
              className="flex items-center px-3 py-2 rounded hover:border-white md:flex flex-end"
            >
              <svg
                className="hamburger fill-current h-3 w-4 z-40"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`${navIsOpenClass} w-full flex-grow lg:w-auto md:flex md:flex-row md:justify-around`}
          >
            <div className="text-sm lg:flex-grow"></div>
            <div className="dropdown block relative z-10">
              <NavItem
                className="rounded inline-flex items-center"
                css={css`
                  &:hover .dropdown-menu {
                    display: block;
                  }
                `}
              >
                <span className="mr-1">Attorneys</span>
                <DropDownArrow />
              </NavItem>
              <ul className="dropdown-menu text-left absolute left-0 hidden pt-1">
                <NavDropDownList array={attorneys} path="attorneys" />
              </ul>
            </div>
            <div className="dropdown block relative z-11">
              <NavItem className="rounded inline-flex items-center">
                <span className="mr-1">Practice Areas</span>
                <DropDownArrow />
              </NavItem>
              <ul className="dropdown-menu text-left absolute left-0 hidden pt-1">
                <NavDropDownList array={practice_areas} path="practice-areas" />
              </ul>
            </div>
            <NavItem>
              <Link to="/staff">Staff</Link>
            </NavItem>
            <NavItem className="menu-item cursor-pointer" onClick={toggleModal}>
              News &amp; Events
              <Modal
                isOpen={modalIsOpen}
                contentLabel="News and Events"
                onRequestClose={toggleModal}
                style={modalStyles}
              >
                <h1 className="w-full bg-gray-900 text-white text-center absolute py-4 top-0 left-0">
                  News &amp; Events
                </h1>
                <NewsAndEventsContent newsAndEvents={newsAndEvents} />
                <div className="flex justify-end w-full bg-gray-900 absolute py-4 bottom-auto left-0">
                  <button className="self-end rounded px-4 bg-white mr-4">
                    Close
                  </button>
                </div>
              </Modal>
            </NavItem>
            <NavItem>
              <Link to="/contact">Contact</Link>
            </NavItem>
          </div>
        </div>
      </nav>
    </>
  );
}
