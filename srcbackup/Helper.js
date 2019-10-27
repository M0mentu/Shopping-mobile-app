import AsyncStorage from '@react-native-community/async-storage';
import jwt_decode from 'jwt-decode';
import { Actions } from 'react-native-router-flux';
import { GET_USER_ID } from './Actions/types';

export const storeData = async (token) => {
    try {
        console.log("store in")
        await AsyncStorage.setItem('@storage_Key', token)
        console.log('store value', token)
    } catch (e) {
        console.log("store error", e)
    }
}
export const getData = async (key) => {

    try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if (value != null) {
            console.log('get value', value);
            const decoded = jwt_decode(value);
            console.log('decoded', decoded);
            const expire = new Date(decoded.exp * 1000);
            const today = new Date();
            expire > today ? Actions.shopmain({ type: 'reset' }) : false


        }
    } catch (e) {
        console.log("get error", e)
    }
}
export const getUserKey = async () => {
    try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if (value != null) {


            return (value)



        }
    } catch (e) {
        console.log("get error", e)
    }
}
export const getID = async (key) => {
    try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if (value != null) {
            const decoded = jwt_decode(value);
            const x = decoded;
            return (x)



        }
    } catch (e) {
        console.log("get error", e)
    }
}

export const storeCartID = async (token, user) => {
    try {
        console.log("store in", user)
        await AsyncStorage.setItem(`@Cart_Key_${user}`, token)
        console.log('store value', token)
    } catch (e) {
        console.log("store error", e)
    }
}
export const getCartID = async (user_id) => {
    try {
        const value = await AsyncStorage.getItem(`@Cart_Key_${user_id}`)
        if (value !== null) {
            console.log(`@Cart_Key_${user_id}`, value);
            return value;
        }
    } catch (e) {
        console.log("getCartID Helper error", e)
    }
}


export const removeCartID = async (user_id) => {
    try {
        console.log("remove cart id",user_id)
        await AsyncStorage.removeItem(`@Cart_Key_${user_id}`);
        console.log("remove cart id done")
        return true;
    }
    catch (exception) {
        return false;
    }
}



