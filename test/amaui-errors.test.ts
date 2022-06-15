/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { startBrowsers, IBrowsers, evaluate, closeBrowsers } from '../utils/js/test/utils';

import { AmauiAmqpError, AmauiAwsError, AmauiError, AmauiMongoError, AmauiTestError, AssertError, AuthenticationError, AuthorizationError, ConnectionError, DeveloperError, NotFoundError, PermissionError, ValidationError } from '../src';

group('@amaui/errors', () => {
  let browsers: IBrowsers;

  pre(async () => browsers = await startBrowsers());

  post(async () => {
    await closeBrowsers(browsers);
  });

  to('name', async () => {
    const values_ = [
      new AmauiError(),
      new AmauiTestError(),
      new AssertError(),
      new AuthenticationError(),
      new AuthorizationError(),
      new ValidationError(),
      new NotFoundError(),
      new PermissionError(),
      new AmauiAmqpError(),
      new AmauiAwsError(),
      new AmauiMongoError(),
      new ConnectionError(),
      new DeveloperError(),
    ];

    const valueBrowsers = await evaluate((window: any) => {
      const values_ = [
        new window.AmauiErrors.AmauiError(),
        new window.AmauiErrors.AmauiTestError(),
        new window.AmauiErrors.AssertError(),
        new window.AmauiErrors.AuthenticationError(),
        new window.AmauiErrors.AuthorizationError(),
        new window.AmauiErrors.ValidationError(),
        new window.AmauiErrors.NotFoundError(),
        new window.AmauiErrors.PermissionError(),
        new window.AmauiErrors.AmauiAmqpError(),
        new window.AmauiErrors.AmauiAwsError(),
        new window.AmauiErrors.AmauiMongoError(),
        new window.AmauiErrors.ConnectionError(),
        new window.AmauiErrors.DeveloperError(),
      ];

      return values_.map((value: any) => value.name);
    }, { browsers });

    const valueNode = values_.map(value => value.name);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql([
      'AmauiError',
      'AmauiTestError',
      'AssertError',
      'AuthenticationError',
      'AuthorizationError',
      'ValidationError',
      'NotFoundError',
      'PermissionError',
      'AmauiAmqpError',
      'AmauiAwsError',
      'AmauiMongoError',
      'ConnectionError',
      'DeveloperError',
    ]));
  });

  to('message', async () => {
    const values_ = [
      new AmauiError('a'),
      new AuthorizationError('a'),
    ];

    const valueBrowsers = await evaluate((window: any) => {
      const values_ = [
        new window.AmauiErrors.AmauiError('a'),
        new window.AmauiErrors.AuthorizationError('a'),
      ];

      return values_.map((value: any) => value.message);
    }, { browsers });

    const valueNode = values_.map(value => value.message);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql(new Array(2).fill('a')));
  });

  to('no message', async () => {
    const values_ = [
      new AmauiError(),
      new AmauiTestError(),
      new AssertError(),
      new AuthenticationError(),
      new AuthorizationError(),
      new ValidationError(),
      new NotFoundError(),
      new PermissionError(),
      new AmauiAmqpError(),
      new AmauiAwsError(),
      new AmauiMongoError(),
      new ConnectionError(),
      new DeveloperError(),
    ];

    const valueBrowsers = await evaluate((window: any) => {
      const values_ = [
        new window.AmauiErrors.AmauiError(),
        new window.AmauiErrors.AmauiTestError(),
        new window.AmauiErrors.AssertError(),
        new window.AmauiErrors.AuthenticationError(),
        new window.AmauiErrors.AuthorizationError(),
        new window.AmauiErrors.ValidationError(),
        new window.AmauiErrors.NotFoundError(),
        new window.AmauiErrors.PermissionError(),
        new window.AmauiErrors.AmauiAmqpError(),
        new window.AmauiErrors.AmauiAwsError(),
        new window.AmauiErrors.AmauiMongoError(),
        new window.AmauiErrors.ConnectionError(),
        new window.AmauiErrors.DeveloperError(),
      ];

      return values_.map((value: any) => value.message);
    }, { browsers });

    const valueNode = values_.map(value => value.message);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql([
      '',
      '',
      '',
      'Unauthenticated',
      'Unauthorized',
      'Invalid',
      'Not found',
      'No permissions',
      ...new Array(5).fill(''),
    ]));
  });

  group('stack', () => {

    to('message', async () => {
      const values_ = [
        new AmauiError('a'),
        new AuthorizationError('a'),
      ];

      const valueBrowsers = await evaluate((window: any) => {
        const values_ = [
          new window.AmauiErrors.AmauiError('a'),
          new window.AmauiErrors.AuthorizationError('a'),
        ];

        return values_.map((value: any) => value.stack);
      }, { browsers });
      const valueNode = values_.map(value => value.stack);

      assert(valueNode[0]).eq('AmauiError: a\n    at /Users/lazareric/amaui/amaui-errors/test/amaui-errors.test.ts:152:9\n    at /Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:316:26\n    at new Promise (<anonymous>)\n    at AmauiTest.runMethod (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:264:12)\n    at AmauiTest.runTo (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:368:40)\n    at async AmauiTest.runGroup (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:248:47)\n    at async AmauiTest.runGroup (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:248:116)\n    at async AmauiTest.runGroup (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:248:116)\n    at async AmauiTest.run (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:189:7)\n    at async Object.run [as handler] (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/cli.js:61:3)');
      assert(valueNode[1]).eq('AuthorizationError: a\n    at /Users/lazareric/amaui/amaui-errors/test/amaui-errors.test.ts:153:9\n    at /Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:316:26\n    at new Promise (<anonymous>)\n    at AmauiTest.runMethod (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:264:12)\n    at AmauiTest.runTo (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:368:40)\n    at async AmauiTest.runGroup (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:248:47)\n    at async AmauiTest.runGroup (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:248:116)\n    at async AmauiTest.runGroup (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:248:116)\n    at async AmauiTest.run (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:189:7)\n    at async Object.run [as handler] (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/cli.js:61:3)');

      assert(valueBrowsers[0][0]).eq('AmauiError: a\n    at eval (eval at evaluate (:3:2389), <anonymous>:3:21)\n    at t.default.evaluate (<anonymous>:3:2412)\n    at t.default.<anonymous> (<anonymous>:1:44)');
      assert(valueBrowsers[0][1]).eq('AuthorizationError: a\n    at eval (eval at evaluate (:3:2389), <anonymous>:4:21)\n    at t.default.evaluate (<anonymous>:3:2412)\n    at t.default.<anonymous> (<anonymous>:1:44)');
    });

    to('message, with a more methods making a stack pre making an error', async () => {
      const values_ = [];

      function c() {
        values_.push(
          new AmauiError('a'),
          new AuthorizationError('a'),
        );
      }

      function b() {
        c();
      }

      function a() {
        b();
      }

      a();

      const valueBrowsers = await evaluate((window: any) => {
        const values_ = [];

        function c() {
          values_.push(
            new window.AmauiErrors.AmauiError('a'),
            new window.AmauiErrors.AuthorizationError('a'),
          );
        }

        function b() {
          c();
        }

        function a() {
          b();
        }

        a();

        return values_.map((value: any) => value.stack);
      }, { browsers });
      const valueNode = values_.map(value => value.stack);

      assert(valueNode[0]).eq('AmauiError: a\n    at c (/Users/lazareric/amaui/amaui-errors/test/amaui-errors.test.ts:178:11)\n    at b (/Users/lazareric/amaui/amaui-errors/test/amaui-errors.test.ts:184:9)\n    at a (/Users/lazareric/amaui/amaui-errors/test/amaui-errors.test.ts:188:9)\n    at /Users/lazareric/amaui/amaui-errors/test/amaui-errors.test.ts:191:7\n    at /Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:316:26\n    at new Promise (<anonymous>)\n    at AmauiTest.runMethod (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:264:12)\n    at AmauiTest.runTo (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:368:40)\n    at async AmauiTest.runGroup (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:248:47)\n    at async AmauiTest.runGroup (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:248:116)');
      assert(valueNode[1]).eq('AuthorizationError: a\n    at c (/Users/lazareric/amaui/amaui-errors/test/amaui-errors.test.ts:179:11)\n    at b (/Users/lazareric/amaui/amaui-errors/test/amaui-errors.test.ts:184:9)\n    at a (/Users/lazareric/amaui/amaui-errors/test/amaui-errors.test.ts:188:9)\n    at /Users/lazareric/amaui/amaui-errors/test/amaui-errors.test.ts:191:7\n    at /Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:316:26\n    at new Promise (<anonymous>)\n    at AmauiTest.runMethod (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:264:12)\n    at AmauiTest.runTo (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:368:40)\n    at async AmauiTest.runGroup (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:248:47)\n    at async AmauiTest.runGroup (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:248:116)');

      assert(valueBrowsers[0][0]).eq('AmauiError: a\n    at c (eval at evaluate (:3:2389), <anonymous>:4:34)\n    at b (eval at evaluate (:3:2389), <anonymous>:7:21)\n    at a (eval at evaluate (:3:2389), <anonymous>:10:21)\n    at eval (eval at evaluate (:3:2389), <anonymous>:12:17)\n    at t.default.evaluate (<anonymous>:3:2412)\n    at t.default.<anonymous> (<anonymous>:1:44)');
      assert(valueBrowsers[0][1]).eq('AuthorizationError: a\n    at c (eval at evaluate (:3:2389), <anonymous>:4:74)\n    at b (eval at evaluate (:3:2389), <anonymous>:7:21)\n    at a (eval at evaluate (:3:2389), <anonymous>:10:21)\n    at eval (eval at evaluate (:3:2389), <anonymous>:12:17)\n    at t.default.evaluate (<anonymous>:3:2412)\n    at t.default.<anonymous> (<anonymous>:1:44)');
    });

    to('error', async () => {
      const error = new Error('a');

      const values_ = [
        new AmauiError(error),
        new AuthorizationError(error),
      ];

      const valueBrowsers = await evaluate((window: any) => {
        const error = new Error('a');

        const values_ = [
          new window.AmauiErrors.AmauiError(error),
          new window.AmauiErrors.AuthorizationError(error),
        ];

        return values_.map((value: any) => value.stack);
      }, { browsers });
      const valueNode = values_.map(value => value.stack);

      assert(valueNode[0]).eq('Error: a\n    at /Users/lazareric/amaui/amaui-errors/test/amaui-errors.test.ts:225:21\n    at /Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:316:26\n    at new Promise (<anonymous>)\n    at AmauiTest.runMethod (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:264:12)\n    at AmauiTest.runTo (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:368:40)\n    at async AmauiTest.runGroup (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:248:47)\n    at async AmauiTest.runGroup (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:248:116)\n    at async AmauiTest.runGroup (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:248:116)\n    at async AmauiTest.run (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:189:7)\n    at async Object.run [as handler] (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/cli.js:61:3)');
      assert(valueNode[1]).eq('Error: a\n    at /Users/lazareric/amaui/amaui-errors/test/amaui-errors.test.ts:225:21\n    at /Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:316:26\n    at new Promise (<anonymous>)\n    at AmauiTest.runMethod (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:264:12)\n    at AmauiTest.runTo (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:368:40)\n    at async AmauiTest.runGroup (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:248:47)\n    at async AmauiTest.runGroup (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:248:116)\n    at async AmauiTest.runGroup (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:248:116)\n    at async AmauiTest.run (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/amaui-test.js:189:7)\n    at async Object.run [as handler] (/Users/lazareric/amaui/amaui-errors/node_modules/@amaui/test/cli.js:61:3)');

      assert(valueBrowsers[0][0]).eq('Error: a\n    at eval (eval at evaluate (:3:2389), <anonymous>:2:31)\n    at t.default.evaluate (<anonymous>:3:2412)\n    at t.default.<anonymous> (<anonymous>:1:44)');
      assert(valueBrowsers[0][1]).eq('Error: a\n    at eval (eval at evaluate (:3:2389), <anonymous>:2:31)\n    at t.default.evaluate (<anonymous>:3:2412)\n    at t.default.<anonymous> (<anonymous>:1:44)');
    });

  });

});
