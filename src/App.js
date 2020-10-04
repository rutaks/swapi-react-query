import React, { Fragment } from "react";
import Application from "./views/App";
import { ReactQueryDevtools } from "react-query-devtools";
function App() {
  return (
    <Fragment>
      <Application />
      <ReactQueryDevtools initialIsOpen={false} />
    </Fragment>
  );
}

export default App;
