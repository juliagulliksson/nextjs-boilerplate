// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};
