import React, { useContext, useState } from "react";
import { FormContext } from "../../contexts/FormContext";
import uuid from "uuid/v1";
import { useTransition, animated } from "react-spring";

const SnippetForm = ({ setForm }) => {
  const { handleSnippet, snippets } = useContext(FormContext);
  const [show, setShow] = useState(false);
  const [formSnippet, setFormSnippet] = useState({
    title: "",
    description: "",
    code: [{ lang: "", content: "", id: uuid() }],
    id: uuid()
  });

  const transitions = useTransition(
    formSnippet.code,
    formSnippet.code.map(item => item.id),
    {
      from: { transform: "translate3d(0,-40px,0)", opacity: 0 },
      enter: { transform: "translate3d(0,0px,0)", opacity: 1 }
    }
  );

  const handleSubmit = e => {
    e.preventDefault();
    handleSnippet(formSnippet);
    setForm();
  };

  const handleInputs = e => {
    e.preventDefault();
    setFormSnippet({
      ...formSnippet,
      code: [...formSnippet.code, { lang: "", content: "", id: uuid() }]
    });
    setShow();
  };

  const textAreaChange = (id, e) => {
    setFormSnippet(formSnippet => ({
      ...formSnippet,
      code: formSnippet.code.map(area => {
        if (area.id === id) {
          return { ...area, content: e };
        } else {
          return area;
        }
      })
    }));
  };

  const langChange = (id, e) => {
    setFormSnippet(formSnippet => ({
      ...formSnippet,
      code: formSnippet.code.map(area => {
        if (area.id === id) {
          return { ...area, lang: e };
        } else {
          return area;
        }
      })
    }));
  };

  return (
    <form className="site-snippet-form" onSubmit={e => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Enter Title"
        name="title"
        required
        onChange={e =>
          setFormSnippet({
            ...formSnippet,
            title: e.target.value
          })
        }
      />
      <input
        type="text"
        placeholder="Enter Description"
        name="description"
        required
        onChange={e =>
          setFormSnippet({
            ...formSnippet,
            description: e.target.value
          })
        }
      />
      {transitions.map(({ item, key, props }) => {
        return item ? (
          <animated.div key={key} style={props} className="code-language">
            <input
              type="text"
              placeholder="Programming Language"
              name="description"
              required
              onChange={e => langChange(item.id, e.target.value)}
            />
            <textarea
              name=""
              required
              id=""
              cols="30"
              rows="10"
              onChange={e => textAreaChange(item.id, e.target.value)}
            ></textarea>
          </animated.div>
        ) : null;
      })}

      {/* {formSnippet.code.map(item => {
        return (
          <div className="code-language">
            <input
              type="text"
              placeholder="Programming Language"
              name="description"
              onChange={e => langChange(item.id, e.target.value)}
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              onChange={e => textAreaChange(item.id, e.target.value)}
            ></textarea>
          </div>
        );
      })} */}
      <div>
        <input
          type="submit"
          onClick={handleInputs}
          value="Add another code field"
        />
        <input type="submit" name="submit" value="Submit snippet" />
      </div>
    </form>
  );
};

export default SnippetForm;
