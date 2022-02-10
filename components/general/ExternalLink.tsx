import React from "react";

interface Props {
  /** URL to navigate to. */
  link: string;
}

/** Opens external link in a new tab. */
const ExternalLink: React.FunctionComponent<Props> = ({ link, children }) => {
  return (
    <>
      <a href={link} target="_blank" rel="noreferrer">
        {children}
      </a>
    </>
  );
};

export default ExternalLink;
