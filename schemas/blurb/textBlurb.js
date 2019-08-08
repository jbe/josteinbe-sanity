import blurbSharedFields from "./blurbSharedFields";
import icon from "react-icons/lib/md/text-fields";

export default {
  name: "textBlurb",
  title: "Text blurb",
  icon,
  type: "document",
  fields: [
    ...blurbSharedFields,
    {
      name: "body",
      title: "Body",
      type: "portableText"
    }
  ],

  preview: {
    select: {
      title: "title"
    }
  }
};
