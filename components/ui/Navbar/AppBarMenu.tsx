import { Menu, MenuItem, Typography } from "@mui/material";
import { FC, useState } from "react";
import { NavLink } from "./NavLink";
import { aboutPage, contactPage, pricingPage } from "../../../util/routes";
interface AppBarMenuProps {
  anchorElNav: HTMLElement | null;
  handleCloseNavMenu: () => void;
}
const AppBarMenu: FC<AppBarMenuProps> = ({
  anchorElNav,
  handleCloseNavMenu,
}) => {
  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      sx={{
        display: { xs: "block", md: "none" },
      }}
    >
      <MenuItem>
        <NavLink href={aboutPage.href} linkVariant="button">
          <Typography variant="h6">{aboutPage.pageTitle}</Typography>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink href={pricingPage.href} linkVariant="button">
          <Typography variant="h6">{pricingPage.pageTitle}</Typography>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink href={contactPage.href} linkVariant="button">
          <Typography variant="h6">{contactPage.pageTitle}</Typography>
        </NavLink>
      </MenuItem>
    </Menu>
  );
};
export default AppBarMenu;
