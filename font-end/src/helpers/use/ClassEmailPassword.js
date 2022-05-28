
import { email, string } from '../exports/inputs/CheckInput.js'
import { login } from '../exports/fetchData/Login.js'

class EmailPasswod {

    static counter = 0
    #email
    #password
    #url


    constructor(email, password, url) {

        this.#email = email

        this.#password = password

        this.#url = url

        EmailPasswod.counter++
    }

    checkEmail() {
        return email(this.#email)
    }

    checkPassword() {
        return string(this.#password, true)
    }

    getEmail() {
        return this.#email
    }

    getPassword() {
        return this.#password
    }

    set email(email) {
        this.#email = email
    }

    set password(password) {
        this.#password = password
    }




    async loginUser(objUser) {

        console.log(objUser)


        const obj = objUser instanceof Object ? { email: this.#email, password: this.#password, ...objUser } : { email: this.#email, password: this.#password }

        return await login(this.#url, obj)
            .then(function (response) { return response })
            .catch(function (err) { return err })
    }







    static getNumberCreated() {
        return `number create this object EmailPassword ${this.counter}`
    }




}





export default EmailPasswod