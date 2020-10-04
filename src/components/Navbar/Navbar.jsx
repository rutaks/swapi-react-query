import React from "react";
import { PAGE_TYPE } from "../../utils/enums";

const Navbar = ({ setPage = () => {} }) => {
  return (
    <nav>
      <button onClick={() => setPage(PAGE_TYPE.PLANETS)}>Planets</button>
      <button onClick={() => setPage(PAGE_TYPE.PEOPLE)}>People</button>
    </nav>
  );
};

export default Navbar;
