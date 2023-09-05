import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
  return {
    collectCoverage: true,
    collectCoverageFrom: [
      "src/**",
      "!src/routes/*",
      "!src/models/**/*",
      "!src/examples/**/*",
      "!src/app.ts",
      "!src/server.ts",
    ],
    coverageDirectory: ".coverage",
    preset: "ts-jest",
    setupFiles: ["<rootDir>/tests/jest-config.ts"],
    testMatch: ["<rootDir>/tests/**/*.test.ts"],
    verbose: true,
  };
};