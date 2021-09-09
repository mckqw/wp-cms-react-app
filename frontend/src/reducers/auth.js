import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    VALIDATE_SUCCESS,
    VALIDATE_FAIL,
    LOGOUT,
} from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));
const jwt = JSON.parse(localStorage.getItem("jwt"));

const initialState = user
    ? { isLoggedIn: true, user , jwt}
    : { isLoggedIn: false, user: null, jwt: null };

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            };
        case REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                jwt: payload.jwt,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                jwt: null,
                user: null,
            };
        case VALIDATE_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user,
            };
        case VALIDATE_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
                jwt: null,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
                jwt: null,
            };
        default:
            return state;
    }
}