const fs = require("fs");
const glob = require("glob");
const _ = require("lodash");

const srcFolder = "src/module";
const filePaths = glob.sync(`${srcFolder}/**/**/**/**/*.ts*`);

const pathToExport = filePaths
    .filter(
        path => path !== srcFolder + "/index.ts" &&
            path !== srcFolder + "/index.tsx" &&
            !path.startsWith(srcFolder + "/tests") &&
            !path.startsWith(srcFolder + "/test-utils") &&
            path !== srcFolder + "/main.js"
    ).map(filePath => {
        const file = fs.readFileSync(filePath).toString();
        let exports = [];
        exports.push(file.match(/export default \w+/g));
        exports = _.flatMap(exports)
            .filter(theExport => theExport)
            .map(theExport => theExport.split("export default")[1].trim());
        return (exports && exports.length > 0) ? {[filePath.split(srcFolder + "/")[1]]: exports} : null;
    })
    .filter(theExport => theExport)
    .reduce((objects, object) => ({...object, ...objects}), {});

const theExports = Object
    .keys(pathToExport)
    .map((filePath) => {
        return pathToExport[filePath]
            .map(name => `export {default as ${name}} from "./${filePath.replace(".tsx", "").replace(".ts", "")}";\n`)
            .reduce((strings, string) => strings + string);
    })
    .reduce((strings, string) => strings + string, "");

fs.writeFileSync(srcFolder + "/index.ts", theExports);
console.log("Exports has been updated.");