import { Problem } from "../types/problem";

const starterCodeValidParentheses = `def isValid(s):
    # Write your code here
    pass
`;

const handlerValidParentheses = async (pyodide: any, userCode: string) => {
  try {
    const testCases = [
      { input: "()",      expected: true  },
      { input: "()[]{}",  expected: true  },
      { input: "(]",      expected: false },
      { input: "([)]",    expected: false },
      { input: "{[]}",    expected: true  },
      { input: "",        expected: true  },
      { input: "[",       expected: false },
    ];

    for (const tc of testCases) {
      const testCode = `
${userCode}

result = isValid(${JSON.stringify(tc.input)})
result
      `;

      const result = await pyodide.runPythonAsync(testCode);

      if (result !== tc.expected) {
        return false;
      }
    }

    return true;
  } catch (error: any) {
    console.log("Python isValid handler error");
    return false;
  }
};

export const validParentheses: Problem = {
  id: "valid-parentheses",
  title: "2. Valid Parentheses (Python)",
  problemStatement: `
<p class='mt-3'>
Given a string <code>s</code> containing just the characters 
<code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, 
<code>'['</code> and <code>']'</code>, determine if the input string is <strong>valid</strong>.
</p>
<p class='mt-3'>An input string is valid if:</p>
<ul class='mt-3'>
  <li class='mt-2'>Open brackets must be closed by the <strong>same type</strong> of brackets.</li>
  <li class='mt-2'>Open brackets must be closed in the <strong>correct order</strong>.</li>
  <li class='mt-2'>Every close bracket has a corresponding open bracket of the <strong>same type</strong>.</li>
</ul>
`,
  examples: [
    {
      id: 1,
      inputText: 's = "()"',
      outputText: "True",
      explanation: "The opening bracket is closed by the same type of closing bracket.",
    },
    {
      id: 2,
      inputText: 's = "()[]{}"',
      outputText: "True",
      explanation: "All brackets are closed in the correct order.",
    },
    {
      id: 3,
      inputText: 's = "(]"',
      outputText: "False",
      explanation: "The opening bracket '(' is closed by a different type ']'.",
    },
    {
      id: 4,
      inputText: 's = "([)]"',
      outputText: "False",
      explanation: "Brackets are not closed in the correct order.",
    },
    {
      id: 5,
      inputText: 's = "{[]}"',
      outputText: "True",
      explanation: "All brackets are properly nested and closed.",
    },
  ],
  constraints: `
<li class='mt-2'><code>0 ≤ s.length ≤ 10⁴</code></li>
<li class='mt-2'><code>s</code> consists of parentheses only: <code>'()[]{}'</code></li>
`,
  handlerFunction: handlerValidParentheses,
  starterCode: starterCodeValidParentheses,
  order: 2,
  starterFunctionName: "def isValid(",
};