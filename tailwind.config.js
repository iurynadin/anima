
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./*.html",
        "./src/**/*.{js,html}",
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: '1rem',
                '2xl': '2rem',
                '3xl': '4rem',
            },
            center: true,
        },
        extend: {
            colors: {
                offwhite: "#EBE1F9",
                paragraph: "#232225",
                cinza_69: "#696969",
                rosa_B5: "#B51E84",
                roxo_5B: "#5B2D82",
                vermelho_F0: "#F0483E",
                cinza_7A: "#7A6F66",
                azul_1E: "#1E4388",
                azul_06: "#0684C7"
            },
            fontFamily: {
                amsi_narw_light: "'AmsiProNarw Light'",
                amsi_narw_light_italic: "'AmsiProNarw Light Italic'",
                amsi_narw_regular: "'AmsiProNarw Regular'",
                amsi_narw_semibold: "'AmsiProNarw SemiBold'",
                amsi_narw_bold: "'AmsiProNarw Bold'",
                amsi_bold: "'AmsiPro Bold'",
            },
            backgroundImage: {
                hero: "url('/img/hero_video.webp')",
                'nossos-compromissos': "url('/img/bg-nossos-compromissos.webp')",
                'instituto-cta': "url('/img/bg-instituto-cta.webp')",
            },
            padding: {
                // hero_home: 'calc(calc(700 / 1366) * 100%)',
            },
            translate: {
                // shapeTop: 'calc(50vw + 250px)',
            },
            boxShadow: {
                /* slick_home: '0px 0px 19px 0px rgba(0,0,0,0.25)', */
            },
            height: {
                
            },
            width: {
                // titleSlide: 'calc(100% - 94px)'
            },
            inset: {
                // nb_child2: 'calc(50% - 10px)',
            },
            animation: {
                'fade-in': 'fadeIn 0.3s ease-out',
                'fade-out': 'fadeOut 0.2s ease-in',
                'scale-in': 'scaleIn 0.3s ease-out',
                'scale-out': 'scaleOut 0.2s ease-in',
                'slide-up': 'slideUp 0.4s ease-out',
                'bounce-soft': 'bounceSoft 2s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeOut: {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                scaleOut: {
                    '0%': { opacity: '1', transform: 'scale(1)' },
                    '100%': { opacity: '0', transform: 'scale(0.95)' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                bounceSoft: {
                    '0%, 100%': { transform: 'translateY(-5%)' },
                    '50%': { transform: 'translateY(0)' },
                }
            }
        },
        screens: {
            'xs': '480px',
            'sm': '600px',
            'md': '782px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1440px',
            '3xl': '1920px'
        }
    },
    plugins: [
        function({ addUtilities }) {
            addUtilities({
                '.full-bleed': {
                    width: '100vw',
                    marginLeft: 'calc(50% - 50vw)',
                    overflowX: 'hidden',
                },
            })
        }
    ],
};
