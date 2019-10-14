import React, { useState } from "react";
import MicroModal from "react-micro-modal";
import SnippetForm from "./SnippetForm";

const SnippetButton = () => {
  const [snippet, setSnippet] = useState([
    { state: "useState()", jsx: "<button></button>" }
  ]);
  const [editMode, setEditMode] = useState(false);

  return (
    <div>
      <button
        className="site-snippet-button"
        onClick={() => setEditMode(!editMode)}
      >
        New snippet
      </button>
      {snippet.map(item => {
        if (editMode) {
          return <SnippetForm />;
        }
      })}
    </div>
  );
};

export default SnippetButton;
