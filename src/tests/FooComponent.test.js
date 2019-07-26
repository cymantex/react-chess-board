import React from "react";
import {render, fireEvent} from "@testing-library/react";
import {FooComponent} from "../module/FooComponent";

it("toggles between foo and bar", () => {
    const document = render(<FooComponent/>);
    expect(document.getByText("foo")).toBeInTheDocument();
    fireEvent.click(document.getByText("foo"));
    expect(document.getByText("bar")).toBeInTheDocument();
    fireEvent.click(document.getByText("bar"));
    expect(document.getByText("foo")).toBeInTheDocument();
});