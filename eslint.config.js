// eslint.config.js

// Imports from plugins
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

export default [
  // Global ignores
  {
    ignores: ["dist/"],
  },

  // Base JavaScript configuration
  js.configs.recommended,

  // React-specific configuration
  {
    files: ["**/*.{js,jsx}"], // Target JS and JSX files

    // Plugins used in this configuration
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    
    languageOptions: {
      // Tell ESLint about JSX
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      // Define global variables for browser environment
      globals: {
        ...globals.browser,
      },
    },

    // The rules section
    rules: {
      // Apply recommended rules from plugins
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      
      // The specific rule for Vite's fast refresh
      "react-refresh/only-export-components": "warn",

      // Your custom "no-unused-vars" rule (optional, you can remove this if you want the default behavior)
      "no-unused-vars": "warn",

      // Turn off prop-types, as they are less common in modern React with TypeScript or hooks
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off", // Not needed with modern React
    },

    settings: {
        react: {
            version: "detect" // Automatically detect the React version
        }
    }
  },
];