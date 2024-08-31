// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-unused-expressions": "off",
    "sort-imports": [
      "error",
      { ignoreCase: true, ignoreDeclarationSort: true },
    ],
    // this is for sorting imports
    "import/order": [
      "error",
      {
        groups: [
          ["external", "builtin"],
          "internal",
          ["sibling", "parent"],
          "index",
        ],
        // pathGroups: [
        //   {
        //     pattern: "@(react|react-native)",
        //     group: "external",
        //     position: "before",
        //   },
        //   {
        //     pattern: "@src/**",
        //     group: "internal",
        //   },
        // ],
        // pathGroupsExcludedImportTypes: ["internal", "react"],
        // "newlines-between": "always",
        // alphabetize: {
        //   order: "asc",
        //   caseInsensitive: true,
        // },
      },
    ],
  },
};
