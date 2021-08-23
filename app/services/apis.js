//let BASE_API = `http://192.168.1.6:8080`;
let BASE_API = `http://api.ibsns.com/v1/`;

//-------------------------------- Auth API endpoints --------------------------
export const LOGIN_API = `${BASE_API}login`;
export const SIGNUP_API = `${BASE_API}register`;
export const LOGOUT_API = `${BASE_API}/logout`;
export const VERIFY_PHONE = `${BASE_API}verify-phone`;
export const CHECK_PHONE_VERIFICATION_CODE = `${BASE_API}check-verification-code`;
export const UPDATE_PASSWORD_API = `${BASE_API}update-password`;
export const REQUEST_RESET_PASSWORD_API = `${BASE_API}reset-password`; //send the mobile phone first
export const CHECK_RESET_PASSWORD_API = `${BASE_API}check-reset-password`; //then get code, send it to confirm
export const RESET_PASSWORD_API = `${BASE_API}reset-password/`; // then update password, this api is appended by password reset token

//----------------------------------- REST API User endpoints -------------------------------
export const GET_USER_API = `${BASE_API}/user/`;
export const USER_NOTIFICATION_TOKEN = `${BASE_API}/api/users/set-notification-token`;

//----------------------------------- REST API Tickets endpoints -------------------------------
export const GET_USER_TICKETS = `${BASE_API}user/tickets?q&page=0&sort=createdAt&limit=50&status=1`;
export const GET_USER_SINGLE_TICKET = `${BASE_API}user/tickets/`;
export const CREATE_TICKET = `${BASE_API}tickets`;
export const CREATE_TICKET_MESSAGE = `${BASE_API}tickets/`;

//----------------------------------- REST API Payments endpoints -------------------------------
export const GET_USER_EMPLOYMENT_HISTORY = `${BASE_API}user/employment-history`;
export const GET_USER_CLIENT_PAYMENTS = `${BASE_API}employees/`;
export const GET_USER_CLIENT_SINGLE_PAYMENT = `${BASE_API}employees/`;

//----------------------------------- REST API FAQ endpoints -------------------------------
export const GET_FAQ = `${BASE_API}faq?page=0&sort=priority&limit=50`;
export const GET_SINGLE_FAQ = `${BASE_API}faq/`;

//----------------------------------- REST API Information endpoints -------------------------------
export const GET_CLIENT_INFORMATION = `${BASE_API}information?client=*`;
export const GET_SINGLE_INFORMATION = `${BASE_API}information/`;

//----------------------------------- REST API Bank Messages ----------------------------
export const GET_BANK_MESSAGES = `${BASE_API}newsfeed`;
export const GET_SINGLE_BANK_MESSAGE = `${BASE_API}newsfeed`;
export const MARK_MESSAGE_AS_READ = `${BASE_API}/`;

//--------------------------------------- SOCKET IO SERVER -------------------------
export const SOCKET_IO_SERVER = `http://api.ibsns.com`;

//--------------------------------------- Notifications API endpoints -------------------------
export const GET_USER_NOTIFICATIONS = `${BASE_API}notifications?unread=1&page=0&limit=20&sort=-createdAt`;
export const SET_USER_NOTIFICATION_TOKEN = `${BASE_API}notifications/token`;
export const MARK_NOTIFICATION_AS_READ = `${BASE_API}notifications/`;
export const CLEAR_ALL_NOTIFICATIONS = `${BASE_API}notifications/`;