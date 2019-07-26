import React from "react";
import PropTypes from "prop-types";

export const BoardView = ({children, height, columns, style = {}, ...props}) => (
    <div
        style={{
            ...style,
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: `repeat(${columns}, ${height / columns}px)`
        }}
        className="chess-board"
        {...props}
    >{children}</div>
);

BoardView.propTypes = {
    columns: PropTypes.number.isRequired,
    height: PropTypes.number
};