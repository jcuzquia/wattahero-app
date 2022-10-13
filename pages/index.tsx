import { Typography } from "@mui/material";
import type { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ReactElement } from "react";
import { MainLayout } from "../components/Layout";
import { NextPageWithLayout } from "./_app";

const HomePage: NextPageWithLayout = () => {
  const { t } = useTranslation("home");
  return (
    <Typography variant="h1" component="h1">
      {t("homePage")}
    </Typography>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout
      title={"Wattahero"}
      pageDescription="An app for Energy Engineers by Energy Engineers"
    >
      {page}
    </MainLayout>
  );
};
export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale!, [
        "home",
        "common",
        "auth",
      ])),
    },
  };
};

export default HomePage;
