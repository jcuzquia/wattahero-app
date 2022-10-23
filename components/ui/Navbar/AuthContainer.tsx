import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { loginPage } from "../../../utils";
import { NavLink } from "./NavLink";
import { registerPage } from "../../../utils/routes";
interface Props {
  anchorElUser: HTMLElement | null;
  handleOpenUserMenu: (e: React.MouseEvent<HTMLElement>) => void;
  handleCloseUserMenu: (e: React.MouseEvent<HTMLElement>) => void;
}

export const AuthContainer: FC<Props> = ({
  handleOpenUserMenu,
  handleCloseUserMenu,
  anchorElUser,
}) => {
  const settings = ["Profile", "Account", "Dashboard"];
  const user = false;

  const handleLogout = () => {
    // TODO: Coming from redux
    console.log("Logging Out");
  };

  return (
    <Box sx={{ flexGrow: 0, display: "flex", gap: 2 }}>
      {!user && (
        <>
          <NavLink href={registerPage.href} linkVariant="button">
            Register
          </NavLink>
          <NavLink href={loginPage.href} linkVariant="button">
            Login
          </NavLink>
        </>
      )}

      {user && (
        <>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
            <MenuItem key={"logout"} onClick={handleLogout}>
              <Typography textAlign="center">Logout</Typography>
            </MenuItem>
          </Menu>
        </>
      )}
    </Box>
  );
};
