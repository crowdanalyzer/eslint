'use strict';

module.exports = {
    rules: {
        // enforce dot notation whenever possible
        'dot-notation': ['error', { allowKeywords: true }],

        // require the use of === and !==
        eqeqeq: ['error', 'always', { null: 'always' }],

        // disallow lexical declarations in case clauses
        'no-case-declarations': ['error'],

        // disallow the use of eval()
        'no-eval': ['error', { allowIndirect: false }],

        // disallow the use of eval()-like methods
        'no-implied-eval': ['error'],

        // disallow function declarations and expressions inside loop statements
        'no-loop-func': ['error'],

        // disallow new operators with the Function object
        'no-new-func': ['error'],

        // disallow unnecessary escape characters
        'no-useless-escape': ['error'],

        // Enforce that the functions should either always
        // return a value or does not return any value
        'consistent-return': 'error',

        // enforces consistent newlines before or after dots
        'dot-location': ['error', 'property'],

        // disallow empty destructuring patterns
        'no-empty-pattern': 'error',

        // disallow fallthrough behavior between switch cases if
        // they are having at least one statement
        'no-fallthrough': 'error',

        // disallow redundant `return await` statements
        'no-return-await': 'error',

    },
};
