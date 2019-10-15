import React, { useContext } from "react";
import SnippetCode from "./SnippetCode";
import { FormContext } from "../../contexts/FormContext";
import { useTransition, animated } from "react-spring";

const Navigation = () => {
  const { snippets, setSnippets } = useContext(FormContext);

  const transitions = useTransition(snippets, snippets.map(item => item.id), {
    from: { transform: "translate3d(0,-40px,0)" },
    enter: { transform: "translate3d(0,0px,0)" }
  });

  return (
    <div className="snippet-container snippet-nav">
      {snippets.map(snippet => {
        return (
          <div className="snippet-content" key={snippet.id}>
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
