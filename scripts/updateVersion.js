const fs = require("fs");

const packageJson = JSON.parse(fs.readFileSync("package.json"));
const versionTokens = packageJson.version.split(".");
const updatedVersion = versionTokens
    .map((versionToken, i) => i === versionTokens.length - 1 && versionTokens[i] !== 0
        ? (parseInt(versionTokens[i]) + 1).toString()
        : versionToken)
    .join(".");
packageJson.version = updatedVersion;

fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2));