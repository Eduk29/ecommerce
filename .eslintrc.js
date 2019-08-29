module.exports = {
  extends: ["airbnb", "prettier", "prettier/react", "plugin:jest/recommended"],
  plugins: ["prettier"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false
      }
    ],
    "react/prop-types": 0,
    "no-underscore-dangle": 0,
    "import/imports-first": ["error", "absolute-first"],
    "import/prefer-default-export": 0,
    "import/newline-after-import": "error",
    "no-console": "off"
  },
  globals: {
    window: true,
    document: true,
    localStorage: true,
    FormData: true,
    FileReader: true,
    Blob: true,
    navigator: true
  },
  env: {
    browser: true,
    es6: true
  },
  parser: "babel-eslint"
};
