import React from "react";
import {PieceTheme} from "../utils/types";

const svgProps = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "1 0 50 50"
};

export const cardinal: PieceTheme = {
    "black pawn": () => (
        <svg {...svgProps}>
            <defs>
                <linearGradient
                    id="a"
                    x1="4127.2"
                    x2="4235.7"
                    y1="-2558.3"
                    y2="-2558.3"
                    gradientTransform="matrix(.26749 0 0 .26799 -1093.5 713.11)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#3c3c3c"/>
                    <stop offset="1"/>
                </linearGradient>
                <filter id="b" colorInterpolationFilters="sRGB">
                    <feFlood
                        floodColor="#000"
                        floodOpacity="0.498"
                        result="flood"
                    />
                    <feComposite
                        in="flood"
                        in2="SourceGraphic"
                        operator="in"
                        result="composite1"
                    />
                    <feGaussianBlur
                        in="composite1"
                        result="blur"
                        stdDeviation="0.3"
                    />
                    <feOffset dx="1" dy="1" result="offset"/>
                    <feComposite
                        in="SourceGraphic"
                        in2="offset"
                        result="composite2"
                    />
                </filter>
            </defs>
            <path
                fill="url(#a)"
                stroke="#e6e6e6"
                strokeLinecap="square"
                strokeLinejoin="round"
                strokeWidth="1.1"
                d="M25.019 43.45H11.58c-2.466-5.724 4.072-11.03 8.668-12.832-5.493-3.074-2.515-10.911 2.192-11.547-1.12-.742-1.681-2.327-1.681-3.6 0-1.06.448-2.013 1.233-2.755.785-.742 1.793-1.166 3.026-1.166 1.121 0 2.13.424 3.026 1.166.785.742 1.233 1.696 1.233 2.756 0 1.272-.56 2.857-1.681 3.599 5.156 2.014 7.012 9.427 2.193 11.547 6.276 2.226 10.685 7.85 8.667 12.832z"
                className="st31"
                filter="url(#b)"
            />
        </svg>
    ),
    "black knight": () => (
        <svg {...svgProps}>
            <defs>
                <linearGradient
                    id="prefix__a"
                    x1={-455.39}
                    x2={-419.41}
                    y1={-338.23}
                    y2={-338.23}
                    gradientTransform="matrix(1.0008 0 0 1.0001 462.75 363.26)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#3c3c3c" offset={0} />
                    <stop offset={1} />
                </linearGradient>
                <filter id="prefix__b" colorInterpolationFilters="sRGB">
                    <feFlood floodColor="#000" floodOpacity={0.498} result="flood" />
                    <feComposite
                        in="flood"
                        in2="SourceGraphic"
                        operator="in"
                        result="composite1"
                    />
                    <feGaussianBlur in="composite1" result="blur" stdDeviation={0.6} />
                    <feOffset dx={1.6} dy={1.4} result="offset" />
                    <feComposite in="SourceGraphic" in2="offset" result="composite2" />
                </filter>
            </defs>
            <path
                d="M18.474 30.285c2.103-1.198 3.325-1.183 5.467-2.2.224 7.426-9.909 7.457-8.093 15.362l26.426.003S45.372 11.176 25.48 9.824c0 0-1.915-3.605-3.928-3.25 0 0-1.066.838-.458 3.207l-2.306.746s-3.216-2.072-4.127-1.27c-.858.369 1.1 3.28 1.878 3.986-.79 1.142-8.549 12.109-8.967 15.682-.267 2.277 2.023 3.518 3.719 4.12a11.91 11.91 0 001.737.476c1.426-.256 3.345-2.038 5.448-3.236z"
                fill="url(#prefix__a)"
                filter="url(#prefix__b)"
                stroke="#e6e6e6"
                strokeWidth={1.1}
            />
            <path
                d="M23.941 28.086s4.433-1.867 4.224-5.835"
                fill="none"
                stroke="#e6e6e6"
                strokeLinecap="round"
                strokeWidth={1.1}
            />
            <path
                d="M19.104 18.473s.594-1.846 3.453-2.294"
                stroke="#e6e6e6"
                strokeLinecap="round"
                strokeWidth={1.4}
            />
            <ellipse
                cx={21.027}
                cy={18.001}
                rx={1.242}
                ry={1.168}
                fill="#e6e6e6"
                paintOrder="markers fill stroke"
            />
            <path
                d="M9.17 29.241s.254-.682.924-1.118"
                fill="#fff"
                stroke="#e6e6e6"
                strokeLinecap="round"
                strokeWidth={1.4}
            />
            <path
                d="M11.64 32.283c.69-.887 1.583-1.319 2.384-1.957"
                fill="#fff"
                stroke="#e6e6e6"
                strokeLinecap="round"
                strokeWidth={1.2}
            />
            <path
                d="M30.806 14.872c4.305 2.633 8.46 9.25 8.11 26.08"
                fill="none"
                stroke="#e6e6e6"
                strokeLinejoin="round"
                strokeWidth={1.4}
            />
        </svg>
    ),
    "black bishop": () => (
        <svg {...svgProps}>
            <defs>
                <filter id="prefix__c" colorInterpolationFilters="sRGB">
                    <feGaussianBlur result="blur" stdDeviation="0.01 0.01" />
                </filter>
                <filter id="prefix__b" colorInterpolationFilters="sRGB">
                    <feFlood floodColor="#000" floodOpacity={0.498} result="flood" />
                    <feComposite
                        in="flood"
                        in2="SourceGraphic"
                        operator="in"
                        result="composite1"
                    />
                    <feGaussianBlur in="composite1" result="blur" stdDeviation={0.3} />
                    <feOffset dx={1} dy={1} result="offset" />
                    <feComposite in="SourceGraphic" in2="offset" result="composite2" />
                </filter>
                <linearGradient
                    id="prefix__a"
                    x1={13197}
                    x2={13341}
                    y1={-9591.1}
                    y2={-9591.1}
                    gradientTransform="translate(-3485.7 2562.6) scale(.26458)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#3c3c3c" offset={0} />
                    <stop offset={1} />
                </linearGradient>
            </defs>
            <path
                d="M25 6.55c-.878 0-1.654.29-2.261.903-.641.612-.946 1.321-.946 2.159 0 1.225.574 2.127 1.756 2.74-2.97 3.285-8.708 5.821-8.811 10.827.01 2.675 1.466 4.764 3.308 6.8l-1.114 5.833c1.697.542 3.09.942 4.827 1.128-3.882 4.576-10.787-1.74-15.209 2.933l2.33 3.577c5.593-3.962 13.375 3.673 16.12-3.962 2.746 7.635 10.528 0 16.12 3.962l2.33-3.577c-4.422-4.673-11.327 1.643-15.209-2.933 1.738-.186 3.13-.586 4.828-1.128l-1.115-5.833c1.843-2.036 3.302-4.125 3.309-6.8-.103-5.006-5.842-7.542-8.811-10.828 1.181-.612 1.755-1.514 1.755-2.74 0-.837-.304-1.546-.945-2.158-.608-.612-1.384-.903-2.261-.903z"
                fill="url(#prefix__a)"
                filter="url(#prefix__b)"
                stroke="#e6e6e6"
                strokeLinejoin="round"
                strokeWidth={1.1}
            />
            <ellipse
                className="prefix__st15"
                transform="matrix(.33757 0 0 .32227 -893.33 122.14)"
                cx={2720.3}
                cy={-271.4}
                rx={16.3}
                ry={2.5}
                fill="#e6e6e6"
                filter="url(#prefix__c)"
            />
            <ellipse
                className="prefix__st15"
                cx={25}
                cy={9.612}
                rx={1.14}
                ry={1.147}
                fill="#e6e6e6"
            />
            <path
                d="M21.333 23.266h7.333M25 19.932v6.752"
                fill="none"
                stroke="#e6e6e6"
                strokeWidth={1.4}
            />
        </svg>
    ),
    "black queen": () => (
        <svg {...svgProps}>
            <defs>
                <filter id="prefix__c" colorInterpolationFilters="sRGB">
                    <feGaussianBlur result="blur" stdDeviation="0.01 0.01" />
                </filter>
                <filter id="prefix__b" colorInterpolationFilters="sRGB">
                    <feFlood floodColor="#000" floodOpacity={0.498} result="flood" />
                    <feComposite
                        in="flood"
                        in2="SourceGraphic"
                        operator="in"
                        result="composite1"
                    />
                    <feGaussianBlur in="composite1" result="blur" stdDeviation={0.3} />
                    <feOffset dx={1} dy={1} result="offset" />
                    <feComposite in="SourceGraphic" in2="offset" result="composite2" />
                </filter>
                <linearGradient
                    id="prefix__a"
                    x1={-71.637}
                    x2={-30.678}
                    y1={-83.325}
                    y2={-83.325}
                    gradientTransform="matrix(.97644 0 0 .99286 74.952 107.73)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#3c3c3c" offset={0} />
                    <stop offset={1} />
                </linearGradient>
            </defs>
            <path
                d="M24.994 6.549v0c-1.568.006-2.835 1.181-2.836 2.63.002 1.193.873 2.235 2.122 2.539-.688 4.45-1.967 9.726-2.634 14.112l-4.07-12.927c.968-.444 1.58-1.356 1.58-2.353 0-1.453-1.275-2.63-2.847-2.63s-2.847 1.177-2.847 2.63c.002 1.205.89 2.255 2.157 2.547l-.44 13.258-5.482-10.611c.951-.45 1.55-1.354 1.55-2.34 0-1.453-1.275-2.63-2.847-2.63-1.573 0-2.847 1.177-2.847 2.63 0 1.334 1.084 2.456 2.519 2.61l2.76 16.507 4.05 5.258-1.004 3.634c-.042.656 4.848 2.028 11.122 2.04 6.273-.012 11.164-1.384 11.122-2.04l-1.005-3.634 4.05-5.258 2.76-16.507c1.435-.154 2.519-1.276 2.52-2.61 0-1.453-1.275-2.63-2.847-2.63-1.573 0-2.847 1.177-2.847 2.63 0 .986.598 1.89 1.55 2.34l-5.484 10.61-.439-13.257c1.266-.292 2.155-1.342 2.157-2.547 0-1.453-1.275-2.63-2.847-2.63s-2.847 1.177-2.847 2.63c0 .997.612 1.909 1.58 2.353l-4.07 12.927c-.667-4.386-1.946-9.662-2.634-14.112 1.249-.304 2.12-1.346 2.122-2.54 0-1.448-1.268-2.623-2.836-2.629v0h-.011z"
                fill="url(#prefix__a)"
                filter="url(#prefix__b)"
                stroke="#e6e6e6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.1}
            />
            <ellipse
                className="prefix__st15"
                transform="matrix(.27914 0 0 .39063 -1289.4 1024)"
                cx={4708.7}
                cy={-2517.6}
                rx={32.126}
                ry={2.844}
                fill="#e6e6e6"
                filter="url(#prefix__c)"
            />
            <path
                d="M15.172 34.076s2.7-1.249 9.802-1.256c7.103-.01 9.801 1.256 9.801 1.256"
                fill="none"
                stroke="#e6e6e6"
                strokeLinejoin="round"
                strokeWidth={2}
                paintOrder="stroke fill markers"
            />
        </svg>
    ),
    "black rook": () => (
        <svg {...svgProps}>
            <defs>
                <linearGradient
                    id="prefix__a"
                    x1={4501.5}
                    x2={4594.6}
                    y1={-572.4}
                    y2={-572.4}
                    gradientTransform="matrix(.34208 0 0 .2837 -1530.8 187.39)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#3c3c3c" offset={0} />
                    <stop offset={1} />
                </linearGradient>
                <filter id="prefix__b" colorInterpolationFilters="sRGB">
                    <feFlood floodColor="#000" floodOpacity={0.498} result="flood" />
                    <feComposite
                        in="flood"
                        in2="SourceGraphic"
                        operator="in"
                        result="composite1"
                    />
                    <feGaussianBlur in="composite1" result="blur" stdDeviation={0.3} />
                    <feOffset dx={1} dy={1} result="offset" />
                    <feComposite in="SourceGraphic" in2="offset" result="composite2" />
                </filter>
            </defs>
            <path
                className="prefix__st14"
                d="M21.932 6.546V9.48h-4.091V6.892h-5.796v7.975l4.533 3.142v12.567l-3.85 2.486v5.213H9.658v5.179h30.682v-5.18h-3.068v-5.212l-3.85-2.486V18.043l4.532-3.211v-7.94h-5.796v2.587h-4.432V6.546H24.83z"
                fill="url(#prefix__a)"
                filter="url(#prefix__b)"
                stroke="#e6e6e6"
                strokeWidth={1.144}
                transform="matrix(1.0055 0 0 .9198 -.2 3.5)"
            />
            <path
                d="M18.8 31.4h11.998M18.8 20h11.998"
                fill="none"
                stroke="#e6e6e6"
                strokeWidth={1.4}
            />
        </svg>
    ),
    "black king": () => (
        <svg {...svgProps}>
            <defs>
                <filter id="prefix__c" colorInterpolationFilters="sRGB">
                    <feGaussianBlur result="blur" stdDeviation="0.01 0.01" />
                </filter>
                <filter id="prefix__b" colorInterpolationFilters="sRGB">
                    <feFlood floodColor="#000" floodOpacity={0.498} result="flood" />
                    <feComposite
                        in="flood"
                        in2="SourceGraphic"
                        operator="in"
                        result="composite1"
                    />
                    <feGaussianBlur in="composite1" result="blur" stdDeviation={0.6} />
                    <feOffset dx={1.6} dy={1.4} result="offset" />
                    <feComposite in="SourceGraphic" in2="offset" result="composite2" />
                </filter>
                <linearGradient
                    id="prefix__a"
                    x1={2986.4}
                    x2={3128.4}
                    y1={1623.8}
                    y2={1623.8}
                    gradientTransform="matrix(.27141 0 0 .27218 -804.81 -417.45)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#3c3c3c" offset={0} />
                    <stop offset={1} />
                </linearGradient>
            </defs>
            <path
                d="M23.283 5.55v3.238h-3.364v2.92h3.364v1.758c-3.368 2.127-2.996 5.74-2.996 5.74C9.278 10.69-.385 26.77 12.343 32.26v8.734c0 .95 5.667 2.456 12.657 2.456s12.657-1.506 12.657-2.456V32.26c12.728-5.49 3.066-21.569-7.943-13.053 0 0 .372-3.613-2.996-5.74v-1.758h3.364v-2.92h-3.364V5.551h-1.717z"
                fill="url(#prefix__a)"
                filter="url(#prefix__b)"
                strokeWidth={1.1}
                stroke="#e6e6e6"
            />
            <ellipse
                className="prefix__st15"
                transform="matrix(.30296 0 0 .37258 3.466 -8.825)"
                cx={71.077}
                cy={131.54}
                rx={32.126}
                ry={2.844}
                fill="#e6e6e6"
                filter="url(#prefix__c)"
            />
            <path
                d="M27.032 30.267c1.49-12.102 11.943-12.441 13.364-7.38 1.42 5.062-4.736 7.38-4.736 7.38s-4.875-.638-10.66-.638-10.66.638-10.66.638-6.156-2.318-4.735-7.38c1.42-5.06 11.874-4.722 13.364 7.38"
                fill="none"
                strokeWidth={1.4}
                stroke="#e6e6e6"
            />
        </svg>
    ),
    "white pawn": () => (
        <svg {...svgProps}>
            <defs>
                <linearGradient
                    id="gradient_white_pawn"
                    x1={4127.3}
                    x2={4235.7}
                    y1={-2558.4}
                    y2={-2558.4}
                    gradientTransform="matrix(.27677 0 0 .27555 -1132.3 731.96)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fff" offset={0} />
                    <stop stopColor="#e6e6e6" offset={1} />
                </linearGradient>
                <filter id="filter_white_pawn" colorInterpolationFilters="sRGB">
                    <feFlood floodColor="#000" floodOpacity={0.498} result="flood" />
                    <feComposite
                        in="flood"
                        in2="SourceGraphic"
                        operator="in"
                        result="composite1"
                    />
                    <feGaussianBlur in="composite1" result="blur" stdDeviation={0.3} />
                    <feOffset dx={1} dy={1} result="offset" />
                    <feComposite in="SourceGraphic" in2="offset" result="composite2" />
                </filter>
            </defs>
            <path
                className="prefix__st31"
                d="M25.024 43.401H11.119c-2.551-5.885 4.213-11.341 8.968-13.194-5.682-3.16-2.602-11.219 2.27-11.873-1.16-.763-1.74-2.393-1.74-3.7 0-1.09.463-2.072 1.275-2.834.812-.763 1.856-1.2 3.131-1.2 1.16 0 2.204.437 3.132 1.2.812.762 1.275 1.743 1.275 2.833 0 1.308-.58 2.938-1.74 3.701 5.336 2.07 7.257 9.693 2.27 11.873 6.494 2.289 11.056 8.072 8.968 13.194z"
                fill="url(#gradient_white_pawn)"
                filter="url(#filter_white_pawn)"
                stroke="#000"
                strokeLinecap="square"
                strokeLinejoin="round"
                strokeWidth={1.135}
                transform="matrix(.96658 0 0 .97245 .833 1.243)"
            />
        </svg>
    ),
    "white knight": () => (
        <svg {...svgProps}>
            <defs>
                <linearGradient
                    id="gradient_white_knight"
                    x1={-455.39}
                    x2={-419.41}
                    y1={-338.23}
                    y2={-338.23}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fcfcf8" offset={0} />
                    <stop stopColor="#e7e7e3" offset={1} />
                </linearGradient>
                <filter id="filter_white_knight" colorInterpolationFilters="sRGB">
                    <feFlood floodColor="#000" floodOpacity={0.498} result="flood" />
                    <feComposite
                        in="flood"
                        in2="SourceGraphic"
                        operator="in"
                        result="composite1"
                    />
                    <feGaussianBlur in="composite1" result="blur" stdDeviation={0.6} />
                    <feOffset dx={1.6} dy={1.4} result="offset" />
                    <feComposite in="SourceGraphic" in2="offset" result="composite2" />
                </filter>
            </defs>
            <path
                transform="matrix(1.0008 0 0 1.0001 462.75 363.26)"
                d="M-443.92-332.95c2.1-1.198 3.322-1.183 5.463-2.199.224 7.425-9.901 7.456-8.087 15.36l26.405.002s3.096-32.27-16.782-33.622c0 0-1.914-3.605-3.925-3.25 0 0-1.065.838-.457 3.207l-2.304.746s-3.214-2.072-4.124-1.27c-.858.37 1.098 3.28 1.876 3.986-.788 1.142-8.542 12.108-8.96 15.68-.266 2.277 2.021 3.518 3.716 4.119.964.341 1.736.476 1.736.476 1.425-.256 3.343-2.037 5.443-3.235z"
                fill="url(#gradient_white_knight)"
                filter="url(#filter_white_knight)"
                stroke="#000"
                strokeWidth={1.099}
            />
            <path
                d="M23.941 28.086s4.433-1.867 4.224-5.835"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeWidth={1.1}
            />
            <path
                d="M19.104 18.473s.594-1.846 3.453-2.294"
                stroke="#000"
                strokeLinecap="round"
                strokeWidth={1.4}
            />
            <ellipse
                cx={21.027}
                cy={18.001}
                rx={1.242}
                ry={1.168}
                paintOrder="markers fill stroke"
            />
            <path
                d="M9.17 29.241s.254-.682.924-1.118"
                fill="#fff"
                stroke="#000"
                strokeLinecap="round"
                strokeWidth={1.4}
            />
            <path
                d="M11.64 32.283c.69-.887 1.583-1.319 2.384-1.957"
                fill="#fff"
                stroke="#000"
                strokeLinecap="round"
                strokeWidth={1.2}
            />
            <path
                d="M30.806 14.872c4.305 2.633 8.46 9.25 8.11 26.08"
                fill="none"
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth={1.4}
            />
        </svg>
    ),
    "white bishop": () => (
        <svg {...svgProps}>
            <defs>
                <filter id="prefix__c" colorInterpolationFilters="sRGB">
                    <feGaussianBlur result="blur" stdDeviation="0.01 0.01" />
                </filter>
                <filter id="filter_white_bishop" colorInterpolationFilters="sRGB">
                    <feFlood floodColor="#000" floodOpacity={0.498} result="flood" />
                    <feComposite
                        in="flood"
                        in2="SourceGraphic"
                        operator="in"
                        result="composite1"
                    />
                    <feGaussianBlur in="composite1" result="blur" stdDeviation={0.3} />
                    <feOffset dx={1} dy={1} result="offset" />
                    <feComposite in="SourceGraphic" in2="offset" result="composite2" />
                </filter>
                <linearGradient
                    id="gradient_white_bishop"
                    x1={13197}
                    x2={13341}
                    y1={-9591}
                    y2={-9591}
                    gradientTransform="translate(-3485.7 2562.6) scale(.26458)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fff" offset={0} />
                    <stop stopColor="#e6e6e6" offset={1} />
                </linearGradient>
            </defs>
            <path
                d="M25 6.55c-.878 0-1.654.29-2.261.903-.641.612-.946 1.321-.946 2.159 0 1.225.574 2.127 1.755 2.74-2.969 3.285-8.707 5.821-8.81 10.827.007 2.675 1.466 4.764 3.308 6.8l-1.114 5.833c1.697.542 3.09.942 4.827 1.128-3.882 4.576-10.787-1.74-15.209 2.933l2.33 3.577c5.593-3.962 13.375 3.673 16.12-3.962 2.746 7.635 10.528.003 16.12 3.962l2.33-3.577c-4.422-4.673-11.327 1.643-15.209-2.933 1.738-.186 3.13-.586 4.828-1.128l-1.115-5.833c1.843-2.036 3.302-4.125 3.309-6.8-.103-5.006-5.842-7.542-8.811-10.828 1.181-.612 1.755-1.514 1.755-2.74 0-.837-.304-1.546-.945-2.158-.608-.613-1.384-.903-2.261-.903z"
                fill="url(#gradient_white_bishop)"
                filter="url(#filter_white_bishop)"
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth={1.1}
            />
            <ellipse
                className="prefix__st15"
                transform="matrix(.33757 0 0 .32227 -893.33 122.14)"
                cx={2720.3}
                cy={-271.4}
                rx={16.3}
                ry={2.5}
                filter="url(#prefix__c)"
            />
            <ellipse
                className="prefix__st15"
                cx={25}
                cy={9.611}
                rx={1.14}
                ry={1.147}
            />
            <path
                d="M21.333 23.266h7.333M25 19.932v6.752"
                fill="none"
                stroke="#000"
                strokeWidth={1.4}
            />
        </svg>
    ),
    "white queen": () => (
        <svg {...svgProps}>
            <defs>
                <filter id="prefix__c" colorInterpolationFilters="sRGB">
                    <feGaussianBlur result="blur" stdDeviation="0.01 0.01" />
                </filter>
                <filter id="prefix__b" colorInterpolationFilters="sRGB">
                    <feFlood floodColor="#000" floodOpacity={0.498} result="flood" />
                    <feComposite
                        in="flood"
                        in2="SourceGraphic"
                        operator="in"
                        result="composite1"
                    />
                    <feGaussianBlur in="composite1" result="blur" stdDeviation={0.3} />
                    <feOffset dx={1} dy={1} result="offset" />
                    <feComposite in="SourceGraphic" in2="offset" result="composite2" />
                </filter>
                <linearGradient
                    id="prefix__queen"
                    x1={-71.638}
                    x2={-30.679}
                    y1={-83.324}
                    y2={-83.324}
                    gradientTransform="matrix(.97643 0 0 .99287 74.952 107.73)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fff" offset={0} />
                    <stop stopColor="#e6e6e6" offset={1} />
                </linearGradient>
            </defs>
            <path
                d="M24.994 6.549v0c-1.568.006-2.835 1.181-2.836 2.63.002 1.193.873 2.235 2.122 2.539-.688 4.45-1.967 9.726-2.634 14.112l-4.07-12.927c.968-.444 1.58-1.356 1.58-2.354 0-1.452-1.275-2.63-2.847-2.63-1.572.001-2.847 1.178-2.847 2.63.002 1.206.89 2.256 2.157 2.548l-.44 13.258-5.482-10.611c.951-.45 1.55-1.354 1.55-2.34 0-1.453-1.275-2.63-2.847-2.63-1.573 0-2.847 1.177-2.847 2.63 0 1.334 1.084 2.456 2.519 2.61l2.76 16.507 4.05 5.258-1.005 3.634c-.042.656 4.849 2.027 11.122 2.04 6.274-.013 11.164-1.384 11.122-2.04l-1.004-3.634 4.05-5.258 2.76-16.507c1.435-.154 2.518-1.276 2.52-2.61 0-1.453-1.275-2.63-2.848-2.63-1.572 0-2.846 1.177-2.846 2.63 0 .986.598 1.89 1.55 2.34l-5.484 10.61-.439-13.257c1.266-.292 2.155-1.342 2.157-2.548 0-1.452-1.275-2.63-2.847-2.63-1.572.001-2.847 1.178-2.847 2.63 0 .998.612 1.91 1.58 2.354l-4.07 12.927c-.668-4.386-1.946-9.663-2.635-14.112 1.25-.304 2.121-1.346 2.123-2.54 0-1.448-1.268-2.623-2.836-2.629v0h-.011z"
                fill="url(#prefix__queen)"
                filter="url(#prefix__b)"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.1}
            />
            <ellipse
                className="prefix__st15"
                transform="matrix(.27914 0 0 .39063 -1289.4 1024.1)"
                cx={4708.7}
                cy={-2517.6}
                rx={32.126}
                ry={2.844}
                filter="url(#prefix__c)"
            />
            <path
                d="M15.172 34.076s2.7-1.249 9.802-1.256c7.103-.01 9.8 1.256 9.8 1.256"
                fill="none"
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth={2}
                paintOrder="stroke fill markers"
            />
        </svg>
    ),
    "white rook": () => (
        <svg {...svgProps}>
            <defs>
                <linearGradient
                    id="gradient_white_rook"
                    x1={4501.5}
                    x2={4594.6}
                    y1={-572.4}
                    y2={-572.4}
                    gradientTransform="matrix(.34208 0 0 .2837 -1530.8 187.39)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fff" offset={0} />
                    <stop stopColor="#e6e6e6" offset={1} />
                </linearGradient>
                <filter id="filter_white_rook" colorInterpolationFilters="sRGB">
                    <feFlood floodColor="#000" floodOpacity={0.498} result="flood" />
                    <feComposite
                        in="flood"
                        in2="SourceGraphic"
                        operator="in"
                        result="composite1"
                    />
                    <feGaussianBlur in="composite1" result="blur" stdDeviation={0.3} />
                    <feOffset dx={1} dy={1} result="offset" />
                    <feComposite in="SourceGraphic" in2="offset" result="composite2" />
                </filter>
            </defs>
            <path
                className="prefix__st14"
                d="M21.932 6.546V9.48h-4.091V6.892h-5.796v7.975l4.533 3.142v12.567l-3.85 2.486v5.213H9.658v5.179h30.682v-5.18h-3.068v-5.212l-3.85-2.486V18.043l4.532-3.211v-7.94h-5.796v2.587h-4.432V6.546H24.83z"
                fill="url(#gradient_white_rook)"
                filter="url(#filter_white_rook)"
                stroke="#010101"
                strokeWidth={1.144}
                transform="matrix(1.0055 0 0 .9198 -.137 3.505)"
            />
            <path
                d="M18.829 31.438h11.998M18.829 20.006h11.998"
                fill="none"
                stroke="#000"
                strokeWidth={1.4}
            />
        </svg>
    ),
    "white king": () => (
        <svg {...svgProps}>
            <defs>
                <filter id="prefix__c" colorInterpolationFilters="sRGB">
                    <feGaussianBlur result="blur" stdDeviation="0.01 0.01" />
                </filter>
                <filter id="filter_white_king" colorInterpolationFilters="sRGB">
                    <feFlood floodColor="#000" floodOpacity={0.498} result="flood" />
                    <feComposite
                        in="flood"
                        in2="SourceGraphic"
                        operator="in"
                        result="composite1"
                    />
                    <feGaussianBlur in="composite1" result="blur" stdDeviation={0.6} />
                    <feOffset dx={1.6} dy={1.4} result="offset" />
                    <feComposite in="SourceGraphic" in2="offset" result="composite2" />
                </filter>
                <linearGradient
                    id="gradient_white_king"
                    x1={2986.4}
                    x2={3128.4}
                    y1={1623.8}
                    y2={1623.8}
                    gradientTransform="matrix(.27141 0 0 .27218 -804.81 -417.45)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fff" offset={0} />
                    <stop stopColor="#e6e6e6" offset={1} />
                </linearGradient>
            </defs>
            <path
                d="M23.283 5.55v3.238h-3.364v2.92h3.364v1.758c-3.368 2.127-2.996 5.74-2.996 5.74C9.278 10.69-.385 26.77 12.343 32.26v8.734c0 .95 5.667 2.456 12.657 2.456s12.657-1.506 12.657-2.456V32.26c12.728-5.49 3.066-21.569-7.943-13.053 0 0 .372-3.613-2.996-5.74v-1.758h3.364v-2.92h-3.364V5.551h-1.717z"
                fill="url(#gradient_white_king)"
                filter="url(#filter_white_king)"
                strokeWidth={1.1}
                stroke="#000"
            />
            <ellipse
                className="prefix__st15"
                transform="matrix(.30296 0 0 .37258 3.466 -8.825)"
                cx={71.077}
                cy={131.54}
                rx={32.126}
                ry={2.844}
                filter="url(#prefix__c)"
            />
            <path
                d="M27.032 30.267c1.49-12.102 11.943-12.441 13.364-7.38 1.42 5.062-4.736 7.38-4.736 7.38s-4.875-.638-10.66-.638-10.66.638-10.66.638-6.156-2.318-4.735-7.38c1.42-5.06 11.874-4.722 13.364 7.38"
                fill="none"
                strokeWidth={1.4}
                stroke="#000"
            />
        </svg>
    ),
    "empty": () => <div/>
};