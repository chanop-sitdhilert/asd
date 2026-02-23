"use client";

import React, { useState, useEffect, useRef } from "react";
import PreferenceNav from "./PreferenceNav/PrefernceNav";
import ReactCodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { python } from "@codemirror/lang-python";
import Split from "react-split";
import Editorfooter from "./Editorfooter";

type PlaygroundProps = {};

const starterCode = `def two_sum(nums, target):
    # Write your code here
    pass
`;

const Playground: React.FC<PlaygroundProps> = () => {
  const [code, setCode] = useState<string>(starterCode);
  const [activeCase, setActiveCase] = useState<number>(1);
  const [output, setOutput] = useState<string>("");
  const pyodideRef = useRef<any>(null);

  useEffect(() => {
    const loadPyodide = async () => {
      const pyodide = await (window as any).loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/",
      });
      pyodideRef.current = pyodide;
    };
    loadPyodide();
  }, []);

  const testCases = [
    {
      input: "nums: [2,7,11,15], target: 9",
      output: "[0,1]",
    },
    {
      input: "nums: [3,2,4], target: 6",
      output: "[1,2]",
    },
    {
      input: "nums: [3,3], target: 6",
      output: "[0,1]",
    },
  ];

  const handleSubmit = async () => {
    if (!pyodideRef.current) {
      setOutput("Pyodide is still loading, please wait...");
      return;
    }

    try {
      pyodideRef.current.runPython(`
import sys
import io
sys.stdout = io.StringIO()
      `);

      pyodideRef.current.runPython(code);

      const result = pyodideRef.current.runPython(`sys.stdout.getvalue()`);
      setOutput(result || "No output");
    } catch (error: any) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col bg-dark-layer-1 relative h-screen">
      <PreferenceNav />

      <Split
        className="h-[calc(100vh-94px)]"
        direction="vertical"
        sizes={[60, 40]}
        minSize={60}
      >
        {/* Editor Section */}
        <div className="w-full overflow-auto">
          <ReactCodeMirror
            value={code}
            theme={vscodeDark}
            extensions={[python()]}
            style={{ fontSize: 16 }}
            onChange={(value) => setCode(value)}
          />
        </div>

        {/* Testcase Section */}
        <div className="w-full px-5 overflow-auto">
          <div className="flex h-10 items-center space-x-6">
            <div className="relative flex h-full flex-col justify-center cursor-pointer">
              <div className="text-base font-medium leading-5 text-white">
                Testcase
              </div>
              <hr className="absolute bottom-0 h-0.5 w-16 rounded-full border-none bg-white" />
            </div>
          </div>

          <div className="flex flex-col">
            {/* Cases Row */}
            <div className="flex gap-2 mt-2 text-white">
              {testCases.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setActiveCase(index + 1)}
                  className={`font-medium inline-flex items-center rounded-lg px-4 py-1 cursor-pointer ${
                    activeCase === index + 1
                      ? "bg-gray-600"
                      : "bg-gray-500 hover:bg-gray-600"
                  }`}
                >
                  Case{index + 1}
                </div>
              ))}
            </div>

            {/* Input / Output */}
            <div className="font-semibold mt-4">
              <p className="text-base font-medium text-white">Input:</p>

              <div className="w-full rounded-lg px-4 py-3 mt-2 bg-[#3a3a3a] text-white font-mono text-sm">
                {testCases[activeCase - 1].input}
              </div>

              <p className="text-base font-medium mt-6 text-white">
                Expected Output:
              </p>

              <div className="w-full rounded-lg px-4 py-3 mt-2 bg-[#3a3a3a] text-white font-mono text-sm">
                {testCases[activeCase - 1].output}
              </div>

              <p className="text-base font-medium mt-6 text-white">Output:</p>
              <div className="w-full rounded-lg px-4 py-3 mt-2 bg-[#3a3a3a] text-white font-mono text-sm whitespace-pre-wrap">
                {output || "Run your code to see output"}
              </div>
            </div>
          </div>
        </div>
      </Split>

      <Editorfooter handleSubmit={handleSubmit} />
    </div>
  );
};

export default Playground;