import React from "react";
import ParentComponent from "./components/ParentComponent";

const App = () => {
	return (
		<div className="container p-8 mx-auto mt-12">
			<h1 className="mb-8 text-3xl font-bold">My React App</h1>
			<ParentComponent />
		</div>
	);
};

export default App;
