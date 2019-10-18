import React, { useContext, useState } from "react";
import { FormContext } from "../../contexts/FormContext";
import uuid from "uuid/v1";
import { useTransition, animated } from "react-spring";

const SnippetForm = ({ setForm }) => {
  const { handleSnippet, snippets } = useContext(FormContext);
  const [formSnippet, setFormSnippet] = useState({
    title: "",
    description: "",
    code: [{ lang: "", content: "", id: uuid() }],
    id: uuid()
  });

  const handleSubmit = e => {
    e.preventDefault();
    handleSnippet(formSnippet);
    setForm();
  };

  return (
    <form className="site-snippet-form" onSubmit={e => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Enter Title"
        name="title"
        onChange={e =>
          setFormSnippet({ ...formSnippet, title: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Enter Description"
        name="description"
        onChange={e =>
          setFormSnippet({
            ...formSnippet,
            description: e.target.value
          })
        }
      />
      <input
        id="mySelect"
        placeholder="Enter programming language (Javascript, C++, etc..)"
        name="language"
        onChange={e => handleTextareaChange(e)}
      />

      {/* TEXT AREA TILFØJER OBJEKTER I STEDET FOR AT OPDATERE */}
      <textarea
        name="code"
        placeholder="Enter Code"
        cols="30"
        rows="10"
        onChange={e =>
          setFormSnippet({
            ...formSnippet
          })
        }
      ></textarea>
      <div>
        <input
          type="submit"
          placeholder="Submit snippet"
          name="submit"
          value="Submit snippet"
        />
        <input
          type="submit"
          placeholder="Submit snippet"
          name="submit"
          value="Submit snippet"
        />
      </div>
    </form>
  );
};

export default SnippetForm;
