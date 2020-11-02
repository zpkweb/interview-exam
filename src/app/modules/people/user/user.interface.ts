
export interface UserResult {
  readonly username: string;
  readonly phone: string;
  readonly userinfo: UserInfoInterface;
}

export interface UserRequest {
  readonly id?: number;
  readonly username: string;
  readonly phone: string;
  readonly age?: number;
  readonly sex?: number;
}

export interface UserInfoInterface {
  readonly age?: number;
  readonly sex?: number;
}
