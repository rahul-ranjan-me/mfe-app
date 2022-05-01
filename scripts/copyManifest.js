require("@babel/register")({
  presets: [require("@babel/preset-env").default],
});

const fs = require("fs");
const path = require("path");
const checkRequiredFiles = require("react-dev-utils/checkRequiredFiles");

const distDir = path.resolve(__dirname, "../dist");

const manifestPath = path.resolve(__dirname, "../public/manifest.json");

if (!checkRequiredFiles([appRoutesPath, manifestPath])) {
  console.log("\x1b[31m%s\x1b[0m", "manifest.json not found\n");
  process.exit(1);
}

fs.copyFile(manifestPath, `${distDir}/manifest.json`, (error) => {
  console.log(
    "\x1b[31m%s\x1b[0m",
    "Unable to copy manifest.json into bundle\n"
  );
  console.log(error)
  process.exit(1);
});
