import Settings from "react-icons/lib/md/settings";

export default {
  name: "siteConfig",
  title: "Site config",
  icon: Settings,
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
