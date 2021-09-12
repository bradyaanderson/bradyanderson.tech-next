import React from "react";
import {Helmet} from "react-helmet";
// More imports

interface Props {
  title: string;
  // other props...
}

function BlogPost({title}: Props) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {/* Other Elements */}
    </>
  )
}
