import variables from "../styles/variables.module.scss";

export enum CategoryBasename {
  RETRO_GAMING = "retro-gaming",
  RETRO_COMPUTING = "retro-computing",
  DEVELOPMENT = "development",
}

/** Maps blog category (example: retro-gaming) to color value. */
export const blogCategoryToColorMap: { [key: string]: string } = {
  [CategoryBasename.RETRO_COMPUTING]: variables.retroComputingColor,
  [CategoryBasename.RETRO_GAMING]: variables.retroGamingColor,
  [CategoryBasename.DEVELOPMENT]: variables.developmentColor
};
