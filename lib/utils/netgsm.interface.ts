export type NetgsmModuleOptions = {
  username: string;
  password: string;
  header: string;
  url?: string;
};

export interface NetgsmModuleExtras {
  isGlobal: boolean;
}

export interface IResponseCode {
  data:
    | '00'
    | '20'
    | '30'
    | '40'
    | '50'
    | '51'
    | '70'
    | '80'
    | '85'
    | '100'
    | '101';
}
