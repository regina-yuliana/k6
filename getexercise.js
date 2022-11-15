// Creator: k6 Browser Recorder 0.6.2

import http from 'k6/http';
import { expect } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

export const options = { vus: 10, duration: '3s' }  

// GET ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export default function() {
    const url = 'https://petstore.octoperf.com/actions/Account.action?signonForm='
    const payload = JSON.stringify({
        username: 'anjing',
        password: '12345678',
    })
    const params = {
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
        }
    }

    const response = http.get(url,payload,params)
    console.log('RESPONSE RESULT: ' +response.status)
    expect(response.status, "Response").to.eql(200)
    }

//   group('page_3 - https://petstore.octoperf.com/actions/Account.action', function () {
//     response = http.post(
//       'https://petstore.octoperf.com/actions/Account.action',
//       {
//         username: username,
//         password: password,
//         signon: 'Login',
//         _sourcePage:
//           'MgOt_z51pC4Eg8pApYVpM_0LSHsUBNBez6YtkugXNX0b2_Vedm_BDbYuzh9dW-CopqZbKqpM2q60xPanNd4qwyuMvZe4RIDv3P7PzI6_d9M=',
//         __fp: 'h1nU_UH4njpyrN2hf1pyiyqnMY13M4FskwpCsDLra-8xCtosSWwvrDmYdnYp1lK4',
//       },
//       {
//         headers: {
//           'content-type': 'application/x-www-form-urlencoded',
//           origin: 'https://petstore.octoperf.com',
//           'upgrade-insecure-requests': '1',
//           'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
//           'sec-ch-ua-mobile': '?0',
//           'sec-ch-ua-platform': '"macOS"',
//         }
//       }
//     )
// export default function main() {
//     let response = http.get('https://petstore.octoperf.com/actions/Catalog.action')
//     console.log('RESPONSE RESULT: ' +response.status)    
//     check(response, {
//         'harus 200':(pet) => pet.status === 200                     
//     })
//     expect(response.status, "GET STATUS IS").to.equal(200)}