#!/usr/bin/env bash

rm -rf dist

if output=$(node ./scripts/updateExports.js); then
    tsc --build tsbuild.json
    cp -r package.json dist
    cp -r README.md dist
    cp -r LICENCE dist
fi