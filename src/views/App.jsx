import React from "react";
import { Navbar, Planets, People } from "../components";
import { useState } from "react";
import { PAGE_TYPE } from "../utils/enums";

function App() {
  const [page, setPage] = useState(PAGE_TYPE.PLANETS);
  return (
    <div className="App">
      <h1>Stars Wars Mini-Wiki</h1>
      <Navbar setPage={setPage} />
      <div className="content">
        {page === PAGE_TYPE.PLANETS && <Planets />}
        {page === PAGE_TYPE.PEOPLE && <People />}
      </div>
    </div>
  );
}

export default App;
