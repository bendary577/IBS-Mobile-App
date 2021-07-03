//let BASE_API = `http://192.168.1.6:8080`;
let BASE_API = `http://api.ibsns.com/v1/`;

//-------------------------------- Auth API endpoints --------------------------
export const LOGIN_API = `${BASE_API}/login`;
export const SIGNUP_API = `${BASE_API}/register`;
export const LOGOUT_API = `${BASE_API}/logout`;
export const FORGET_PASSWORD_API = `${BASE_API}/api/forget-password`;
export const RESET_PASSWORD_API = `${BASE_API}/reset-password`; //send the mobile phone first
export const CHECK_RESET_PASSWORD_API = `${BASE_API}/check-reset-password`; //then get code, send it to confirm
export const UPDATE_PASSWORD_API = `${BASE_API}/reset-password`; // then update password, this api is appended by password reset token


//----------------------------------- REST API User endpoints -------------------------------
export const GET_USER_API = `${BASE_API}/user/`;
export const UPLOAD_USER_IMAGE = `${BASE_API}/api/users/me/`;
export const USER_NOTIFICATION_TOKEN = `${BASE_API}/api/users/set-notification-token`;

//----------------------------------- REST API Tickets endpoints -------------------------------
export const GET_USER_TICKETS = `${BASE_API}/user/tickets?q&page=0&sort=createdAt&limit=50&status=0`;
export const CREATE_TICKET = `${BASE_API}/tickets`;
export const GET_TICKETS_ISSUES_CATEGORIES = `${BASE_API}/tickets/issues/categories`;

//----------------------------------- REST API Payments endpoints -------------------------------
export const GET_USER_PAYMENTS = `${BASE_API}/api/users/me/payments`;


//----------------------------------- REST API FAQ endpoints -------------------------------
export const GET_FAQ = `${BASE_API}/faq?page=0&sort=priority&limit=50`;
export const GET_SINGLE_FAQ = `${BASE_API}/faq/`;

//----------------------------------- REST API Information endpoints -------------------------------
export const GET_CLIENT_INFORMATION = `${BASE_API}/information?client=42`;
export const GET_SINGLE_INFORMATION = `${BASE_API}/information/60c2a37fa352075cbb546d5a`;

//--------------------------------------- TEST API endpoints -------------------------
export const PAYMENTS_API = `${BASE_API}/api/payments`;
export const TICKETS_API = `${BASE_API}/api/tickets`;