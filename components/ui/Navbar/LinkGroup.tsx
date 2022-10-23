import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import { aboutPage, contactPage, pricingPage } from "../../../utils";
import { NavLink } from "./NavLink";

const LinkGroup = () => {
  const { asPath, push } = useRouter();
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex", gap: 30 },
      }}
    >
      <NavLink href={aboutPage.href}>
        <Button color={asPath === aboutPage.href ? "primary" : "info"}>
          {aboutPage.pageTitle}
        </Button>
      </NavLink>
      <NavLink href={contactPage.href}>
        <Button color={asPath === contactPage.href ? "primary" : "info"}>
          {contactPage.pageTitle}
        </Button>
      </NavLink>
      <NavLink href={pricingPage.href}>
        <Button color={asPath === pricingPage.href ? "primary" : "info"}>
          {pricingPage.pageTitle}
        </Button>
      </NavLink>
    </Box>
  );
};
export default LinkGroup;
