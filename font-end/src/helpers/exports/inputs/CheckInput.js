
/** function check in string and password
*      if check in string required in length
*       and Regex  params reg = false par default
*       if check in password required in Regex reg = true 
*       and length 0 par default
        return object
*/

function string(str, reg = false, length = 0) {

    let message = ``

    if (str === "" || str === null) {
        return {
            valid: false,
            message: `<p class="text-white mb-2">this is empty string</p>`
        }
    }

    if (!(typeof str === "string"))
        return {
            valid: false,
            message: `<p class="text-white mb-2">type is not a string</p>`
        }

    if (!reg) {

        if (!(/^[a-zA-Z]+$/.test(str)))
            return {
                valid: false,
                message: `this string is has number `
            }

        if (length !== 0 && str < length)
            return {
                valid: false,
                message: `<p>The string must be eight characters or longer ${length}</p>`
            }

        return {
            valid: true,
        }
    }

    const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

    if (str.match(PasswordRegex))
        return {
            valid: true,
        };

    message += `<p class="text-white mb-2"> you have password  must contain at least one special character [ ! @ # $ % ^ &  *] </p> 
    <p class="text-white mb-2">and must be eight characters or longer</p>
    <p class="text-white mb-2">and must contain at least 1 uppercase alphabetical character</p>
    <p>and must contain at least 1 numeric character</p>
     `
    return {
        valid: false,
        message: message
    }

}


/** function check in email 
*      return object
*/

function email(email) {

    let message = ``

    if (!(typeof email === "string"))
        return {
            valid: false,
            message: `<p class="text-white mb-2">type is not a string</p>`
        }

    if (email === "" || email === null)
        return {
            valid: false,
            message: `<p class="text-white mb-2">this is empty email</p>`

        }

    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.match(regexEmail))

        return {
            valid: true,
        };

    if (!email.includes("@"))
        message += `<p class="text-white mb-2">has not [ @ ].</p>`

    if (!email.includes("."))
        message += `<p class="text-white mb-2">has not [ . ] .</p>`

    if (email.includes("@."))
        message += `<p class="text-white mb-2">has not string between [ @ and . ] .</p>`



    return {
        valid: false,
        message: message
    };




}



export {
    string,
    email,
    // number,
    // file
}