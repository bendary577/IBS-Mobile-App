import * as SecureStore from 'expo-secure-store';
import {LOGIN_API, SIGNUP_API, LOGOUT_API, FORGET_PASSWORD_API, RESET_PASSWORD_API, UPDATE_PASSWORD_API} from './apis';
import axios from 'axios';




//--------------------------------------- sign in api end point ------------------------------
export const signIn = async (data) => {
  try {
    const response = await axios.post(LOGIN_API, data)
    console.log(response.data)
    storeToken(response.data.access_token);
    //storeUserInfo(resp.data.data);
    return response.data;
  } catch (error) {
      return { status: 500, error: error.message }
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
  SecureStore.setItemAsync('access_token', token);
};


//--------------------------------------- store user token  ------------------------------
export const getToken = async () => {
  //retrieve the value of the token
  const userToken = await SecureStore.getItemAsync('access_token');
  console.log("token is " + userToken)
  if(userToken){
    return userToken
  }
  return null;
};

//--------------------------------------- delete user token  ------------------------------
export const deleteToken = () => {
  //delete the token
  SecureStore.deleteItemAsync('access_token');
};

//--------------------------------------- store user id  ------------------------------
export const storeUserInfo = (data) => {
  console.log("set user info")
  SecureStore.setItemAsync('id', JSON.stringify(data.id));
  SecureStore.setItemAsync('name', JSON.stringify(data.user.name.en));
  //SecureStore.setItemAsync('photo', data.photo);
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
  const userToken = await SecureStore.getItemAsync('access_token');
  let response = await callback(userToken);
  return response;
};

//--------------------------------------- store user token  ------------------------------
export const authorizeRequestWithData = async (callback, data) => {
  const userToken = await SecureStore.getItemAsync('access_token');
  console.log("SISI $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$" + data);
  let response = await callback(userToken, data);
  return response;
};