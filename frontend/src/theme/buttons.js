import { variant } from 'styled-system'

export const buttonDefaults = {
    backgroundColor: `dark`,
    border: 'none',
    borderRadius: `2px`,
    color: `light`,
    fontSize: `body`,
    height: `36px`,
    lineHeight: `36px`,
    padding: `0 16px`,
    boxShadow: `0 2px 2px 0 rgba(0, 0, 0, 0.14), 
                          0 3px 1px -2px rgba(0, 0, 0, 0.12), 
                          0 1px 5px 0 rgba(0, 0, 0, 0.2)`,
}

export const buttonStyles = {
    flat: {
        color: '#343434',
        boxShadow: 'none',
        backgroundColor: 'transparent',
        transition: 'background-color .2s',
    },
    block: {
        display: 'block',
    },
}

export const buttonSize = variant({
    prop: 'size',
    key: 'buttonSizes',
})

export const buttonSizes = {
    small: {
        height: '32.4px',
        lineHeight: '32.4px',
        fontSize: '13px',
    },
    large: {
        height: '54px',
        lineHeight: '54px',
        fontSize: '15px',
        padding: '0 28px',
    },
}
