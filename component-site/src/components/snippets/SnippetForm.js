import React from "react";

const SnippetForm = () => {
  return (
    <form className="site-snippet-form">
      <select id="mySelect">
        <option>Navigation</option>
        <option>Button</option>
        <option>Layout</option>
      </select>
      <input type="text" placeholder="Enter Title" name="title" />
      <input type="text" placeholder="Enter Description" name="description" />
      <input type="text" placeholder="Enter Code" name="code" />
      <input
        type="submit"
        placeholder="Submit snippet"
        name="submit"
        value="Save snippet"
      />
    </form>
  );
};

export default SnippetForm;
