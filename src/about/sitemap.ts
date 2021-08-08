import Sitemap from "../../types/Sitemap";

const sitemap: Sitemap = {
  index: {
    title: "Home",
    routes: {
      /* Blog Main Section */
      blog: {
        title: "Blog",
        routes: {
          /* Retro Computing Blog Category */
          "retro-computing": {
            title: "Retro Computing",
            routes: {
              "opening-a-mac-se30": {
                title: "Opening A Macintosh SE/30",
                routes: {},
              },
            },
          },
          /* Retro Gaming Blog Category */
          "retro-gaming": {
            title: "Retro Gaming",
            routes: {},
          },
          /* Website Blog Category */
          website: {
            title: "bradyanderson.tech",
            routes: {
              "getting-started": {
                title: "Getting Started",
                routes: {},
              },
              "custom-hover-domain-for-heroku-app": {
                title: "Using My Custom Hover Domain for Heroku Application",
                shortTitle: "Using My Custom Domain",
                routes: {},
              },
              "moving-to-aws": {
                title: "Moving to AWS from Heroku",
                shortTitle: "Moving to AWS",
                routes: {},
              },
              "setting-up-image-storage": {
                title: "Setting up Amazon S3 Image Storage",
                shortTitle: "Setting up Image Storage",
                routes: {},
              },
            },
          },
        },
      },
      about: {
        title: "About",
        routes: {},
      },
    },
  },
};

export default sitemap;
