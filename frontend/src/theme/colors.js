import material from './helpers/material-colors'

const colors = {
    white: material.grey.m50,
    light: material.grey.m100,
    grey: {
        light: material.grey.m400,
        dark: material.grey.m600,
    },
    dark: material.grey.m800,
    black: material.grey.m900,
    primary: {
        base: material.lightBlue.m600,
        light: material.lightBlue.m500,
        dark: material.lightBlue.m700,
        lighter: material.lightBlue.m400,
        darker: material.lightBlue.m800,
    },
    secondary: {
        base: material.green.m300,
        light: material.green.m200,
        dark: material.green.m400,
        lighter: material.green.m100,
        darker: material.green.m500,
    },
    accent: {
        base: material.orange.a400,
        light: material.orange.a200,
        dark: material.orange.a700,
    },
    on: {
        primary: material.grey.m50,
        secondary: material.grey.m900,
        background: material.grey.m900,
        surface: material.grey.m900,
        error: material.grey.m50,
    },
    info: material.blue.m400,
    success: material.green.m400,
    warning: material.yellow.m400,
    error: material.red.m400,
    link: {
        base: material.blue.m500,
        visited: material.purple.m600,
        hover: material.grey.m800,
        focus: material.grey.m800,
        active: material.grey.m800,
    },
    text: material.grey.m900,
    text2: material.grey.m600,
    disabled: material.grey.m400,
    disabledDark: material.grey.m700,
    background: material.grey.m100,
    surface: material.grey.m50,
}

export default colors
