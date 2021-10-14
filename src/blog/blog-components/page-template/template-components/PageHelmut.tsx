import { Helmet } from "react-helmet";
import React from "react";

interface Props {
  title: string;
}

function PageHelmut({ title }: Props) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

export default PageHelmut;
