import React from "react";
import {mountComponents} from "./index";

it("All components have propTypes and without crashing.", () => {
    mountComponents({pattern: "/**/**/**/*.js"});
});