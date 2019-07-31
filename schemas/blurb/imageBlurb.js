import blurbSharedFields from "./blurbSharedFields";
import Image from "react-icons/lib/md/image";

export default {
  name: "imageBlurb",
  title: "Image blurb",
  type: "document",
  icon: Image,
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
