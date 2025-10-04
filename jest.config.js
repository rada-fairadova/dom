module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapping: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js'
    }
  };