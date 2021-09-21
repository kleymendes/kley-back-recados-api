module.exports = {
    //arquivos que vão entrar no coverage
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    //diretorio onde vai ser colocado os arquivos dos relatórios de cobertura
    coverageDirectory: 'coverage',
    //diretorios que vão ser ignorados pelo coverage
    coveragePathIgnorePatters: [
        '\\\\node-modules\\\\',
        '<rootDir>/src/core/infra/data/database/migrations'
    ],
    //diretorio onde terá os testes

    roots: [
        '<rootDir>/tests'
    ],
    //o ambiente onde será rodado os testes
    testEnviroment: 'node',
    //transpila os teste de ts para js e roda
    transform: {
        '.+\\.ts$': 'ts-jest'
    },
};

