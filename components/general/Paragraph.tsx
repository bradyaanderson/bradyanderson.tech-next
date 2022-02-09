import React from "react";
import styles from './paragraph.module.scss'

interface Props {
}

/** Paragraph of blog post. Will allow for easier updates in the future. */
const Paragraph: React.FunctionComponent<Props> = ({children}) => {
  return <span className={styles.paragraph}>{children}</span>;
};

export default Paragraph;
