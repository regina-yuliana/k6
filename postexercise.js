import http from 'k6/http'
import { randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js'
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.0/index.js';


export const options = { 
    stages: [
        { duration: '3s', target: 5 },
        { duration: '5s', target: 10 }
    ]  
}

export default function testSuite() {
    describe('Create User', () => {
        var user = randomString(10)
        var pass = randomString(6)
        var reppass = randomString(6)
        var firstname = randomString(10)
        var lastname = randomString(10)
        var email = randomString(13)
        var phone = randomString(15)
        var add1 = randomString(30)
        var add2 = randomString(30)
        var city = randomString(10)
        var state = randomString(10)
        var zip = randomString(6)
        var country = randomString(10)
        var lang = randomString(10)
        var fav = randomString(10)
    
        const url = 'https://petstore.octoperf.com/actions/Account.action?newAccountForm='
        const payload = JSON.stringify({
            username: user,
            password: pass,
            repeatedPassword: reppass,
            'account.firstName': firstname,
            'account.lastName': lastname,
            'account.email': email,
            'account.phone': phone,
            'account.address1': add1,
            'account.address2': add2,
            'account.city': city,
            'account.state': state,
            'account.zip': zip,
            'account.country': country,
            'account.languagePreference': lang,
            'favoriteCategoryId': fav,
            newAccount: 'Save Account Information', 
        })
        const params = {
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            }
        }

        const response = http.post(url,payload,params)
        console.log('hasil dari console log: ' +response.status)    
        expect(response.status, "Response").to.eql(200)

    }
)}
