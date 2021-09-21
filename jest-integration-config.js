const config = require('./jest-unit-config');

//define apenas os testes de integração
config.testMatch = ['**/*.test.ts'];

module.exports = config;