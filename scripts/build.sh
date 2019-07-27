#!/usr/bin/env bash

node updateExports.js
rm -rf dist
./node_modules/.bin/babel ./src/module --out-dir dist -s inline --copy-files
cp -r package.json dist
cp -r LICENCE dist
cp -r README.md dist