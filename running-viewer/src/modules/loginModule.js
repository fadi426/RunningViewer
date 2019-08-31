import axios from 'axios'
import {
    reject
} from 'q';
export default class loginModule {
    static requestValidation(user) {
        return new Promise((resolve, reject) => {

            function hashCode(s) {
                let h;
                for (let i = 0; i < s.length; i++)
                    h = Math.imul(31, h) + s.charCodeAt(i) | 0;

                return h;
            }

            let hash = hashCode(user.username) + hashCode(user.password);
            let jsonData = {
                authenticationToken: hash
            }

            axios.post('https://localhost:5001/api/authentication',
                    jsonData, {
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    })
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        })
    }

    static getAccountInfo() {
        return new Promise((resolve, reject) => {
            let token = localStorage.getItem('user-token');
            axios.get('https://localhost:5001/api/authentication/' + token)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        })
    }
}