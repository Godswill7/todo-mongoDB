export enum HTTP {
  OK = 200,
  CREATE = 201,
  BAD = 404,
  UPDATE = 201,
  DELETE = 201,
}

interface iError {
  name: string;
  message: string;
  success: boolean;
  status: HTTP;
}

export class mainError extends Error {
  public readonly name: string;
  public readonly message: string;
  public readonly status: HTTP;
  public readonly success: boolean = false;

  constructor(args: iError) {
    super(args.message);

    Object.setPrototypeOf(this, new.target.prototype);

    this.name = args.name;
    this.message = args.message;
    this.status = args.status;

    if (this.success !== undefined) {
      this.success = args.success;
    }
    Error.captureStackTrace(this);
  }
}
