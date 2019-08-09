import React from "react";
import { FaGoogle, FaImages, FaSearch } from "react-icons/fa";
import { GiDuck } from "react-icons/gi";

const HTMLpreview = ({ value: { term, google, googleImage, duckDuckGo } }) => (
  <div
    style={{
      padding: "1em",
      display: "flex",
      alignItems: "baseline",
      color: "gray"
    }}
  >
    <div style={{ color: "gray" }}>
      {google && <FaGoogle style={{ marginRight: "0.5em" }} />}
      {googleImage && <FaImages style={{ marginRight: "0.5em" }} />}
      {duckDuckGo && <GiDuck style={{ marginRight: "0.5em" }} />}
      <FaSearch style={{ marginRight: "0.5em" }} />
    </div>
    <div style={{ flexGrow: 1 }}>{term}</div>
    <div>🐇 🕳️</div>
  </div>
);

export default {
  name: "rabbitHole",
  title: "Rabbit hole",
  type: "object",
  fields: [
    {
      name: "term",
      title: "Search term",
      type: "string",
      validation: Rule => Rule.required()
    },
    { name: "google", title: "Google", type: "boolean" },
    { name: "googleImage", title: "Google image search", type: "boolean" },
    { name: "duckDuckGo", title: "Duck duck go", type: "boolean" }
  ],
  preview: {
    select: {
      term: "term",
      google: "google",
      googleImage: "googleImage",
      duckDuckGo: "duckDuckGo"
    },
    component: HTMLpreview
  }
};
