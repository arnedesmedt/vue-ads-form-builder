module.exports = {
    plugins: {
        autoprefixer: {},
        tailwindcss: './tailwind.config.js',
        '@fullhuman/postcss-purgecss': {
            content: ['./src/components/*.vue'],
            whitelistPatterns: [
                /^body$/,
                /^html$/,
                /^vue-ads-border*$/,
                /^hover:vue-ads-bg-orange-lighter$/,
            ],
        },
        'postcss-import': {},
        'postcss-url': {},
    },
};
