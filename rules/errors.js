'use strict';

module.exports = {
    rules: {
        // disallow assignment operators in conditional expressions
        'no-cond-assign': ['error', 'always'],

        // disallow constant expressions in conditions
        'no-constant-condition': ['error', { checkLoops: false }],

        // disallow duplicate arguments in function definitions
        'no-dupe-args': ['error'],

        // disallow duplicate keys in object literals
        'no-dupe-keys': ['error'],

        // disallow a duplicate case label
        'no-duplicate-case': ['error'],

        // disallow empty block statements
        'no-empty': ['error'],

        // disallow unnecessary boolean casts
        'no-extra-boolean-cast': ['error'],

        // disallow unnecessary semicolons
        'no-extra-semi': ['error'],

        // disallow unreachable code after return, throw, continue, and break statements
        'no-unreachable': ['error'],

        // disallow negating the left operand of relational operators
        'no-unsafe-negation': ['error'],

        // comparing something to itself is usually an error
        'no-self-compare': 'error',

        // detects a very likely to happen performance issues for awaiting inside loops
        'no-await-in-loop': 'error',

        // prevents empty slots in arrays
        'no-sparse-arrays': 'error',

        // prevents direct comparison with NaN
        'use-isnan': 'error',
    },
};
