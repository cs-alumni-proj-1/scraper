module.exports = {
  trailingComma: "none", // No trailing commas in arrays or objects
  bracketSpacing: true, // Add spaces inside object literals (e.g., { key: value })
  arrowParens: "always", // Always include parentheses around arrow function parameters
  tabWidth: 2, // Use a tab width of 2 spaces
  parser: "typescript", // Use TypeScript parser for parsing code
  overrides: [
    {
      files: "*.css", // Apply different settings to CSS files
      options: {
        parser: "css" // Use the CSS parser for CSS files
      }
    }
  ]
};
