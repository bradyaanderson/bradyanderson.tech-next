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
import BootingAnSE30Post from "../blog/categories/bradyanderson-tech/posts/BootingAnSE30Post";
import FixingKeyboardPost from "../blog/categories/retro-computing/posts/FixingKeyboardPost";

const sitemap: Sitemap = {
  index: {
    routes: {
      /* Blog Main Section */
      blog: {
        title: "Blog",
        Component: BlogIndex,
        routes: {
          /* Retro Computing Blog Category */
          "retro-computing": {
            title: "Retro Computing",
            Component: RetroComputingIndex,
            routes: {
              "opening-a-mac-se30": {
                title: "Opening A Macintosh SE/30",
                Component: OpeningAMacSE30Post,
              },
              "booting-se30-without-a-hard-drive": {
                title: "Booting a Macintosh SE/30 Without a Hard Drive",
                shortTitle: "Booting a SE/30 Without a Hard Drive",
                Component: BootingAnSE30Post,
              },
              "apple-ii-keyboard-fix": {
                title:
                  '"Fixing" the Keyboard That Came With My SE/30 (Apple Keyboard II)',
                shortTitle: '"Fixing" an Apple Keyboard II',
                Component: FixingKeyboardPost,
              },
            },
          },
          /* Retro Gaming Blog Category */
          "retro-gaming": {
            title: "Retro Gaming",
            Component: RetroGamingIndex,
            routes: {},
          },
          /* Website Blog Category */
          "bradyanderson.tech": {
            title: "bradyanderson.tech",
            Component: BradyAndersonTechIndex,
            routes: {
              "getting-started": {
                title: "Getting Started",
                Component: GettingStartedPost,
              },
              "custom-hover-domain-for-heroku-app": {
                title: "Using My Custom Hover Domain for Heroku Application",
                shortTitle: "Using My Custom Domain",
                Component: CustomHoverDomainForHerokuAppPost,
              },
              "moving-to-aws": {
                title: "Moving to AWS from Heroku",
                shortTitle: "Moving to AWS",
                Component: MovingToAwsPost,
              },
              "setting-up-image-storage": {
                title: "Setting up Amazon S3 Image Storage",
                shortTitle: "Setting up Image Storage",
                Component: SettingUpImageStoragePost,
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
