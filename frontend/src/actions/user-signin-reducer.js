
import {useReducer} from "react";

const UserContext = React.createContext()

const initialState = {
    username: "",
    email: "",
    displayname: "",
    token: "",
    error: null,
    isLoading: false,
    redirectURL: "/"
};

const userReducer = (state, action) => {
    let updatedUser = null;
    switch(action.type){
        case actionTypes.USER_SIGNIN_SUCCESS: updatedUser = {
            ...state,
            username: action.userDets.user_nicename,
            email: action.userDets.user_email,
            displayname:  action.userDets.user_display_name,
            token: action.token
        };
            return updatedUser;
        case actionTypes.USER_SIGNIN_FAIL: updatedUser = {
            ...state,
            token: "",
            error: action.error
        };
            return updatedUser;
        case actionTypes.USER_SIGNOUT:
            updatedUser = {
                ...state,
                token: "",
                username: "",
                email: "",
                displayname: "",
                redirectURL: "/"
            };
            return updatedUser;
        default : return state;
    }
}

const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(userReducer, initialState);
    // NOTE: you *might* need to memoize this value
    // Learn more in http://kcd.im/optimize-context
    const value = {state, dispatch}
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

const useUserAuth = () => {
    const context = React.useContext(UserContext);
    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider');
    }
    return context;
}

export {UserProvider, useUserAuth};