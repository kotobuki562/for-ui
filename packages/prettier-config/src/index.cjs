module.exports = {
  trailingComma: 'es5',
  printWidth: 120,
  singleQuote: true,
  plugins: [
    // for prettifying shellscript, Dockerfile, properties, gitignore, dotenv
    require('prettier-plugin-sh'),
  ],
};
