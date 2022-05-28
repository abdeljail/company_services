
import EmailPasswod from "./ClassEmailPassword.js"

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