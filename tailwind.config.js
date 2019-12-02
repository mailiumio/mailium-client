module.exports = {
    theme: {
        extend: {
            spacing: {
                '120': '30rem',
                '256': '64rem',
            },
            colors: {
                'dark-faded': 'rgba(0,0,0, 0.6)',
            },
        },
        fontFamily: {
            sans: [
                'Avenir',
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'Roboto',
                'Helvetica Neue',
                'Arial',
                'Noto Sans',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol',
                'Noto Color Emoji',
            ],
        },
    },
    variants: {
        borderWidth: ['responsive', 'first', 'hover', 'focus'],
    },
    plugins: [
        require('tailwindcss-grid')({
            grids: [1, 2, 3, 4, 5, 6, 8, 10, 12],
            gaps: {
                0: '0',
                4: '1rem',
                8: '2rem',
                '4-x': '1rem',
                '4-y': '1rem',
            },
            autoMinWidths: {
                '0': '0',
                '16': '4rem',
                '24': '6rem',
                '300px': '300px',
            },
            variants: ['responsive'],
        }),
    ],
}
