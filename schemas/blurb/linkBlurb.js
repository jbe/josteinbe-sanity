import blurbSharedFields from "./blurbSharedFields";
import icon from "react-icons/lib/go/Link";

export default {
  name: "linkBlurb",
  title: "Link",
  icon,
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
