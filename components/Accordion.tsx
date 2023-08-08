"use client";
import { useState } from "react";

export default function Accordion({ name, content }) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className="bg-slate-100 border rounded-md p-4 my-2">
      <button
        style={{
          width: "100%",
          position: "relative",
          textAlign: "left",
          padding: "4px",
          border: "none",
          background: "transparent",
          outline: "none",
          cursor: "pointer",
        }}
        onClick={toggle}
        type="button"
      >
        <p>{name}</p>
      </button>
      <div
        className="bg-white py-2 px-4 my-4 rounded-md"
        style={{ display: isShowing ? "block" : "none" }}
      >
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
}
