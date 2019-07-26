const fs = require("fs");
const glob = require("glob");
const _ = require("lodash");

const srcFolder = "src/module";
const filePaths = glob.sync(srcFolder + "/**/**/**/**/*.js");

const pathToExport = filePaths
    .filter(
        path => path !== srcFolder + "/index.js" &&
        !path.startsWith(srcFolder + "/tests") &&
        !path.startsWith(srcFolder + "/test-utils") &&
        path !== srcFolder + "/main.js"
    ).map(filePath => {
        const file = fs.readFileSync(filePath).toString();
        let exports = [];
        exports.push(file.match(/export const \w+ /g));
        exports.push(file.match(/export class \w+ /g));
        exports = _.flatMap(exports)
            .filter(theExport => theExport)
            .map(theExport => theExport.replace("class", "const"))
            .map(theExport => theExport.split("export const")[1].trim());
        return (exports && exports.length > 0) ? {[filePath.split(srcFolder + "/")[1]]: exports} : null
    })
    .filter(theExport => theExport)
    .reduce((objects, object) => ({...object, ...objects}));

const theImports = Object
    .keys(pathToExport)
    .map((filePath, i) => {
        return pathToExport[filePath]
            .map(name => `import {${name} as ${name}${i}} from "./${filePath}";\n`)
            .reduce((strings, string) => strings + string);
    }).reduce((strings, string) => strings + string);

const theExports = Object
    .keys(pathToExport)
    .map((filePath, i) => {
        return pathToExport[filePath]
            .map(name => `export const ${name} = ${name}${i};\n`)
            .reduce((strings, string) => strings + string);
    }).reduce((strings, string) => strings + string);

fs.writeFileSync(srcFolder + "/main.js", theImports + "\n" + theExports);
console.log("Exports has been updated.");