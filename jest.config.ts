// /** @type {import('ts-jest').JestConfigWithTsJest} **/
// export default {
//   testEnvironment: "node",
//   transform: {
//     "^.+.tsx?$": ["ts-jest",{}],
//     collectCoverage: true,
//     collectCoverageFrom: ['src/**/*.{ts,tsx}'],
//     coverageDirectory: 'coverage',
//     testEnvironment: 'jsdom',
//     setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
//   },
// };

export default {
  // preset: "ts-jest",
  // testEnvironment: "jest-environment-jsdom",
  // transform: {
  //   "^.+\\.tsx?$": "ts-jest",
  //   // process `*.tsx` files with `ts-jest`
  // },
  // moduleNameMapper: {
  //   "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__ mocks __/fileMock.js",
  // },
  preset:"ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv:["<rootDir>/setup-test.ts"],
  transform: {
      "^.+\\.tsx?$": "ts-jest" 
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)":"identity-obj-proxy",
      "\\.(gif|ttf|eot|svg|png|jpg|jpeg|webp)$": "<rootDir>/__mock__/fileMock.js"
  },
  collectCoverageFrom:[
    "src/**/*.{js,ts,jsx,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.{spec,test}.{js,ts,jsx,tsx}",
    "!**/node_modules/**",
    "!vite.config.ts",
    "!**/coverage/**"

  ]
};

