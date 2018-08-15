module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    extends: [
        'plugin:vue/recommended',
    ],
    // required to lint *.vue files
    plugins: [
        'vue',
    ],
    // add your custom rules here
    rules: {
        indent: [
            'error',
            4,
        ],
        'comma-dangle': [
            'error',
            'always-multiline',
        ],
        semi: [
            'error',
            'always',
        ],
        'no-extra-semi': 'error',
        'quote-props': [
            'error',
            'as-needed',
        ],
        'vue/html-indent': [
            'error',
            4,
        ],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
};
