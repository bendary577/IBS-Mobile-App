let BASE_API = `http://192.168.1.6:8080`;

//-------------------------------- Auth API endpoints --------------------------
export const LOGIN_API = `${BASE_API}/api/login`;
export const SIGNUP_API = `${BASE_API}/api/register`;
export const LOGOUT_API = `${BASE_API}/api/logout`;
export const FORGET_PASSWORD_API = `${BASE_API}/api/forget-password`;
export const RESET_PASSWORD_API = `${BASE_API}/api/reset-password`;
export const UPDATE_PASSWORD_API = `${BASE_API}/api/update-password`;

//----------------------------------- REST API endpoints -------------------------------
export const GET_USER_API = `${BASE_API}/api/users/me`;
export const GET_USER_PAYMENTS = `${BASE_API}/api/users/me/payments`;
export const GET_USER_TICKETS = `${BASE_API}/api/users/me/tickets`;
export const UPLOAD_USER_IMAGE = `${BASE_API}/api/users/me/`;

//--------------------------------------- TEST API endpoints -------------------------
export const GET_PAYMENTS = `${BASE_API}/api/payments`;
export const GET_TICKETS = `${BASE_API}/api/tickets`;