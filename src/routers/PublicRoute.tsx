import React from 'react'
import { Redirect, Route } from 'react-router-dom'

interface Props {
  isAuthenticated: boolean,
  component:any
  path:string
}


export const PublicRoute: React.FC<Props> = ({
  isAuthenticated, 
  component: Component,
  ...rest
}) => {
  return (
    <Route {...rest}
    component= {(props:any)=> (
      (!isAuthenticated)?
      <Component { ...props} />
      :
      <Redirect to="/"/>
    )}
    >
      
    </Route>
  )
}
