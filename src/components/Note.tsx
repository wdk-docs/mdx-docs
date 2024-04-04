type ReactNode = import("react").ReactNode;

type NoteType = "important" | "info" | "legacy";
interface Properties {
  type: NoteType;
  children: Readonly<ReactNode>;
}

import React from "react";

/** @type {Set<NoteType>} */
const known: Set<string> = new Set(["info", "legacy", "important"]);

/**
 * @param {Readonly<Properties>} properties
 *   Properties.
 * @returns {JSX.Element}
 *   Element.
 */
export function Note(properties: Properties): JSX.Element {
  const { children, type } = properties;
  const className = ["note"];

  if (known.has(type)) className.push(type);
  else {
    throw new Error("Unknown note type `" + type + "`");
  }

  //   return <div className={className.join(" ")}>{children}</div>;
  return (
    <div role="alert" className="alert alert-info">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="stroke-current shrink-0 w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <span>{children}</span>
    </div>
  );
}
