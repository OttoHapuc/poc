module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleDirectories: ["node_modules", "src"],
    tranform: {".+\\.ts$":"ts-jest"},
    testMatch: ["<rootDir>/test/*.(test|spec).ts"],
}