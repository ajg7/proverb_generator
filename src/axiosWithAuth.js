import axios from "axios";

export const axiosWithAuth = () => {
    const token = "43bf74bd360ac5fd6885bd8574aa5c1c37a57f51";

    return axios.create({
        headers: {
            Authorization: token 
        },
        baseURL: "https://api.esv.org"
    })
}
