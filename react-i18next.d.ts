import "react-i18next";
import { Resources as MyResources } from "./types/Resources";

declare module "react-i18next" {
  interface Resources extends MyResources {}
}
