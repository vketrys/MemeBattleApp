module.exports = {
  testEnvironment: 'jsdom',
  preset: 'jest-expo',
  // globals: {
  //   "ts-jest": {
  //     babelConfig: true,
  //     tsconfig: {
  //       jsx: "react"
  //     }
  //   }
  // },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        babelConfig: true,
        tsconfig: {
          jsx: 'react',
        },
      },
    ],
  },
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.setup.js',
  ],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base)',
  ],
  coverageReporters: ['json-summary', 'text', 'lcov'],
  setupFiles: ['core-js'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 90,
    },
  },
};
