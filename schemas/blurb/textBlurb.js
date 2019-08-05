import blurbSharedFields from "./blurbSharedFields";
import { MdTextFields as icon } from "react-icons/md";

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
      type: "blockContent"
    }
  ],

  preview: {
    select: {
      title: "title"
    }
  }
};
