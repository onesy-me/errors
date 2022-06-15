
interface IClass {
  new(...args: any[]): any;

  [p: string]: any;
}

export interface IAmauiError {
  message: string;
  name: string;
  stack: string;

  added_at: number;

  [p: string]: any;
}

export type TAmauiErrorValue = Error | string;

export class AmauiError extends Error implements IAmauiError {
  public added_at: number;
  public stack: string;
  [p: string]: any;

  public constructor(value: TAmauiErrorValue = '', Constructor: IClass = AmauiError, options?: any) {
    const isError = value instanceof Error;
    const args = [isError ? value.message : value, options];

    super(...args);

    // Maintain a proper stack trace either inherit,
    // or make a new one from atm stack and exclude AmauiError, or parent Constructor from the stack
    if (isError) this.stack = value.stack;
    else if (Error.captureStackTrace) Error.captureStackTrace(this, Constructor);
    else this.stack = new Error(this.message).stack;

    this.name = 'AmauiError';
    // Unix
    this.added_at = Math.floor(Date.now() / 1000);
  }

}

export class AmauiTestError extends AmauiError {

  public constructor(value: TAmauiErrorValue = '', ...args: any[]) {
    super(value, AmauiTestError, ...args);

    this.name = 'AmauiTestError';
  }

}

export class AssertError extends AmauiError {

  public constructor(value: TAmauiErrorValue = '', ...args: any[]) {
    super(value, AssertError, ...args);

    this.name = 'AssertError';
  }

}

export class AuthenticationError extends AmauiError {

  public constructor(value: TAmauiErrorValue = 'Unauthenticated', ...args: any[]) {
    super(value, AuthenticationError, ...args);

    this.name = 'AuthenticationError';
  }

}

export class AuthorizationError extends AmauiError {

  public constructor(value: TAmauiErrorValue = 'Unauthorized', ...args: any[]) {
    super(value, AuthorizationError, ...args);

    this.name = 'AuthorizationError';
  }

}

export class ValidationError extends AmauiError {

  public constructor(value: TAmauiErrorValue = 'Invalid', ...args: any[]) {
    super(value, ValidationError, ...args);

    this.name = 'ValidationError';
  }

}

export class NotFoundError extends AmauiError {

  public constructor(value: TAmauiErrorValue = 'Not found', ...args: any[]) {
    super(value, NotFoundError, ...args);

    this.name = 'NotFoundError';
  }

}

export class PermissionError extends AmauiError {

  public constructor(value: TAmauiErrorValue = 'No permissions', ...args: any[]) {
    super(value, PermissionError, ...args);

    this.name = 'PermissionError';
  }

}

export class AmauiAmqpError extends AmauiError {

  public constructor(value: TAmauiErrorValue = '', ...args: any[]) {
    super(value, AmauiAmqpError, ...args);

    this.name = 'AmauiAmqpError';
  }

}

export class AmauiAwsError extends AmauiError {

  public constructor(value: TAmauiErrorValue = '', ...args: any[]) {
    super(value, AmauiAwsError, ...args);

    this.name = 'AmauiAwsError';
  }

}

export class AmauiMongoError extends AmauiError {

  public constructor(value: TAmauiErrorValue = '', ...args: any[]) {
    super(value, AmauiMongoError, ...args);

    this.name = 'AmauiMongoError';
  }

}

export class ConnectionError extends AmauiError {

  public constructor(value: TAmauiErrorValue = '', ...args: any[]) {
    super(value, ConnectionError, ...args);

    this.name = 'ConnectionError';
  }

}

export class DeveloperError extends AmauiError {

  public constructor(value: TAmauiErrorValue = '', ...args: any[]) {
    super(value, DeveloperError, ...args);

    this.name = 'DeveloperError';
  }

}
