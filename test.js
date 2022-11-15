// k6 run test.js

//GET-----------------------------
// import {check} from 'k6'
// import http from 'k6/http'

// export default function() {
//     let response = http.get('https://test.k6.io')
//     console.log(response.body)
//     check(response, {
//         'harus 200':(r) => r.status ===200
//     })
// }

// import {check} from 'k6'
// import http from 'k6/http'

// export default function() {
//     let response = http.get('https://test.k6.io')
//     console.log(response.status)
//     check(response, {
//         'harus 200':(r) => r.status ===200
//     })
// }

// import {check} from 'k6'
// import http from 'k6/http'

// export default function() {
//     let response = http.get('https://test.k6.io')
//     console.log('hasil dari console log: ' +response.status)    // 'r' itu variable aja jadi bebas
//     check(response, {                                           //failed test
//         'harus 200':(r) => r.status === 400                     //bakal error karena gak sesuai expect
//     })
// }

// import { check } from 'k6'
// import http from 'k6/http'
// import { expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.0/index.js';

// export default function() {
//     //let response = http.get('https://test.k6.io')
//     let response = http.get('https://regres.in/api.users')
//     // console.log('hasil dari console log: '+response.status)
//     // check(response, {
//     //     'harus 200': (r) => r.status === 200
//     // })
//     // expect(response.status, "assertion pake expect").to.equal(200)
//     console.log(response.json() ['data'][0]['email'])
//     console.log(emailnya)
//     expect(emailnya,"assertion email").to.equal('george.bluth@reqres.in')
// }

import { check } from 'k6'
import http from 'k6/http'
import { expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.0/index.js'

export const options = {
    vus: 10,
    duration: '3s'
}

export default function() {
    let response = http.get('https://test.k6.io')
    console.log('hasil dari console log: ' +response.status)    
    check(response, {
        'harus 200':(r) => r.status === 200                     
    })
    expect(response.status, "assertion pake expect").to.equal(200)
}