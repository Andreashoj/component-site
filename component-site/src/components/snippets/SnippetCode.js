import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

const SnippetCode = ({ code }) => {
  return code.map(snippet => {
    return (
      <div>
        <span className="lang-icon">{snippet.lang}</span>
        <SyntaxHighlighter
          language={snippet.lang}
          style={vs2015}
          className="snippet-code"
        >
          {snippet.content}
        </SyntaxHighlighter>
      </div>
    );
  });
};

export default SnippetCode;
