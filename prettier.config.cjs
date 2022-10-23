/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  singleQuote: true,
  printWidth: 150,
  tabWidth: 2,
  jsxSingleQuote: false,
  trailingComma: 'all',
};
