
import axios from "axios";

const API_URL = "http://wp.tasks.docker/?rest_route=/simple-jwt-login/v1/";

class AuthService {
    login(username, password) {
        return axios
            .post(API_URL + "auth", null,{
                params: {
                    email: username,
                    password: password
                }
            })
            .then((response) => {
                if (response.data.jwt && response.success) {
                    localStorage.setItem("jwt", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    validate(jwt) {
        return axios
            .get(API_URL + "auth/validate", {
                params: {
                    JWT: jwt
                }
            })
            .then((response) => {
                if (response.data && response.success) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(email, password, name) {
        return axios.post(API_URL + "users", null, {
            params: {
                email: email,
                password: password,
                ...(name ? { name: name } : {})
            }
        });
    }
}

export default new AuthService();