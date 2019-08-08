import blurbSharedFields from "./blurbSharedFields";
import { mdImage as imageIcon } from "react-icons/md";

export default {
  name: "imageBlurb",
  title: "Image blurb",
  type: "document",
  icon: imageIcon,
  fields: [
    ...blurbSharedFields,
    {
      name: "image",
      title: "image",
      type: "image"
    },
    {
      name: "altText",
      title: "Alternative text",
      type: "string"
    }
  ],

  preview: {
    select: {
      title: "title",
      media: "image"
    }
  }
};
