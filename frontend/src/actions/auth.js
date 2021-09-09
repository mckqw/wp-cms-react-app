import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    VALIDATE_SUCCESS,
    VALIDATE_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from "./types";

import AuthService from "../services/auth.service";

export const register = (name, email, password) => (dispatch) => {
    return AuthService.register(email, password, name).then(
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data.data &&
                    error.response.data.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: REGISTER_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const validate = (jwt) => (dispatch) => {
    return AuthService.validate(jwt).then(
        (data) => {
            dispatch({
                type: VALIDATE_SUCCESS,
                payload: { user: data.data.user, jwt: jwt },
            });

            dispatch({
                type: SET_MESSAGE,
                payload: data.message,
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data.data &&
                    error.response.data.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: VALIDATE_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { jwt: data.data.jwt },
            });

            return Promise.resolve(data.data.jwt);
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data.data &&
                    error.response.data.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });
};