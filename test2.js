// POST--------
import http from 'k6/http'
import { expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.0/index.js';

export const options = {
    vus: 10,
    duration: '3s'
}

export default function() {
    const url = 'https://reqres.in/api/users'
    const payload = JSON.stringify({
        name: 'testing k6',
        job: 'tester',
    })
    const params = {
        headers: {
            'Conten-Type': 'application/json',
        }
    }
    const response = http.post(url, payload, params)
    console.log(response.body)
}