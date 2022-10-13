import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Typography } from "@mui/material";
import { FC } from "react";
import AppBarMenu from "./AppBarMenu";
import { Logo } from "./";
interface LogoContainerProps {
  anchorElNav: HTMLElement | null;
  handleCloseNavMenu: () => void;
  handleOpenNavMenu: (e: React.MouseEvent<HTMLElement>) => void;
}
export const LogoContainer: FC<LogoContainerProps> = ({
  anchorElNav,
  handleCloseNavMenu,
  handleOpenNavMenu,
}) => {
  return (
    <Box display="flex">
      <Logo />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex", flexGrow: 1 },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "#b3ffc3",
          textDecoration: "none",
        }}
      >
        Wattahero
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none", alignItems: "center" },
        }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="primary"
        >
          <MenuIcon />
        </IconButton>
        <AppBarMenu
          anchorElNav={anchorElNav}
          handleCloseNavMenu={handleCloseNavMenu}
        />
        <Typography
          variant="h5"
          noWrap
          component="a"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            textDecoration: "none",
            color: "#b3ffc3",
          }}
        >
          Wattahero
        </Typography>
      </Box>
    </Box>
  );
};
