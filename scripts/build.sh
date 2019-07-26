#!/usr/bin/env bash

node updateExports.js
rm -rf dist
./node_modules/.bin/babel ./src/module --out-dir dist -s inline
cp -r package.json dist
cp -r LICENCE dist
cp -r README.md dist