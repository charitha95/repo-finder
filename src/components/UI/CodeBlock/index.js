import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

/**
 * Function represents codeblock component, uses on readme markdown
 * @param {Object} props Component Props 
 */
export default function CodeBlock({ language, value }) {

  return <SyntaxHighlighter language={language}>
    {value}
  </SyntaxHighlighter>

}
