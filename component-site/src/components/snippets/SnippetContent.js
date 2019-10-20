import React, { useContext } from "react";
import SnippetCode from "./SnippetCode";
import { FormContext } from "../../contexts/FormContext";
import { useTransition, animated } from "react-spring";

const SnippetContent = () => {
  const { snippets } = useContext(FormContext);
  return (
    <div className="snippet-container snippet-nav">
      {snippets.map(snippet => {
        return (
          <div className="snippet-content" key={snippet.id}>
            <h3>{snippet.title}</h3>
            <p>{snippet.description}</p>

            <div className="snippet-sample-container">
              <div className="code-samples">
                <SnippetCode code={snippet.code} />
              </div>
              <p>Code will be reviewed soon.</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SnippetContent;
