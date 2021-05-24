
import {GET_USER_API, GET_USER_PAYMENTS, GET_USER_TICKETS, GET_PAYMENTS, GET_TICKETS} from './apis';
import axios from 'axios';


//--------------------------------------- create axios instance -------------------------------
export const axiosInstance = axios.create({
    withCredentials: true
})

//--------------------------------------- get user api end point ------------------------------
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

//--------------------------------------- get user payments api end point ------------------------------
export const getUserPayments = async (token) => {
    try {
        let jwt = "jwt="+token;
        const resp = await axiosInstance.get(GET_PAYMENTS,{
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
        const resp = await axiosInstance.get(`${GET_PAYMENTS}/${id}`,{
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
        let jwt = "jwt="+token;
        const resp = await axiosInstance.get(GET_TICKETS,{
            headers: {
                Cookie : jwt
            }
        });
        console.log("tickets results is " + resp.data.results )
        return resp.data.data;
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
        const resp = await axiosInstance.get(`${GET_TICKETS}/${id}`,{
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