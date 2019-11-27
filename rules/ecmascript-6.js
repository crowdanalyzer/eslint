'use strict';

module.exports = {
    rules: {
        // require braces around arrow function bodies
        'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }],

        // require parentheses around arrow function arguments
        'arrow-parens': ['error', 'as-needed'],

        // enforce consistent spacing before and after the arrow in arrow functions
        'arrow-spacing': ['error', { before: true, after: true }],

        // disallow reassigning const variables
        'no-const-assign': ['error'],

        // disallow duplicate class members
        'no-dupe-class-members': ['error'],

        // disallow unnecessary constructors
        'no-useless-constructor': ['error'],

        // require let or const instead of var
        'no-var': ['error'],

        // require or disallow method and property shorthand syntax for object literals
        'object-shorthand': ['error', 'always', { avoidQuotes: true }],

        // require arrow functions as callbacks
        'prefer-arrow-callback': ['error'],

        // require const declarations for variables that are never reassigned after declared
        'prefer-const': ['error'],

        // require template literals instead of string concatenation
        'prefer-template': ['error'],

        // require or disallow spacing around embedded expressions of template strings
        'template-curly-spacing': ['error', 'never'],

        // prevent having a computed key that have an expression already evaluated to a string
        'no-useless-computed-key': 'error',

        // prevent useless renaming in destructuring
        'no-useless-rename': 'error',

        // prefer the usage of rest operator instead of using `arguments` in functions
        'prefer-rest-params': 'error',

        // prefer spread operator instead of `fn.apply()`, this rule respects the cases
        // when you need to change the context of `this`
        'prefer-spread': 'error',

        // prevent having spacing with spread operator
        'rest-spread-spacing': ['error', 'never'],

    },
};
