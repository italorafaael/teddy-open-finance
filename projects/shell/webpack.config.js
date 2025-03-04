const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "shell",

  remotes: {
    home: "http://localhost:4201/remoteEntry.js",
    clientes: "http://localhost:4202/remoteEntry.js",
    "design-system": "http://localhost:4203/remoteEntry.js",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
