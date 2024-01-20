module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'off',
      { allowConstantExport: true },
    ],
    "indent": ['warn', 2],
    "quotes": ["off", "single"],
    "no-unused-vars": "warn", // Flag unused variables
    "react/prop-types": "warn", // Turn off prop type checking for functional components (if not using TypeScript)
    "react/react-in-jsx-scope": "off"
  },
}
