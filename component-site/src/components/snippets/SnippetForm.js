import React, { useContext, useState } from "react";
import { FormContext } from "../../contexts/FormContext";
import uuid from "uuid/v1";
import { useTransition, animated } from "react-spring";

const SnippetForm = () => {
  const { handleSnippet, snippets } = useContext(FormContext);
  const [formSnippet, setFormSnippet] = useState({
    category: "",
    title: "",
    description: "",
    code: "",
    id: uuid()
  });

  const handleSubmit = e => {
    e.preventDefault();
    handleSnippet(formSnippet);
  };

  return (
    <form className="site-snippet-form" onSubmit={e => handleSubmit(e)}>
      <select
        id="mySelect"
        onChange={e =>
          setFormSnippet({ ...formSnippet, category: e.target.value })
        }
      >
        <option>Navigation</option>
        <option>Button</option>
        <option>Layout</option>
      </select>
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
      <textarea
        name="code"
        placeholder="Enter Code"
        cols="30"
        rows="10"
        onChange={e => setFormSnippet({ ...formSnippet, code: e.target.value })}
      ></textarea>
      <input
        type="submit"
        placeholder="Submit snippet"
        name="submit"
        value="Submit snippet"
      />
    </form>
  );
};

export default SnippetForm;
