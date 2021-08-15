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
    const response = await axiosInstance.post(LOGOUT_API);  
    if(response.status === 200){
        deleteToken();
        return response.data.status;
   } 
  } catch (err) {
      //Handle Error Here
      console.error(err);
  }
};

//--------------------------------------- verify phone api end point ------------------------------
export const verifyPhoneNumber = async () => {
  try {
      const response = await authenticatedAxiosInstance.get(VERIFY_PHONE);
      return response;
  } catch (err) {
      console.error(err);
  }
}

//--------------------------------------- verify phone api end point ------------------------------
export const checkVerificationCode = async (data) => {
  try {
      const response = await authenticatedAxiosInstance.post(CHECK_PHONE_VERIFICATION_CODE,data);
      return response;
  } catch (err) {
      console.error(err);
  }
}

//--------------------------------------- verify phone api end point ------------------------------
export const updatePassword = async (data) => {
  try {
      const response = await authenticatedAxiosInstance.post(UPDATE_PASSWORD_API, data);
      return response;
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
      const response = await axiosInstance.post(CHECK_RESET_PASSWORD_API, data);
      return response;
  } catch (err) {
      console.error(err);
  }
}


//--------------------------------------- verify phone api end point ------------------------------
export const resetPassword = async (data) => {
  try {
      let reset_password_token = await SecureStore.getItemAsync('reset_password_token');
      const response = await axiosInstance.post(RESET_PASSWORD_API+reset_password_token, data);
      return response;
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



