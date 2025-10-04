module.exports = {
  env: {
    // browser: false, // Set true if you also have frontend code here
    node: true,     // Enables Node.js global variables
    es2021: true,   // Enables ES2021 syntax (like optional chaining)
    jest: true,     // Enables Jest globals (for unit/integration tests)
  },
  extends: [
    "eslint:recommended",          // Basic recommended rules
    // "plugin:prettier/recommended", // Integrate Prettier (auto formatting)
  ],
  parserOptions: {
    ecmaVersion: "12", // Allows newest JS syntax
    sourceType: "module",  // Enable import/export
  },
  rules: {
    // ✅ Customisable rules — tweak to your liking
    "no-console": "warn",           // Allow console.log (useful for backend)
    "no-unused-vars": "error",
    "prefer-const": "warn",
  },
};
 