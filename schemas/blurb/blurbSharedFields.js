export default [
  {
    name: "title",
    title: "Title",
    type: "string"
  },
  {
    name: "slug",
    title: "Slug",
    type: "slug",
    options: {
      source: "title",
      maxLength: 96
    }
  },
  {
    name: "tags",
    title: "Tags",
    type: "array",
    of: [{ type: "reference", to: { type: "tag" } }]
  },
  {
    name: "publishedAt",
    title: "Published at",
    type: "datetime"
  }
];
