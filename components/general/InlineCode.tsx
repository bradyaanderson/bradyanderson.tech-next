import React from "react";
import styles from "./InlineCode.module.scss";

/** Component for displaying inline code. */
const InlineCode: React.FunctionComponent = ({ children }) => {
  return <code className={styles.inlineCode}>{children}</code>;
};

export default InlineCode;
