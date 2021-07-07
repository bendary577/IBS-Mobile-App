
import {GET_USER_API,
        GET_USER_PAYMENTS,
        GET_USER_TICKETS, 
        PAYMENTS_API, 
        TICKETS_API,
        GET_USER_SINGLE_TICKET, 
        CREATE_TICKET,
        GET_TICKETS_ISSUES_CATEGORIES,
        UPLOAD_USER_IMAGE,
        USER_NOTIFICATION_TOKEN,
        GET_FAQ,
        GET_CLIENT_INFORMATION,
        GET_SINGLE_INFORMATION,
        GET_SINGLE_FAQ} from './apis';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

//--------------------------------------- create axios instance -------------------------------
export const axiosInstance = axios.create({
    withCredentials: true
})

//--------------------------------------- get user api end point ------------------------------
/*
export const getUserInfo = async (token) => {
    try {
        let jwt = "jwt="+token;
        const resp = await axiosInstance.get(GET_USER_API,{
            headers: {
                Cookie : jwt
            }
        });
        return resp.data.data;
    } catch (err) {
        //Handle Error Here
        console.error(err);
    }
}
*/

//--------------------------------------- get user api end point ------------------------------

export const getUserInfo = async (token) => {
    try {
        let jwt = token;
        const resp = await axiosInstance.get(GET_USER_API,{
            headers: {
                Authorization : jwt
            }
        });
        if(resp.status === 200 ){
            console.log(resp.data)
            return resp.data;
        }
    } catch (err) {
        //Handle Error Here
        console.error(err);
    }
}

//--------------------------------------- get user payments api end point ------------------------------
export const getUserPayments = async (token) => {
    try {
        let jwt = "jwt="+token;
        const resp = await axiosInstance.get(PAYMENTS_API,{
            headers: {
                Cookie : jwt
            }
        });
        return resp.data.data;
    } catch (err) {
        //Handle Error Here
        console.error(err);
    }
}

//--------------------------------------- get user single payment api end point ------------------------------
export const getSiglePayment = async (token, id) => {
    try {
        let jwt = "jwt="+token;
        const resp = await axiosInstance.get(`${PAYMENTS_API}/${id}`,{
            headers: {
                Cookie : jwt
            }
        });
        return resp.data.data;
    } catch (err) {
        //Handle Error Here
        console.error(err);
    }
}

//--------------------------------------- get user tickets api end point ------------------------------
export const getUserTickets = async (token) => {
    try {
        let jwt = token;
        const resp = await axiosInstance.get(GET_USER_TICKETS,{
            headers: {
                Authorization : jwt
            }
        });
        if(resp.status === 200){
            return resp.data;
        }
    } catch (err) {
        //Handle Error Here
        console.error(err);
    }
}

//--------------------------------------- get user tickets api end point ------------------------------
export const getUserTicketsCategories = async (token) => {
    try {
        let jwt = token;
        const resp = await axiosInstance.get(GET_TICKETS_ISSUES_CATEGORIES,{
            headers: {
                Authorization : jwt
            }
        });
        if(resp.status === 200){
            return resp.data;
        }
    } catch (err) {
        console.error(err);
    }
}

//--------------------------------------- get user tickets api end point ------------------------------
export const getSingleTicket = async (token, id) => {
    try {
        let jwt = token;
        const resp = await axiosInstance.get(GET_USER_SINGLE_TICKET+`/`+id,{
            headers: {
                Authorization : jwt
            }
        });
        if(resp.status === 200){
            return resp.data.ticket;
        }
    } catch (err) {
        //Handle Error Here
        console.error(err);
    }
}

//--------------------------------------- add new ticket api end point ------------------------------
export const addTicket = async (token, data) => {
    try {
        let jwt = token;
        console.log("subjeeeeeeeeeeeect" + data.subject)
        console.log("desccccccccccccccccc" + data.description)
        console.log("appi" + CREATE_TICKET)
        const resp = await axiosInstance.post(CREATE_TICKET, data, {
            headers: {
                Authorization : jwt
            }
        });
        if(resp.status === 201){
            console.log(resp.data.ticket);
            console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%% HAMADA");
            return resp.data.ticket;
        }
    } catch (err) {
        console.error(err);
    }
}

//--------------------------------------- get user tickets api end point ------------------------------
export const uploadUserImage = async (token, data) => {
    try {
        let jwt = token;
        const resp = await axiosInstance.put(UPLOAD_USER_IMAGE,data,{
            headers: {
                Authorization : jwt
            }
        });
        return resp.data.data;
    } catch (err) {
        //Handle Error Here
        console.error(err);
    }
}

//--------------------------------------- get user tickets api end point ------------------------------
export const setUserNotificationToken = async (token, data) => {
    try {
        console.log("storing user token")
        //get user id saved in local storage
        const userId = await SecureStore.getItemAsync('id');
        //set new url
        const url = new URL(USER_NOTIFICATION_TOKEN);
        url.searchParams.set('userId', userId);
        let jwt = "jwt="+token;
        const resp = await axiosInstance.put(url,data,{
            headers: {
                Cookie : jwt
            }
        });
        return resp.data.data;
    } catch (err) {
        //Handle Error Here
        console.error(err);
    }
}

    //--------------------------------------- get FAQ api end point ------------------------------
    export const getFAQ = async (token) => {
        try {
            let jwt = token;
            const resp = await axiosInstance.get(GET_FAQ,{
                headers: {
                    Authorization : jwt
                }
            });
            if(resp.status === 200){
                return resp.data.faq;
            }
        } catch (err) {
            //Handle Error Here
            console.error(err);
        }
    }

    //--------------------------------------- get FAQ api end point ------------------------------
        export const getSingleFAQ = async (token, id) => {
            try {
                let jwt = token;
                console.log("request is " + GET_SINGLE_FAQ+id)
                const resp = await axiosInstance.get(GET_SINGLE_FAQ+id, {
                    headers: {
                        Authorization : jwt
                    }
                });
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
    export const getClientInformation = async (token) => {
        try {
            let jwt = token;
            const resp = await axiosInstance.get(GET_CLIENT_INFORMATION,{
                headers: {
                    Authorization : jwt
                }
            });
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
        export const getClientSingleInformation = async (token) => {
            try {
                let jwt = token;
                const resp = await axiosInstance.get(GET_SINGLE_INFORMATION,{
                    headers: {
                        Authorization : jwt
                    }
                });
                if(resp.status === 200){
                    console.log("client info results is " + resp.data )
                    return resp.data.information;
                }
            } catch (err) {
                //Handle Error Here
                console.error(err);
            }
        }

