import { createNoUnsupportedOn } from "../create-no-unsupported-on";
import type { SupportEntriesByCategory } from "../data/separate-entries-by-category";

export default (supportEntriesByCategory: SupportEntriesByCategory) => {
  return createNoUnsupportedOn(
    supportEntriesByCategory,
    "Orange for Desktop Webmail",
    "orange",
    "desktop-webmail",
  );
};