#!/usr/bin/env bash

if output=$(node ./scripts/updateVersion.js); then
    if output=$(./scripts/build.sh); then
        cd dist
        npm publish
    fi
fi