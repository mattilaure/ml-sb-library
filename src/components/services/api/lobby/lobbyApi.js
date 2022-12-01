import APIROUTES from "../apiRules";
import { postApi } from "../../genericServices";

export async function createNewLobby(obj){
    return await postApi(APIROUTES.createLobby,obj)
}