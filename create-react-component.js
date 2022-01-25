import { mkdir } from "fs/promises";

// node create-react-component.js
// npx create-react-app

// API
// node create-react-component.js directory componentName
// node create-react-component.js atoms Button
// ->
// * out/atoms/Button/index.jsx
// * out/atoms/Button/README.md

// This function has to be called
const createReactComponent = async () => {
	// We can use "await" since this is an async function
	await mkdir("out/foo/bar");
};

void createReactComponent();
