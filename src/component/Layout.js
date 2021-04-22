import React from "react";

import NavBar from "./Navbar";

function Layout(props) {
  return (
    <div>
      <NavBar />
      {props.children}
    </div>
  );
}

export default Layout;
