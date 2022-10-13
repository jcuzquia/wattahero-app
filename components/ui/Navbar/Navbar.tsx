import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { useState } from "react";

import { AuthContainer, LogoContainer } from "./";
import LinkGroup from "./LinkGroup";
export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box display="flex" justifyContent="space-between" width="100%">
            <LogoContainer
              anchorElNav={anchorElNav}
              handleCloseNavMenu={handleCloseNavMenu}
              handleOpenNavMenu={handleOpenNavMenu}
            />
            <LinkGroup />

            <AuthContainer />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
