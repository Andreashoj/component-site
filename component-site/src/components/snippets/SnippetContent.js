import React, { useContext } from "react";
import SnippetCode from "./SnippetCode";
import { FormContext } from "../../contexts/FormContext";

const Navigation = () => {
  const { snippets, setSnippets } = useContext(FormContext);

  return (
    <div className="snippet-container snippet-nav">
      {snippets.map(snippet => {
        return (
          <div>
            <h3>{snippet.title}</h3>
            <p>{snippet.description}</p>
            <SnippetCode code={snippet.code} />
          </div>
        );
      })}
    </div>
  );
};

export default Navigation;
