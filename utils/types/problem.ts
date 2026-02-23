export type Example = {
	id: number;
	inputText: string;
	outputText: string;
	explanation?: string;
	img?: string;
};

export type Problem = {
	id: string;
	title: string;
	problemStatement: string;
	examples: Example[];
	constraints: string;
	order: number;
	starterCode: string;

	// UPDATED FOR PYTHON
	handlerFunction: (
		pyodide: any,
		userCode: string
	) => Promise<boolean>;

	starterFunctionName: string;
};