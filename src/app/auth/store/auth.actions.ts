import {Action} from '@ngrx/store';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const LOG_OUT = 'LOG_OUT';
export const SET_TOKEN = 'SET_TOKEN';

export class SignIn implements Action{
  readonly type :string = SIGN_IN;
  constructor() {
  }
}
export class Signup implements Action{
  readonly type :string = SIGN_UP;
  constructor() {
  }
}
export class LogOut implements Action{
  readonly type :string = LOG_OUT;
  constructor() {
  }
}
export class SetToken implements Action{
  readonly type :string;
  constructor(private payload:{token:string}) {
  }
}

export type AuthActions = SignIn|Signup|LogOut|SetToken;
