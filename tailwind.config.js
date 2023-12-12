module.exports = {
    theme: {
        fontFamily: {
            'gilroy-light': ['gilroy-light', 'sans-serif'],
            'gilroy-bold': ['gilroy-extrabold', 'sans-serif']
        },

        screens: {
            sm: '375px',
            md: '768px',
            lg: '1024px',
            xl: '1200px',
            xxl: '1440px',
            xxxl: '1920px'
        },

        extend: {
            colors: {
                transparent: 'transparent',
                secondary: '#39173E',
                black: '#000000',
                grey: '#F1F1F1',
                white: '#ffffff',
                success: '#00874f',
                error: '#e9041e',
                basalte: '#8a8279'
            },
            spacing: {
                '114': '28rem',
                '128': '32rem',
                '2000': '2000px'
            },
            cursor: {
                'none': 'none',
            }
        }
    },
    variants: {}
}
