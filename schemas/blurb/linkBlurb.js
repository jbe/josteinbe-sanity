import blurbSharedFields from "./blurbSharedFields";
import { GoLink as linkIcon } from "react-icons/go";

export default {
  name: "linkBlurb",
  title: "Link",
  linkIcon,
  type: "document",
  fields: [
    ...blurbSharedFields,
    {
      name: "url",
      title: "URL",
      type: "urlWithMetadata"
    }
  ],

  preview: {
    select: {
      title: "title"
    }
  }
};
