import { Box, Button } from "@mui/material";
import { FC } from "react";
import { loginPage } from "../../../util";
interface AuthContainerProps {}
export const AuthContainer: FC<AuthContainerProps> = () => {
  return (
    <Box sx={{ flexGrow: 0, display: "flex", gap: 2 }}>
      <Button variant="contained">Signup</Button>
      <Button variant="outlined" color="secondary" href={loginPage.href}>
        Login
      </Button>

      {/* <ProfileContainer /> */}
    </Box>
  );
};
