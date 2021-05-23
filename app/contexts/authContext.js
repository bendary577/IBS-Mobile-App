import React, {createContext, useState, useContext, useEffect} from 'react';
import {isLoggedIn} from '../services/authentication';



//--------------------------------------------Create the Auth Context with data---------------------------------------
const AuthContext = createContext({authenticated: false});


//------------------------------------------- create the Auth Provider ----------------------------------------------
const AuthProvider = ({children}) => {

  //the AuthContext start with loading equals true and stay like this, until the data be load from Async Storage
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    //Every time the App is opened, this provider is rendered and call de checkAuthentication function.
    checkAuthentication();
  }, []);

  const checkAuthentication = () => {
    try {
      //Try get the data from Async Storage
      const authState = isLoggedIn();
      if (authState) {
        //If there is a token, we will update the authentication state
        setAuthenticated(true);
      }
    } catch (error) {} 
  }

  return (
    //This component will be used to encapsulate the whole App, so all components will have access to the Context
    <AuthContext.Provider value={authenticated}>
      {children}
    </AuthContext.Provider>
  );
};

//----------------------------------------------------------- useAuth Hook ----------------------------------------
//A simple hooks to facilitate the access to the AuthContext and permit components to subscribe to AuthContext updates
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
export {AuthContext, AuthProvider, useAuth};