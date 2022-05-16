import React from "react";
import styles from "./BlockQuote.module.scss";

interface Props {
  /* The source of the quotation. */
  cite?: string;
}

/** Block Quotes for long quotes. */
const BlockQuote: React.FunctionComponent<Props> = ({ children, cite }) => {
  return (
    <blockquote cite={cite} className={styles.blockQuote}>
      {children}
    </blockquote>
  );
};

export default BlockQuote;
