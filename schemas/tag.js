import { GoTag as icon } from "react-icons/go";

export default {
  name: "tag",
  title: "Tag",
  icon,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    }
  ]
};
