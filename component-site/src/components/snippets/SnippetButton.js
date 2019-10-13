import React from "react";
import MicroModal from "react-micro-modal";
import SnippetForm from "./SnippetForm";

const SnippetButton = () => {
  return (
    <MicroModal
      containerStyles={{ maxWidth: "800px", backgroundColor: "#fafafa" }}
      trigger={handleOpen => (
        <button className="site-snippet-button" onClick={handleOpen}>
          New snippet
        </button>
      )}
      children={handleClose => (
        <div className="site-snippet-modal">
          <SnippetForm />
          <button className="site-snippet-button" onClick={handleClose}>
            Close!
          </button>
        </div>
      )}
    />
  );
};

export default SnippetButton;
