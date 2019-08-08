import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import tag from "./tag";
import * as allBlurbs from "./blurb";

import page from "./documents/page";
import route from "./documents/route";
import siteConfig from "./documents/siteConfig";

import cta from "./objects/cta";
import embedHTML from "./objects/embedHTML";
import figure from "./objects/figure";
import internalLink from "./objects/internalLink";
import link from "./objects/link";
import portableText from "./objects/portableText";
import simplePortableText from "./objects/simplePortableText";

import hero from "./objects/section/hero";
import imageSection from "./objects/section/imageSection";
import mailchimp from "./objects/section/mailchimp";
import textSection from "./objects/section/textSection";
import premadeSection from "./objects/section/premadeSection";
import blurbSection from "./objects/section/blurbSection";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    ...Object.values(allBlurbs),
    tag,

    page,
    route,
    siteConfig,

    cta,
    embedHTML,
    figure,
    internalLink,
    link,
    portableText,
    simplePortableText,

    hero,
    imageSection,
    mailchimp,
    textSection,
    premadeSection,
    blurbSection
  ])
});
