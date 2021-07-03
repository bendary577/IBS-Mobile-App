
import {GET_USER_API,
        GET_USER_PAYMENTS,
        GET_USER_TICKETS, 
        PAYMENTS_API, 
        TICKETS_API, 
        CREATE_TICKET,
        GET_TICKETS_ISSUES_CATEGORIES,
        UPLOAD_USER_IMAGE,
        USER_NOTIFICATION_TOKEN,
        GET_FAQ,
        GET_CLIENT_INFORMATION} from './apis';
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
            console.log("tickets results is " + resp.data )
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
            console.log("tickets categories results is " + resp.data )
            return resp.data;
        }
    } catch (err) {
        //Handle Error Here
        console.error(err);
    }
}

//--------------------------------------- get user tickets api end point ------------------------------
export const getSingleTicket = async (token, id) => {
    try {
        let jwt = "jwt="+token;
        console.log("ticket id is " + id )
        const resp = await axiosInstance.get(`${TICKETS_API}/${id}`,{
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

//--------------------------------------- add new ticket api end point ------------------------------
export const addTicket = async (token, data) => {
    try {
        let jwt = token;
        console.log("token is hamada" + token)
        const resp = await axiosInstance.post(CREATE_TICKET, data, {
            headers: {
                Authorization : jwt
            }
        });
        if(resp.status === 200){
            return resp.data;
        }
        console.log(resp);
    } catch (err) {
        console.error(err);
    }
}

//--------------------------------------- get user tickets api end point ------------------------------
export const uploadUserImage = async (token, data) => {
    try {
        let jwt = "jwt="+token;
        const resp = await axiosInstance.put(UPLOAD_USER_IMAGE,data,{
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
                console.log("FAQ results is " + resp.data )
                return resp.data;
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
                const resp = await axiosInstance.get(GET_SINGLE_FAQ+id, {
                    headers: {
                        Authorization : jwt
                    }
                });
                if(resp.status === 200){
                    console.log("FAQ results is " + resp.data )
                    return resp.data;
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
                return resp.data;
            }
        } catch (err) {
            //Handle Error Here
            console.error(err);
        }
    }

