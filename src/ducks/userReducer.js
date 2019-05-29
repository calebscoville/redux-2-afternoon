import { defaultCipherList } from "constants";
import axios from 'axios'

const initialState = {
    email: null,
    firstName: null,
    lastName: null
};

const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

export const requestUserData = () => {
    let data = axios.get('/auth/user-data').then
}

export default function reducer(state = initialState, action) {
    return state;
}