
import {GET_USER_API,
        GET_USER_TICKETS, 
        GET_USER_SINGLE_TICKET, 
        CREATE_TICKET,
        GET_TICKETS_ISSUES_CATEGORIES,
        USER_NOTIFICATION_TOKEN,
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
<<<<<<< HEAD
        SET_USER_NOTIFICATION_TOKEN} from './apis';
=======
        GET_BANK_MESSAGES} from './apis';
>>>>>>> 52a48a0929cd3146065d637a8ddb9bf3ecbc3526
import * as SecureStore from 'expo-secure-store';
import { authenticatedAxiosInstance } from './axios';


//--------------------------------------- get user api end point ------------------------------

export const getUserInfo = async () => {
    try {
        const resp = await authenticatedAxiosInstance.get(GET_USER_API);
        if(resp.status === 200 ){
            console.log(resp.data)
            return resp.data;
        }
    } catch (err) {
        console.error(err);
    }
}


//--------------------------------------- get user payments api end point ------------------------------
export const getUserEmploymentHistory = async () => {
    try {
        const resp = await authenticatedAxiosInstance.get(GET_USER_EMPLOYMENT_HISTORY);
        if(resp.status === 200 ){
            console.log(resp.data.employmentHistory)
            return resp.data.employmentHistory;
        }
    } catch (err) {
        //Handle Error Here
        console.error(err);
    }
}

//--------------------------------------- get user payments api end point ------------------------------
export const getUserPayments = async () => {
    try {
        const response = await authenticatedAxiosInstance.get(GET_USER_CLIENT_PAYMENTS);
        return response;
    } catch (err) {
        //Handle Error Here
        console.error(err);
    }
}

//--------------------------------------- get user single payment api end point ------------------------------
export const getSiglePayment = async (id) => {
    try {
        const resp = await authenticatedAxiosInstance.get(GET_USER_CLIENT_SINGLE_PAYMENT);
        if(resp.status === 200 ){
            console.log(resp.data.payment)
            return resp.data.payment;
        }
    } catch (err) {
        //Handle Error Here
        console.error(err);
    }
}

//--------------------------------------- get user tickets api end point ------------------------------
export const getUserTickets = async () => {
    try {
        const resp = await authenticatedAxiosInstance.get(GET_USER_TICKETS);
        if(resp.status === 200){
            return resp.data;
        }else{
            console.log("^^^^^^^^^^^^^^^^^ response 3")
        }
    } catch (err) {
        //Handle Error Here
        console.error(err);
    }
}

//--------------------------------------- get user tickets api end point ------------------------------
export const getUserTicketsCategories = async () => {
    try {
        const resp = await authenticatedAxiosInstance.get(GET_TICKETS_ISSUES_CATEGORIES);
        if(resp.status === 200){
            return resp.data;
        }
    } catch (err) {
        console.error(err);
    }
}

//--------------------------------------- get user tickets api end point ------------------------------
export const getSingleTicket = async (id) => {
    try {
        const resp = await authenticatedAxiosInstance.get(GET_USER_SINGLE_TICKET+id);
        if(resp.status === 200){
            return resp.data.ticket;
        }
    } catch (err) {
        //Handle Error Here
        console.error(err);
    }
}

//--------------------------------------- add new ticket api end point ------------------------------
export const addTicket = async (data) => {
    try {
        const resp = await authenticatedAxiosInstance.post(CREATE_TICKET, data);
        if(resp.status === 201){
            console.log(resp.data.ticket);
            return resp.data.ticket;
        }
    } catch (err) {
        console.error(err);
    }
}

//--------------------------------------- add new ticket api end point ------------------------------
export const addTicketMessage = async (id, data) => {
    try {
        console.log(`${CREATE_TICKET_MESSAGE}${id}/message`);
        const resp = await authenticatedAxiosInstance.post(`${CREATE_TICKET_MESSAGE}${id}/message`, data);
        if(resp.status === 201){
            console.log(resp.data.status);
            return resp.data.message;
        }
    } catch (err) {
        console.error(err);
    }
}


//--------------------------------------- get user notification api end point ------------------------------
    export const getUserNotifications = async () => {
        try {
            const response = await authenticatedAxiosInstance.get(GET_USER_NOTIFICATIONS);
            if(response.status === 200){
                return response.data.notifications;
            }
        } catch (err) {
            //Handle Error Here
            console.error(err);
        }
    }

    
//--------------------------------------- get user notification api end point ------------------------------
export const markNotificationsAsRead = async (id) => {
    try {
        console.log("in mark as read");
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
        console.log("storing user notification token");
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
            const resp = await authenticatedAxiosInstance.get(GET_FAQ);
            if(resp.status === 200){
                return resp.data.faq;
            }
        } catch (err) {
            //Handle Error Here
            console.error(err);
        }
    }

    //--------------------------------------- get FAQ api end point ------------------------------
        export const getSingleFAQ = async (id) => {
            try {
                const resp = await authenticatedAxiosInstance.get(GET_SINGLE_FAQ+id);
                if(resp.status === 200){
                    console.log("Bendary results is " + resp.data.faq.title )
                    return resp.data.faq;
                }
            } catch (err) {
                //Handle Error Here
                console.error(err);
            }
        }

    //--------------------------------------- get information api end point ------------------------------
    export const getClientInformation = async () => {
        try {
            const resp = await authenticatedAxiosInstance.get(GET_CLIENT_INFORMATION);
            if(resp.status === 200){
                console.log("client info results is " + resp.data )
                return resp.data.information;
            }
        } catch (err) {
            //Handle Error Here
            console.error(err);
        }
    }

        //--------------------------------------- get information api end point ------------------------------
        export const getClientSingleInformation = async (id) => {
            try {
                const resp = await authenticatedAxiosInstance.get(GET_SINGLE_INFORMATION+id);
                if(resp.status === 200){
                    console.log("client info results is " + resp.data.information )
                    return resp.data.information;
                }
            } catch (err) {
                //Handle Error Here
                console.error(err);
            }
        }

        //------------------------------------ get bank messages api endpoint -------------------
        export const getBankMessages = async () => {
            try {
                const resp = await authenticatedAxiosInstance.get(GET_BANK_MESSAGES);
                if(resp.status === 200){
                    return resp.data.newsfeed;
                }else{
                    console.log("^^^^^^^^^^^^^^^^^ response 3")
                }
            } catch (err) {
                //Handle Error Here
                console.error(err);
            }
        }