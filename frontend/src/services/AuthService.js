import axios from 'axios';

const API_URL = 'http://localhost:3000/auth/';

class AuthService {
    async login(user) {
        const response = await axios.post(API_URL + 'signin', {
            emailId: user.emailId,
            password: user.password,
        });
        if (response.data.accessToken && response.data.refreshToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    }

    logout() {
        localStorage.removeItem('user');
    }

    async register(user) {
        return axios.post(API_URL + 'signup', {
            firstName: user.firstName,
            lastName: user.lastName,
            emailId: user.emailId,
            password: user.password,
        });
    }

    getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    getAccessToken() {
        const user = this.getUser();
        return user ? user.accessToken : null;
    }

    getRefreshToken() {
        const user = this.getUser();
        return user ? user.refreshToken : null;
    }

    async refreshToken() {
        const refreshToken = this.getRefreshToken();
        if (refreshToken) {
            const response = await axios.post(API_URL + 'refreshtoken', { refreshToken });
            if (response.data.accessToken) {
                const user = this.getUser();
                user.accessToken = response.data.accessToken;
                localStorage.setItem('user', JSON.stringify(user));
            }
            return response.data.accessToken;
        }
        return null;
    }
}

export default new AuthService();