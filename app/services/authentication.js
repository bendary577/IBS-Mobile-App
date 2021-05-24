import * as SecureStore from 'expo-secure-store';
import {LOGIN_API, SIGNIN_API, LOGOUT_API, FORGET_PASSWORD_API, RESET_PASSWORD_API, UPDATE_PASSWORD_API} from './apis';
import axios from 'axios';

let errorMessage = "something went wrong";
//--------------------------------------- sign in api end point ------------------------------
export const signIn = (_username,_password) => {
  try {
      console.log("signin function")
      axios.post(LOGIN_API, {
          username : _username,
          password: _password
        })
        .then(response => {
          if (response.data.status) {
           console.log("response is " + response);
         } 
        }).catch(error => {});

      console.log("after signin function")
  } catch (err) {
      //Handle Error Here
      console.error(err);
  }
};


//--------------------------------------- signup api end point ------------------------------
export const signup = (data) => {
  try {
      axios.post(SIGNIN_API, data)
        .then(response => {
          if (response) {
           console.log("response is " + response.data.token);
           storeToken(response.data.token);
         } 
        }).catch(error => {console.log(error)});
  } catch (err) {
      //Handle Error Here
      console.error(err);
  }
};

//--------------------------------------- signout api end point ------------------------------
export const signout = () => {
  try {
      axios.post(LOGOUT_API)
        .then(response => {
          if (response) {
           console.log("in signout");
           deleteToken();
         } 
        }).catch(error => {console.log(error)});
  } catch (err) {
      //Handle Error Here
      console.error(err);
  }
};

//--------------------------------------- forget password api end point ------------------------------
export const forgetPassword = async (data) => {
  try {
    const resp = await axios.post(FORGET_PASSWORD_API,data);  
    if(resp.status === 200){
      return resp.data.message;
    }
    return errorMessage;
  } catch (err) {
      //Handle Error Here
      console.error(err);
  }
};


//--------------------------------------- reset password api end point ------------------------------
export const resetPassword = (data) => {
  try {
      axios.post(RESET_PASSWORD_API, data)
        .then(response => {
          if (response) {
           console.log("response is " + response);
         } 
        }).catch(error => {console.log(error)});
  } catch (err) {
      //Handle Error Here
      console.error(err);
  }
};

//--------------------------------------- update password api end point ------------------------------
export const updatePassword = (data) => {
  try {
      axios.post(UPDATE_PASSWORD_API, data)
        .then(response => {
          if (response) {
            console.log("response is " + response);
         } 
        }).catch(error => {console.log(error)});
  } catch (err) {
      //Handle Error Here
      console.error(err);
  }
};


//--------------------------------------- store user token  ------------------------------
export const storeToken = (token) => {
  //set the value of the token
  SecureStore.setItemAsync('token', token);
};

//--------------------------------------- store user token  ------------------------------
export const getToken = async () => {
  //retrieve the value of the token
  const userToken = await SecureStore.getItemAsync('token');
  console.log("token is " + userToken)
  if(userToken){
    return userToken
  }
  return null;
};

//--------------------------------------- delete user token  ------------------------------
export const deleteToken = () => {
  //delete the token
  SecureStore.deleteItemAsync('token');
};

//--------------------------------------- check if user is logged in ------------------------------
export const isLoggedIn = async () => {
  //retrieve the value of the token
  const userToken = await SecureStore.getItemAsync('token');
  console.log("check authentication " + userToken);
  if(userToken) return true;
  return false;
}

//--------------------------------------- store user token  ------------------------------
export const authorizeRequest = async (callback) => {
  //retrieve the value of the token
  const userToken = await SecureStore.getItemAsync('token');
  let response = await callback(userToken);
  console.log("response length " + response.length)
  return response;
};

//--------------------------------------- store user token  ------------------------------
export const authorizeRequestWithId = async (callback, id) => {
  const userToken = await SecureStore.getItemAsync('token');
  let response = await callback(userToken, id);
  return response;
};