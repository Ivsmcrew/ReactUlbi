import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router/routes";
import { AuthContext } from "../context/context";

const AppRouter = function() {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  return(
    isAuth 
      ?
      <Routes>
        {privateRoutes.map(route => 
          <Route 
            path={route.path}
            element={<route.component />} 
            key={route.path} 
          />
        )}
      </Routes>
      : 
      <Routes>
        {publicRoutes.map(route => 
          <Route 
            path={route.path}
            element={<route.component />} 
            key={route.path} 
          />
        )}
      </Routes> 
  )
}

export default AppRouter