/** Structure for category name to link object. */
import moment from "moment";

export interface NameToPathMap {
  [key: string]: string;
}

/** Details about a post used for navigation. */
export interface PostDetails {
  title: string;
  link: string;
  category: string;
  date: moment.Moment;
}
