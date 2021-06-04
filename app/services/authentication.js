import * as SecureStore from 'expo-secure-store';
import {LOGIN_API, SIGNUP_API, LOGOUT_API, FORGET_PASSWORD_API, RESET_PASSWORD_API, UPDATE_PASSWORD_API} from './apis';
import axios from 'axios';

let errorMessage = "something went wrong";
//--------------------------------------- sign in api end point ------------------------------
export const signIn = async (data) => {
  try {
      console.log("username is " + data.username);
      console.log("password is "+ data.password);
      const resp = await axios.post(LOGIN_API,data);  
      if(resp.status === 200){
          storeToken(resp.data.token);
          console.log(resp.data.data.user.name.en);
          storeUserInfo(resp.data.data);
          return resp.data.status;
     } 
  } catch (err) {
      console.error(err);
  }
};


//--------------------------------------- signup api end point ------------------------------
export const signupRequest = async (data) => {
  try {
    console.log("identity is " + data.identityNumber);
    console.log("phone is " + data.phone);
    console.log("password is " + data.password);
    const resp = await axios.post(SIGNUP_API,data);  
    console.log("after signup");
    if(resp.status === 200){
      console.log("token is " + response.data.token);
      console.log("status is " + response.data.status);
      storeToken(response.data.token);
      return response.data.status
    } 
  } catch (err) {
      //Handle Error Here
      console.error(err);
  }
};

//--------------------------------------- signout api end point ------------------------------
export const signout = async () => {
  try {
    const resp = await axios.post(LOGOUT_API);  
    if(resp.status === 200){
        deleteToken();
        return resp.data.status;
   } 
  } catch (err) {
      //Handle Error Here
      console.error(err);
  }
};

//--------------------------------------- forget password api end point ------------------------------
export const forgetPassword = async (data) => {
  try {
    const resp = await axios.post(FORGET_PASSWORD_API,data);  
    console.log("hamada is heeeeeeeeeeere :" + resp.json())
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

//--------------------------------------- store user id  ------------------------------
export const storeUserInfo = (data) => {
  console.log("set user info")
  SecureStore.setItemAsync('id', data.id);
  SecureStore.setItemAsync('name', data.user.name.en);
  SecureStore.setItemAsync('photo', data.photo);
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
export const authorizeRequestWithData = async (callback, data) => {
  const userToken = await SecureStore.getItemAsync('token');
  let response = await callback(userToken, data);
  return response;
};