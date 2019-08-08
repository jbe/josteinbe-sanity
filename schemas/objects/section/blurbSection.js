export default {
  type: "object",
  name: "blurbSection",
  title: "Blurb stream",
  fields: [
    {
      name: "display",
      type: "string",
      title: "Display style",
      options: {
        list: [
          { value: "full", title: "Full view (front page listing)" },
          { value: "compact", title: "Compact (archive listing)" }
        ],
        layout: "radio"
      }
    },
    {
      name: "maxItems",
      type: "number",
      title: "Maximum visible items per page",
      validation: rule => rule.integer().greaterThan(0)
    }
  ],
  preview: {
    select: {
      display: "display"
    },
    prepare({ display }) {
      return {
        title: "Blurb stream",
        subtitle: display
      };
    }
  }
};
