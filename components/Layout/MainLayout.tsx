import React, { FC } from "react";
import { ReactNode } from "react";
import Head from "next/head";
import { Box } from "@mui/material";
import { NavBar } from "../ui/Navbar";

interface Props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
      </Head>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Box
          display="flex"
          justifyContent={"center"}
          alignItems="center"
          height="calc(100vh - 200px)"
        >
          {children}
        </Box>
      </main>
    </>
  );
};
