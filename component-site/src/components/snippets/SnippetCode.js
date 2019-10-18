import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const SnippetCode = ({ code }) => {
  return code.map(snippet => {
    return (
      <div>
        <span className="lang-icon">{snippet.lang}</span>
        <SyntaxHighlighter
          language={snippet.lang}
          style={dracula}
          className="snippet-code"
        >
          {snippet.content}
        </SyntaxHighlighter>
      </div>
    );
  });
};

export default SnippetCode;
