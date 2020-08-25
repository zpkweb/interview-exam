// tslint:disable-next-line:class-name
export interface registerOptions {
  name: string;
  phone: number;
}

// tslint:disable-next-line:class-name
export interface registerResult {
  name: string;
  phone: number;
}

// tslint:disable-next-line:class-name
export interface registerService {
  getRegister(): Promise<registerResult>;
  setRegister(options: registerOptions): Promise<registerResult>;
}
