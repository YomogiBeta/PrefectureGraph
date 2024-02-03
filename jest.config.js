/** @type {import('ts-jest').JestConfigWithTsJest} */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // setupFiles: ["dotenv/config"],
};