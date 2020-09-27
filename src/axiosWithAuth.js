import axios from "axios";

export const axiosWithAuth = () => {
    const token = "43bf74bd360ac5fd6885bd8574aa5c1c37a57f51";

    return axios.create({
        params: {
            'include-headings': false,
            'include-footnotes': false,
            'include-verse-numbers': false,
            'include-short-copyright': false,
            'include-passage-references': false
        },
        headers: {
            Authorization: token 
        }
    })
}
