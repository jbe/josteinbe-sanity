import S from "@sanity/desk-tool/structure-builder";
import {
  MdSettings as settingsIcon,
  MdTextsms as blurbsIcon
} from "react-icons/md";
import * as allBlurbs from "./schemas/blurb";

// const sectionItems = S.listItem()
//   .title("Shared sections")
//   .icon(Repeat)
//   .child(
//     S.list("Shared sections")
//       .id("shared-sections")
//       .title("Shared sections")
//       .items([
//         ...Object.values(sections).map(({ name, title }) =>
//           S.documentTypeListItem(`shared.${name}`).title(title)
//         )
//       ])
//   );

export default () =>
  S.list()
    .title("Desk")
    .items([
      S.listItem()
        .title("Blurbs")
        .icon(blurbsIcon)
        .child(
          S.list()
            .title("Blurbs")
            .items([
              ...Object.keys(allBlurbs).map(name =>
                S.documentTypeListItem(name)
              ),
              S.documentTypeListItem("tag")
            ])
        ),
      S.documentTypeListItem("page").title("Pages"),
      S.documentTypeListItem("route").title("Routes"),
      S.listItem()
        .title("Site config")
        .icon(settingsIcon)
        .child(
          S.editor()
            .id("siteConfig")
            .schemaType("siteConfig")
            .documentId("site-config")
        )
      // ...S.documentTypeListItems().filter(hiddenDocTypes),
      // S.listItem()
      //   .id("secrets")
      //   .title("Secrets")
      //   .schemaType("secrets")
      //   .child(
      //     S.editor()
      //       .id("siteSecrets")
      //       .schemaType("secrets")
      //       .documentId("private.secrets")
      //   )
    ]);
