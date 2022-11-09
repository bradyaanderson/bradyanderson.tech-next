import React from "react";
import styles from "./InlineCode.module.scss";

interface Props {
  children: React.ReactNode;
}

/** Component for displaying inline code. */
const InlineCode: React.FunctionComponent<Props> = ({ children }) => {
  return <code className={styles.inlineCode}>{children}</code>;
};

export default InlineCode;
