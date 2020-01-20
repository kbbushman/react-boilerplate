module.exports = {
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/test/jest/__mocks__/styleMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/testSetup.js'],
};
