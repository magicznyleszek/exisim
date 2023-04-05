module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  quoteProps: 'as-needed',
  bracketSpacing: false,
  arrowParens: 'always',
  endOfLine: 'lf',
  overrides: [
    {
      files: 'source/*.md',
      options: {
        parser: 'markdown',
        printWidth: 80,
        proseWrap: 'always'
      }
    }
  ]
};
