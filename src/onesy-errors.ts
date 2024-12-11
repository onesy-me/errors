
interface IClass {
  new(...args: any[]): any;

  [p: string]: any;
}

export interface IOnesyError {
  message: string;
  name: string;
  stack: string;

  added_at: number;

  [p: string]: any;
}

export type TOnesyErrorValue = Error | string;

export class OnesyError extends Error implements IOnesyError {
  public added_at: number;
  public stack: string;
  [p: string]: any;

  public constructor(value: TOnesyErrorValue = '', Constructor: IClass = OnesyError, options?: any) {
    const isError = value instanceof Error;
    const args = [isError ? value.message : value, options];

    super(...args);

    // Maintain a proper stack trace either inherit,
    // or make a new one from atm stack and exclude OnesyError, or parent Constructor from the stack
    if (isError) this.stack = value.stack;
    else if (Error.captureStackTrace) Error.captureStackTrace(this, Constructor);
    else this.stack = new Error(this.message).stack;

    this.name = 'OnesyError';
    // Unix
    this.added_at = Math.floor(Date.now() / 1000);
  }

}

export class OnesyTestError extends OnesyError {

  public constructor(value: TOnesyErrorValue = '', ...args: any[]) {
    super(value, OnesyTestError, ...args);

    this.name = 'OnesyTestError';
  }

}

export class AssertError extends OnesyError {

  public constructor(value: TOnesyErrorValue = '', ...args: any[]) {
    super(value, AssertError, ...args);

    this.name = 'AssertError';
  }

}

export class AuthenticationError extends OnesyError {

  public constructor(value: TOnesyErrorValue = 'Unauthenticated', ...args: any[]) {
    super(value, AuthenticationError, ...args);

    this.name = 'AuthenticationError';
  }

}

export class AuthorizationError extends OnesyError {

  public constructor(value: TOnesyErrorValue = 'Unauthorized', ...args: any[]) {
    super(value, AuthorizationError, ...args);

    this.name = 'AuthorizationError';
  }

}

export class ValidationError extends OnesyError {

  public constructor(value: TOnesyErrorValue = 'Invalid', ...args: any[]) {
    super(value, ValidationError, ...args);

    this.name = 'ValidationError';
  }

}

export class NotFoundError extends OnesyError {

  public constructor(value: TOnesyErrorValue = 'Not found', ...args: any[]) {
    super(value, NotFoundError, ...args);

    this.name = 'NotFoundError';
  }

}

export class PermissionError extends OnesyError {

  public constructor(value: TOnesyErrorValue = 'No permissions', ...args: any[]) {
    super(value, PermissionError, ...args);

    this.name = 'PermissionError';
  }

}

export class OnesyAmqpError extends OnesyError {

  public constructor(value: TOnesyErrorValue = '', ...args: any[]) {
    super(value, OnesyAmqpError, ...args);

    this.name = 'OnesyAmqpError';
  }

}

export class OnesyAwsError extends OnesyError {

  public constructor(value: TOnesyErrorValue = '', ...args: any[]) {
    super(value, OnesyAwsError, ...args);

    this.name = 'OnesyAwsError';
  }

}

export class OnesyMongoError extends OnesyError {

  public constructor(value: TOnesyErrorValue = '', ...args: any[]) {
    super(value, OnesyMongoError, ...args);

    this.name = 'OnesyMongoError';
  }

}

export class ConnectionError extends OnesyError {

  public constructor(value: TOnesyErrorValue = '', ...args: any[]) {
    super(value, ConnectionError, ...args);

    this.name = 'ConnectionError';
  }

}

export class DeveloperError extends OnesyError {

  public constructor(value: TOnesyErrorValue = '', ...args: any[]) {
    super(value, DeveloperError, ...args);

    this.name = 'DeveloperError';
  }

}
