module.exports = {
  semi: false,            // No semicolons at the end of statements
  trailingComma: 'none',  // No trailing commas in arrays or objects
  singleQuote: true,      // Use single quotes for strings
  bracketSpacing: true,   // Add spaces inside object literals (e.g., { key: value })
  arrowParens: 'always',  // Always include parentheses around arrow function parameters
  tabWidth: 2,            // Use a tab width of 2 spaces
  parser: 'typescript',   // Use TypeScript parser for parsing code
  overrides: [
    {
      files: '*.css', // Apply different settings to CSS files
      options: {
        parser: 'css'        // Use the CSS parser for CSS files
      }
    }
  ]
}
