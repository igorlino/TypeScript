/// <reference path='fourslash.ts' />

// @allowJs: true

// @Filename: /a.js
////const exportsAlias = exports;
////exportsAlias.f = function() {};
////module.exports = exportsAlias;

verify.codeFix({
    description: "Convert to ES6 module",
    newFileContent: `
export function f() { }
`,
});
