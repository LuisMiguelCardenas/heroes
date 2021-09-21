import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = () => {
  
  const history = useHistory();

  const { dispatch } = useContext( AuthContext)


//console.log(contex)

  const handleLogin = () => {
    //console.log('click')
    history.push('/')
    dispatch({
      type: types.login,
      payload: 'Miguel'
    })
  }
  
  return (
    <div className="mt-5 container row d-flex justify-content-center">
      <h2 className="col-12 text-center">Login</h2>
      <button 
        className="btn btn-info col-8"
        onClick={ handleLogin }
        >
          Login
        </button>
    </div>
  );
};
