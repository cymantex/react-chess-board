#!/usr/bin/env bash

rm -rf dist

if output=$(node ./scripts/updateExports.js); then
    if output=$(tsc --build tsbuild.json); then
        cp -r package.json dist
        cp -r README.md dist
        cp -r LICENCE dist
    fi
fi

echo $output