export default {
  type: "object",
  name: "premadeSection",
  title: "Premade interface",
  fields: [
    {
      name: "type",
      type: "string",
      title: "Type",
      options: {
        list: [
          { value: "bizCard", title: "Business card with routes" },
          { value: "siteNavbar", title: "Site navbar with routes" }
        ],
        layout: "radio"
      }
    }
  ],
  preview: {
    select: {
      title: "type"
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Premade interface"
      };
    }
  }
};
