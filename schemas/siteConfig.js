import { MdSettings as icon } from "react-icons/md";

export default {
  name: "siteConfig",
  title: "Site config",
  icon: icon,
  type: "document",
  fields: [
    {
      name: "header",
      title: "Header",
      type: "string"
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    }
  ],

  preview: {
    select: {
      title: "header",
      subtitle: "description"
    }
  }
};
