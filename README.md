
</br>
</br>

<p align='center'>
  <a target='_blank' rel='noopener noreferrer' href='#'>
    <img width='auto' height='84' src='https://raw.githubusercontent.com/onesy-me/onesy/refs/heads/main/utils/images/logo.png' alt='onesy logo' />
  </a>
</p>

<h1 align='center'>onesy Errors</h1>

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
yarn add @onesy/errors
```

### Use

```javascript
  import { OnesyError } from '@onesy/errors';
  import OnesyLog from '@onesy/log';

  const onesyError = new OnesyError('a');

  onesyError.name;
  onesyError.message;
  onesyError.added_at;
  onesyError.stack;

  // OnesyError
  // 'a'
  // 1643893234
  // 'OnesyError: a\n    at eval (eval at evaluate (:3:2389), <anonymous>:2:31)\n    at t.default.evaluate (<anonymous>:3:2412)\n    at t.default.<anonymous> (<anonymous>:1:44)'

  OnesyLog.error(onesyError);

  // Output

    // 04-04-2014 04:04:14.141 (error):

    // a

    // OnesyError: a
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
