export interface signintype {
  email: string;
  password: string;
}

export interface resetpasswordtype {
  id: string | undefined;
  newpassword: string;
}
export interface forgotpasswordtype {
  email: string;
}
