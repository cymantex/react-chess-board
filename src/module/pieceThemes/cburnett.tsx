import React from "react";
import {PieceTheme} from "../utils/types";

export const cburnett: PieceTheme = {
    "black pawn": () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
            <path
                d="M22 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38-1.95 1.12-3.28 3.21-3.28 5.62 0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    ),
    "black knight": () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
            <g
                opacity={1}
                fill={"none"}
                fillOpacity={1}
                fillRule={"evenodd"}
                stroke={"black"}
                strokeWidth={1.5}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                strokeMiterlimit={4}
                strokeDasharray={"none"}
                strokeOpacity={1}>
                <path
                    d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18"
                    fill="#000000"
                    stroke="#000000"
                />
                <path
                    d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10"
                    fill="#000000"
                    stroke="#000000"
                />
                <path
                    d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z"
                    fill="#ffffff"
                    stroke="#ffffff"
                />
                <path
                    d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z"
                    transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)"
                    fill="#ffffff"
                    stroke="#ffffff"
                />
                <path
                    d="M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49 32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L 37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5 L 24.55,10.4 z "
                    fill="#ffffff"
                    stroke="none"
                />
            </g>
        </svg>
    ),
    "black bishop": () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
            <g
                fill="none"
                fillRule="evenodd"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round">
                <g fill="#000" strokeLinecap="butt">
                    <path
                        d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2z"/>
                    <path
                        d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/>
                    <path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/>
                </g>
                <path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" stroke="#fff"
                      strokeLinejoin="miter"/>
            </g>
        </svg>
    ),
    "black queen": () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
            <g
                fill="0"
                fillRule="evenodd"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round">
                <g fill="#000" stroke="none">
                    <circle cx={6} cy={12} r={2.75}/>
                    <circle cx={14} cy={9} r={2.75}/>
                    <circle cx={22.5} cy={8} r={2.75}/>
                    <circle cx={31} cy={9} r={2.75}/>
                    <circle cx={39} cy={12} r={2.75}/>
                </g>
                <path
                    d="M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z"
                    strokeLinecap="butt"
                />
                <path
                    d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"
                    strokeLinecap="butt"
                />
                <path d="M11 38.5a35 35 1 0 0 23 0" fill="none" strokeLinecap="butt"/>
                <path
                    d="M11 29a35 35 1 0 1 23 0M12.5 31.5h20M11.5 34.5a35 35 1 0 0 22 0M10.5 37.5a35 35 1 0 0 24 0"
                    fill="none"
                    stroke="#fff"
                />
            </g>
        </svg>
    ),
    "black rook": () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
            <g
                fill="0"
                fillRule="evenodd"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path
                    d="M9 39h27v-3H9v3zM12.5 32l1.5-2.5h17l1.5 2.5h-20zM12 36v-4h21v4H12z"
                    strokeLinecap="butt"
                />
                <path d="M14 29.5v-13h17v13H14z" strokeLinecap="butt" strokeLinejoin="miter"/>
                <path
                    d="M14 16.5L11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z"
                    strokeLinecap="butt"
                />
                <path
                    d="M12 35.5h21M13 31.5h19M14 29.5h17M14 16.5h17M11 14h23"
                    fill="none"
                    stroke="#fff"
                    strokeWidth={1}
                    strokeLinejoin="miter"
                />
            </g>
        </svg>
    ),
    "black king": () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
            <g
                fill="none"
                fillRule="evenodd"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M22.5 11.63V6" strokeLinejoin="miter"/>
                <path
                    d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"
                    fill="#000"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                />
                <path
                    d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z"
                    fill="#000"
                />
                <path d="M20 8h5" strokeLinejoin="miter"/>
                <path
                    d="M32 29.5s8.5-4 6.03-9.65C34.15 14 25 18 22.5 24.5l.01 2.1-.01-2.1C20 18 9.906 14 6.997 19.85c-2.497 5.65 4.853 9 4.853 9"
                    stroke="#fff"
                />
                <path
                    d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0"
                    stroke="#fff"
                />
            </g>
        </svg>
    ),
    "white pawn": () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
            <path
                d="M22 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38-1.95 1.12-3.28 3.21-3.28 5.62 0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z"
                fill="#fff"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    ),
    "white knight": () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
            <g
                fill="none"
                fillRule="evenodd"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill="#fff"/>
                <path
                    d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"
                    fill="#fff"
                />
                <path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0z" fill="#000"/>
                <path
                    d="M14.933 15.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5z"
                    fill="#000"
                    strokeWidth="1.49997"
                />
            </g>
        </svg>
    ),
    "white bishop": () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
            <g
                fill="none"
                fillRule="evenodd"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round">
                <g fill="#fff" strokeLinecap="butt">
                    <path
                        d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2z"/>
                    <path
                        d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/>
                    <path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/>
                </g>
                <path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" strokeLinejoin="miter"/>
            </g>
        </svg>
    ),
    "white queen": () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
            <g
                fill="#fff"
                fillRule="evenodd"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path
                    d="M8 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM24.5 7.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM16 8.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM33 9a2 2 0 1 1-4 0 2 2 0 1 1 4 0z"/>
                <path
                    d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-14V25L7 14l2 12z"
                    strokeLinecap="butt"
                />
                <path
                    d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"
                    strokeLinecap="butt"
                />
                <path d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0" fill="none"/>
            </g>
        </svg>
    ),
    "white rook": () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
            <g
                fill="#fff"
                fillRule="evenodd"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path
                    d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5"
                    strokeLinecap="butt"
                />
                <path d="M34 14l-3 3H14l-3-3"/>
                <path d="M31 17v12.5H14V17" strokeLinecap="butt" strokeLinejoin="miter"/>
                <path d="M31 29.5l1.5 2.5h-20l1.5-2.5"/>
                <path d="M11 14h23" fill="none" strokeLinejoin="miter"/>
            </g>
        </svg>
    ),
    "white king": () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
            <g
                fill="none"
                fillRule="evenodd"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M22.5 11.63V6M20 8h5" strokeLinejoin="miter"/>
                <path
                    d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"
                    fill="#fff"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                />
                <path
                    d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z"
                    fill="#fff"
                />
                <path
                    d="M11.5 30c5.5-3 15.5-3 21 0M11.5 33.5c5.5-3 15.5-3 21 0M11.5 37c5.5-3 15.5-3 21 0"/>
            </g>
        </svg>
    ),
    "empty": () => <div/>
};