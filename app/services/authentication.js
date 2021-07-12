import * as SecureStore from 'expo-secure-store';
import {LOGIN_API,
       SIGNUP_API,
       LOGOUT_API,
       RESET_PASSWORD_API,
       UPDATE_PASSWORD_API,
       VERIFY_PHONE,
       CHECK_PHONE_VERIFICATION_CODE,
       REQUEST_RESET_PASSWORD_API,
       CHECK_RESET_PASSWORD_API
      } from './apis';
import { axiosInstance, authenticatedAxiosInstance } from './axios';


//--------------------------------------- sign in api end point ------------------------------
export const signIn = async (data) => {
  try {
    const response = await axiosInstance.post(LOGIN_API, data)
      if(response.status === 200){
      storeToken(response.data.access_token);
      return response;
    }
      return response;
  } catch (error){
    console.error(error);
  }
};


//--------------------------------------- signup api end point ------------------------------
export const signupRequest = async (data) => {
  try {
    const response = await axiosInstance.post(SIGNUP_API,data);  
    return response;
  } catch (err) {
      console.error(err);
  }
};

//--------------------------------------- signout api end point ------------------------------
export const signout = async () => {
  try {
    const resp = await axiosInstance.post(LOGOUT_API);  
    if(resp.status === 200){
        deleteToken();
        return resp.data.status;
   } 
  } catch (err) {
      //Handle Error Here
      console.error(err);
  }
};

//--------------------------------------- verify phone api end point ------------------------------
export const verifyPhoneNumber = async () => {
  try {
      const resp = await authenticatedAxiosInstance.get(VERIFY_PHONE);
      if(resp.status === 200){
          console.log(resp.data);
      }
  } catch (err) {
      console.error(err);
  }
}

//--------------------------------------- verify phone api end point ------------------------------
export const checkVerificationCode = async (data) => {
  try {
      let jwt = token;
      const resp = await authenticatedAxiosInstance.post(CHECK_PHONE_VERIFICATION_CODE,data);
      if(resp.status === 200){
          console.log(resp.data);
      }
  } catch (err) {
      console.error(err);
  }
}

//--------------------------------------- verify phone api end point ------------------------------
export const updatePassword = async (data) => {
  try {
    console.log("in update password")
    console.log(UPDATE_PASSWORD_API)
    console.log(data.currentPassword)
    console.log(data.password)
    console.log(data.passwordConfirmation)
      const response = await authenticatedAxiosInstance.post(UPDATE_PASSWORD_API, data);
      return response
  } catch (err) {
      console.error(err);
  }
}


//--------------------------------------- verify phone api end point ------------------------------
export const requestResetPassword = async (data) => {
  try {
      const response = await axiosInstance.post(REQUEST_RESET_PASSWORD_API,data);
      return response;
  } catch (err) {
      console.error(err);
  }
}


//--------------------------------------- verify phone api end point ------------------------------
export const checkResetPasswordCode = async (data) => {
  try {
      console.log(data.code + data.phone)
      const resp = await axiosInstance.post(CHECK_RESET_PASSWORD_API,data);
      if(resp.status === 200){
          console.log(resp.data);
      }
  } catch (err) {
      console.error(err);
  }
}


//--------------------------------------- verify phone api end point ------------------------------
export const resetPassword = async (data) => {
  try {
      let reset_password_token = await SecureStore.getItemAsync('reset_password_token');
      const resp = await axiosInstance.post(RESET_PASSWORD_API+reset_password_token, data);
      if(resp.status === 200){
          console.log(resp.data);
      }
  } catch (err) {
      console.error(err);
  }
}

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
  if(userToken) return true;
  return false;
}

