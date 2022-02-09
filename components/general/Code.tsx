import React, { useCallback, useEffect, useState } from "react";
import { join } from "path";
import SyntaxHighlighter from "react-syntax-highlighter";
import { irBlack } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface Props {
  /** The language to highlight code in. */
  language: string;
  /** The public path to fetch code from (does not include filename). */
  path: string;
  /** The filename to fetch code from. */
  filename: string;
}

function Code({ language, path, filename }: Props) {
  const [code, setCode] = useState("");

  const getCode = useCallback(() => {
    fetch(join("/", "code", path, filename))
      .then((response) => response.text())
      .then((code) => setCode(code.trim()))
      .catch((_error) => setCode("There was an error fetching code."));
  }, [setCode, filename, path]);

  useEffect(() => {
    getCode();
  }, [getCode]);

  return (
    <div
      style={{
        maxWidth: "36rem",
        margin: "auto",
      }}
    >
      <SyntaxHighlighter language={language} style={irBlack}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default Code;
