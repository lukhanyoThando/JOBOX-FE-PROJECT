import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <AppBar color="inherit" position="static">
        <Toolbar>
          <Image src="/download.png" width={128} height={90} />
          <h1>BMF ATTORNEYS</h1>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
