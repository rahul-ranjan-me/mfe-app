require("@babel/register")({
  presets: [require("@babel/preset-env").default],
});

const fs = require("fs");
const path = require("path");
const checkRequiredFiles = require("react-dev-utils/checkRequiredFiles");

const appRoutesPath = path.resolve(
  __dirname,
  "../src/appRoutesComponentConfig.js"
);

const manifestPath = path.resolve(__dirname, "../public/manifest.json");

if (!checkRequiredFiles([appRoutesPath, manifestPath])) {
  process.exit(1);
}

const { appRoutes, exposedComponents } = require(appRoutesPath);
const manifest = require(manifestPath);

fs.writeFile(
  manifestPath,
  JSON.stringify(
    {
      moduleName: manifest.moduleName,
      appRoutes,
      components: Object.keys(exposedComponents).map((key) => key),
    },
    null,
    2
  ),
  (error) => {
    if (error) {
      console.log("\x1b[31m%s\x1b[0m", "Failed to generate manifest.json\n");
      console.log(error);
      process.exit(1);
    } else {
      console.log(
        "\x1b[32m%s\x1b[0m",
        "manifest.json updated with app routes from 'src/appRoutesComponentConfig.js' \n"
      );
    }
  }
);
