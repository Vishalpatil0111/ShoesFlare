import axios from "axios";

const axiosInstancenew = axios.create({
    baseURL:"https://logo.clearbit.com",
    headers: {
        "Content-Type": "application/json"
    }
})

export default axiosInstancenew