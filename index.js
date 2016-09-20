'use strict';

module.exports = {
    extends: [
        './rules/errors',
        './rules/best-practices',
        './rules/variables',
        './rules/stylistic-issues',
        './rules/ecmascript-6',
    ].map(require.resolve),

    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },

    env: {
        node: true,
        es6: true,
        mocha: true,
    },
};
