
import {GET_USER_API,
        GET_USER_TICKETS, 
        GET_USER_SINGLE_TICKET, 
        CREATE_TICKET,
        GET_FAQ,
        GET_CLIENT_INFORMATION,
        GET_SINGLE_INFORMATION,
        GET_SINGLE_FAQ,
        GET_USER_EMPLOYMENT_HISTORY,
        GET_USER_CLIENT_PAYMENTS,
        GET_USER_CLIENT_SINGLE_PAYMENT,
        CREATE_TICKET_MESSAGE,
        GET_USER_NOTIFICATIONS,
        MARK_NOTIFICATION_AS_READ,
        SET_USER_NOTIFICATION_TOKEN,
        GET_BANK_MESSAGES,
        GET_SINGLE_BANK_MESSAGE,
        MARK_MESSAGE_AS_READ} from './apis';
import * as SecureStore from 'expo-secure-store';
import { authenticatedAxiosInstance } from './axios';


//--------------------------------------- get user api end point ------------------------------
export const getUserInfo = async () => {
    try {
        const response = await authenticatedAxiosInstance.get(GET_USER_API);
        return response;
    } catch (err) {
        console.error(err);
    }
}


//--------------------------------------- get user payments api end point ------------------------------
export const getUserEmploymentHistory = async () => {
    try {
        let response = await authenticatedAxiosInstance.get(GET_USER_EMPLOYMENT_HISTORY);
        return response;
    } catch (err) {
        //Handle Error Here
        console.error(err);
    }
}

//--------------------------------------- get user payments api end point ------------------------------
export const getUserPayments = async (year) => {
    try {
        let id = await SecureStore.getItemAsync('employee_id');
        id = parseInt(id);
        console.log(`${GET_USER_CLIENT_PAYMENTS}${Number(id)}/payments?q=${year}&page=0&sort=createdAt&limit=50&fields=-paymentDetails`)
        const response = await authenticatedAxiosInstance.get(`${GET_USER_CLIENT_PAYMENTS}${Number(id)}/payments?q=${year}&page=0&sort=createdAt&limit=50&fields=-paymentDetails`);
        return response;
    } catch (err) {
        //Handle Error Here
        console.error(err);
    }
}

//--------------------------------------- get user single payment api end point ------------------------------
export const getSiglePayment = async (id) => {
    try {
        let employee_id = await SecureStore.getItemAsync('employee_id');
        console.log("single poayment is " + `${GET_USER_CLIENT_SINGLE_PAYMENT+employee_id}/payments/${id}`)
        const response = await authenticatedAxiosInstance.get(`${GET_USER_CLIENT_SINGLE_PAYMENT+employee_id}/payments/${id}`);
        return response;
    } catch (err) {
        //Handle Error Here
        console.error(err);
    }
}

//--------------------------------------- get user tickets api end point ------------------------------
export const getUserTickets = async () => {
    try {
        const response = await authenticatedAxiosInstance.get(GET_USER_TICKETS);
        return response;
    } catch (err) {
        //Handle Error Here
        console.error(err);
    }
}


//--------------------------------------- get user tickets api end point ------------------------------
export const getSingleTicket = async (id) => {
    try {
        const response = await authenticatedAxiosInstance.get(GET_USER_SINGLE_TICKET+id);
        return response;
    } catch (err) {
        //Handle Error Here
        console.error(err);
    }
}

//--------------------------------------- add new ticket api end point ------------------------------
export const addTicket = async (data) => {
    try {
        let response = await authenticatedAxiosInstance.post(CREATE_TICKET, data);
        return response;
    } catch (err) {
        console.error(err);
    }
}

//--------------------------------------- add new ticket api end point ------------------------------
export const addTicketMessage = async (id, data) => {
    try {
        const response = await authenticatedAxiosInstance.post(`${CREATE_TICKET_MESSAGE}${id}/message`, data);
        return response;
    } catch (err) {
        console.error(err);
    }
}


//--------------------------------------- get user notification api end point ------------------------------
    export const getUserNotifications = async () => {
        try {
            const response = await authenticatedAxiosInstance.get(GET_USER_NOTIFICATIONS);
            return response;
        } catch (err) {
            //Handle Error Here
            console.error(err);
        }
    }

    
//--------------------------------------- get user notification api end point ------------------------------
export const markNotificationsAsRead = async (id) => {
    try {
        const response = await authenticatedAxiosInstance.delete(MARK_NOTIFICATION_AS_READ+id);
        if(response.status === 200){
            //return response.data.employee;
        }
    } catch (err) {
        //Handle Error Here
        console.error(err);
    }
}

//--------------------------------------- set user notifications token api end point ------------------------------
export const setUserNotificationToken = async (token) => {
    try {
        const response = await authenticatedAxiosInstance.post(SET_USER_NOTIFICATION_TOKEN,  { notificationToken : token });
        if(response.status === 200){
            //return response.data.employee;
            console.log("notification success")
        }else{
            console.log("notification fail")
        }
    } catch (err) {
        //Handle Error Here
        console.error(err);
    }
}

    //--------------------------------------- get FAQ api end point ------------------------------
    export const getFAQ = async () => {
        try {
            const response = await authenticatedAxiosInstance.get(GET_FAQ);
            return response;
        } catch (err) {
            //Handle Error Here
            console.error(err);
        }
    }

    //--------------------------------------- get FAQ api end point ------------------------------
        export const getSingleFAQ = async (id) => {
            try {
                const response = await authenticatedAxiosInstance.get(GET_SINGLE_FAQ+id);
                return response;
            } catch (err) {
                //Handle Error Here
                console.error(err);
            }
        }

    //--------------------------------------- get information api end point ------------------------------
    export const getClientInformation = async () => {
        try {
            const response = await authenticatedAxiosInstance.get(GET_CLIENT_INFORMATION);
            return response;
        } catch (err) {
            //Handle Error Here
            console.error(err);
        }
    }

        //--------------------------------------- get information api end point ------------------------------
        export const getClientSingleInformation = async (id) => {
            try {
                const response = await authenticatedAxiosInstance.get(GET_SINGLE_INFORMATION+id);
                return response;
            } catch (err) {
                //Handle Error Here
                console.error(err);
            }
        }

        //------------------------------------ get bank messages api endpoint -------------------
        export const getBankMessages = async () => {
            try {
                const response = await authenticatedAxiosInstance.get(GET_BANK_MESSAGES);
                return response;
            } catch (err) {
                //Handle Error Here
                console.error(err);
            }
        }

        //------------------------------------ get single bank message api endpoint -------------------
        export const getSingleBankMessage = async (id) => {
            try {
                const response = await authenticatedAxiosInstance.get(`${GET_SINGLE_BANK_MESSAGE}/${id}`);
                return response;
            } catch (err) {
                //Handle Error Here
                console.error(err);
            }
        }

        //------------------------------------ get single bank message api endpoint -------------------
        export const markMessageAsRead = async (id) => {
            try {
                const response = await authenticatedAxiosInstance.get(`${MARK_MESSAGE_AS_READ}${id}/markAsRead`);
                return response;
            } catch (err) {
                //Handle Error Here
                console.error(err);
            }
        }