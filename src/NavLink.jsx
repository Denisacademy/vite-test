import React from "react";

export const NavLink = ({ id, text, href }) => {
  return (
    <li key={id}>
      <a href={href} className="nav-link">
        {text}
      </a>
    </li>
  );
};
