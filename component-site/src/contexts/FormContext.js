import React, { useState, createContext } from "react";

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
  </body>`
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
