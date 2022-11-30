import APIROUTES from "../apiRules";
import { postApiNoAuth } from "../../genericServices";

export async function signinApi(obj){
    return await postApiNoAuth(APIROUTES.login,obj)
}
