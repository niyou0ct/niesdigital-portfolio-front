module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: "./tsconfig.json",
    useJSXTextNode: true
  },
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
    "plugin:prettier/recommended"
  ],
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  env: {
    browser: true,
    jasmine: true,
    jest: true,
    node: true,
    es5: true
  },
  rules: {
    "import/no-unresolved": "off",
    "react/jsx-filename-extension": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "no-underscore-dangle": "off",
    'class-methods-use-this': 'off',
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-props-no-spreading": "off",
    "import/extensions": "off",
    "no-console": "off",
    "no-alert": "off",
    "@typescript-eslint/no-unused-vars": "off"
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true
  }
};