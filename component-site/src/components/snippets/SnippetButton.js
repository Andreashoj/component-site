import React, { useState } from "react";
import SnippetForm from "./SnippetForm";
import { useTransition, animated } from "react-spring";

const SnippetButton = () => {
  const [show, setShow] = useState(false);
  const transitions = useTransition(show, null, {
    from: { transform: "translate3d(0,40px,0)", opacity: 0 },
    enter: { transform: "translate3d(0,0px,0)", opacity: 1 },
    leave: { transform: "translate3d(0,40px,0)", opacity: 0 }
  });

  const setForm = () => {
    setShow(!show);
  };

  return (
    <div>
      <button className="site-snippet-button" onClick={setForm}>
        New snippet
      </button>
      {transitions.map(({ item, key, props }) => {
        return item ? (
          <animated.div key={key} style={props}>
            <SnippetForm setForm={setForm} />
          </animated.div>
        ) : null;
      })}
    </div>
  );
};

export default SnippetButton;
