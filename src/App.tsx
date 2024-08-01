import React, { useState } from "react";

const App = () => {
	const [input, setInput] = useState("");
	const [result, setResult] = useState("");

	const handleClick = (value: string) => {
		console.log(value);
		console.log(input + value);
		setInput(input + value);
	};

	const clearInput = () => {
		setInput("");
		setResult("");
	};

	const calculateResult = () => {
		try {
			setResult(eval(input).toString());
		} catch (error) {
			setResult("Error");
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="p-6 bg-white rounded-lg shadow-lg w-80">
				<div className="mb-4">
					<input
						type="text"
						value={input}
						placeholder="0"
						className="w-full p-4 text-lg text-right border-b-2 border-gray-300 focus:outline-none"
						readOnly
					/>
					<div className="mt-2 text-right text-gray-500">{result}</div>
				</div>
				<div className="grid grid-cols-4 gap-2">
					{["7", "8", "9", "/"].map((char) => (
						<button
							key={char}
							onClick={() => handleClick(char)}
							className="p-4 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
						>
							{char}
						</button>
					))}
					{["4", "5", "6", "*"].map((char) => (
						<button
							key={char}
							onClick={() => handleClick(char)}
							className="p-4 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
						>
							{char}
						</button>
					))}
					{["1", "2", "3", "-"].map((char) => (
						<button
							key={char}
							onClick={() => handleClick(char)}
							className="p-4 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
						>
							{char}
						</button>
					))}
					{["0", ".", "=", "+"].map((char) => (
						<button
							key={char}
							onClick={() => (char === "=" ? calculateResult() : handleClick(char))}
							className={`p-4 text-lg font-semibold text-white ${
								char === "=" ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"
							} rounded focus:outline-none`}
						>
							{char}
						</button>
					))}
					<button
						onClick={clearInput}
						className="col-span-4 p-4 text-lg font-semibold text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none"
					>
						Clear
					</button>
				</div>
			</div>
		</div>
	);
};

export default App;
