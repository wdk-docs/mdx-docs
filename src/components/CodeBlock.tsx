"use client";

import { CodeBlock, dracula } from "react-code-blocks";

export default function MyCodeBlock({ code, language, showLineNumbers, startingLineNumber }: any) {
  return (
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      startingLineNumber={startingLineNumber}
      theme={dracula}
    />
  );
}
