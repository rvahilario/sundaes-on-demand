module.exports = {
	clearMocks: true,
	collectCoverage: true,
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
	testEnvironment: 'jsdom',
	// testMatch: ['**/__tests__/**/?(*.)+(spec|test).[tj]s?(x)'],
	testPathIgnorePatterns: ['/node_modules', '/.next/'],
};
