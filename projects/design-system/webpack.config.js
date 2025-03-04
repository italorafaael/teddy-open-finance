const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "design-system",

  exposes: {
    "./Header":
      "./projects/design-system/src/app/components/header/header.component.ts",
    "./Sidebar":
      "./projects/design-system/src/app/components/sidebar/sidebar.component.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
