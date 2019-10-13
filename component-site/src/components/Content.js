import React from "react";
import SnippetContent from "./snippets/SnippetContent";
import SnippetButton from "./snippets/SnippetButton";

const Content = () => {
  return (
    <div className="site-content">
      <SnippetContent />
      <SnippetButton />
    </div>
  );
};

export default Content;
