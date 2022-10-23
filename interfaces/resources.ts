import common from "../public/locales/en/common.json";
import header from "../public/locales/en/header.json";
import auth from "../public/locales/en/auth.json";
import home from "../public/locales/en/home.json";

export interface IResources {
  auth: typeof auth;
  common: typeof common;
  header: typeof header;
  home: typeof home;
  // as many as files you have
}
