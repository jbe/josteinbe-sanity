import blurbSharedFields from "./blurbSharedFields";
import icon from "react-icons/lib/go/Milestone";

export default {
  name: "rabbitHoleBlurb",
  title: "Rabbit hole blurb",
  icon,
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
      type: "blockContent"
    }
  ],

  preview: {
    select: {
      title: "searchTerm"
    }
  }
};
