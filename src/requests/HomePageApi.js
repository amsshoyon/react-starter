import axios from "axios";
import {Alert} from "../misc/common";
import Manifest from "../manifest";

const apiBase = Manifest.apiBaseUrl;

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers["Accept"] = "*/*";


// Get all Category
export async function DATA_REQUEST() {
    try {
        let result = await axios.get(`${apiBase}/route`);

        if (result.data) {
            return result.data;
        }else{
            Alert("Oops!", "Something went wrong!", "error");
        }
    } catch (error) {
        console.log(error);
    }
}
