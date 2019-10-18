import React, { useState, createContext } from "react";
import uuid from "uuid/v1";

export const FormContext = createContext();

const FormContextProvider = props => {
  const [snippets, setSnippets] = useState([
    {
      title: "Navigation Component",
      description:
        "A very nice navigation component that can be used across multiple sites",
      code: [
        {
          lang: "Javascript",
          content: `const transitions = useTransition(show, null, {
        from: { transform: "translate3d(0,-40px,0)", opacity: 0 },
        enter: { transform: "translate3d(0,0px,0)", opacity: 1 },
        leave: { transform: "translate3d(0,40px,0)", opacity: 0 }
      });`,
          id: uuid()
        },
        {
          lang: "Javascript",
          content: `const transitions = useTransition(show, null, {
        from: { transform: "translate3d(0,-40px,0)", opacity: 0 },
        enter: { transform: "translate3d(0,0px,0)", opacity: 1 },
        leave: { transform: "translate3d(0,40px,0)", opacity: 0 }
      });`,
          id: uuid()
        }
      ],
      id: uuid()
    }
  ]);

  const handleSnippet = snippet => {
    setSnippets([...snippets, snippet]);
  };

  return (
    <FormContext.Provider value={{ snippets, setSnippets, handleSnippet }}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
