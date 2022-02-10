declare interface ScssVariables {
  primaryColor: string;
  primaryLightColor: string;
  primaryDarkColor: string;
  secondaryColor: string;
  secondaryLightColor: string;
  secondaryDarkColor: string;
  complementColor: string;
  complementDarkColor: string;
  linkColor: string;
  retroGamingColor: string;
  retroComputingColor: string;
  websiteUpdatesColor: string;
}

declare module "variables.module.scss" {
  const variables: ScssVariables;
  export = variables;
}
