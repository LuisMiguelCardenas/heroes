
export const types = {
  login: "[auth] login",
  logout: "[auth] logout",
};

export type ActionType = 
| { type: "[auth] login",  payload:string }
| { type: "[auth] logout", payload:string }

