const config = require('./jest-unit-config');

//define apenas os testes unitários
config.testMatch = ['**/*.spec.ts'];

module.exports = config;