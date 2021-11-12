import { BlogMap } from "../../types/Sitemap";
import BlogIndex from "./BlogIndex";
import RetroComputingCategory from "./categories/retro-computing/RetroComputingCategory";
import OpeningAMacSE30Post from "./categories/retro-computing/posts/OpeningAMacSE30Post";
import BootingASE30Post from "./categories/retro-computing/posts/BootingASE30Post";
import FixingKeyboardPost from "./categories/retro-computing/posts/FixingKeyboardPost";
import InstallingSCSI2SDPost from "./categories/retro-computing/posts/InstallingSCSI2SDPost";
import FixingSE30SoundStruggle from "./categories/retro-computing/posts/FixingSE30SoundStruggle";
import WhiteningAMacintoshPost from "./categories/retro-computing/posts/WhiteningAMacintoshPost";
import RetroGamingCategory from "./categories/retro-gaming/RetroGamingCategory";
import ReplacingGameBoyColorSpeakerPost from "./categories/retro-gaming/posts/ReplacingGameBoyColorSpeakerPost";
import WebsiteUpdatesCategory from "./categories/website-updates/WebsiteUpdatesCategory";
import GettingStartedPost from "./categories/website-updates/posts/GettingStartedPost";
import CustomHoverDomainForHerokuAppPost from "./categories/website-updates/posts/CustomHoverDomainForHerokuAppPost";
import MovingToAwsPost from "./categories/website-updates/posts/MovingToAwsPost";
import SettingUpImageStoragePost from "./categories/website-updates/posts/SettingUpImageStoragePost";
import EasilySettingCustomTitlePost from "./categories/website-updates/posts/EasilySettingCustomTitlePost";
import FixingFloppyDrive from "./categories/retro-computing/posts/FixingFloppyDrive";
import GameGearRepairPart1 from "./categories/retro-gaming/posts/GameGearRepairPart1";
import GameGearRepairPart2 from "./categories/retro-gaming/posts/GameGearRepairPart2";
import GameGearRepairPart3 from "./categories/retro-gaming/posts/GameGearRepairPart3";
import moment from "moment";
import BlogNavigationUpdates from "./categories/website-updates/posts/BlogNavigationUpdates";
import SE30FTPConnectionPost from "./categories/retro-computing/posts/SE30FTPConnectionPost";

const DATE_FORMAT = "MM/DD/YYYY";

const blogMap: BlogMap = {
  title: "Blog",
  Component: BlogIndex,
  routes: {
    /* Retro Computing Blog Category */
    "retro-computing": {
      title: "Retro Computing",
      Component: RetroComputingCategory,
      routes: {
        "opening-a-mac-se30": {
          title: "Taking a Look Inside a Macintosh SE/30",
          date: moment("08/05/2021", DATE_FORMAT),
          Component: OpeningAMacSE30Post,
        },
        "booting-se30-without-a-hard-drive": {
          title: "Getting a Macintosh SE/30 Without a Hard Drive to Boot",
          Component: BootingASE30Post,
          date: moment("08/10/2021", DATE_FORMAT),
        },
        "apple-ii-keyboard-fix": {
          title: '"Fixing" an Apple Keyboard II',
          Component: FixingKeyboardPost,
          date: moment("08/14/2021", DATE_FORMAT),
        },
        "installing-scsi2sd-se30": {
          title: "Installing a SCSI2SD in a Macintosh SE/30",
          Component: InstallingSCSI2SDPost,
          date: moment("08/18/2021", DATE_FORMAT),
        },
        "fixing-macintosh-se30-sound-struggle": {
          title: "Attempting to Fix the Sound on a Macintosh SE/30",
          Component: FixingSE30SoundStruggle,
          date: moment("08/23/2021", DATE_FORMAT),
        },
        "whitening-a-macintosh": {
          title: "Retrobrighting a Macintosh SE/30's Case",
          Component: WhiteningAMacintoshPost,
          date: moment("09/01/2021", DATE_FORMAT),
        },
        "fixing-floppy-drive": {
          title: "Fixing a Macintosh SuperDrive That Won't Auto-Eject",
          Component: FixingFloppyDrive,
          date: moment("09/15/2021", DATE_FORMAT),
        },
        "se30-ftp-connection": {
          title: "Macintosh SE/30 - Connecting to a local FTP Server",
          Component: SE30FTPConnectionPost,
          date: moment("11/11/2021", DATE_FORMAT),
        },
      },
    },
    /* Retro Gaming Blog Category */
    "retro-gaming": {
      title: "Retro Gaming",
      Component: RetroGamingCategory,
      routes: {
        "replacing-game-boy-color-speaker": {
          title: "Replacing the Speaker on a Game Boy Color",
          Component: ReplacingGameBoyColorSpeakerPost,
          date: moment("08/17/2021", DATE_FORMAT),
        },
        "game-gear-repair-part-1": {
          title: "Game Gear Repair: Part 1 - Disassembly and Cleaning",
          Component: GameGearRepairPart1,
          date: moment("09/22/2021", DATE_FORMAT),
        },
        "game-gear-repair-part-2": {
          title: "Game Gear Repair: Part 2 - Fixing the Power Issue",
          Component: GameGearRepairPart2,
          date: moment("10/02/2021", DATE_FORMAT),
        },
        "game-gear-repair-part-3": {
          title: "Game Gear Repair: Part 3 - Main and Sound Board Recapping",
          Component: GameGearRepairPart3,
          date: moment("10/03/2021", DATE_FORMAT),
        },
      },
    },
    /* Website Updates Blog Category */
    "website-updates": {
      title: "Website Updates",
      Component: WebsiteUpdatesCategory,
      routes: {
        "getting-started": {
          title: "Getting Started",
          Component: GettingStartedPost,
          date: moment("07/25/2021", DATE_FORMAT),
        },
        "custom-hover-domain-for-heroku-app": {
          title: "Using a Hover Domain with Heroku",
          Component: CustomHoverDomainForHerokuAppPost,
          date: moment("07/27/2021", DATE_FORMAT),
        },
        "moving-to-aws": {
          title: "Moving From Heroku to AWS",
          Component: MovingToAwsPost,
          date: moment("07/30/2021", DATE_FORMAT),
        },
        "setting-up-image-storage": {
          title: "Simple Image Storage using Amazon S3",
          Component: SettingUpImageStoragePost,
          date: moment("08/03/2021", DATE_FORMAT),
        },
        "dynamically-updating-html-title": {
          title: "Dynamically Updating the HTML Title with React Helmet",
          Component: EasilySettingCustomTitlePost,
          date: moment("09/12/2021", DATE_FORMAT),
        },
        "navigation-updates": {
          title: "Blog Navigation Updates",
          Component: BlogNavigationUpdates,
          date: moment("10/18/2021", DATE_FORMAT),
        },
      },
    },
  },
};

export default blogMap;
