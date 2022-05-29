
import EmailPasswod from "./ClassEmailPassword.js"
import { string } from '../exports/inputs/CheckInput.js'
class User extends EmailPasswod {

    static counter = 0;

    #firstName
    #lastName

    constructor(firstName, lastName, email, password, url) {
        super(email, password, url);
        this.#firstName = firstName;
        this.#lastName = lastName;
        User.counter++
    }

    static getNumberCreated() {
        return `number create this object User ${this.counter}`
    }

    checkString(check = true) {

        let name = check ? this.#firstName : this.#lastName
        return string(name, false, 3)

    }

    getFirstName() {
        return this.#firstName
    }

    getLastName() {
        return this.#lastName
    }

    set firstName(firstName) {
        this.#firstName = firstName
    }
    set lastName(lastName) {
        this.#lastName = lastName
    }
}

export default User