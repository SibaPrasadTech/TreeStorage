export class ValidationError extends Error {
    code: string;
    constructor(msg: string) {
        super(msg);
        this.code = "VALIDATION_ERROR";
    }
}

export class CustomTreeError extends Error {
  code: string;
  constructor(err: { code: string; msg: string }) {
    super(err.msg);
    this.code = err.code;
  }
}
