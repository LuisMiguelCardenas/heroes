import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const Navbar = () => {

    //const { dispatch } = useContext( AuthContext)
    const history = useHistory()
    const { user: {name}, dispatch } = useContext( AuthContext)

    const handleLogout = () => {
        history.push('/login')
        dispatch({
            type: types.logout,
            //payload: 'Miguel'
          })
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand  mx-3" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse mx-4">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse mx-4 w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="text-warning pt-2 mx-2 ">
                        {name} 
                    </span>
                    <button 
                        className="btn btn-warning" 
                        onClick = {handleLogout}
            
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}