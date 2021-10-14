import { BlogMap } from "../../types/Sitemap";
import BlogIndex from "./BlogIndex";
import RetroComputingIndex from "./categories/retro-computing/RetroComputingIndex";
import OpeningAMacSE30Post from "./categories/retro-computing/posts/OpeningAMacSE30Post";
import BootingASE30Post from "./categories/retro-computing/posts/BootingASE30Post";
import FixingKeyboardPost from "./categories/retro-computing/posts/FixingKeyboardPost";
import InstallingSCSI2SDPost from "./categories/retro-computing/posts/InstallingSCSI2SDPost";
import FixingSE30SoundStruggle from "./categories/retro-computing/posts/FixingSE30SoundStruggle";
import WhiteningAMacintoshPost from "./categories/retro-computing/posts/WhiteningAMacintoshPost";
import RetroGamingIndex from "./categories/retro-gaming/RetroGamingIndex";
import ReplacingGameBoyColorSpeakerPost from "./categories/retro-gaming/posts/ReplacingGameBoyColorSpeakerPost";
import BradyAndersonTechIndex from "./categories/website-updates/BradyAndersonTechIndex";
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

const DATE_FORMAT = "MM/DD/YYYY";

const blogMap: BlogMap = {
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
          date: moment("08/05/2021", DATE_FORMAT),
          Component: OpeningAMacSE30Post,
        },
        "booting-se30-without-a-hard-drive": {
          title: "Booting a Macintosh SE/30 Without a Hard Drive",
          shortTitle: "Booting a SE/30 Without a Hard Drive",
          Component: BootingASE30Post,
          date: moment("08/10/2021", DATE_FORMAT),
        },
        "apple-ii-keyboard-fix": {
          title:
            '"Fixing" the Keyboard That Came With My SE/30 (Apple Keyboard II)',
          shortTitle: '"Fixing" an Apple Keyboard II',
          Component: FixingKeyboardPost,
          date: moment("08/14/2021", DATE_FORMAT),
        },
        "installing-scsi2sd-se30": {
          title: "Installing a SCSI2SD on my Macintosh SE/30",
          shortTitle: "Installing a SCSI2SD (Macintosh SE/30)",
          Component: InstallingSCSI2SDPost,
          date: moment("08/18/2021", DATE_FORMAT),
        },
        "fixing-macintosh-se30-sound-struggle": {
          title: "The Struggle to Fix a Macintosh SE/30's Sound",
          Component: FixingSE30SoundStruggle,
          date: moment("08/23/2021", DATE_FORMAT),
        },
        "whitening-a-macintosh": {
          title: "Whitening a Macintosh's Plastic Case",
          Component: WhiteningAMacintoshPost,
          date: moment("09/01/2021", DATE_FORMAT),
        },
        "fixing-floppy-drive": {
          title: "Fixing Auto-Eject on Macintosh SuperDrive",
          Component: FixingFloppyDrive,
          date: moment("09/15/2021", DATE_FORMAT),
        },
      },
    },
    /* Retro Gaming Blog Category */
    "retro-gaming": {
      title: "Retro Gaming",
      Component: RetroGamingIndex,
      routes: {
        "replacing-game-boy-color-speaker": {
          title: "Replacing a Game Boy Color Speaker",
          Component: ReplacingGameBoyColorSpeakerPost,
          date: moment("08/17/2021", DATE_FORMAT),
        },
        "game-gear-repair-part-1": {
          title: "Game Gear Repair: Part 1 - Disassembly and Cleaning",
          shortTitle: "Game Gear Repair - Disassembly and Cleaning",
          Component: GameGearRepairPart1,
          date: moment("09/22/2021", DATE_FORMAT),
        },
        "game-gear-repair-part-2": {
          title: "Game Gear Repair: Part 2 - Fixing Immediate Power Off",
          shortTitle: "Game Gear Repair - Fixing Immediate Power Off",
          Component: GameGearRepairPart2,
          date: moment("10/02/2021", DATE_FORMAT),
        },
        "game-gear-repair-part-3": {
          title:
            "Game Gear Repair: Part 3 - Finishing Main Board Recapping and Fixing Sound",
          shortTitle:
            "Game Gear Repair - Finishing Main Board Recapping and Fixing Sound",
          Component: GameGearRepairPart3,
          date: moment("10/03/2021", DATE_FORMAT),
        },
      },
    },
    /* Website Updates Blog Category */
    "website-updates": {
      title: "Website Updates",
      Component: BradyAndersonTechIndex,
      routes: {
        "getting-started": {
          title: "Getting Started",
          Component: GettingStartedPost,
          date: moment("07/25/2021", DATE_FORMAT),
        },
        "custom-hover-domain-for-heroku-app": {
          title: "Using My Custom Hover Domain for Heroku Application",
          shortTitle: "Using My Custom Domain",
          Component: CustomHoverDomainForHerokuAppPost,
          date: moment("07/27/2021", DATE_FORMAT),
        },
        "moving-to-aws": {
          title: "Moving to AWS from Heroku",
          shortTitle: "Moving to AWS",
          Component: MovingToAwsPost,
          date: moment("07/20/2021", DATE_FORMAT),
        },
        "setting-up-image-storage": {
          title: "Setting Up Amazon S3 Image Storage",
          shortTitle: "Setting up Image Storage",
          Component: SettingUpImageStoragePost,
          date: moment("08/03/2021", DATE_FORMAT),
        },
        "dynamically-updating-html-title": {
          title:
            "Easily Setting a Custom Title For Each Page While Using React Router",
          shortTitle: "Easily Setting a Custom Title For Each Page",
          Component: EasilySettingCustomTitlePost,
          date: moment("09/12/2021", DATE_FORMAT),
        },
      },
    },
  },
};

export default blogMap;
