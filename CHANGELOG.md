# [3.0.0](https://github.com/crowdanalyzer/eslint/compare/v2.0.0...v3.0.0) (2020-04-12)


### Features

* add no-console rule ([#32](https://github.com/crowdanalyzer/eslint/issues/32)) ([c0c90ff](https://github.com/crowdanalyzer/eslint/commit/c0c90ff168b2d196ed24d9096b041b6a8694a3cf))


### BREAKING CHANGES

* If your code used to have `console` statements, now eslint will hate it.

# [2.0.0](https://github.com/crowdanalyzer/eslint/compare/v1.4.1...v2.0.0) (2019-11-27)


### Features

* [proposal] update ESLint rules ([#15](https://github.com/crowdanalyzer/eslint/issues/15)) ([02f70d1](https://github.com/crowdanalyzer/eslint/commit/02f70d11fe762ab0be347d8fe4b1f66ab570dbfa))


### BREAKING CHANGES

* Update ESLint rules
* Update peer depenedencies
* Restrict peer-deps max version

### Misc:
* chore: fix package.json `engine` -> `engines`
* chore: update library using sia v0.6.0

### Updates:

- Support ES9 options by setting the proper parser option
  ```js
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  ```

- **[AFX, CFL, PRF]** [`keyword-spacing`](https://eslint.org/docs/rules/keyword-spacing) - Enforce spacing after keywords except for `if` (for me, get a space after if normally)

  - Conflicts with our [react guide](https://github.com/crowdanalyzer/eslint-react/blob/bc84e3c64a5a509ec124dd7e69ca710007be415e/rules/stylistic-issues.js#L7)


  - Current style problems
  ```js
  // bad
  const{ prop } = obj;
  let[head] = arr;

  // good
  const { prop } = obj;
  let [head] = arr;
  ```

- **[AFX, NEW]** `no-multi-spaces` disallow multiple spaces other than indentation
  ```js
  // bad
  const x =    1;
  const x  = 1;

  // good
  const x = 1;
  ```

- **[AFX, NEW]** `no-trailing-spaces` have a consistent changes in files by disabling trailing spaces
  ```js
  // bad
  const·x·=·1;·

  // good
  const·x·=·1;
  ```

- **[AFX, NEW]** `semi-spacing` - Prevent space before semi colons, enforce spaces after semi colons (except having the semi colon at the end of line)

  ```js
  // bad
  const x = 1 ;
  const x = 1;const y = 2;

  // good
  const x = 1;
  const x = 1; const y =2;
  ```

- **[AFX, NEW]** `semi-style` - Prevent having semi-colons at the beginning of lines
  ```js
  // bad
  const x = 1
  ;

  // good
  const x = 1;
  ```

- **[MFX, NEW]** `consistent-return` - Enforce that the functions should either **always return a value** or **does not return any value**
  ```js
  // bad
  const fn = something => {
    if(something > 2) {
        return 123;
    }
  };

  // good
  const fn = something => {
    if(something > 2) {
        return 123;
    }

    return null;
  };

  const fn = something => {
    callSomeFn();
    console.log('something');
    console.log(something);
  }
  ```

- **[AFX, NEW]** `dot-location` - enforce having broken dot notation in consistent place
  ```js
  // bad
  _.
    chain(_.times(100000)).
    filter(isEven).
    sum().
    value();

  // good
  _
    .chain(_.times(100000))
    .filter(isEven)
    .sum()
    .value();
  ```

- **[MFX, NEW]** `no-empty-pattern` - Prevent possible error of assigning empty destructuring instead of trying to assign default value
  ```js
  // bad
  const obj = { p1: 1, p2: 2, p3: 3 };
  const { p4: {} } = obj;

  // good
  const obj = { p1: 1, p2: 2, p3: 3 };
  const { p4 = {} } = obj;

  ```

- **[MFX, NEW]** `no-fallthrough` - disallow fallthrough behavior between switch cases if they are having at least one statement
  ```js
  // bad
  switch(val) {
    case 1:
      fn1();
    case 2:
      fn2();
      break;
  }

  // good
  switch(val) {
    case 1:
      fn1();
      break;
    case 2:
      fn2();
      break;
  }

  switch(val) {
    case 1:
    case 2:
      fn2();
      break;
  }
  ```

- **[MFX, NEW]** `no-return-await` - disallow redundant `return await` statements
  ```js
  // bad
  const run = async() => {
      return await goAsync();
  };

  // good
  const run = async() => {
    return goAsync();
  };

  // good
  const run = async() => {
    // If you want to catch and handle error here for example
    const res = await goAsync();
    return res;
  };
  ```

- **[MFX, NEW]** `no-self-compare` - Comparing something to itself is usually an error
  ```js
  // bad
  if (x === x) {
    // ...
  }
  ```

- **[MFX, NEW]** `no-await-in-loop` - Detects a very likely to happen performance issues for awaiting inside loops
  ```js
  // bad
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    const res = await asyncify(arr[i]);
    results.push(res);
  }

  // good
  const promises = [];
  for (let i = 0; i < arr.length; i++) {
    promises.push(asyncify(arr[i]));
  }

  const results = await Promise.all(promises);
  ```

- **[MFX, NEW]** `no-sparse-arrays` - Prevents empty slots in arrays

  ```js
  // bad
  const arr = [1,2,,3,,,5];
  ```

- **[MFX, NEW]** `use-isnan` - Prevents JS superpowers
  ```js
  'use-isnan': 'error',
  ```

  ```js
  // bad
  if (something !== NaN) {
    nan();
  }

  // good
  if (!isNan(something)) {
    nan();
  }
  ```

- **[AFX, NEW]** `no-useless-computed-key` - Prevent having a computed key that have an expression that is already evaluated to a string

  ```js
  // bad
  const obj = {
    ['1 + 2']: 3,
    [3]: 4,
  };

  // good

  const obj = {
    '1 + 2': 3,
    3: 4,
  };

  const obj = {
    [1 + 2]: 3,
    [someVar]: 4,
  };
  ```

- **[AFX, NEW]** `no-useless-rename` - Prevent useless rename in destructuring

  ```js
  // bad
  const { a: a } = obj;
  ```

- **[MFX, NEW]** `prefer-rest-params` - Prefer the usage of rest operator instead of using `arguments` in functions

  ```js
  // bad
  function logThem() {
    console.log(arguments);
  }

  // good
  function logThem(...args) {
    console.log(args);
  }
  ```

- **[MFX, NEW]** `prefer-spread` - Prefer spread operator instead of `fn.apply()`, this rule respects the cases when you need to change the context of `this`

  ```js
  const foo = (...args) => [...args];
  const args = [1, 2, 3];

  // bad
  console.log(foo.apply(null, args));

  // good
  console.log(foo(...args));
  ```

- **[AFX, NEW]** `rest-spread-spacing` - Prevent having spacing with spread operator

  ```js
  // bad
  const obj = { a, ... b };

  // good
  const obj = { a, ...b };
  ```

- **[AFX, NEW]** `array-bracket-newline` - Enforce consistent breaks for arrays

  ```js
  // bad
  const arr = [
    1, 2, 3];

  const arr = [1,
    2,
    3,
  ];

  const arr = [
    1,
    2,
    3];

  // good
  const arr = [1, 2, 3];


  const arr = [
      1, 2, 3
  ];

  const arr = [1,
    2,
    3];

  const arr = [
    1,
    2,
    3,
  ];
  ```

- **[AFX, NEW]** `computed-property-spacing` - Prevent spacing inside computed object props.

  ```js
  // bad
  const complex = 1 + 1;
  const obj = { [ complex ]: 2 };

  // good
  const complex = 1 + 1;
  const obj = { [complex]: 2 };
  ```

- **[AFX, NEW]** - `func-call-spacing` - Prevent spacing between function and parans on invocation

  ```js
  // bad
  fn ();
  fn    ();

  // good
  fn();
  ```

- **[AFX, NEW]** `function-paren-newline` - Enforce a consistent linebreaks on function args, see `array-bracket-newline` above

- **[AFX, NEW]** - `lines-between-class-members` Enforce line breaks between class members

  ```js
  // bad
  class Lint {
    throw() {}
    an() {}
    error() {}
  }

  // good
  class Lint {
    throw() {}

    an() {}

    error() {}
  }
  ```

- **[AFX, NEW]** `padding-line-between-statements` - Enforce new lines after blocks, **see crowdanalyzer/javascript readme 2.8**

- **[AFX, NEW]** `no-lonely-if` - Prevents having an `if` as the **only** statement in an else block

  ```js
  // bad
  if (condition) {
    // ...
  } else {
      if (anotherCondition) {
          // ...
      } else {
          // ...
      }
  }

  // good
  if(condition) {
    // ...
  } else if(anotherCondition){
    // ...
  } else {
    // ...
  }
  ```

-  **[AFX, NEW]** `spaced-comment` - Require a space in the beginning of all comments

    ```js
    // bad

    //this function will do nothing
    doNothing();

    // good

    // this function will do nothing
    doNothing();
    ```

- **[AFX, NEW]** `switch-colon-spacing` - Require spacing after `case` in switch statements

  ```js
  // bad
  const val = 'SOMETHING';
  switch(val) {
      case'SOMETHING':console.log('something');
  }

  // good
  const val = 'SOMETHING';
  switch(val) {
      case'SOMETHING': console.log('something');
  }
  ```
