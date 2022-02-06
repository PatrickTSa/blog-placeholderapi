/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line @typescript-eslint/no-var-requires
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line @typescript-eslint/no-var-requires
// eslint-disable-next-line import/no-extraneous-dependencies
const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        baseUrl: "./src",
        /* tsConfigPath should point to the file where "baseUrl" and "paths" 
           are specified */
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
  ],
};
