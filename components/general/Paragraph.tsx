import React from "react";
import styles from "./paragraph.module.scss";

interface Props {
  children: React.ReactNode;
}

/** Paragraph of blog post. Will allow for easier updates in the future. */
const Paragraph = ({ children }: Props) => {
  return <span className={styles.paragraph}>{children}</span>;
};

export default Paragraph;
