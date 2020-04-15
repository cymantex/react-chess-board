import React from "react";
import {DndProvider, DndProviderProps} from "react-dnd";
import TouchBackend from "react-dnd-touch-backend";

export interface ChessBoardDndProviderProps {
    dndProviderProps?: DndProviderProps<any, any>
}

export const ChessBoardDndProvider: React.FC<ChessBoardDndProviderProps> = ({children, dndProviderProps}) => {
    const dndProps = dndProviderProps ? dndProviderProps : {
        backend: TouchBackend,
        options: {enableMouseEvents: true},
    };

    return (
        <DndProvider {...dndProps}>
            {children}
        </DndProvider>
    );
};