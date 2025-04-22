module.exports = {
  locales: ["en"],
  defaultNamespace: "translation",
  output: "src/locales/$LOCALE.json",
  input: ["src/**/*.{js,jsx,ts,tsx}"],
  defaultValue: "",
  keySeparator: false,
  namespaceSeparator: false,
};
