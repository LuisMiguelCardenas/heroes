import { types, ActionType } from "../types/types";

export const authReducer = (state = {}, action: ActionType) => {
  // switch (action.type) {
  //   case value:
      
  //     break;
  
  //   default:
  //     break;
  // }


  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        name:action.payload
  
      };

    case types.logout:
      return {
        logged: false,
      }
      default:
        return state
  }
};
