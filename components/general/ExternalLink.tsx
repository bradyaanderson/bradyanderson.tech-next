import React from "react";

interface Props {
  /** URL to navigate to. */
  link: string;
  children: React.ReactNode;
}

/** Opens external link in a new tab. */
const ExternalLink = ({ link, children }: Props) => {
  return (
    <>
      <a href={link} target="_blank" rel="noreferrer">
        {children}
      </a>
    </>
  );
};

export default ExternalLink;
