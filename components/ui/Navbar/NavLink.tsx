import { Link } from "@mui/material";
import NextLink from "next/link";
import { FC, ReactNode } from "react";
import { IHTMLVariants } from "../../../interfaces";

interface Props {
  linkVariant?: IHTMLVariants;
  href: string;
  children?: ReactNode;
}

export const NavLink: FC<Props> = ({ linkVariant, href, children }) => {
  return (
    <NextLink href={href} passHref>
      <Link
        display="flex"
        alignItems="center"
        variant={linkVariant}
        underline="none"
      >
        {children}
      </Link>
    </NextLink>
  );
};
