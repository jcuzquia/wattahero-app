import { Typography } from "@mui/material";
import type { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
  const { t } = useTranslation("home");
  return (
    <Typography variant="h1" component="h1">
      {t("homePage")}
    </Typography>
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

export default Home;
