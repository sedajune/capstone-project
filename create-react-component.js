import { mkdir, writeFile } from "fs/promises";
import path from "path";
import process from "node:process";

const jsxTemplate = (componentName) => `import React from 'react';

const ${componentName} = ({children, ...rest}) => {
	return <div {...rest}>{children}</div>
}

export default ${componentName};
`;

const readmeTemplate = (componentName) => `# ${componentName}

## How to use this component

................................................................

`;

// node create-react-component.js
// npx create-react-app

// API
// node create-react-component.js directory componentName
// node create-react-component.js atoms Button
// ->
// * out/atoms/Button/index.jsx
// * out/atoms/Button/README.md
const outFolder = "out";
// This function has to be called.
const createReactComponent = async (directoryName, componentName) => {
	const directory = path.join(outFolder, directoryName, componentName);
	const jsxFileName = path.join(directory, "index.jsx");
	const readmeFileName = path.join(directory, "README.md");
	// We can use "await" since this is an async function
	// CLI `mkdir -p`
	await mkdir(directory, { recursive: true });

	writeFile(jsxFileName, jsxTemplate(componentName))
		.then(() => {
			console.log(`Created file: ${jsxFileName}`);
		})
		.catch((error_) => {
			console.error(error_);
		});
	writeFile(readmeFileName, readmeTemplate(componentName))
		.then(() => {
			console.log(`Created file: ${readmeFileName}`);
		})

		.catch((error_) => {
			console.error(error_);
		});
};
// Read arguments from CLI
const [directoryName, componentName] = process.argv.slice(2);

// Add arguments to the create function
void createReactComponent(directoryName, componentName);
