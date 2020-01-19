import sapperSource, { markdownSource } from "sapper-sources";

export default {
  source: sapperSource({
    plugin: markdownSource,
    options: {
      postsPerPage: 10,
      contentPath: "/contents/"
    }
  })
};
