import "react-i18next";
import { IResources as MyResources } from "./interfaces";

declare module "react-i18next" {
  interface Resources extends MyResources {}
}
