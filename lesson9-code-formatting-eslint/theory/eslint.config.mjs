import globals from "globals";
import pluginJs from "@eslint/js";
import airbnbBase from "eslint-config-airbnb-base";
import importPlugin from "eslint-plugin-import";

export default [
  {
    languageOptions: { globals: globals.browser },
    plugins: {
      import: importPlugin,
    },
    rules: {
      ...airbnbBase.rules,
      "semi": "error",
      "prefer-const": "error",
      "no-var": "error",
      "no-console": "warn",
      "eqeqeq": "error",
    }
  },
  pluginJs.configs.recommended,
];
