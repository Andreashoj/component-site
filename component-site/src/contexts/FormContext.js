import React, { useState, createContext } from "react";
import uuid from "uuid/v1";

export const FormContext = createContext();

const FormContextProvider = props => {
  const [snippets, setSnippets] = useState([
    {
      category: "navigation",
      title: "Navigation Component",
      description:
        "A very nice navigation component that can be used across multiple sites",
      code: `<body> 
      <div class="container"> 
      </div>
  </body>`,
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