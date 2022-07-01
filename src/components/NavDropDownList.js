import React from "react";

const NavDropDownList = ({ array, path }) => {
  const list = array.nodes.map(el => {
    const key = el.id;
    return (
      <li key={key} className="rounded">
        <a
          className="bg-gray-800 text-white hover:bg-gray-600 py-2 px-4 block whitespace-no-wrap"
          href={`/${path}/${el.name}`}
        >
          {el.childMarkdownRemark.frontmatter.name ||
            el.childMarkdownRemark.frontmatter.practice_area}
        </a>
      </li>
    );
  });
  return list;
};

export default NavDropDownList;
