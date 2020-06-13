module.exports = {
	roots: ["<rootDir>/src"],
	
	transform: {
		"^.+\\.tsx?$": "ts-jest"
	},

	setupFilesAfterEnv: [
		"@testing-library/jest-dom/extend-expect"
	],

	// Setup Enzyme
	// "snapshotSerializers": ["enzyme-to-json/serializer"],
	// "setupFilesAfterEnv": ["<rootDir>/src/setupEnzyme.ts"],
}