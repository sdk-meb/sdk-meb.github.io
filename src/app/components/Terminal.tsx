"use client";

import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import useSize from "./useSize";

type  HTML_I_E = HTMLInputElement

const Terminal: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("Welcome to My Terminal!");
  const {isMobile}  = useSize()
  const handleInputChange = (e: ChangeEvent<HTML_I_E>) => {
    setInput(e.target.value);
  };
  const handleKeyDown = (e: KeyboardEvent<HTML_I_E>) => {
    if (e.key === "Enter") {
      // Handle the command and update the output
      handleCommand(input);
      setInput("");
    }
  };
  const handleCommand = (command: string) => {
    // Implement logic to process the command and update the output
    // For example, you can simulate a command execution for demonstration purposes
    setOutput(`Command: ${command}`);
  };
  return (
    <div className="w-">
        {isMobile && <div>'dghfdgdhdf'</div>}
      <pre>{output}</pre>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type a command..."
      />
    </div>
  );
};

export default Terminal;
