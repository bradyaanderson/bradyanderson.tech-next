import React from "react";
import styles from "./BlockQuote.module.scss";

interface Props {
  /* The source of the quotation. */
  cite?: string;
  children: React.ReactNode;
}

/** Block Quotes for long quotes. */
const BlockQuote = ({ children, cite }: Props) => {
  return (
    <blockquote cite={cite} className={styles.blockQuote}>
      {children}
    </blockquote>
  );
};

export default BlockQuote;
