import { Box } from "@mui/material";
import React from "react";
import { NavBar } from "../components/NavBar";

const drawerWith = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWith={drawerWith} />

      {/* Sidebar */}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Toolbar */}

        {children}
      </Box>
    </Box>
  );
};
