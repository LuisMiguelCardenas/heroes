import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

const initialState = {


  logged:false, 
  name: ''
}


// const init =() => {
//  return  JSON.stringify( localStorage.getItem('user'))
// }
// console.log(init)



export const HeroesApp = () => {
  
  const [user, dispatch] = useReducer(authReducer, initialState )


  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])
  return (
    <AuthContext.Provider value = {{ user, dispatch}}>
      <AppRouter/>
      </AuthContext.Provider>
  )
}
