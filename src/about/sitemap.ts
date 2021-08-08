import Sitemap from "../../types/Sitemap";
import OpeningAMacSE30Post from "../blog/categories/retro-computing/posts/OpeningAMacSE30Post";
import RetroComputingIndex from "../blog/categories/retro-computing/RetroComputingIndex";
import RetroGamingIndex from "../blog/categories/retro-gaming/RetroGamingIndex";
import BradyAndersonTechIndex from "../blog/categories/bradyanderson-tech/BradyAndersonTechIndex";
import GettingStartedPost from "../blog/categories/bradyanderson-tech/posts/GettingStartedPost";
import MovingToAwsPost from "../blog/categories/bradyanderson-tech/posts/MovingToAwsPost";
import SettingUpImageStoragePost from "../blog/categories/bradyanderson-tech/posts/SettingUpImageStoragePost";
import CustomHoverDomainForHerokuAppPost from "../blog/categories/bradyanderson-tech/posts/CustomHoverDomainForHerokuAppPost";
import BlogIndex from "../blog/BlogIndex";

const sitemap: Sitemap = {
  index: {
    routes: {
      /* Blog Main Section */
      blog: {
        title: "Blog",
        component: BlogIndex,
        routes: {
          /* Retro Computing Blog Category */
          "retro-computing": {
            title: "Retro Computing",
            component: RetroComputingIndex,
            routes: {
              "opening-a-mac-se30": {
                title: "Opening A Macintosh SE/30",
                component: OpeningAMacSE30Post,
              },
            },
          },
          /* Retro Gaming Blog Category */
          "retro-gaming": {
            title: "Retro Gaming",
            component: RetroGamingIndex,
            routes: {},
          },
          /* Website Blog Category */
          website: {
            title: "bradyanderson.tech",
            component: BradyAndersonTechIndex,
            routes: {
              "getting-started": {
                title: "Getting Started",
                component: GettingStartedPost,
              },
              "custom-hover-domain-for-heroku-app": {
                title: "Using My Custom Hover Domain for Heroku Application",
                shortTitle: "Using My Custom Domain",
                component: CustomHoverDomainForHerokuAppPost,
              },
              "moving-to-aws": {
                title: "Moving to AWS from Heroku",
                shortTitle: "Moving to AWS",
                component: MovingToAwsPost,
              },
              "setting-up-image-storage": {
                title: "Setting up Amazon S3 Image Storage",
                shortTitle: "Setting up Image Storage",
                component: SettingUpImageStoragePost,
              },
            },
          },
        },
      },
      about: {
        title: "About",
      },
    },
  },
};

export default sitemap;
