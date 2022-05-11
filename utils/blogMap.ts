import moment from "moment";
import RetroComputingCategory from "../components/blog/blog-posts/retro-computing/RetroComputingCategory";
import OpeningAMacSE30Post from "../components/blog/blog-posts/retro-computing/posts/OpeningAMacSE30Post";
import BootingASE30Post from "../components/blog/blog-posts/retro-computing/posts/BootingASE30Post";
import FixingKeyboardPost from "../components/blog/blog-posts/retro-computing/posts/FixingKeyboardPost";
import InstallingSCSI2SDPost from "../components/blog/blog-posts/retro-computing/posts/InstallingSCSI2SDPost";
import FixingSE30SoundStruggle from "../components/blog/blog-posts/retro-computing/posts/FixingSE30SoundStruggle";
import WhiteningAMacintoshPost from "../components/blog/blog-posts/retro-computing/posts/WhiteningAMacintoshPost";
import RetroGamingCategory from "../components/blog/blog-posts/retro-gaming/RetroGamingCategory";
import ReplacingGameBoyColorSpeakerPost
  from "../components/blog/blog-posts/retro-gaming/posts/ReplacingGameBoyColorSpeakerPost";
import DevelopmentCategory from "../components/blog/blog-posts/development/DevelopmentCategory";
import GettingStartedPost from "../components/blog/blog-posts/development/posts/GettingStartedPost";
import CustomHoverDomainForHerokuAppPost
  from "../components/blog/blog-posts/development/posts/CustomHoverDomainForHerokuAppPost";
import MovingToAwsPost from "../components/blog/blog-posts/development/posts/MovingToAwsPost";
import SettingUpImageStoragePost from "../components/blog/blog-posts/development/posts/SettingUpImageStoragePost";
import EasilySettingCustomTitlePost from "../components/blog/blog-posts/development/posts/EasilySettingCustomTitlePost";
import FixingFloppyDrive from "../components/blog/blog-posts/retro-computing/posts/FixingFloppyDrive";
import GameGearRepairPart1 from "../components/blog/blog-posts/retro-gaming/posts/GameGearRepairPart1";
import GameGearRepairPart2 from "../components/blog/blog-posts/retro-gaming/posts/GameGearRepairPart2";
import GameGearRepairPart3 from "../components/blog/blog-posts/retro-gaming/posts/GameGearRepairPart3";
import BlogNavigationUpdates from "../components/blog/blog-posts/development/posts/BlogNavigationUpdates";
import SE30FTPConnectionPost from "../components/blog/blog-posts/retro-computing/posts/SE30FTPConnectionPost";
import TakingAndConvertingScreenshotsPost
  from "../components/blog/blog-posts/retro-computing/posts/TakingAndConvertingScreenshotsPost";
import CartridgeCleaningPost from "../components/blog/blog-posts/retro-gaming/posts/CartridgeCleaningPost";
import MacintoshCHelloWorldPost from "../components/blog/blog-posts/retro-computing/posts/MacintoshCHelloWorldPost";
import MacintoshCAdvancedHelloWorld
  from "../components/blog/blog-posts/retro-computing/posts/MacintoshCAdvancedHelloWorld";
import USBKeyboardWithCompactMac from "../components/blog/blog-posts/retro-computing/posts/USBKeyboardWithCompactMac";
import { BlogMap } from "../types/Sitemap";
import { CategoryBasename } from "../constants/constants";
import The404RabbitHoldPost from "../components/blog/blog-posts/development/posts/The404RabbitHoldPost";

const { RETRO_COMPUTING, RETRO_GAMING, DEVELOPMENT } = CategoryBasename;
const DATE_FORMAT = "MM/DD/YYYY";
const date = (dateString: string) => moment(dateString, DATE_FORMAT);

