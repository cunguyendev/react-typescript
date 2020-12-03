module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  modulePaths: ['src'],
  coverageDirectory: 'coverage',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: ['**/?(*.)test.{ts,tsx}'],
  setupFiles: ['./src/configs/setupTests.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/assetsTransformer.js',
    '\\.(css|scss)$': '<rootDir>/src/assetsTransformer.js',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/serviceWorker.ts',
    '!<rootDir>/src/configs/setupTests.ts',
  ],
  moduleDirectories: ['node_modules', 'src'],
};
