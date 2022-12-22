
</br >
</br >

<p align='center'>
  <a target='_blank' rel='noopener noreferrer' href='#'>
    <img src='utils/images/logo.svg' alt='amaui logo' />
  </a>
</p>

<h1 align='center'>amaui Errors</h1>

<p align='center'>
  Errors
</p>

<br />

<h3 align='center'>
  <sub>MIT license&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Production ready&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>UMD 0.8kb gzipped&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>100% test cov&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Browser and Nodejs</sub>
</h3>

<p align='center'>
    <sub>Very simple code&nbsp;&nbsp;&nbsp;&nbsp;</sub>
    <sub>Modern code&nbsp;&nbsp;&nbsp;&nbsp;</sub>
    <sub>Junior friendly&nbsp;&nbsp;&nbsp;&nbsp;</sub>
    <sub>Typescript&nbsp;&nbsp;&nbsp;&nbsp;</sub>
    <sub>Made with :yellow_heart:</sub>
</p>

<br />

## Getting started

### Add

```sh
  // yarn
  yarn add @amaui/errors

  // npm
  npm install @amaui/errors
```

### Use

```javascript
  import { AmauiError } from '@amaui/errors';
  import AmauiLog from '@amaui/log';

  const amauiError = new AmauiError('a');

  amauiError.name;
  amauiError.message;
  amauiError.added_at;
  amauiError.stack;

  // AmauiError
  // 'a'
  // 1643893234
  // 'AmauiError: a\n    at eval (eval at evaluate (:3:2389), <anonymous>:2:31)\n    at t.default.evaluate (<anonymous>:3:2412)\n    at t.default.<anonymous> (<anonymous>:1:44)'

  AmauiLog.error(amauiError);

  // Output

    // 04-04-2014 04:04:14.141 (error):

    // a

    // AmauiError: a
    //    at eval (eval at evaluate (:3:2389), <anonymous>:2:31)
    //    at t.default.evaluate (<anonymous>:3:2412)
    //    at t.default.<anonymous> (<anonymous>:1:44)

```

### Dev

Install

```sh
  yarn
```

Test

```sh
  yarn test
```

### Prod

Build

```sh
  yarn build
```

### Docs

Might be soon...
