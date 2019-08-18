const { generateImportMapForProjectNodeModules } = require("@jsenv/node-module-import-map");
const fs = require('fs');
(async () => {
    const importMap = await generateImportMapForProjectNodeModules({
        projectPath: __dirname,
        writeImportMapFile: false,
    });
    importMap.imports['cc'] = "/test-page/cc/cc.js";
    importMap.imports['image-data-uri'] = "/node_modules/image-data-uri/lib/image-data-uri.js";
    importMap.imports['parse-data-url'] = "/node_modules/parse-data-url/index.js";
    importMap.imports['uri-js'] = "/node_modules/uri-js/dist/es5/uri.all.js";
    fs.writeFileSync('./importMap.json', JSON.stringify(importMap, undefined, 2));
})();