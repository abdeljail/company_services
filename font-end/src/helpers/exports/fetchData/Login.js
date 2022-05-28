import axios from "axios"



const login = async (url, data) => {




    console.log({ url, data })


    return { url, data }



    await axios.post(url, data)

}




export {
    login,
}

