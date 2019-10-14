import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const SnippetCode = ({ code }) => {
  return (
    <div className="snippet-sample-container">
      <SyntaxHighlighter language="html" style={docco} className="snippet-code">
        {code}
      </SyntaxHighlighter>
      <div className="snippet-output">
        <button>Look at me pretty button</button>
      </div>
    </div>
  );
};

export default SnippetCode;
