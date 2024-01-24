"use client";

import React, { ChangeEvent, LegacyRef, MutableRefObject, useEffect, useRef, useState } from "react";
import useSize from "./useSize";
import { IoMdClose } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { TbResize } from "react-icons/tb";

const Terminal: React.FC = () => {
  const inputRef = useRef(null);
  const [input, setInput] = useState("");
  const [keys, setKeysPress] = useState<Array<string>>([""]);
  const [output, setOutput] = useState("Welcome to My Terminal!");
  const { isMobile, width, height } = useSize();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  // const handleKeyUp = (key: KeyboardEvent<HTMLTextAreaElement>) => {
  //   // if (key.repeat) return;
  //   console.log('f')
  //   setKeysPress((prev) => prev.splice(prev.indexOf(key.key)));
  //   if (key.key === "Enter") {
  //     // Handle the command and update the output
  //     console.log("here");
  //     handelparsser(input);
  //     setInput("");
  //   }
  // };
  // const shourtcuthandelr = (key: KeyboardEvent<HTMLTextAreaElement>) => {
  //   if (key.repeat) return;
  //   setKeysPress((recent) => {
  //     recent.push(key.key);
  //     return recent;
  //   });
  //   if (keys.length === 2) {
  //     // apply shortcut action
  //     console.log("applic short cut");
  //   }
  // };

  /**
   * clear , delete history, remove it
   */
  const forceCloseTerm = () => {};
  /**
   * isMobile [full <-> 80%] other ways [90% <-> 60%]
   */
  const resizeTerm = () => {};
  /**
   * save States, add it to open terminals list, hide it
   */
  const hideTerm = () => {};

  const handelparsser = (command: string) => {
    // Implement logic to process the command and update the output
    // For example, you can simulate a command execution for demonstration purposes
    handelexec(command);
  };
  const handelexec = (command: string) => {
    setOutput(`Command: ${command}`);
  };

  useEffect(() => {
      // inputRef.current.focus();
  }, []);

  return (
    <div className="min-w-[90%]">
      {/* {keys.length > 2 && (
        <div className="z-50 fixed  bg-red-400 border-l-purple-800 bg-transparent  min-h-screen min-w-full"></div>
      )} */}
      <header
        className={
          "flex justify-between bg-slate-500 text-center pr-3 pl-2 pb-0.5 mt-4 rounded-t"
        }
      >
        <div className="flex justify-between gap-4">
          <button onClick={forceCloseTerm}>
            <IoMdClose className="hover:bg-red-600 rounded" />
          </button>
          <button onClick={resizeTerm}>
            <TbResize className="hover:bg-gray-700 rounded " />
          </button>
          <button onClick={hideTerm}>
            <FaMinus className="hover:bg-green-400 rounded " />
          </button>
        </div>
        <code className="">termix</code>
        <kbd className=""> help</kbd>
      </header>
      <main className="w-full bg-black text-fuchsia-500">
        <code className="pt-2 pl-2">
          <input
            ref={inputRef}
            autoFocus
            className={"bg-inherit focus:outline-none"}
            name={`Terminal${1}`}
            onChange={handleInputChange}
            value={input}
            placeholder="tap to get helps ..."
            maxLength={1024}
          ></input>
          <textarea
            className={"bg-inherit focus:outline-none"}
            rows={height / 31}
            cols={width / 11}
            disabled
            // onKeyDown={shourtcuthandelr}
            // onKeyUp={handleKeyUp}
          />
        </code>
      </main>
    </div>
  );
};

export default Terminal;