/** Map of blog containing data on structure of blog. */
const blogMap: BlogMap = {
  title: "Blog",
  routes: {
    /* Retro Computing Blog Category */
    [RETRO_COMPUTING]: {
      title: "Retro Computing",
      Component: RetroComputingCategory,
      routes: {
        "opening-a-mac-se30": {
          title: "Taking a Look Inside a Macintosh SE/30",
          date: date("08/05/2021"),
          Component: OpeningAMacSE30Post
        },
        "booting-se30-without-a-hard-drive": {
          title: "Getting a Macintosh SE/30 Without a Hard Drive to Boot",
          Component: BootingASE30Post,
          date: date("08/10/2021")
        },
        "apple-ii-keyboard-fix": {
          title: "\"Fixing\" an Apple Keyboard II",
          Component: FixingKeyboardPost,
          date: date("08/14/2021")
        },
        "installing-scsi2sd-se30": {
          title: "Installing a SCSI2SD in a Macintosh SE/30",
          Component: InstallingSCSI2SDPost,
          date: date("08/18/2021")
        },
        "fixing-macintosh-se30-sound-struggle": {
          title: "Attempting to Fix the Sound on a Macintosh SE/30",
          Component: FixingSE30SoundStruggle,
          date: date("08/23/2021")
        },
        "whitening-a-macintosh": {
          title: "Retrobrighting a Macintosh SE/30's Case",
          Component: WhiteningAMacintoshPost,
          date: date("09/01/2021")
        },
        "fixing-floppy-drive": {
          title: "Fixing a Macintosh SuperDrive That Won't Auto-Eject",
          Component: FixingFloppyDrive,
          date: date("09/15/2021")
        },
        "se30-ftp-connection": {
          title: "Macintosh SE/30 - Connecting to a local FTP Server",
          Component: SE30FTPConnectionPost,
          date: date("11/11/2021")
        },
        "taking-and-converting-screenshots": {
          title:
            "Taking Screenshots on System 7 and Converting to a Modern Format",
          Component: TakingAndConvertingScreenshotsPost,
          date: date("11/15/2021")
        },
        "macintosh-c-hello-world": {
          title: "68k Macintosh C Programming - Hello World",
          Component: MacintoshCHelloWorldPost,
          date: date("12/07/2021")
        },
        "macintosh-c-advanced-hello-world": {
          title: "68k Macintosh C Programming - A More Advanced Hello World",
          Component: MacintoshCAdvancedHelloWorld,
          date: date("12/28/2021")
        },
        "usb-keyboard-with-compact-mac": {
          title: "Using a USB keyboard with a Compact Macintosh",
          Component: USBKeyboardWithCompactMac,
          date: date("01/15/2022")
        }
      }
    },
    /* Retro Gaming Blog Category */
    [RETRO_GAMING]: {
      title: "Retro Gaming",
      Component: RetroGamingCategory,
      routes: {
        "replacing-game-boy-color-speaker": {
          title: "Replacing the Speaker on a Game Boy Color",
          Component: ReplacingGameBoyColorSpeakerPost,
          date: date("08/17/2021")
        },
        "game-gear-repair-part-1": {
          title: "Game Gear Repair: Part 1 - Disassembly and Cleaning",
          Component: GameGearRepairPart1,
          date: date("09/22/2021")
        },
        "game-gear-repair-part-2": {
          title: "Game Gear Repair: Part 2 - Fixing the Power Issue",
          Component: GameGearRepairPart2,
          date: date("10/02/2021")
        },
        "game-gear-repair-part-3": {
          title: "Game Gear Repair: Part 3 - Main and Sound Board Recapping",
          Component: GameGearRepairPart3,
          date: date("10/03/2021")
        },
        "cart-cleaning": {
          title:
            "Cartridge Cleaning - Removing Permanent Marker and Cleaning Contacts",
          Component: CartridgeCleaningPost,
          date: date("12/01/2021")
        }
      }
    },
    /* Development Blog Category */
    [DEVELOPMENT]: {
      title: "Development",
      Component: DevelopmentCategory,
      routes: {
        "getting-started": {
          title: "Getting Started",
          Component: GettingStartedPost,
          date: date("07/25/2021")
        },
        "custom-hover-domain-for-heroku-app": {
          title: "Using a Hover Domain with Heroku",
          Component: CustomHoverDomainForHerokuAppPost,
          date: date("07/27/2021")
        },
        "moving-to-aws": {
          title: "Moving From Heroku to AWS",
          Component: MovingToAwsPost,
          date: date("07/30/2021")
        },
        "setting-up-image-storage": {
          title: "Simple Image Storage using Amazon S3",
          Component: SettingUpImageStoragePost,
          date: date("08/03/2021")
        },
        "dynamically-updating-html-title": {
          title: "Dynamically Updating the HTML Title with React Helmet",
          Component: EasilySettingCustomTitlePost,
          date: date("09/12/2021")
        },
        "navigation-updates": {
          title: "Blog Navigation Updates",
          Component: BlogNavigationUpdates,
          date: date("10/18/2021")
        },
        "the-404-rabbit-hole": {
          title: "The 404 Rabbit Hole",
          Component: The404RabbitHoldPost,
          date: date("02/11/2022")
        }
      }
    }
  }
};

export default blogMap;
