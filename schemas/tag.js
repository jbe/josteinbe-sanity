import icon from "react-icons/lib/go/Tag";

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
