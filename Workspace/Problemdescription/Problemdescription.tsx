"use client";

import React from "react";

interface Example {
  input: string;
  output: string;
  explanation?: string;
}

const ProblemDescription: React.FC = () => {
  const problem = {
    title: "Two Sum",
    difficulty: "Easy" as const,

    description: `Given a list of integers nums and an integer target,
return the indices of the two numbers such that they add up to target.

You may assume that:
• Each input has exactly one solution.
• You may not use the same element twice.
• You can return the answer in any order.

Implement the function:

def two_sum(nums, target):
    # Your code here
`,

    inputFormat: `nums: List[int]
target: int`,

    outputFormat: `Return a list containing two indices.`,

    examples: [
      {
        input: "nums = [2, 7, 11, 15]\ntarget = 9",
        output: "[0, 1]",
        explanation: "Because nums[0] + nums[1] == 9"
      },
      {
        input: "nums = [3, 2, 4]\ntarget = 6",
        output: "[1, 2]"
      }
    ],

    constraints: [
      "2 ≤ len(nums) ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Exactly one valid answer exists."
    ]
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-600 text-white";
      case "Medium":
        return "bg-amber-600 text-white";
      case "Hard":
        return "bg-red-600 text-white";
      default:
        return "bg-gray-600 text-white";
    }
  };

  return (
    <div className="h-screen overflow-y-auto px-8 py-6 space-y-6 text-white">

      {/* Title */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">
          🧩 Problem: {problem.title}
        </h2>

        <span
          className={`inline-block px-3 py-1 rounded-md text-sm font-medium ${getDifficultyColor(
            problem.difficulty
          )}`}
        >
          {problem.difficulty}
        </span>
      </div>

      {/* Description */}
      <div className="text-gray-300 whitespace-pre-line">
        {problem.description}
      </div>

      {/* Input Format */}
      <div>
        <h3 className="text-lg font-semibold mt-4">📥 Input Format</h3>
        <div className="rounded-lg bg-gray-800 p-4 text-sm mt-2 whitespace-pre-line">
          {problem.inputFormat}
        </div>
      </div>

      {/* Output Format */}
      <div>
        <h3 className="text-lg font-semibold mt-4">📤 Output Format</h3>
        <div className="rounded-lg bg-gray-800 p-4 text-sm mt-2 whitespace-pre-line">
          {problem.outputFormat}
        </div>
      </div>

      {/* Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold mt-4">🧪 Examples</h3>

        {problem.examples.map((example, index) => (
          <div
            key={index}
            className="rounded-lg bg-amber-700 p-4 text-sm whitespace-pre-line"
          >
            {`Input:
${example.input}

Output:
${example.output}`}
            {example.explanation && `

Explanation:
${example.explanation}`}
          </div>
        ))}
      </div>

      {/* Constraints */}
      <div>
        <h3 className="text-lg font-semibold mt-4">⚠ Constraints</h3>
        <ul className="list-disc list-inside space-y-1 mt-2 text-sm text-gray-300">
          {problem.constraints.map((constraint, index) => (
            <li key={index}>{constraint}</li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default ProblemDescription;