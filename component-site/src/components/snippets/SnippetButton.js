import React, { useState } from "react";
import SnippetForm from "./SnippetForm";
import { useTransition, animated } from "react-spring";

const SnippetButton = () => {
  const [snippet, setSnippet] = useState([
    { state: "useState()", jsx: "<button></button>" }
  ]);

  const [show, setShow] = useState(false);
  const transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <div>
      <button className="site-snippet-button" onClick={() => setShow(!show)}>
        New snippet
      </button>
      {transitions.map(({ item, key, props }) => {
        if (show) {
          return (
            <animated.div key={key} style={props}>
              <SnippetForm />
            </animated.div>
          );
        }
      })}
    </div>
  );
};

export default SnippetButton;
