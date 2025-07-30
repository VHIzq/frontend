export namespace Sign {
  export interface EntryUserPayload {
    name: string;
    firstLastName: string;
    secondLastName: string;
    cellphone: string;
    email: string;
    password: string;
  }

  export interface LoginUserPayload {
    email: string;
    password: string;
  }

  export interface User {
    kind: string;
    localId: string;
    email: string;
    displayName: string;
    idToken: string;
    registered: boolean;
    refreshToken: string;
    expiresIn: string;
  }
}
