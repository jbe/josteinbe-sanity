import blurbSharedFields from "./blurbSharedFields";
import { GoMilestone as rabbitHoleIcon } from "react-icons/go";

export default {
  name: "rabbitHoleBlurb",
  title: "Rabbit hole blurb",
  rabbitHoleIcon,
  type: "document",
  fields: [
    ...blurbSharedFields,
    {
      name: "searchTerm",
      title: "Search term",
      type: "string"
    },
    {
      name: "imageSearch",
      title: "Image search",
      type: "boolean"
    },
    {
      name: "explanation",
      title: "Explanation",
      type: "simplePortableText"
    }
  ],

  preview: {
    select: {
      title: "searchTerm"
    }
  }
};
