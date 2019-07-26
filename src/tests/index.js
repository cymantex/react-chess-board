import React from "react";
import generateProps from "react-generate-props";
import {render} from "@testing-library/react";
import {mountComponents as baseMountComponents} from "smnrkssn/test-utils";
import path from "path";

export const mountComponents = ({
    pattern,
    filterComponents = Component => Component,
    renderer = (Component, props) => render(<Component {...props}/>)
}) => baseMountComponents(srcPath(pattern), {
    filterComponents,
    renderer,
    generateProps
});

export const srcPath = (linuxPath) => {
    return path.dirname(__dirname).replace(/\\/g, "/") + linuxPath;
};