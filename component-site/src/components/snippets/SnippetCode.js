import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const SnippetCode = () => {
  const codeString = `<body> 
    <div class="container"> 
    </div>
</body>`;

  return (
    <div className="snippet-sample-container">
      <SyntaxHighlighter language="html" style={docco} className="snippet-code">
        {codeString}
      </SyntaxHighlighter>
      <div className="snippet-output">
        <button>Look at me pretty button</button>
      </div>
    </div>
  );
};

export default SnippetCode;
